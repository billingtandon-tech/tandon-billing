# Tandon Network Billing - GitHub + Netlify + Apps Script + MikroTik Proxy

## Konsep final

- GitHub: tempat simpan source code.
- Netlify: hosting web dan proxy kecil khusus MikroTik.
- Google Apps Script: backend utama ke Google Sheet.
- MikroTik: ambil PendingCommand lewat Netlify Function, bukan langsung ke Apps Script.

Alur web:

```text
Web Netlify -> Google Apps Script -> Google Sheet
```

Alur MikroTik:

```text
MikroTik -> Netlify Function -> Google Apps Script -> Google Sheet
```

Alur MikroTik dibuat lewat Netlify Function karena beberapa RouterOS gagal mengikuti redirect 302 dari Google Apps Script.

## Struktur

```text
index.html
style.css
app.js
apps-script/kode.gs
mikrotik/mikrotik_ambil_command_final.rsc
netlify/functions/mikrotik.js
netlify.toml
```

## Langkah upload ke GitHub

Upload semua isi folder ini ke repository GitHub. Pastikan `index.html`, `style.css`, dan `app.js` ada di root repo, bukan masuk dobel folder.

## Setting Netlify

Deploy dari GitHub repo.

Build command: kosong
Publish directory: `.`

File `netlify.toml` sudah mengatur:

```toml
[build]
  publish = "."
  functions = "netlify/functions"
```

## Environment Variables Netlify

Masuk Netlify -> Project -> Site configuration -> Environment variables.

Tambahkan:

```text
APPS_SCRIPT_URL = https://script.google.com/macros/s/AKfycbykFoYQUqJp1WVvBqL3zYCHykAmIXqx1i2RiNieD2lYBIiOC_CRJyV2VqsJHC6oPoEM/exec
MIKROTIK_TOKEN = TANDON12345
```

Kalau token di menu Pengaturan web berbeda, isi `MIKROTIK_TOKEN` dengan token yang sama.

Setelah menambah environment variable, lakukan redeploy Netlify.

## Apps Script

Copy isi file:

```text
apps-script/kode.gs
```

ke Google Apps Script yang terhubung dengan Google Sheet database. Deploy sebagai Web App dengan akses `Anyone`.

## Pengaturan web

Di web Billing menu Pengaturan isi:

```text
URL Apps Script Web App = URL /exec Apps Script
Token MikroTik = token yang sama dengan Netlify MIKROTIK_TOKEN
Nama Router = Router Utama
```

## Script MikroTik

Buka:

```text
mikrotik/mikrotik_ambil_command_final.rsc
```

Ganti:

```routeros
:local mikrotikUrl "https://NAMA-SITE-ANDA.netlify.app/.netlify/functions/mikrotik"
:local token "TANDON12345"
```

Contoh:

```routeros
:local mikrotikUrl "https://superb-gumcxxxx.netlify.app/.netlify/functions/mikrotik"
:local token "TANDON12345"
```

## Tes MikroTik manual

Di New Terminal MikroTik:

```routeros
/tool fetch url="https://NAMA-SITE-ANDA.netlify.app/.netlify/functions/mikrotik" http-method=post http-header-field="Content-Type: text/plain;charset=utf-8" http-data="{\"action\":\"getPendingCommandText\",\"source\":\"mikrotik\",\"token\":\"TANDON12345\"}" output=user check-certificate=no
```

Hasil benar:

```text
EMPTY
```

atau:

```text
OK|id-command|ENABLE_USER|username|profile
```

atau kalau token salah:

```text
ERROR|TOKEN_INVALID
```
