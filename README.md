# Tandon Network Billing - Normal Base Full Sync Fix

Versi ini dibuat dari file normal yang login-nya aman, lalu ditambahkan sinkronisasi multi perangkat.

## Perubahan utama

- Data default contoh dihapus: pelanggan, paket, pengeluaran, aset, bank/tunai mulai kosong/0.
- Login tetap memakai alur stabil dari file normal.
- Web otomatis membaca `APPS_SCRIPT_URL` dari Netlify Function `/.netlify/functions/config` jika perangkat baru belum punya pengaturan lokal.
- Setelah login, web otomatis menarik semua data dari Google Sheet.
- Auto refresh/sinkron semua data penting tiap 5 detik antar HP dan laptop.
- Saat sedang tambah/edit/hapus/sync data, auto refresh ditahan sebentar agar data lokal tidak ketimpa.
- Hapus pelanggan, paket, tagihan, pengeluaran, aset, bank/tunai, dan penyesuaian kas ikut sinkron ke Google Sheet.
- MikroTik tetap lewat Netlify Function `/.netlify/functions/mikrotik`.

## File yang wajib diupdate

1. Upload/replace semua isi folder ini ke GitHub.
2. Netlify akan deploy otomatis. Jika belum berubah, lakukan:
   `Deploys -> Trigger deploy -> Deploy project without cache`.
3. Copy `apps-script/kode.gs` ke Google Apps Script, Save, lalu Deploy new version.

## Environment Variables Netlify

Pastikan di Netlify ada:

```text
APPS_SCRIPT_URL = URL Web App Apps Script /exec
MIKROTIK_TOKEN = token yang sama dengan script MikroTik
```

## Yang tidak perlu diubah jika sudah jalan

- Script MikroTik tidak perlu diganti kalau URL Netlify dan token tetap sama.
- Scheduler MikroTik tidak perlu diganti.


## Update: Instant dashboard + auto sync 2 detik

Versi ini menampilkan dashboard langsung setelah login menggunakan cache/localStorage terlebih dahulu, lalu menarik data Google Sheet di background supaya login tidak terasa menunggu. Auto sync antar perangkat dijalankan setiap 2 detik selama halaman aktif. Saat sedang input/hapus/simpan data, refresh otomatis ditahan sebentar agar perubahan lokal tidak tertimpa data lama.
