/*
  Tandon Network Billing - Google Apps Script Backend
  Cara pakai:
  1. Buat Google Spreadsheet baru.
  2. Extensions / Ekstensi -> Apps Script.
  3. Tempel seluruh kode ini ke file Code.gs / kode.gs.
  4. Deploy -> New deployment -> Web app.
  5. Execute as: Me.
  6. Who has access: Anyone.
  7. Copy URL Web App, lalu tempel di menu Pengaturan aplikasi.
*/

const SHEETS = {
  pelanggan: 'Pelanggan',
  paket: 'Paket',
  tagihan: 'Tagihan',
  pembayaran: 'Pembayaran',
  pemasukan: 'Pemasukan',
  pengeluaran: 'Pengeluaran',
  aset: 'Aset',
  cashAccounts: 'BankTunai',
  cashAdjustments: 'PenyesuaianKas',
  userLogin: 'UserLogin',
  activityLogs: 'LogAktivitas',
  pendingCommands: 'PendingCommand',
  settings: 'Pengaturan'
};

function doGet(e) {
  ensureDefaultLogin_();
  return jsonOutput({
    ok: true,
    message: 'Tandon Network Billing API aktif',
    timestamp: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    const body = parseBody_(e);
    const action = body.action;

    if (action === 'ping') {
      return jsonOutput({ ok: true, message: 'pong' });
    }

    if (action === 'saveAll') {
      saveAll_(body.data || {});
      return jsonOutput({ ok: true, message: 'Data berhasil disimpan ke Spreadsheet' });
    }

    if (action === 'getAll') {
      return jsonOutput({
        ok: true,
        data: getAll_()
      });
    }

    if (action === 'login') {
      return jsonOutput(checkLogin_(body.username, body.password));
    }

    if (action === 'getLogin') {
      return jsonOutput({
        ok: true,
        data: getLoginPublic_()
      });
    }

    if (action === 'updateLogin') {
      updateLogin_(body);
      return jsonOutput({ ok: true, message: 'UserLogin berhasil diperbarui' });
    }

    if (action === 'updateSettings') {
      updateSettings_(body.settings || body.data || body);
      return jsonOutput({ ok: true, message: 'Pengaturan berhasil diperbarui' });
    }

    if (action === 'addActivityLog') {
      addActivityLog_(body.log || body);
      return jsonOutput({ ok: true, message: 'Log Aktivitas berhasil disimpan' });
    }

    if (action === 'getActivityLogs') {
      const rows = readJsonSheet_(SHEETS.activityLogs);
      return jsonOutput({ ok: true, data: rows, activityLogs: rows });
    }

    if (action === 'getCashAccounts') {
      const rows = readJsonSheet_(SHEETS.cashAccounts);
      return jsonOutput({ ok: true, data: rows, cashAccounts: rows });
    }

    if (action === 'saveCashAccounts') {
      writeJsonSheet_(SHEETS.cashAccounts, body.cashAccounts || body.data || []);
      return jsonOutput({ ok: true, message: 'Bank & Tunai berhasil disimpan' });
    }

    if (action === 'getCashAdjustments') {
      const rows = readJsonSheet_(SHEETS.cashAdjustments);
      return jsonOutput({ ok: true, data: rows, cashAdjustments: rows });
    }

    if (action === 'saveCashAdjustments') {
      writeJsonSheet_(SHEETS.cashAdjustments, body.cashAdjustments || body.data || []);
      return jsonOutput({ ok: true, message: 'Penyesuaian kas berhasil disimpan' });
    }

    if (action === 'getAset') {
      const rows = readJsonSheet_(SHEETS.aset);
      return jsonOutput({
        ok: true,
        timestamp: new Date().toISOString(),
        data: rows,
        aset: rows
      });
    }

    if (action === 'saveAset') {
      saveAset_(body.aset || body.asset || body);
      return jsonOutput({ ok: true, message: 'Aset berhasil disimpan ke sheet Aset' });
    }

    if (action === 'deleteAset') {
      deleteAset_(body.id);
      return jsonOutput({ ok: true, message: 'Aset berhasil dihapus' });
    }

    if (action === 'getPemasukan') {
      const rows = readJsonSheet_(SHEETS.pemasukan);
      return jsonOutput({
        ok: true,
        timestamp: new Date().toISOString(),
        data: rows,
        pemasukan: rows
      });
    }


    if (action === 'addCommand') {
      addCommand_(body.command || body);
      return jsonOutput({ ok: true, message: 'Command berhasil ditambahkan ke PendingCommand' });
    }

    if (action === 'addPemasukan') {
      addPemasukan_(body.pemasukan || body.income || body);
      return jsonOutput({ ok: true, message: 'Pemasukan berhasil ditambahkan ke sheet Pemasukan' });
    }

    if (action === 'getPendingCommands') {
      const rows = readJsonSheet_(SHEETS.pendingCommands);
      return jsonOutput({
        ok: true,
        timestamp: new Date().toISOString(),
        data: rows,
        pendingCommands: rows
      });
    }

    if (action === 'getPendingCommandText') {
      if (!isValidMikrotikToken_(body.token)) return textOutput_('ERROR|TOKEN_INVALID');
      return textOutput_(formatPendingCommandText_(getPendingCommand_()));
    }

    if (action === 'getPendingCommand') {
      return jsonOutput({
        ok: true,
        data: getPendingCommand_()
      });
    }

    if (action === 'updateCommand') {
      if (body.source === 'mikrotik' || body.token) validateMikrotikToken_(body.token);
      updateCommand_(body.id, body.status, body.message);
      return jsonOutput({ ok: true, message: 'Command diperbarui' });
    }

    return jsonOutput({ ok: false, message: 'Action tidak dikenal: ' + action });
  } catch (err) {
    return jsonOutput({
      ok: false,
      message: err.message,
      stack: err.stack
    });
  }
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  return JSON.parse(e.postData.contents);
}

function saveAll_(data) {
  validateUniquePelanggan_(data.pelanggan || []);
  writeJsonSheet_(SHEETS.pelanggan, data.pelanggan || []);
  writeJsonSheet_(SHEETS.paket, data.paket || []);
  writeJsonSheet_(SHEETS.tagihan, data.tagihan || []);
  writeJsonSheet_(SHEETS.pembayaran, data.pembayaran || []);
  writeJsonSheet_(SHEETS.pemasukan, data.pemasukan || makePemasukanFromPembayaran_(data.pembayaran || []));
  writeJsonSheet_(SHEETS.pengeluaran, data.pengeluaran || []);
  writeJsonSheet_(SHEETS.aset, data.aset || []);
  writeJsonSheet_(SHEETS.cashAccounts, data.cashAccounts || []);
  writeJsonSheet_(SHEETS.cashAdjustments, data.cashAdjustments || []);
  writeJsonSheet_(SHEETS.activityLogs, data.activityLogs || []);
  if (data.userLogin) writeJsonSheet_(SHEETS.userLogin, data.userLogin || []);
  else ensureDefaultLogin_();
  writeJsonSheet_(SHEETS.pendingCommands, data.pendingCommands || []);

  const settingsArray = data.settings ? [data.settings] : [];
  writeJsonSheet_(SHEETS.settings, settingsArray);
}

function getAll_() {
  const settingsRows = readJsonSheet_(SHEETS.settings);

  return {
    pelanggan: readJsonSheet_(SHEETS.pelanggan),
    paket: readJsonSheet_(SHEETS.paket),
    tagihan: readJsonSheet_(SHEETS.tagihan),
    pembayaran: readJsonSheet_(SHEETS.pembayaran),
    pemasukan: readJsonSheet_(SHEETS.pemasukan),
    pengeluaran: readJsonSheet_(SHEETS.pengeluaran),
    aset: readJsonSheet_(SHEETS.aset),
    cashAccounts: readJsonSheet_(SHEETS.cashAccounts),
    cashAdjustments: readJsonSheet_(SHEETS.cashAdjustments),
    activityLogs: readJsonSheet_(SHEETS.activityLogs),
    userLogin: [getLoginPublic_()],
    pendingCommands: readJsonSheet_(SHEETS.pendingCommands),
    settings: settingsRows[0] || {}
  };
}


function ensureDefaultLogin_() {
  const rows = readJsonSheet_(SHEETS.userLogin);
  if (rows.length) return rows;

  const defaultUser = {
    id: Utilities.getUuid(),
    createdAt: new Date().toISOString(),
    username: 'admin',
    password: 'admin',
    name: 'Administrator',
    role: 'Admin',
    status: 'Aktif',
    note: 'Segera ubah username dan password dari menu Pengaturan.'
  };

  writeJsonSheet_(SHEETS.userLogin, [defaultUser]);
  return [defaultUser];
}

function getLoginPublic_() {
  const rows = ensureDefaultLogin_();
  const active = rows.find(function(item) {
    return String(item.status || 'Aktif').toLowerCase() !== 'nonaktif';
  }) || rows[0] || {};

  return {
    username: active.username || 'admin',
    name: active.name || 'Administrator',
    role: active.role || 'Admin',
    status: active.status || 'Aktif'
  };
}

function checkLogin_(username, password) {
  if (!username || !password) {
    return { ok: false, authenticated: false, message: 'Username dan password wajib diisi' };
  }

  const rows = ensureDefaultLogin_();
  const match = rows.find(function(item) {
    return String(item.status || 'Aktif').toLowerCase() !== 'nonaktif' &&
      String(item.username || '') === String(username || '') &&
      String(item.password || '') === String(password || '');
  });

  if (!match) {
    return { ok: true, authenticated: false, message: 'Username atau password salah' };
  }

  return {
    ok: true,
    authenticated: true,
    message: 'Login berhasil',
    user: {
      username: match.username || '',
      name: match.name || 'Administrator',
      role: match.role || 'Admin'
    }
  };
}

function updateLogin_(payload) {
  const username = String(payload.username || '').trim();
  const password = String(payload.password || '').trim();

  if (!username) throw new Error('Username login wajib diisi');
  if (!password) throw new Error('Password login wajib diisi');

  const rows = readJsonSheet_(SHEETS.userLogin);
  const now = new Date().toISOString();
  const row = {
    id: payload.id || (rows[0] && rows[0].id) || Utilities.getUuid(),
    createdAt: (rows[0] && rows[0].createdAt) || now,
    username: username,
    password: password,
    name: payload.name || payload.adminName || 'Administrator',
    role: payload.role || 'Admin',
    status: payload.status || 'Aktif',
    updatedAt: now
  };

  // Sistem ini memakai satu akun operator utama agar sederhana untuk RT/RW Net.
  writeJsonSheet_(SHEETS.userLogin, [row]);
}


function updateSettings_(settings) {
  if (!settings || typeof settings !== 'object') {
    throw new Error('Data pengaturan kosong');
  }
  const rows = readJsonSheet_(SHEETS.settings);
  const merged = Object.assign({}, rows[0] || {}, settings, {
    updatedAt: new Date().toISOString()
  });
  writeJsonSheet_(SHEETS.settings, [merged]);
}

function getStoredSettings_() {
  const rows = readJsonSheet_(SHEETS.settings);
  return rows[0] || {};
}

function getMikrotikToken_() {
  const settings = getStoredSettings_();
  return String(settings.mikrotikToken || PropertiesService.getScriptProperties().getProperty('MIKROTIK_TOKEN') || '').trim();
}

function isValidMikrotikToken_(token) {
  const expected = getMikrotikToken_();
  if (!expected) return true;
  return String(token || '').trim() === expected;
}

function validateMikrotikToken_(token) {
  if (!isValidMikrotikToken_(token)) {
    throw new Error('Token MikroTik tidak valid');
  }
  return true;
}

function formatPendingCommandText_(cmd) {
  if (!cmd) return 'EMPTY';
  return [
    'OK',
    cleanTextField_(cmd.id),
    cleanTextField_(cmd.action),
    cleanTextField_(cmd.username),
    cleanTextField_(cmd.profile)
  ].join('|');
}

function cleanTextField_(value) {
  return String(value || '')
    .replace(/\|/g, '-')
    .replace(/\r?\n|\r/g, ' ')
    .trim();
}
function textOutput_(text) {
  return ContentService
    .createTextOutput(String(text || ''))
    .setMimeType(ContentService.MimeType.TEXT);
}


function validateUniquePelanggan_(rows) {
  const seen = {};
  (rows || []).forEach(function(row) {
    const username = String(row.username || '').trim().toLowerCase();
    if (!username) return;
    if (seen[username]) {
      throw new Error('Username PPPoE dobel: ' + username + '. Dipakai oleh ' + seen[username] + ' dan ' + (row.nama || '-'));
    }
    seen[username] = row.nama || '-';
  });
}

function addActivityLog_(log) {
  if (!log) throw new Error('Data log kosong');
  const rows = readJsonSheet_(SHEETS.activityLogs);
  const row = {
    id: log.id || Utilities.getUuid(),
    waktu: log.waktu || log.createdAt || new Date().toISOString(),
    user: log.user || 'Administrator',
    aksi: log.aksi || log.action || 'Aktivitas',
    keterangan: log.keterangan || log.description || '',
    detail: log.detail || {}
  };
  rows.unshift(row);
  writeJsonSheet_(SHEETS.activityLogs, rows.slice(0, 2000));
}

function saveAset_(asset) {
  if (!asset) {
    throw new Error('Data aset kosong');
  }

  const rows = readJsonSheet_(SHEETS.aset);
  const now = new Date().toISOString();
  const jumlah = Number(asset.jumlah || asset.qty || 1);
  const hargaSatuan = Number(asset.hargaSatuan || asset.unitPrice || asset.amount || 0);
  const row = {
    id: asset.id || Utilities.getUuid(),
    createdAt: asset.createdAt || now,
    tanggalBeli: asset.tanggalBeli || asset.date || new Date(),
    namaAset: asset.namaAset || asset.name || '',
    kategori: asset.kategori || asset.category || 'Lainnya',
    jumlah: jumlah,
    hargaSatuan: hargaSatuan,
    totalHarga: Number(asset.totalHarga || asset.total || (jumlah * hargaSatuan) || 0),
    kondisi: asset.kondisi || asset.condition || 'Baik',
    lokasi: asset.lokasi || asset.location || '',
    catatan: asset.catatan || asset.note || '',
    updatedAt: now
  };

  if (!row.namaAset) {
    throw new Error('Nama aset wajib diisi');
  }

  const index = rows.findIndex(function(item) {
    return String(item.id || '') === String(row.id || '');
  });

  if (index >= 0) rows[index] = { ...rows[index], ...row };
  else rows.unshift(row);

  writeJsonSheet_(SHEETS.aset, rows);
}

function deleteAset_(id) {
  if (!id) throw new Error('ID aset kosong');
  const rows = readJsonSheet_(SHEETS.aset);
  const nextRows = rows.filter(function(item) {
    return String(item.id || '') !== String(id || '');
  });
  writeJsonSheet_(SHEETS.aset, nextRows);
}

function addCommand_(command) {
  if (!command || !command.action || !command.username) {
    throw new Error('Data command tidak lengkap');
  }

  const commands = readJsonSheet_(SHEETS.pendingCommands);
  const newCommand = {
    id: command.id || Utilities.getUuid(),
    createdAt: command.createdAt || new Date().toISOString(),
    action: command.action || '',
    username: command.username || '',
    profile: command.profile || '',
    status: command.status || 'PENDING',
    message: command.message || ''
  };

  // Kalau masih ada command PENDING untuk username + action yang sama,
  // update data lama supaya pilihan paket terbaru (7/15/30 hari) tidak kalah oleh command lama.
  const existingIndex = commands.findIndex(function(item) {
    return String(item.status || '').toUpperCase() === 'PENDING' &&
      String(item.action || '') === String(command.action || '') &&
      String(item.username || '') === String(command.username || '');
  });

  if (existingIndex >= 0) {
    commands[existingIndex] = {
      ...commands[existingIndex],
      createdAt: newCommand.createdAt,
      profile: newCommand.profile,
      message: newCommand.message,
      status: 'PENDING'
    };
  } else {
    commands.unshift(newCommand);
  }

  writeJsonSheet_(SHEETS.pendingCommands, commands);
  addActivityLog_({
    user: 'Apps Script',
    aksi: 'Tambah Command MikroTik',
    keterangan: String(newCommand.action || '') + ' ' + String(newCommand.username || '') + (newCommand.profile ? ' -> ' + newCommand.profile : ''),
    detail: { commandId: newCommand.id, action: newCommand.action, username: newCommand.username, profile: newCommand.profile }
  });

  const income = command.pemasukan || command.income;
  if (income) {
    addPemasukan_(income);
  }
}


function addPemasukan_(income) {
  if (!income) {
    throw new Error('Data pemasukan kosong');
  }

  const pemasukanRows = readJsonSheet_(SHEETS.pemasukan);
  const now = new Date().toISOString();
  const row = normalizePemasukan_(income, now);

  const existingIndex = pemasukanRows.findIndex(function(item) {
    return String(item.id || '') === String(row.id || '');
  });

  if (existingIndex >= 0) {
    pemasukanRows[existingIndex] = {
      ...pemasukanRows[existingIndex],
      ...row,
      updatedAt: now
    };
  } else {
    pemasukanRows.unshift(row);
  }

  writeJsonSheet_(SHEETS.pemasukan, pemasukanRows);
  addActivityLog_({
    user: 'Apps Script',
    aksi: 'Tambah Pemasukan',
    keterangan: String(row.customerName || row.sumber || 'Pemasukan') + ' Rp ' + String(row.amount),
    detail: { pemasukanId: row.id, customerId: row.customerId, username: row.username, amount: row.amount, method: row.method }
  });
}

function normalizePemasukan_(income, now) {
  const amount = Number(income.amount || income.jumlah || 0);
  if (amount <= 0) {
    throw new Error('Nominal pemasukan harus lebih dari 0');
  }

  return {
    id: income.id || Utilities.getUuid(),
    createdAt: income.createdAt || now || new Date().toISOString(),
    tanggal: income.tanggal || income.date || new Date(),
    sumber: income.sumber || 'Perpanjangan Prabayar',
    kategori: income.kategori || income.type || 'Prabayar',
    customerId: income.customerId || '',
    customerName: income.customerName || income.nama || '',
    username: income.username || '',
    paket: income.paket || '',
    type: income.type || 'Prabayar',
    amount: amount,
    method: income.method || 'Tunai',
    keterangan: income.keterangan || income.note || '',
    paymentId: income.paymentId || income.id || '',
    commandId: income.commandId || ''
  };
}

function makePemasukanFromPembayaran_(payments) {
  return (payments || []).map(function(payment) {
    return normalizePemasukan_({
      ...payment,
      id: payment.pemasukanId || ('PM-' + (payment.id || Utilities.getUuid())),
      sumber: payment.sumber || 'Pembayaran',
      kategori: payment.type || 'Pembayaran',
      keterangan: payment.note || ''
    }, payment.createdAt || new Date().toISOString());
  });
}

function getPendingCommand_() {
  const commands = readJsonSheet_(SHEETS.pendingCommands);
  const pending = commands.find(function(item) {
    return String(item.status || '').toUpperCase() === 'PENDING';
  });

  return pending || null;
}

function updateCommand_(id, status, message) {
  const commands = readJsonSheet_(SHEETS.pendingCommands);
  const index = commands.findIndex(function(item) {
    return String(item.id) === String(id);
  });

  if (index === -1) {
    throw new Error('Command tidak ditemukan: ' + id);
  }

  commands[index].status = status || commands[index].status;
  commands[index].message = message || commands[index].message;
  commands[index].updatedAt = new Date().toISOString();

  writeJsonSheet_(SHEETS.pendingCommands, commands);
}

function writeJsonSheet_(sheetName, rows) {
  const sheet = getOrCreateSheet_(sheetName);
  sheet.clearContents();

  if (!rows || rows.length === 0) {
    sheet.getRange(1, 1).setValue('json');
    return;
  }

  const keys = collectKeys_(rows);
  sheet.getRange(1, 1, 1, keys.length).setValues([keys]);

  const values = rows.map(function(row) {
    return keys.map(function(key) {
      const value = row[key];

      if (value === null || value === undefined) return '';
      if (typeof value === 'object') return JSON.stringify(value);
      return value;
    });
  });

  sheet.getRange(2, 1, values.length, keys.length).setValues(values);
  sheet.autoResizeColumns(1, keys.length);
}

function readJsonSheet_(sheetName) {
  const sheet = getOrCreateSheet_(sheetName);
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();

  if (lastRow < 2 || lastCol < 1) {
    return [];
  }

  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const values = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();

  return values.map(function(row) {
    const obj = {};

    headers.forEach(function(header, index) {
      if (!header) return;

      const value = row[index];
      obj[header] = parseCellValue_(value);
    });

    return obj;
  });
}

function parseCellValue_(value) {
  if (value === '') return '';

  if (typeof value === 'string') {
    const trimmed = value.trim();

    if (
      (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
      (trimmed.startsWith('[') && trimmed.endsWith(']'))
    ) {
      try {
        return JSON.parse(trimmed);
      } catch (err) {
        return value;
      }
    }
  }

  return value;
}

function collectKeys_(rows) {
  const keys = [];

  rows.forEach(function(row) {
    Object.keys(row || {}).forEach(function(key) {
      if (keys.indexOf(key) === -1) keys.push(key);
    });
  });

  return keys.length ? keys : ['json'];
}

function getOrCreateSheet_(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  return sheet;
}

function jsonOutput(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
