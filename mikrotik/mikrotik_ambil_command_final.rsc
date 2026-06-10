# Tandon Network Billing - Eksekusi Command MikroTik
# Versi GitHub + Netlify + Apps Script
# KHUSUS MikroTik lewat Netlify Function supaya aman dari redirect 302 Google Apps Script.
# Web tetap langsung memakai URL Apps Script di menu Pengaturan.
#
# GANTI mikrotikUrl dengan URL Netlify abang:
# https://NAMA-SITE-ANDA.netlify.app/.netlify/functions/mikrotik
#
# GANTI token harus sama dengan:
# 1. Menu Pengaturan web
# 2. Netlify Environment Variable MIKROTIK_TOKEN

:local mikrotikUrl "https://NAMA-SITE-ANDA.netlify.app/.netlify/functions/mikrotik"
:local token "TANDON12345"
:local expireProfile "Expire"

:log info "Tandon Billing: cek PendingCommand"

:local result ""
:do {
    :set result [/tool fetch url=$mikrotikUrl http-method=post http-header-field="Content-Type: text/plain;charset=utf-8" http-data=("{\"action\":\"getPendingCommandText\",\"source\":\"mikrotik\",\"token\":\"" . $token . "\"}") output=user check-certificate=no as-value]
} on-error={
    :log warning "Tandon Billing: gagal fetch ke Netlify Function MikroTik"
    :return
}

:local data ($result->"data")
:log info ("Tandon Billing: response = " . $data)

:if ($data = "EMPTY") do={
    :log info "Tandon Billing: tidak ada command pending"
    :return
}

:if ([:pick $data 0 2] != "OK") do={
    :log warning ("Tandon Billing: response tidak valid: " . $data)
    :return
}

:local p1 [:find $data "|"]
:local p2 [:find $data "|" ($p1 + 1)]
:local p3 [:find $data "|" ($p2 + 1)]
:local p4 [:find $data "|" ($p3 + 1)]

:local cmdId [:pick $data ($p1 + 1) $p2]
:local action [:pick $data ($p2 + 1) $p3]
:local username [:pick $data ($p3 + 1) $p4]
:local profile [:pick $data ($p4 + 1) [:len $data]]

:log info ("Tandon Billing: action=" . $action . " username=" . $username . " profile=" . $profile)

:local secretId [/ppp secret find where name=$username]

:if ([:len $secretId] = 0) do={
    :log warning ("Tandon Billing: PPP Secret tidak ditemukan: " . $username)

    /tool fetch url=$mikrotikUrl http-method=post http-header-field="Content-Type: text/plain;charset=utf-8" http-data=("{\"action\":\"updateCommand\",\"source\":\"mikrotik\",\"token\":\"" . $token . "\",\"id\":\"" . $cmdId . "\",\"status\":\"ERROR\",\"message\":\"PPP Secret tidak ditemukan\"}") output=none check-certificate=no

    :return
}

:do {

    # 1. Hapus scheduler lama terkait username
    :local sid [/system scheduler find where name=$username]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("expire-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("expired-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("isolir-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("tandon-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("tandon-expire-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("tandon-expired-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :set sid [/system scheduler find where name=("tandon-isolir-" . $username)]
    :if ([:len $sid] > 0) do={ /system scheduler remove $sid }

    :log info ("Tandon Billing: scheduler terkait " . $username . " sudah dihapus")

    # 2. Ubah profile sesuai action
    :if ($action = "ENABLE_USER") do={

        :if ([:len $profile] = 0) do={
            :error "Profile paket kosong"
        }

        :local profileId [/ppp profile find where name=$profile]

        :if ([:len $profileId] = 0) do={
            :error ("Profile paket tidak ditemukan: " . $profile)
        }

        /ppp secret set $secretId profile=$profile disabled=no
        :log info ("Tandon Billing: user diperpanjang ke profile " . $profile)
    }

    :if ($action = "DISABLE_USER") do={

        :local expireProfileId [/ppp profile find where name=$expireProfile]

        :if ([:len $expireProfileId] = 0) do={
            :error ("Profile Expire tidak ditemukan: " . $expireProfile)
        }

        /ppp secret set $secretId profile=$expireProfile disabled=no
        :log warning ("Tandon Billing: user dipindah ke profile Expire: " . $username)
    }

    :if ($action = "CHANGE_PROFILE") do={

        :if ([:len $profile] = 0) do={
            :error "Profile kosong"
        }

        :local profileId [/ppp profile find where name=$profile]

        :if ([:len $profileId] = 0) do={
            :error ("Profile tidak ditemukan: " . $profile)
        }

        /ppp secret set $secretId profile=$profile disabled=no
        :log info ("Tandon Billing: profile user diganti ke " . $profile)
    }

    :if (($action != "ENABLE_USER") && ($action != "DISABLE_USER") && ($action != "CHANGE_PROFILE")) do={
        :error ("Action tidak dikenal: " . $action)
    }

    # 3. Remove active connection supaya reconnect
    :local activeId [/ppp active find where name=$username]
    :if ([:len $activeId] > 0) do={
        /ppp active remove $activeId
        :log warning ("Tandon Billing: koneksi aktif diputus agar reconnect: " . $username)
    }

    # 4. Update command DONE
    /tool fetch url=$mikrotikUrl http-method=post http-header-field="Content-Type: text/plain;charset=utf-8" http-data=("{\"action\":\"updateCommand\",\"source\":\"mikrotik\",\"token\":\"" . $token . "\",\"id\":\"" . $cmdId . "\",\"status\":\"DONE\",\"message\":\"Berhasil dieksekusi MikroTik\"}") output=none check-certificate=no

    :log info ("Tandon Billing: command DONE id=" . $cmdId)

} on-error={

    :log warning ("Tandon Billing: gagal eksekusi command " . $action . " untuk " . $username)

    /tool fetch url=$mikrotikUrl http-method=post http-header-field="Content-Type: text/plain;charset=utf-8" http-data=("{\"action\":\"updateCommand\",\"source\":\"mikrotik\",\"token\":\"" . $token . "\",\"id\":\"" . $cmdId . "\",\"status\":\"ERROR\",\"message\":\"Gagal eksekusi di MikroTik\"}") output=none check-certificate=no
}
