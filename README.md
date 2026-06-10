# Tandon Network Billing - Auto Sync HP Fix

Versi ini memakai arsitektur:
- GitHub: source code
- Netlify: web + function proxy MikroTik + function config
- Google Apps Script: backend Google Sheet
- MikroTik: ambil command lewat Netlify Function

## Fix penting versi ini

1. HP/perangkat baru otomatis membaca `APPS_SCRIPT_URL` dari Netlify Environment Variables lewat:

```text
/.netlify/functions/config
```

2. Setelah login, aplikasi otomatis menarik data dari Google Sheet.

3. Kalau database/spreadsheet pindah, tidak perlu edit `app.js` lagi. Cukup ganti `APPS_SCRIPT_URL` di Netlify Environment Variables lalu deploy without cache.

## File yang wajib diupdate

- `app.js`
- `netlify/functions/config.js`

`kode.gs` tidak wajib diganti jika Apps Script yang dipakai sudah versi final dan mendukung action `getAll`.

## Setelah upload ke GitHub

1. Tunggu Netlify deploy.
2. Pastikan Environment Variables Netlify berisi:
   - `APPS_SCRIPT_URL`
   - `MIKROTIK_TOKEN`
3. Jalankan:
   - Deploys -> Trigger deploy -> Deploy project without cache
4. Di HP, buka mode samaran/incognito untuk tes pertama.


## Catatan versi no-default-zero
- Data contoh bawaan dihapus: pelanggan, paket, pengeluaran, aset, rekening/kas kosong.
- Dashboard perangkat baru akan mulai dari 0 dan otomatis mengambil data dari Google Sheet.
- Pastikan Netlify Environment Variable APPS_SCRIPT_URL sudah diisi agar perangkat baru tidak memakai URL lokal lama.


## Patch stable login full sync
- Login dibuat aman walau auto-pull data gagal sementara.
- Hapus pelanggan/paket/tagihan/pengeluaran/aset/bank/tunai/tunggakan langsung sync saveAll ke Google Sheet.
- Auto refresh antar perangkat tetap 5 detik.
- Default data contoh tetap kosong/0.
