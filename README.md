# Tandon Network Billing - GitHub + Netlify + Apps Script

Paket ini dibuat agar web tetap mudah deploy di Netlify, tetapi backend/function tidak lagi memakai Netlify Function. Backend utama memakai Google Apps Script.

## Struktur Folder

```text
tandon-billing/
├── index.html
├── style.css
├── app.js
├── apps-script/
│   └── kode.gs
├── mikrotik/
│   └── mikrotik_ambil_command_final.rsc
├── arsip/
│   └── mikrotik2.js
└── README.md
```

## Alur Sistem

```text
GitHub = simpan source code
Netlify = hosting web statis dari GitHub
Google Apps Script = backend/API ke Google Sheet
Google Sheet = database billing
MikroTik = ambil command langsung ke Apps Script
```

## 1. Upload ke GitHub

1. Buat repository baru di GitHub, contoh: `tandon-billing`.
2. Upload semua isi folder ini ke repository.
3. Pastikan `index.html`, `style.css`, dan `app.js` berada di root repository.

## 2. Connect GitHub ke Netlify

1. Masuk Netlify.
2. Add new site -> Import an existing project.
3. Pilih GitHub repository `tandon-billing`.
4. Build command kosongkan.
5. Publish directory isi dengan `.` atau biarkan root.
6. Deploy.

## 3. Pasang Google Apps Script

1. Buka Google Sheet database billing.
2. Klik Extensions / Ekstensi -> Apps Script.
3. Copy isi file `apps-script/kode.gs`.
4. Tempel ke Apps Script.
5. Deploy -> New deployment -> Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Copy URL Web App yang berakhiran `/exec`.

## 4. Isi Pengaturan di Web

Buka web Netlify, login, masuk menu Pengaturan, lalu isi:

- URL Google Apps Script Web App
- Token MikroTik, contoh: `TANDON12345`
- Nama Router
- Catatan Koneksi

Klik Simpan Pengaturan. Token akan disimpan ke sheet `Pengaturan` sehingga Apps Script bisa memvalidasi request dari MikroTik.

## 5. Pasang Script MikroTik

1. Buka file `mikrotik/mikrotik_ambil_command_final.rsc`.
2. Ganti bagian ini:

```routeros
:local appsScriptUrl "https://script.google.com/macros/s/ISI_URL_APPS_SCRIPT_ANDA/exec"
:local token "TANDON12345"
```

3. Isi `appsScriptUrl` sesuai URL Web App Apps Script.
4. Isi `token` sama persis dengan Token MikroTik di menu Pengaturan web.
5. Import/paste script ke MikroTik.
6. Jalankan via scheduler sesuai kebutuhan.

## Catatan Penting

- `arsip/mikrotik2.js` hanya arsip lama Netlify Function. Tidak perlu dipakai untuk alur baru.
- Web tetap jalan di Netlify.
- Command MikroTik langsung ke Apps Script, bukan ke `/.netlify/functions/mikrotik`.
- Jika token di menu Pengaturan diubah, token di script MikroTik juga harus disamakan.


## Catatan Fix Pelanggan

Versi ini memperbaiki alur tambah/edit pelanggan: setelah tombol Simpan ditekan, data tetap disimpan lokal dan otomatis dikirim ke Google Sheet memakai URL Apps Script yang diisi di menu Pengaturan. Jika URL belum benar, aplikasi akan memberi toast bahwa data masih lokal dan bisa dikirim manual lewat tombol Kirim ke Sheet.
