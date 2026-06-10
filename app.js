const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

const customerModal = document.getElementById('customerModal');
const openCustomerModal = document.getElementById('openCustomerModal');
const closeCustomerModal = document.getElementById('closeCustomerModal');
const cancelCustomer = document.getElementById('cancelCustomer');
const customerForm = document.getElementById('customerForm');
const customerModalTitle = document.getElementById('customerModalTitle');

const packageModal = document.getElementById('packageModal');
const openPackageModal = document.getElementById('openPackageModal');
const closePackageModal = document.getElementById('closePackageModal');
const cancelPackage = document.getElementById('cancelPackage');
const packageForm = document.getElementById('packageForm');
const packageModalTitle = document.getElementById('packageModalTitle');

const invoiceModal = document.getElementById('invoiceModal');
const openInvoiceModal = document.getElementById('openInvoiceModal');
const closeInvoiceModal = document.getElementById('closeInvoiceModal');
const cancelInvoice = document.getElementById('cancelInvoice');
const invoiceForm = document.getElementById('invoiceForm');

const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const cancelPayment = document.getElementById('cancelPayment');
const paymentForm = document.getElementById('paymentForm');

const prepaidDebtModal = document.getElementById('prepaidDebtModal');
const closePrepaidDebtModal = document.getElementById('closePrepaidDebtModal');
const cancelPrepaidDebt = document.getElementById('cancelPrepaidDebt');
const prepaidDebtForm = document.getElementById('prepaidDebtForm');
const searchDebt = document.getElementById('searchDebt');
const filterDebtType = document.getElementById('filterDebtType');
const filterDebtStatus = document.getElementById('filterDebtStatus');

const searchCustomer = document.getElementById('searchCustomer');
const filterBilling = document.getElementById('filterBilling');
const filterStatus = document.getElementById('filterStatus');
const searchPackage = document.getElementById('searchPackage');
const searchInvoice = document.getElementById('searchInvoice');
const filterInvoiceStatus = document.getElementById('filterInvoiceStatus');
const filterInvoiceType = document.getElementById('filterInvoiceType');
const searchPayment = document.getElementById('searchPayment');
const filterPaymentMethod = document.getElementById('filterPaymentMethod');

const expenseModal = document.getElementById('expenseModal');
const openExpenseModal = document.getElementById('openExpenseModal');
const closeExpenseModal = document.getElementById('closeExpenseModal');
const cancelExpense = document.getElementById('cancelExpense');
const expenseForm = document.getElementById('expenseForm');
const expenseModalTitle = document.getElementById('expenseModalTitle');
const searchExpense = document.getElementById('searchExpense');
const filterExpenseCategory = document.getElementById('filterExpenseCategory');

const assetModal = document.getElementById('assetModal');
const openAssetModal = document.getElementById('openAssetModal');
const closeAssetModal = document.getElementById('closeAssetModal');
const cancelAsset = document.getElementById('cancelAsset');
const assetForm = document.getElementById('assetForm');
const assetModalTitle = document.getElementById('assetModalTitle');
const searchAsset = document.getElementById('searchAsset');
const filterAssetCategory = document.getElementById('filterAssetCategory');

const reportType = document.getElementById('reportType');
const reportStartDate = document.getElementById('reportStartDate');
const reportEndDate = document.getElementById('reportEndDate');
const refreshReportBtn = document.getElementById('refreshReportBtn');
const printReportBtn = document.getElementById('printReportBtn');
const reportPreview = document.getElementById('reportPreview');

const settingsForm = document.getElementById('settingsForm');
const saveSettingsTopBtn = document.getElementById('saveSettingsTopBtn');
const resetSettingsBtn = document.getElementById('resetSettingsBtn');
const openCashAccountModal = document.getElementById('openCashAccountModal');
const cashAccountModal = document.getElementById('cashAccountModal');
const closeCashAccountModal = document.getElementById('closeCashAccountModal');
const cancelCashAccount = document.getElementById('cancelCashAccount');
const cashAccountForm = document.getElementById('cashAccountForm');
const searchCashAccount = document.getElementById('searchCashAccount');
const filterCashAccountType = document.getElementById('filterCashAccountType');
const openCashAdjustModal = document.getElementById('openCashAdjustModal');
const cashAdjustModal = document.getElementById('cashAdjustModal');
const closeCashAdjustModal = document.getElementById('closeCashAdjustModal');
const cancelCashAdjust = document.getElementById('cancelCashAdjust');
const cashAdjustForm = document.getElementById('cashAdjustForm');

const exportBackupBtn = document.getElementById('exportBackupBtn');
const importBackupBtn = document.getElementById('importBackupBtn');
const backupFileInput = document.getElementById('backupFileInput');
const exportCustomersCsvBtn = document.getElementById('exportCustomersCsvBtn');
const exportInvoicesCsvBtn = document.getElementById('exportInvoicesCsvBtn');
const exportPaymentsCsvBtn = document.getElementById('exportPaymentsCsvBtn');
const clearLocalDataBtn = document.getElementById('clearLocalDataBtn');
const pushSheetBtn = document.getElementById('pushSheetBtn');
const pullSheetBtn = document.getElementById('pullSheetBtn');

const searchIsolation = document.getElementById('searchIsolation');
const filterIsolationStatus = document.getElementById('filterIsolationStatus');
const filterIsolationType = document.getElementById('filterIsolationType');
const generateIsolationBtn = document.getElementById('generateIsolationBtn');

const searchCommand = document.getElementById('searchCommand');
const filterCommandStatus = document.getElementById('filterCommandStatus');
const clearDoneCommandsBtn = document.getElementById('clearDoneCommandsBtn');

const searchPrepaid = document.getElementById('searchPrepaid');
const filterPrepaidStatus = document.getElementById('filterPrepaidStatus');
const filterPrepaidDays = document.getElementById('filterPrepaidDays');
const refreshPrepaidBtn = document.getElementById('refreshPrepaidBtn');
const searchPostpaid = document.getElementById('searchPostpaid');
const filterPostpaidStatus = document.getElementById('filterPostpaidStatus');
const generatePostpaidDueBtn = document.getElementById('generatePostpaidDueBtn');

const extendModal = document.getElementById('extendModal');
const closeExtendModal = document.getElementById('closeExtendModal');
const cancelExtend = document.getElementById('cancelExtend');
const extendForm = document.getElementById('extendForm');
const extendPackage = document.getElementById('extendPackage');
const extendStartDate = document.getElementById('extendStartDate');
const extendExpiredDate = document.getElementById('extendExpiredDate');

let currentExtendMode = 'payment';

const premiumConfirmModal = document.getElementById('premiumConfirmModal');
const premiumConfirmClose = document.getElementById('premiumConfirmClose');
const premiumConfirmNo = document.getElementById('premiumConfirmNo');
const premiumConfirmYes = document.getElementById('premiumConfirmYes');
const premiumConfirmTitle = document.getElementById('premiumConfirmTitle');
const premiumConfirmText = document.getElementById('premiumConfirmText');
const premiumConfirmDetails = document.getElementById('premiumConfirmDetails');
let premiumConfirmResolver = null;

const CUSTOMER_STORAGE_KEY = 'tandon_pelanggan';
const PACKAGE_STORAGE_KEY = 'tandon_paket';
const INVOICE_STORAGE_KEY = 'tandon_tagihan';
const PAYMENT_STORAGE_KEY = 'tandon_pembayaran';
const INCOME_STORAGE_KEY = 'tandon_pemasukan';
const EXPENSE_STORAGE_KEY = 'tandon_pengeluaran';
const ASSET_STORAGE_KEY = 'tandon_aset';
const SETTINGS_STORAGE_KEY = 'tandon_pengaturan';
const COMMAND_STORAGE_KEY = 'tandon_pending_command';
const ACTIVITY_STORAGE_KEY = 'tandon_activity_log';
const CASH_ACCOUNT_STORAGE_KEY = 'tandon_cash_accounts';
const CASH_ADJUST_STORAGE_KEY = 'tandon_cash_adjustments';
const SHEET_REFRESH_INTERVAL_MS = 5000;

const defaultPaket = [
  {
    id: crypto.randomUUID(),
    name: 'PAKET 7 HARI',
    price: 25000,
    speed: '10 Mbps',
    profile: '7 Day',
    type: 'Prabayar / Pascabayar',
    note: 'Paket 7 hari untuk pelanggan harian.'
  },
  {
    id: crypto.randomUUID(),
    name: 'PAKET 15 HARI',
    price: 50000,
    speed: '10 Mbps',
    profile: '15 Day',
    type: 'Prabayar / Pascabayar',
    note: 'Paket 15 hari / setengah bulan.'
  },
  {
    id: crypto.randomUUID(),
    name: 'PAKET 30 HARI',
    price: 100000,
    speed: '10 Mbps',
    profile: '30 Day',
    type: 'Prabayar / Pascabayar',
    note: 'Paket 30 hari / satu bulan.'
  }
];

const defaultPelanggan = [
  { id: crypto.randomUUID(), nama: 'Budi Santoso', phone: '081234567890', alamat: 'Kp. Tandon RT 01', username: 'budi01', password: '12345', tipe: 'Pascabayar', paket: '10 Mbps', status: 'Aktif', tanggalAktif: '2026-06-01', tempo: '2026-06-10' },
  { id: crypto.randomUUID(), nama: 'Siti Aminah', phone: '081987654321', alamat: 'Kp. Tandon RT 02', username: 'siti02', password: '12345', tipe: 'Prabayar', paket: '10 Mbps', status: 'Aktif', tanggalAktif: '2026-06-09', tempo: '2026-07-09' },
  { id: crypto.randomUUID(), nama: 'Agus Pratama', phone: '082222333344', alamat: 'Kp. Tandon RT 03', username: 'agus03', password: '12345', tipe: 'Pascabayar', paket: '10 Mbps', status: 'Isolir', tanggalAktif: '2026-05-01', tempo: '2026-06-10' },
  { id: crypto.randomUUID(), nama: 'Rina Lestari', phone: '083333444455', alamat: 'Kp. Tandon RT 04', username: 'rina04', password: '12345', tipe: 'Prabayar', paket: '10 Mbps', status: 'Expired', tanggalAktif: '2026-05-09', tempo: '2026-06-09' }
];

const defaultSettings = {
  businessName: 'Tandon Network',
  businessAddress: 'Alamat usaha belum diisi',
  adminPhone: '',
  adminName: 'Administrator',
  loginUsername: 'admin',
  loginPassword: 'admin',
  dueDay: 10,
  prepaidDays: 30,
  isolationMode: 'Manual',
  currency: 'IDR',
  appsScriptUrl: '',
  mikrotikProxyUrl: '',
  mikrotikToken: '',
  routerName: 'Router Utama',
  connectionNote: '',
  waTemplateH1: `Halo pelanggan {nama},
Masa aktif internet prabayar anda 1 hari lagi, perlu diperpanjang.
Expired/tempo: {expired}.
Agar tetap bisa internetan lancar seperti biasa tanpa gangguan, yuk segera lakukan perpanjangan paketnya.
Terima kasih!`,
  waTemplateAktif: `Halo {nama},
Pembayaran internet anda sudah kami terima.
Layanan internet sudah aktif kembali.
Paket: {paket}
Masa aktif sampai: {expired}

Terima kasih sudah menggunakan layanan {usaha}.`,
  waTemplateTunggakan: `Halo {nama}
Kami informasikan tagihan/tunggakan internet anda dengan rincian sebagai berikut
Sudah dibayar: {sudahDibayar}
Sisa BON / Belum Terbayar : {sisaTunggakan}
Mohon segera melakukan pembayaran. agar semua berjalan dengan sebagaimana mestinya
Terima kasih.`,
  waTemplatePascabayar: `Halo {nama},
Ini pengingat tagihan internet {usaha}.
Paket: {paket}
Jumlah: {jumlah}
Jatuh tempo: {tempo}

Mohon segera melakukan pembayaran agar layanan tetap aktif.
Terima kasih. - {usaha}`
};

const defaultPengeluaran = [
  {
    id: crypto.randomUUID(),
    date: todayDate(),
    category: 'Internet / Bandwidth',
    description: 'Bayar bandwidth bulanan',
    amount: 2500000,
    method: 'Transfer'
  },
  {
    id: crypto.randomUUID(),
    date: todayDate(),
    category: 'Listrik',
    description: 'Listrik perangkat jaringan',
    amount: 350000,
    method: 'Tunai'
  }
];

const defaultAset = [];

const defaultCashAdjustments = [];

const defaultCashAccounts = [
  { id: crypto.randomUUID(), name: 'BRI', type: 'Bank', owner: 'Tandon Network', number: '', status: 'Aktif', note: 'Transfer BRI' },
  { id: crypto.randomUUID(), name: 'DANA', type: 'E-Wallet', owner: 'Tandon Network', number: '', status: 'Aktif', note: 'Transfer E-Wallet DANA' },
  { id: crypto.randomUUID(), name: 'Tunai', type: 'Tunai', owner: 'Admin', number: '', status: 'Aktif', note: 'Uang cash/tunai' }
];

const CUSTOMER_DAY_PACKAGES = Array.from({ length: 30 }, (_, index) => {
  const days = index + 1;
  return {
    id: `DAY-${days}`,
    nama: `${days} Day`,
    name: `${days} Day`,
    harga: getDefaultPriceByDays(days),
    price: getDefaultPriceByDays(days),
    speed: `${days} Day`,
    profile: `${days} Day`,
    billing: 'Prabayar / Pascabayar',
    type: 'Prabayar / Pascabayar',
    note: `Paket ${days} hari`
  };
});

function getDefaultPriceByDays(days) {
  if (Number(days) === 7) return 25000;
  if (Number(days) === 15) return 50000;
  if (Number(days) === 30) return 100000;
  return 0;
}

function getCustomerDayPackage(value) {
  return CUSTOMER_DAY_PACKAGES.find((item) => item.profile === value || item.speed === value || item.id === value) || null;
}

function getSelectedCustomerPackageDays() {
  const selected = document.getElementById('customerPackage')?.value || '';
  const match = selected.match(/(\d+)/);
  return match ? Number(match[1]) : Number(settings.prepaidDays || 30);
}

function updateCustomerDueDateFromForm() {
  const activeInput = document.getElementById('customerActiveDate');
  const dueInput = document.getElementById('customerDueDate');
  if (!activeInput || !dueInput) return;
  if (!activeInput.value) {
    dueInput.value = '';
    return;
  }
  const days = getSelectedCustomerPackageDays();
  dueInput.value = addDays(activeInput.value, days);
}

let pelanggan = loadData(CUSTOMER_STORAGE_KEY, defaultPelanggan);
let paket = loadData(PACKAGE_STORAGE_KEY, defaultPaket);
let tagihan = loadData(INVOICE_STORAGE_KEY, []);
let pembayaran = loadData(PAYMENT_STORAGE_KEY, []);
let pemasukan = loadData(INCOME_STORAGE_KEY, []);
let pengeluaran = loadData(EXPENSE_STORAGE_KEY, defaultPengeluaran);
let aset = loadData(ASSET_STORAGE_KEY, defaultAset);
let cashAccounts = loadData(CASH_ACCOUNT_STORAGE_KEY, defaultCashAccounts);
let cashAdjustments = loadData(CASH_ADJUST_STORAGE_KEY, defaultCashAdjustments);
let settings = loadData(SETTINGS_STORAGE_KEY, defaultSettings);
let pendingCommands = loadData(COMMAND_STORAGE_KEY, []);
let activityLogs = loadData(ACTIVITY_STORAGE_KEY, []);
let sheetRefreshTimer = null;
let isRefreshingPemasukan = false;
let isRefreshingPendingCommands = false;
normalizePackages();

function loadData(key, fallback) {
  const saved = localStorage.getItem(key);
  if (!saved) return fallback;
  try { return JSON.parse(saved); } catch { return fallback; }
}

function savePelanggan() { localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(pelanggan)); }
function savePaket() { localStorage.setItem(PACKAGE_STORAGE_KEY, JSON.stringify(paket)); }
function saveTagihan() { localStorage.setItem(INVOICE_STORAGE_KEY, JSON.stringify(tagihan)); }
function savePembayaran() { localStorage.setItem(PAYMENT_STORAGE_KEY, JSON.stringify(pembayaran)); }
function savePemasukan() { localStorage.setItem(INCOME_STORAGE_KEY, JSON.stringify(pemasukan)); }
function savePengeluaran() { localStorage.setItem(EXPENSE_STORAGE_KEY, JSON.stringify(pengeluaran)); }
function saveAset() { localStorage.setItem(ASSET_STORAGE_KEY, JSON.stringify(aset)); }
function saveCashAccounts() { localStorage.setItem(CASH_ACCOUNT_STORAGE_KEY, JSON.stringify(cashAccounts)); }
function saveCashAdjustments() { localStorage.setItem(CASH_ADJUST_STORAGE_KEY, JSON.stringify(cashAdjustments)); }
function saveSettings() { localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings)); }
function saveCommands() { localStorage.setItem(COMMAND_STORAGE_KEY, JSON.stringify(pendingCommands)); }
function saveActivityLogs() { localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(activityLogs)); }

function currentOperatorName() {
  return settings.adminName || settings.loginUsername || 'Administrator';
}

function addActivityLog(action, description, detail = {}, options = {}) {
  const row = {
    id: crypto.randomUUID(),
    waktu: new Date().toISOString(),
    user: currentOperatorName(),
    aksi: action || 'Aktivitas',
    keterangan: description || '',
    detail
  };
  activityLogs.unshift(row);
  activityLogs = activityLogs.slice(0, 1000);
  saveActivityLogs();
  if (!options.localOnly) syncActivityLogToGoogleSheet(row, { silent: true });
  return row;
}

async function syncActivityLogToGoogleSheet(log, options = {}) {
  if (!settings.appsScriptUrl || !log) return { ok: false, message: 'URL Apps Script belum diisi' };
  try {
    const result = await postToAppsScript(settings.appsScriptUrl, { action: 'addActivityLog', log });
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan Log Aktivitas');
    return result;
  } catch (error) {
    if (!options.silent) showToast('Log aktivitas belum masuk Google Sheet');
    return { ok: false, message: error.message };
  }
}

function applyTemplate(template, values = {}) {
  return String(template || '').replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key) => {
    const value = values[key];
    return value === undefined || value === null ? '' : String(value);
  });
}


function packageName(item) {
  return item?.nama || item?.name || '';
}

function packagePrice(item) {
  return Number(item?.harga ?? item?.price ?? 0);
}

function packageBilling(item) {
  return item?.billing || item?.type || item?.tipe || 'Prabayar / Pascabayar';
}

function packageNote(item) {
  return item?.note || item?.keterangan || '';
}

function normalizePackageItem(item) {
  return {
    ...item,
    nama: packageName(item),
    harga: packagePrice(item),
    billing: packageBilling(item),
    note: packageNote(item),
    speed: item?.speed || '',
    profile: item?.profile || ''
  };
}

function normalizePackages() {
  paket = (paket || []).map(normalizePackageItem);
  savePaket();
}

function showDashboard() {
  loginPage.classList.add('hidden');
  dashboardPage.classList.remove('hidden');
  renderAll();
  applySettingsToUI();
  startSheetAutoRefresh();
  refreshPemasukanFromSheet({ force: true });
}

function showLogin() {
  stopSheetAutoRefresh();
  dashboardPage.classList.add('hidden');
  loginPage.classList.remove('hidden');
}

function renderAll() {
  renderPelanggan();
  renderPaket();
  renderPackageOptions();
  renderInvoiceCustomerOptions();
  renderTagihan();
  renderPembayaran();
  renderPengeluaran();
  renderCashAccounts();
  renderCashAdjustments();
  renderPaymentMethodOptions();
  renderAset();
  updateStats();
  updateFinanceDashboard();
  renderLaporan();
  renderSettings();
  renderIsolation();
  renderCommands();
  renderPrabayar();
  renderTunggakan();
  renderPascabayar();
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const loginBtn = loginForm.querySelector('button[type="submit"]');

  if (!user || !pass) {
    await openPremiumAlert({
      title: 'Login belum lengkap',
      text: 'Username dan password wajib diisi.',
      details: [
        { label: 'Status', value: 'Data login belum lengkap' }
      ],
      note: 'Isi username dan password terlebih dahulu, lalu klik Login kembali.'
    });
    return;
  }

  loginBtn.disabled = true;
  const oldText = loginBtn.textContent;
  loginBtn.textContent = 'Memeriksa...';

  try {
    const endpoint = settings.appsScriptUrl || '';

    if (endpoint) {
      const result = await postToAppsScript(endpoint, {
        action: 'login',
        username: user,
        password: pass
      });

      if (result.ok && result.authenticated) {
        localStorage.setItem('tandon_login', 'true');
        localStorage.setItem('tandon_login_user', JSON.stringify(result.user || { username: user }));
        if (result.user?.name) {
          settings.adminName = result.user.name;
          saveSettings();
        }
        showDashboard();
        return;
      }

      await openPremiumAlert({
        title: 'Login gagal',
        text: result.message || 'Username atau password salah.',
        details: [
          { label: 'Username', value: user || '-' },
          { label: 'Sumber login', value: 'Sheet UserLogin' }
        ],
        note: 'Periksa kembali username dan password. Jika baru mengubah data login, pastikan sheet UserLogin dan Apps Script sudah tersinkron.'
      });
      return;
    }

    // Fallback awal saat URL Apps Script belum dipasang.
    const fallbackUser = settings.loginUsername || 'admin';
    const fallbackPass = settings.loginPassword || 'admin';
    if (user === fallbackUser && pass === fallbackPass) {
      localStorage.setItem('tandon_login', 'true');
      localStorage.setItem('tandon_login_user', JSON.stringify({ username: user, name: settings.adminName || 'Administrator' }));
      showDashboard();
    } else {
      await openPremiumAlert({
        title: 'Login gagal',
        text: 'Username atau password salah.',
        details: [
          { label: 'Username', value: user || '-' },
          { label: 'Mode', value: 'Login lokal / fallback' }
        ],
        note: 'Jika sudah memakai Google Sheet, pastikan URL Apps Script di menu Pengaturan sudah benar dan sudah deploy ulang.'
      });
    }
  } catch (error) {
    const fallbackUser = settings.loginUsername || 'admin';
    const fallbackPass = settings.loginPassword || 'admin';
    if (user === fallbackUser && pass === fallbackPass) {
      localStorage.setItem('tandon_login', 'true');
      showToast('Login lokal dipakai karena koneksi UserLogin sheet belum tersedia.');
      showDashboard();
    } else {
      await openPremiumAlert({
        title: 'Gagal cek UserLogin',
        text: 'Tidak bisa memeriksa login ke sheet UserLogin.',
        details: [
          { label: 'Masalah', value: error.message || 'Koneksi / Apps Script bermasalah' }
        ],
        note: 'Periksa URL Apps Script, koneksi internet, dan akses deploy Web App. Jika perlu, login fallback hanya bisa dipakai jika username/password lokal cocok.'
      });
    }
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = oldText;
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('tandon_login');
  showLogin();
});

toggleSidebar?.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.menu-item').forEach((button) => {
  button.addEventListener('click', () => {
    goToPage(button.dataset.page);
    sidebar.classList.remove('open');
  });
});

/* CUSTOMER */
openCustomerModal?.addEventListener('click', () => openCustomer());
closeCustomerModal?.addEventListener('click', closeCustomer);
cancelCustomer?.addEventListener('click', closeCustomer);
customerModal?.addEventListener('click', (event) => { if (event.target === customerModal) closeCustomer(); });
searchCustomer?.addEventListener('input', renderPelanggan);
filterBilling?.addEventListener('change', renderPelanggan);
filterStatus?.addEventListener('change', renderPelanggan);

customerForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  updateCustomerDueDateFromForm();

  const id = document.getElementById('customerId').value || crypto.randomUUID();
  const payload = {
    id,
    nama: document.getElementById('customerName').value.trim(),
    phone: document.getElementById('customerPhone').value.trim(),
    alamat: document.getElementById('customerAddress').value.trim(),
    username: document.getElementById('customerUsername').value.trim(),
    password: document.getElementById('customerPassword').value.trim(),
    tipe: document.getElementById('customerBilling').value,
    paket: pelanggan.find((item) => item.id === id)?.paket || '',
    packageId: pelanggan.find((item) => item.id === id)?.packageId || '',
    status: document.getElementById('customerStatus').value,
    tanggalAktif: document.getElementById('customerActiveDate').value,
    tempo: document.getElementById('customerDueDate').value
  };

  const cleanUsername = payload.username.toLowerCase().trim();
  const duplicate = pelanggan.find((item) => String(item.username || '').toLowerCase().trim() === cleanUsername && item.id !== payload.id);
  if (duplicate) {
    await openPremiumAlert({
      title: 'Username PPPoE sudah dipakai',
      text: `Username ${payload.username} sudah terdaftar di pelanggan lain.`,
      details: [
        { label: 'Username', value: payload.username },
        { label: 'Dipakai oleh', value: duplicate.nama || '-' }
      ],
      note: 'Gunakan username PPPoE yang unik supaya tidak bentrok dengan Secret MikroTik dan data billing.'
    });
    document.getElementById('customerUsername')?.focus();
    return;
  }

  if (String(payload.status || '').toLowerCase().includes('expire') || String(payload.status || '').toLowerCase().includes('nonaktif')) {
    payload.tanggalAktif = '';
    payload.tempo = '';
    payload.aktif = '';
  }

  const index = pelanggan.findIndex((item) => item.id === id);
  const isEdit = index >= 0;
  if (isEdit) pelanggan[index] = payload;
  else pelanggan.unshift(payload);
  addActivityLog(isEdit ? 'Edit Pelanggan' : 'Tambah Pelanggan', `${payload.nama} / ${payload.username}`, { pelangganId: payload.id, username: payload.username, tipe: payload.tipe });

  savePelanggan();
  closeCustomer();
  renderAll();
  goToPage('pelanggan');
});

function openCustomer(customer = null) {
  customerForm.reset();
  document.getElementById('customerId').value = customer?.id || '';
  customerModalTitle.textContent = customer ? 'Edit Pelanggan' : 'Tambah Pelanggan';
  document.getElementById('customerName').value = customer?.nama || '';
  document.getElementById('customerPhone').value = customer?.phone || '';
  document.getElementById('customerAddress').value = customer?.alamat || '';
  document.getElementById('customerUsername').value = customer?.username || '';
  document.getElementById('customerPassword').value = customer?.password || '';
  document.getElementById('customerBilling').value = customer?.tipe || 'Prabayar';
  document.getElementById('customerStatus').value = customer?.status || 'Expire';
  document.getElementById('customerActiveDate').value = customer?.tanggalAktif || '';
  document.getElementById('customerDueDate').value = customer?.tempo || '';

  customerModal.classList.remove('hidden');
  setTimeout(() => document.getElementById('customerName').focus(), 80);
}

function closeCustomer() { customerModal.classList.add('hidden'); }

function isInactiveCustomer(item) {
  const statusText = String(item?.status || '').toLowerCase();
  return !!item?.needsActivation || statusText.includes('expire') || statusText.includes('isolir') || statusText.includes('nonaktif');
}

function renderPelanggan() {
  const tbody = document.getElementById('pelangganTable');
  if (!tbody) return;

  const keyword = (searchCustomer?.value || '').toLowerCase();
  const billingValue = filterBilling?.value || '';
  const statusValue = filterStatus?.value || '';

  const filtered = pelanggan.filter((item) => {
    const joined = `${item.nama} ${item.username} ${item.phone} ${item.status} ${item.tipe}`.toLowerCase();
    return joined.includes(keyword) && (!billingValue || item.tipe === billingValue) && (!statusValue || item.status === statusValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#64748b;padding:28px">Belum ada data pelanggan yang cocok.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item) => `
    <tr>
      <td><div class="customer-name"><b>${escapeHtml(item.nama)}</b><small>${escapeHtml(item.alamat || '-')}</small></div></td>
      <td>${escapeHtml(item.username)}</td>
      <td>${escapeHtml(item.phone || '-')}</td>
      <td><span class="billing ${item.tipe.toLowerCase()}">${item.tipe}</span></td>
      <td><div class="action-group"><button class="action-btn" onclick="editPelanggan('${item.id}')">Edit</button><button class="action-btn danger" onclick="hapusPelanggan('${item.id}')">Hapus</button></div></td>
    </tr>
  `).join('');
}

/* PACKAGE */
openPackageModal?.addEventListener('click', () => openPackage());
closePackageModal?.addEventListener('click', closePackage);
cancelPackage?.addEventListener('click', closePackage);
packageModal?.addEventListener('click', (event) => { if (event.target === packageModal) closePackage(); });
searchPackage?.addEventListener('input', renderPaket);

packageForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('packageId').value || crypto.randomUUID();
  const payload = {
    id,
    nama: document.getElementById('packageName').value.trim(),
    harga: Number(document.getElementById('packagePrice').value),
    speed: document.getElementById('packageSpeed').value.trim(),
    profile: document.getElementById('packageProfile').value.trim(),
    billing: document.getElementById('packageBilling').value,
    note: document.getElementById('packageNote').value.trim()
  };

  if (payload.harga <= 0) return alert('Harga paket harus lebih dari 0.');

  const duplicateName = paket.some((item) => packageName(item).toLowerCase() === payload.nama.toLowerCase() && item.id !== payload.id);
  if (duplicateName) return alert('Nama paket sudah ada.');

  const index = paket.findIndex((item) => item.id === id);
  if (index >= 0) paket[index] = normalizePackageItem(payload);
  else paket.unshift(normalizePackageItem(payload));

  savePaket();
  closePackage();
  renderAll();
  goToPage('paket');
});

function openPackage(item = null) {
  packageForm.reset();
  document.getElementById('packageId').value = item?.id || '';
  packageModalTitle.textContent = item ? 'Edit Paket Internet' : 'Tambah Paket Internet';
  document.getElementById('packageName').value = packageName(item);
  document.getElementById('packagePrice').value = packagePrice(item) || '';
  document.getElementById('packageSpeed').value = item?.speed || '';
  document.getElementById('packageProfile').value = item?.profile || '';
  document.getElementById('packageBilling').value = packageBilling(item);
  document.getElementById('packageNote').value = packageNote(item);
  packageModal.classList.remove('hidden');
  setTimeout(() => document.getElementById('packageName').focus(), 80);
}

function closePackage() { packageModal.classList.add('hidden'); }

function renderPaket() {
  const grid = document.getElementById('paketGrid');
  if (!grid) return;

  const keyword = (searchPackage?.value || '').toLowerCase();
  const filtered = paket.filter((item) => `${packageName(item)} ${packagePrice(item)} ${item.speed} ${item.profile} ${packageBilling(item)} ${packageNote(item)}`.toLowerCase().includes(keyword));

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-card">Belum ada paket internet yang cocok.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((item) => `
    <article class="package-card">
      <h3>${escapeHtml(packageName(item))}</h3>
      <strong>${formatRupiah(packagePrice(item))}</strong>
      <div class="package-meta">
        <span>Kecepatan: <b>${escapeHtml(item.speed)}</b></span>
        <span>Profile MikroTik: <b>${escapeHtml(item.profile)}</b></span>
        <span>Tipe: <b>${escapeHtml(packageBilling(item))}</b></span>
        <span>${escapeHtml(packageNote(item) || 'Tanpa keterangan')}</span>
      </div>
      <small>${escapeHtml(packageBilling(item))}</small>
      <div class="package-actions">
        <button class="action-btn" onclick="editPaket('${item.id}')">Edit</button>
        <button class="action-btn danger" onclick="hapusPaket('${item.id}')">Hapus</button>
      </div>
    </article>
  `).join('');
}

function renderPackageOptions() {
  const select = document.getElementById('customerPackage');
  if (!select) return;
  select.innerHTML = CUSTOMER_DAY_PACKAGES.map((item) => {
    const price = packagePrice(item);
    const priceText = price > 0 ? ` - ${formatRupiah(price)}` : '';
    return `<option value="${escapeHtml(item.profile)}">${escapeHtml(item.profile)}${priceText}</option>`;
  }).join('');
}

/* INVOICE */
openInvoiceModal?.addEventListener('click', () => openInvoice());
closeInvoiceModal?.addEventListener('click', closeInvoice);
cancelInvoice?.addEventListener('click', closeInvoice);
invoiceModal?.addEventListener('click', (event) => { if (event.target === invoiceModal) closeInvoice(); });
searchInvoice?.addEventListener('input', renderTagihan);
filterInvoiceStatus?.addEventListener('change', renderTagihan);
filterInvoiceType?.addEventListener('change', renderTagihan);

document.getElementById('invoiceCustomer')?.addEventListener('change', fillInvoiceFromCustomer);

invoiceForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const customerId = document.getElementById('invoiceCustomer').value;
  const customer = pelanggan.find((item) => item.id === customerId);
  if (!customer) return alert('Pelanggan tidak ditemukan.');

  const id = document.getElementById('invoiceId').value || crypto.randomUUID();
  const payload = {
    id,
    nomor: document.getElementById('invoiceId').value ? tagihan.find((row) => row.id === id)?.nomor : createInvoiceNumber(),
    customerId,
    customerName: customer.nama,
    type: document.getElementById('invoiceType').value,
    period: document.getElementById('invoicePeriod').value,
    dueDate: document.getElementById('invoiceDueDate').value,
    amount: Number(document.getElementById('invoiceAmount').value),
    status: document.getElementById('invoiceStatus').value,
    note: document.getElementById('invoiceNote').value.trim(),
    createdAt: new Date().toISOString()
  };

  if (payload.amount <= 0) return alert('Jumlah tagihan harus lebih dari 0.');

  const index = tagihan.findIndex((item) => item.id === id);
  if (index >= 0) tagihan[index] = payload;
  else tagihan.unshift(payload);

  saveTagihan();
  closeInvoice();
  renderAll();
  goToPage('tagihan');
});

function openInvoice(invoice = null) {
  invoiceForm.reset();
  renderInvoiceCustomerOptions();

  document.getElementById('invoiceId').value = invoice?.id || '';
  document.getElementById('invoiceCustomer').value = invoice?.customerId || pelanggan[0]?.id || '';
  fillInvoiceFromCustomer();

  if (invoice) {
    document.getElementById('invoiceType').value = invoice.type;
    document.getElementById('invoiceAmount').value = invoice.amount;
    document.getElementById('invoicePeriod').value = invoice.period;
    document.getElementById('invoiceDueDate').value = invoice.dueDate;
    document.getElementById('invoiceStatus').value = invoice.status;
    document.getElementById('invoiceNote').value = invoice.note || '';
  }

  invoiceModal.classList.remove('hidden');
}

function closeInvoice() { invoiceModal.classList.add('hidden'); }

function fillInvoiceFromCustomer() {
  const customerId = document.getElementById('invoiceCustomer')?.value;
  const customer = pelanggan.find((item) => item.id === customerId);
  if (!customer) return;

  const customerPackage = paket.find((item) => item.speed === customer.paket);
  document.getElementById('invoiceType').value = customer.tipe;
  document.getElementById('invoiceAmount').value = packagePrice(customerPackage);
  document.getElementById('invoicePeriod').value = currentMonth();
  document.getElementById('invoiceDueDate').value = customer.tempo || defaultDueDateBySettings();
}

function renderInvoiceCustomerOptions() {
  const select = document.getElementById('invoiceCustomer');
  if (!select) return;

  select.innerHTML = pelanggan.map((item) => {
    return `<option value="${item.id}">${escapeHtml(item.nama)} - ${escapeHtml(item.tipe)} - ${escapeHtml(item.paket)}</option>`;
  }).join('');
}

function renderTagihan() {
  const tbody = document.getElementById('invoiceTable');
  if (!tbody) return;

  const keyword = (searchInvoice?.value || '').toLowerCase();
  const statusValue = filterInvoiceStatus?.value || '';
  const typeValue = filterInvoiceType?.value || '';

  const filtered = tagihan.filter((item) => {
    const joined = `${item.nomor} ${item.customerName} ${item.type} ${item.period} ${item.status} ${item.note}`.toLowerCase();
    return joined.includes(keyword) && (!statusValue || item.status === statusValue) && (!typeValue || item.type === typeValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:#64748b;padding:28px">Belum ada tagihan. Klik + Buat Tagihan.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item) => `
    <tr>
      <td><span class="invoice-number">${escapeHtml(item.nomor)}</span></td>
      <td><b>${escapeHtml(item.customerName)}</b></td>
      <td><span class="billing ${item.type.toLowerCase()}">${escapeHtml(item.type)}</span></td>
      <td>${formatPeriode(item.period)}</td>
      <td>${formatTanggal(item.dueDate)}</td>
      <td><b>${formatRupiah(item.amount)}</b></td>
      <td><span class="status ${statusClass(item.status)}">${escapeHtml(item.status)}</span></td>
      <td>
        <div class="action-group">
          ${item.status !== 'Lunas' ? `<button class="action-btn" onclick="openPayment('${item.id}')">Bayar</button>` : ''}
          <button class="action-btn" onclick="editInvoice('${item.id}')">Edit</button>
          <button class="action-btn danger" onclick="hapusInvoice('${item.id}')">Hapus</button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* PAYMENT */
closePaymentModal?.addEventListener('click', closePayment);
cancelPayment?.addEventListener('click', closePayment);
paymentModal?.addEventListener('click', (event) => { if (event.target === paymentModal) closePayment(); });
searchPayment?.addEventListener('input', renderPembayaran);
filterPaymentMethod?.addEventListener('change', renderPembayaran);

paymentForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const invoiceId = document.getElementById('paymentInvoiceId').value;
  const invoice = tagihan.find((item) => item.id === invoiceId);
  if (!invoice) return alert('Tagihan tidak ditemukan.');

  const amount = Number(document.getElementById('paymentAmount').value);
  if (amount <= 0) return alert('Jumlah bayar harus lebih dari 0.');

  const payload = {
    id: crypto.randomUUID(),
    invoiceId,
    nomor: invoice.nomor,
    customerId: invoice.customerId,
    customerName: invoice.customerName,
    type: invoice.type,
    amount,
    method: document.getElementById('paymentMethod').value,
    date: document.getElementById('paymentDate').value,
    note: document.getElementById('paymentNote').value.trim()
  };

  pembayaran.unshift(payload);
  invoice.status = 'Lunas';

  const customer = pelanggan.find((item) => item.id === invoice.customerId);
  if (customer) {
    customer.status = 'Aktif';
    if (customer.tipe === 'Prabayar') {
    const packageItem = paket.find((item) => item.speed === customer.paket) || paket[0];
    const start = new Date(`${payload.date}T${new Date().toTimeString().slice(0,5)}`);
    const days = getPackageDays(packageItem);
    customer.aktif = toDatetimeLocal(start);
    customer.tempo = toDatetimeLocal(addDaysToDate(start, days));
    createCommand({
      action: 'ENABLE_USER',
      username: customer.username,
      profile: getCustomerProfile(customer),
      message: `Aktif otomatis dari pembayaran ${customer.nama}`
    });
  }
  }

  savePembayaran();
  saveTagihan();
  savePelanggan();
  closePayment();
  renderAll();
  goToPage('pembayaran');
});

function openPayment(invoiceId) {
  const invoice = tagihan.find((item) => item.id === invoiceId);
  if (!invoice) return;

  document.getElementById('paymentInvoiceId').value = invoice.id;
  document.getElementById('paymentDate').value = todayDate();
  document.getElementById('paymentAmount').value = invoice.amount;
  renderPaymentMethodOptions();
  document.getElementById('paymentMethod').value = activeCashAccounts().some((item) => cashAccountMethodValue(item) === 'Tunai') ? 'Tunai' : cashAccountMethodValue(activeCashAccounts()[0]);
  document.getElementById('paymentNote').value = '';

  document.getElementById('paymentSummary').innerHTML = `
    <b>${escapeHtml(invoice.customerName)} - ${escapeHtml(invoice.nomor)}</b>
    <span>${escapeHtml(invoice.type)} • ${formatPeriode(invoice.period)} • ${formatRupiah(invoice.amount)}</span>
  `;

  paymentModal.classList.remove('hidden');
}

function closePayment() { paymentModal.classList.add('hidden'); }

function renderPembayaran() {
  const tbody = document.getElementById('paymentTable');
  if (!tbody) return;

  const keyword = (searchPayment?.value || '').toLowerCase();
  const methodValue = filterPaymentMethod?.value || '';

  const filtered = pembayaran.filter((item) => {
    const joined = `${item.nomor} ${item.customerName} ${item.type} ${item.method} ${item.date} ${item.note}`.toLowerCase();
    return joined.includes(keyword) && (!methodValue || incomeMethod(item) === methodValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#64748b;padding:28px">Belum ada pembayaran.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item) => `
    <tr>
      <td>${formatTanggal(item.date)}</td>
      <td><span class="invoice-number">${escapeHtml(item.nomor)}</span></td>
      <td><b>${escapeHtml(item.customerName)}</b></td>
      <td><span class="billing ${item.type.toLowerCase()}">${escapeHtml(item.type)}</span></td>
      <td><b>${formatRupiah(item.amount)}</b></td>
      <td>${escapeHtml(item.method)}</td>
      <td>${escapeHtml(item.note || '-')}</td>
    </tr>
  `).join('');
}


/* EXPENSE */
openExpenseModal?.addEventListener('click', () => openExpense());
closeExpenseModal?.addEventListener('click', closeExpense);
cancelExpense?.addEventListener('click', closeExpense);
expenseModal?.addEventListener('click', (event) => { if (event.target === expenseModal) closeExpense(); });
searchExpense?.addEventListener('input', renderPengeluaran);
filterExpenseCategory?.addEventListener('change', renderPengeluaran);
openAssetModal?.addEventListener('click', () => openAset());
closeAssetModal?.addEventListener('click', closeAset);
cancelAsset?.addEventListener('click', closeAset);
assetModal?.addEventListener('click', (event) => { if (event.target === assetModal) closeAset(); });
searchAsset?.addEventListener('input', renderAset);
filterAssetCategory?.addEventListener('change', renderAset);
openCashAccountModal?.addEventListener('click', () => openCashAccount());
openCashAdjustModal?.addEventListener('click', () => openCashAdjust());
closeCashAdjustModal?.addEventListener('click', closeCashAdjust);
cancelCashAdjust?.addEventListener('click', closeCashAdjust);
cashAdjustModal?.addEventListener('click', (event) => { if (event.target === cashAdjustModal) closeCashAdjust(); });
closeCashAccountModal?.addEventListener('click', closeCashAccount);
cancelCashAccount?.addEventListener('click', closeCashAccount);
cashAccountModal?.addEventListener('click', (event) => { if (event.target === cashAccountModal) closeCashAccount(); });
searchCashAccount?.addEventListener('input', renderCashAccounts);
filterCashAccountType?.addEventListener('change', renderCashAccounts);
reportType?.addEventListener('change', renderLaporan);
reportStartDate?.addEventListener('change', renderLaporan);
reportEndDate?.addEventListener('change', renderLaporan);
refreshReportBtn?.addEventListener('click', renderLaporan);
printReportBtn?.addEventListener('click', () => {
  renderLaporan();
  window.print();
});

settingsForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  collectSettings();
  saveSettings();
  applySettingsToUI();
  await syncLoginToGoogleSheet({ silent: true });
  await syncSettingsToGoogleSheet({ silent: true });
  addActivityLog('Simpan Pengaturan', 'Pengaturan aplikasi diperbarui', { businessName: settings.businessName });
  renderAll();
  showToast('Pengaturan berhasil disimpan');
});

saveSettingsTopBtn?.addEventListener('click', async () => {
  collectSettings();
  saveSettings();
  applySettingsToUI();
  await syncLoginToGoogleSheet({ silent: true });
  await syncSettingsToGoogleSheet({ silent: true });
  addActivityLog('Simpan Pengaturan', 'Pengaturan aplikasi diperbarui', { businessName: settings.businessName });
  renderAll();
  showToast('Pengaturan berhasil disimpan');
});


function activateWaTemplatePanel(panelId) {
  document.querySelectorAll('.wa-template-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.templatePanel === panelId);
  });
  document.querySelectorAll('.wa-template-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === panelId);
  });
}

document.querySelectorAll('.wa-template-tab').forEach((btn) => {
  btn.addEventListener('click', () => activateWaTemplatePanel(btn.dataset.templatePanel));
});

document.getElementById('saveWaTemplateBtn')?.addEventListener('click', async () => {
  collectSettings();
  saveSettings();
  addActivityLog('Simpan Template WA', 'Template WhatsApp diperbarui dari menu Pengaturan', { businessName: settings.businessName });
  showToast('Template WhatsApp berhasil disimpan');
});

document.getElementById('resetWaTemplateBtn')?.addEventListener('click', () => {
  const waH1 = document.getElementById('settingWaTemplateH1');
  const waAktif = document.getElementById('settingWaTemplateAktif');
  const waTunggakan = document.getElementById('settingWaTemplateTunggakan');
  const waPascabayar = document.getElementById('settingWaTemplatePascabayar');
  if (waH1) waH1.value = defaultSettings.waTemplateH1;
  if (waAktif) waAktif.value = defaultSettings.waTemplateAktif;
  if (waTunggakan) waTunggakan.value = defaultSettings.waTemplateTunggakan;
  if (waPascabayar) waPascabayar.value = defaultSettings.waTemplatePascabayar;
  collectSettings();
  saveSettings();
  showToast('Template WA dikembalikan ke default');
});

resetSettingsBtn?.addEventListener('click', () => {
  if (!confirm('Reset pengaturan ke default?')) return;
  settings = {...defaultSettings};
  saveSettings();
  renderAll();
  showToast('Pengaturan direset');
});

searchIsolation?.addEventListener('input', renderIsolation);
filterIsolationStatus?.addEventListener('change', renderIsolation);
filterIsolationType?.addEventListener('change', renderIsolation);
generateIsolationBtn?.addEventListener('click', generateDueCommands);

searchCommand?.addEventListener('input', renderCommands);
filterCommandStatus?.addEventListener('change', renderCommands);
clearDoneCommandsBtn?.addEventListener('click', clearDoneCommands);

exportBackupBtn?.addEventListener('click', exportBackupJson);
importBackupBtn?.addEventListener('click', () => backupFileInput?.click());
backupFileInput?.addEventListener('change', importBackupJson);
exportCustomersCsvBtn?.addEventListener('click', () => exportCsv('pelanggan', pelanggan));
exportInvoicesCsvBtn?.addEventListener('click', () => exportCsv('tagihan', tagihan));
exportPaymentsCsvBtn?.addEventListener('click', () => exportCsv('pembayaran', pembayaran));
clearLocalDataBtn?.addEventListener('click', resetLocalData);

searchPrepaid?.addEventListener('input', renderPrabayar);
filterPrepaidStatus?.addEventListener('change', renderPrabayar);
filterPrepaidDays?.addEventListener('change', renderPrabayar);
searchDebt?.addEventListener('input', renderTunggakan);
filterDebtType?.addEventListener('change', renderTunggakan);
filterDebtStatus?.addEventListener('change', renderTunggakan);
closePrepaidDebtModal?.addEventListener('click', closePrepaidDebt);
cancelPrepaidDebt?.addEventListener('click', closePrepaidDebt);
prepaidDebtModal?.addEventListener('click', (event) => { if (event.target === prepaidDebtModal) closePrepaidDebt(); });
prepaidDebtForm?.addEventListener('submit', submitPrepaidDebt);
refreshPrepaidBtn?.addEventListener('click', () => {
  renderAll();
  showToast('Data prabayar diperbarui');
});
searchPostpaid?.addEventListener('input', renderPascabayar);
filterPostpaidStatus?.addEventListener('change', renderPascabayar);
generatePostpaidDueBtn?.addEventListener('click', generatePostpaidDueCommands);

closeExtendModal?.addEventListener('click', closeExtend);
cancelExtend?.addEventListener('click', closeExtend);
extendModal?.addEventListener('click', (event) => { if (event.target === extendModal) closeExtend(); });
extendPackage?.addEventListener('change', updateExtendExpiredPreview);
extendStartDate?.addEventListener('change', updateExtendExpiredPreview);
extendForm?.addEventListener('submit', submitExtendPrepaid);
pushSheetBtn?.addEventListener('click', pushToGoogleSheet);
pullSheetBtn?.addEventListener('click', pullFromGoogleSheet);

expenseForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('expenseId').value || crypto.randomUUID();
  const payload = {
    id,
    date: document.getElementById('expenseDate').value,
    category: document.getElementById('expenseCategory').value,
    description: document.getElementById('expenseDescription').value.trim(),
    amount: Number(document.getElementById('expenseAmount').value),
    method: document.getElementById('expenseMethod').value
  };

  if (payload.amount <= 0) return alert('Jumlah pengeluaran harus lebih dari 0.');

  const index = pengeluaran.findIndex((item) => item.id === id);
  const isEditExpense = index >= 0;
  if (isEditExpense) pengeluaran[index] = payload;
  else pengeluaran.unshift(payload);
  addActivityLog(isEditExpense ? 'Edit Pengeluaran' : 'Tambah Pengeluaran', `${payload.description} ${formatRupiah(payload.amount)}`, { amount: payload.amount, method: payload.method });

  savePengeluaran();
  closeExpense();
  renderAll();
  goToPage('pengeluaran');
});

function openExpense(item = null) {
  expenseForm.reset();

  document.getElementById('expenseId').value = item?.id || '';
  expenseModalTitle.textContent = item ? 'Edit Pengeluaran' : 'Tambah Pengeluaran';
  document.getElementById('expenseDate').value = item?.date || todayDate();
  document.getElementById('expenseCategory').value = item?.category || 'Internet / Bandwidth';
  document.getElementById('expenseDescription').value = item?.description || '';
  document.getElementById('expenseAmount').value = item?.amount || '';
  renderPaymentMethodOptions();
  document.getElementById('expenseMethod').value = item?.method || (activeCashAccounts().some((row) => cashAccountMethodValue(row) === 'Tunai') ? 'Tunai' : cashAccountMethodValue(activeCashAccounts()[0]));

  expenseModal.classList.remove('hidden');
  setTimeout(() => document.getElementById('expenseDescription').focus(), 80);
}

function closeExpense() {
  expenseModal.classList.add('hidden');
}


function activeCashAccounts() {
  const rows = Array.isArray(cashAccounts) ? cashAccounts : [];
  const active = rows.filter((item) => String(item.status || 'Aktif').toLowerCase() !== 'nonaktif' && String(item.name || '').trim());
  return active.length ? active : defaultCashAccounts;
}

function cashAccountMethodValue(item) {
  return String(item.name || '').trim() || 'Tunai';
}

function cashAccountLabel(item) {
  const name = cashAccountMethodValue(item);
  if (String(item.type || '').toLowerCase() === 'tunai') return 'Tunai';
  if (String(item.note || '').toLowerCase().includes('transfer')) return item.note;
  if (String(item.type || '').toLowerCase().includes('wallet')) return `Transfer E-Wallet ${name}`;
  if (String(item.type || '').toLowerCase().includes('bank')) return `Transfer ${name}`;
  return name;
}

function normalizeMethodName(value) {
  const raw = String(value || '').toLowerCase();
  const accounts = activeCashAccounts();
  const exact = accounts.find((item) => raw === cashAccountMethodValue(item).toLowerCase() || raw === cashAccountLabel(item).toLowerCase());
  if (exact) return cashAccountMethodValue(exact);
  const includes = accounts.find((item) => raw.includes(cashAccountMethodValue(item).toLowerCase()));
  if (includes) return cashAccountMethodValue(includes);
  if (raw.includes('tunai') || raw.includes('cash')) return 'Tunai';
  return String(value || 'Tunai').replace(/^Transfer\s+/i, '').replace(/^E-Wallet\s+/i, '').trim() || 'Tunai';
}

function accountBalance(accountName) {
  const key = normalizeMethodName(accountName).toLowerCase();
  const income = pemasukan
    .filter((item) => normalizeMethodName(item.method || item.metode || item.paymentMethod || 'Tunai').toLowerCase() === key)
    .reduce((sum, item) => sum + incomeAmount(item), 0);
  const expense = pengeluaran
    .filter((item) => normalizeMethodName(item.method || item.metode || 'Tunai').toLowerCase() === key)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const adjustment = (cashAdjustments || [])
    .filter((item) => normalizeMethodName(item.method || item.account || 'Tunai').toLowerCase() === key)
    .reduce((sum, item) => sum + cashAdjustmentSignedAmount(item), 0);
  return income - expense + adjustment;
}

function renderPaymentMethodOptions() {
  const accounts = activeCashAccounts();
  const selectIds = ['paymentMethod', 'prepaidDebtMethod', 'expenseMethod'];
  selectIds.forEach((id) => {
    const select = document.getElementById(id);
    if (!select) return;
    const selected = select.value || 'Tunai';
    select.innerHTML = accounts.map((item) => {
      const value = escapeHtml(cashAccountMethodValue(item));
      const label = escapeHtml(cashAccountLabel(item));
      return `<option value="${value}">${label}</option>`;
    }).join('');
    select.value = accounts.some((item) => cashAccountMethodValue(item) === selected) ? selected : (accounts[0] ? cashAccountMethodValue(accounts[0]) : 'Tunai');
  });

  const filter = document.getElementById('filterPaymentMethod');
  if (filter) {
    const selected = filter.value || '';
    filter.innerHTML = '<option value="">Semua Metode</option>' + accounts.map((item) => {
      const value = escapeHtml(cashAccountMethodValue(item));
      const label = escapeHtml(cashAccountLabel(item));
      return `<option value="${value}">${label}</option>`;
    }).join('');
    filter.value = selected;
  }
}

function cashAdjustmentSignedAmount(item) {
  const amount = Number(item.amount || item.jumlah || 0);
  const type = String(item.type || item.tipe || 'Tambah').toLowerCase();
  return type.includes('kurang') || type.includes('keluar') || type.includes('minus') ? -Math.abs(amount) : Math.abs(amount);
}

function totalCashAdjustments() {
  return (cashAdjustments || []).reduce((sum, item) => sum + cashAdjustmentSignedAmount(item), 0);
}

function renderCashAdjustments() {
  const tbody = document.getElementById('cashAdjustTable');
  if (!tbody) return;
  const rows = [...(cashAdjustments || [])].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#64748b;padding:22px">Belum ada penyesuaian kas. Gunakan untuk input kas awal atau koreksi saldo.</td></tr>`;
    return;
  }
  tbody.innerHTML = rows.map((item) => {
    const signed = cashAdjustmentSignedAmount(item);
    const tipe = signed < 0 ? 'Kurang' : 'Tambah';
    return `
      <tr>
        <td>${formatTanggal(item.date)}</td>
        <td><b>${escapeHtml(item.method || item.account || '-')}</b><small>${escapeHtml(item.note || '')}</small></td>
        <td><span class="badge ${signed < 0 ? 'nonaktif' : 'aktif'}">${tipe}</span></td>
        <td><b>${signed < 0 ? '-' : '+'} ${formatRupiah(Math.abs(signed))}</b></td>
        <td><small>${formatDateTime(item.createdAt || item.updatedAt || '')}</small></td>
        <td>
          <div class="action-stack">
            <button class="action-btn icon-only" title="Edit" aria-label="Edit" onclick="editCashAdjust('${item.id}')">✏️</button>
            <button class="action-btn icon-only danger" title="Hapus" aria-label="Hapus" onclick="hapusCashAdjust('${item.id}')">🗑️</button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

cashAdjustForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const id = document.getElementById('cashAdjustId').value || crypto.randomUUID();
  const amount = Number(document.getElementById('cashAdjustAmount').value || 0);
  if (amount <= 0) return openPremiumAlert({ title: 'Nominal belum benar', text: 'Isi nominal penyesuaian kas lebih dari 0.' });
  const payload = {
    id,
    date: document.getElementById('cashAdjustDate').value || todayDate(),
    method: document.getElementById('cashAdjustMethod').value || 'Tunai',
    type: document.getElementById('cashAdjustType').value || 'Tambah',
    amount,
    note: document.getElementById('cashAdjustNote').value.trim(),
    updatedAt: new Date().toISOString(),
    createdAt: document.getElementById('cashAdjustCreatedAt').value || new Date().toISOString()
  };
  const index = cashAdjustments.findIndex((item) => item.id === id);
  if (index >= 0) cashAdjustments[index] = payload;
  else cashAdjustments.unshift(payload);
  saveCashAdjustments();
  addActivityLog(index >= 0 ? 'Edit Penyesuaian Kas' : 'Tambah Penyesuaian Kas', `${payload.method} ${payload.type} ${formatRupiah(payload.amount)}`, { cashAdjustId: payload.id, method: payload.method, type: payload.type, amount: payload.amount });
  syncCashAdjustmentsToGoogleSheet({ silent: true });
  closeCashAdjust();
  renderAll();
  showToast('Penyesuaian kas berhasil disimpan');
});

function openCashAdjust(item = null) {
  document.getElementById('cashAdjustModalTitle').textContent = item ? 'Edit Penyesuaian Kas' : 'Tambah Penyesuaian Kas';
  document.getElementById('cashAdjustId').value = item?.id || '';
  document.getElementById('cashAdjustCreatedAt').value = item?.createdAt || '';
  document.getElementById('cashAdjustDate').value = item?.date || todayDate();
  document.getElementById('cashAdjustType').value = item?.type || 'Tambah';
  document.getElementById('cashAdjustAmount').value = item?.amount || '';
  document.getElementById('cashAdjustNote').value = item?.note || '';
  const select = document.getElementById('cashAdjustMethod');
  if (select) {
    const selected = item?.method || cashAccountMethodValue(activeCashAccounts()[0]) || 'Tunai';
    select.innerHTML = activeCashAccounts().map((row) => `<option value="${escapeHtml(cashAccountMethodValue(row))}">${escapeHtml(cashAccountLabel(row))}</option>`).join('');
    select.value = selected;
  }
  cashAdjustModal?.classList.remove('hidden');
}

function closeCashAdjust() {
  cashAdjustModal?.classList.add('hidden');
  cashAdjustForm?.reset();
}

function editCashAdjust(id) {
  const item = cashAdjustments.find((row) => row.id === id);
  if (item) openCashAdjust(item);
}

function hapusCashAdjust(id) {
  const item = cashAdjustments.find((row) => row.id === id);
  if (!item) return;
  if (!confirm(`Hapus penyesuaian kas ${item.method || ''} ${formatRupiah(item.amount || 0)}?`)) return;
  cashAdjustments = cashAdjustments.filter((row) => row.id !== id);
  saveCashAdjustments();
  syncCashAdjustmentsToGoogleSheet({ silent: true });
  renderAll();
  showToast('Penyesuaian kas dihapus');
}

async function syncCashAdjustmentsToGoogleSheet(options = {}) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) return { ok: false, message: 'URL Apps Script belum diisi' };
  try {
    const result = await postToAppsScript(endpoint, { action: 'saveCashAdjustments', cashAdjustments });
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan PenyesuaianKas');
    if (!options.silent) showToast('Penyesuaian kas tersimpan ke Google Sheet');
    return result;
  } catch (error) {
    if (!options.silent) showToast('Penyesuaian kas belum tersinkron ke Google Sheet');
    return { ok: false, message: error.message };
  }
}

function renderCashAccounts() {
  const tbody = document.getElementById('cashAccountTable');
  const summary = document.getElementById('cashAccountSummary');
  if (!tbody) return;

  const keyword = (searchCashAccount?.value || '').toLowerCase();
  const typeValue = filterCashAccountType?.value || '';
  const rows = (cashAccounts || []).filter((item) => {
    const joined = `${item.name || ''} ${item.type || ''} ${item.owner || ''} ${item.number || ''} ${item.note || ''}`.toLowerCase();
    return joined.includes(keyword) && (!typeValue || item.type === typeValue);
  });

  if (summary) {
    const active = activeCashAccounts();
    summary.innerHTML = active.map((item) => `
      <article class="mini-summary-card cash-summary-card">
        <span>${escapeHtml(cashAccountLabel(item))}</span>
        <strong>${formatRupiah(accountBalance(cashAccountMethodValue(item)))}</strong>
      </article>
    `).join('') || '<article class="mini-summary-card"><span>Belum ada metode</span><strong>Rp 0</strong></article>';
  }

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#64748b;padding:28px">Belum ada data Bank & Tunai. Klik + Tambah Bank / Tunai.</td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map((item) => `
    <tr>
      <td><b>${escapeHtml(item.name || '-')}</b><small>${escapeHtml(item.note || '')}</small></td>
      <td>${escapeHtml(item.type || '-')}</td>
      <td>${escapeHtml(item.owner || '-')}<small>${escapeHtml(item.number || '')}</small></td>
      <td><b>${formatRupiah(accountBalance(cashAccountMethodValue(item)))}</b></td>
      <td><span class="badge ${String(item.status || 'Aktif').toLowerCase() === 'aktif' ? 'aktif' : 'nonaktif'}">${escapeHtml(item.status || 'Aktif')}</span></td>
      <td>
        <div class="action-stack">
          <button class="action-btn icon-only" title="Edit" aria-label="Edit" onclick="editCashAccount('${item.id}')">✏️</button>
          <button class="action-btn icon-only danger" title="Hapus" aria-label="Hapus" onclick="hapusCashAccount('${item.id}')">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

cashAccountForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const id = document.getElementById('cashAccountId').value || crypto.randomUUID();
  const name = document.getElementById('cashAccountName').value.trim();
  if (!name) return openPremiumAlert({ title: 'Nama wajib diisi', text: 'Isi nama bank/tunai lebih dulu.' });
  const duplicate = (cashAccounts || []).find((item) => item.id !== id && String(item.name || '').toLowerCase() === name.toLowerCase());
  if (duplicate) return openPremiumAlert({ title: 'Nama sudah ada', text: 'Gunakan nama metode lain agar tidak dobel.' });
  const payload = {
    id,
    name,
    type: document.getElementById('cashAccountType').value,
    owner: document.getElementById('cashAccountOwner').value.trim(),
    number: document.getElementById('cashAccountNumber').value.trim(),
    status: document.getElementById('cashAccountStatus').value,
    note: document.getElementById('cashAccountNote').value.trim(),
    updatedAt: new Date().toISOString()
  };
  const index = cashAccounts.findIndex((item) => item.id === id);
  if (index >= 0) cashAccounts[index] = payload;
  else cashAccounts.push(payload);
  saveCashAccounts();
  addActivityLog(index >= 0 ? 'Edit Bank & Tunai' : 'Tambah Bank & Tunai', `${payload.name} (${payload.type})`, { accountId: payload.id });
  syncCashAccountsToGoogleSheet({ silent: true });
  closeCashAccount();
  renderAll();
  showToast('Bank & Tunai berhasil disimpan');
});

function openCashAccount(item = null) {
  document.getElementById('cashAccountModalTitle').textContent = item ? 'Edit Bank / Tunai' : 'Tambah Bank / Tunai';
  document.getElementById('cashAccountId').value = item?.id || '';
  document.getElementById('cashAccountName').value = item?.name || '';
  document.getElementById('cashAccountType').value = item?.type || 'Bank';
  document.getElementById('cashAccountOwner').value = item?.owner || '';
  document.getElementById('cashAccountNumber').value = item?.number || '';
  document.getElementById('cashAccountStatus').value = item?.status || 'Aktif';
  document.getElementById('cashAccountNote').value = item?.note || '';
  cashAccountModal?.classList.remove('hidden');
}

function closeCashAccount() {
  cashAccountModal?.classList.add('hidden');
  cashAccountForm?.reset();
}

function editCashAccount(id) {
  const item = cashAccounts.find((row) => row.id === id);
  if (item) openCashAccount(item);
}

function hapusCashAccount(id) {
  const item = cashAccounts.find((row) => row.id === id);
  if (!item) return;
  const used = pemasukan.some((row) => normalizeMethodName(row.method || row.metode || '').toLowerCase() === normalizeMethodName(item.name).toLowerCase()) || pengeluaran.some((row) => normalizeMethodName(row.method || row.metode || '').toLowerCase() === normalizeMethodName(item.name).toLowerCase());
  const message = used ? `Metode ${item.name} sudah dipakai transaksi. Nonaktifkan saja agar riwayat tetap rapi?` : `Hapus metode ${item.name}?`;
  if (!confirm(message)) return;
  if (used) item.status = 'Nonaktif';
  else cashAccounts = cashAccounts.filter((row) => row.id !== id);
  saveCashAccounts();
  syncCashAccountsToGoogleSheet({ silent: true });
  renderAll();
  showToast(used ? 'Metode dinonaktifkan' : 'Metode dihapus');
}

async function syncCashAccountsToGoogleSheet(options = {}) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) return { ok: false, message: 'URL Apps Script belum diisi' };
  try {
    const result = await postToAppsScript(endpoint, { action: 'saveCashAccounts', cashAccounts });
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan Bank & Tunai');
    if (!options.silent) showToast('Bank & Tunai tersimpan ke Google Sheet');
    return result;
  } catch (error) {
    if (!options.silent) showToast('Bank & Tunai belum tersinkron ke Google Sheet');
    return { ok: false, message: error.message };
  }
}

function renderPengeluaran() {
  const tbody = document.getElementById('expenseTable');
  if (!tbody) return;

  const keyword = (searchExpense?.value || '').toLowerCase();
  const categoryValue = filterExpenseCategory?.value || '';

  const filtered = pengeluaran.filter((item) => {
    const joined = `${item.date} ${item.category} ${item.description} ${item.amount} ${item.method}`.toLowerCase();
    return joined.includes(keyword) && (!categoryValue || item.category === categoryValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#64748b;padding:28px">Belum ada pengeluaran.</td></tr>`;
  } else {
    tbody.innerHTML = filtered.map((item) => `
      <tr>
        <td>${formatTanggal(item.date)}</td>
        <td><span class="category-pill">${escapeHtml(item.category)}</span></td>
        <td><b>${escapeHtml(item.description || '-')}</b></td>
        <td><b>${formatRupiah(item.amount)}</b></td>
        <td>${escapeHtml(item.method)}</td>
        <td>
          <div class="action-group">
            <button class="action-btn" onclick="editPengeluaran('${item.id}')">Edit</button>
            <button class="action-btn danger" onclick="hapusPengeluaran('${item.id}')">Hapus</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  const monthTotal = getExpenseThisMonth();
  const allTotal = pengeluaran.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  setText('expenseMonthTotal', formatRupiah(monthTotal));
  setText('expenseAllTotal', formatRupiah(allTotal));
}

function editPengeluaran(id) {
  const item = pengeluaran.find((row) => row.id === id);
  if (item) openExpense(item);
}

function hapusPengeluaran(id) {
  const item = pengeluaran.find((row) => row.id === id);
  if (!item) return;

  if (!confirm(`Hapus pengeluaran ${item.description || item.category}?`)) return;

  pengeluaran = pengeluaran.filter((row) => row.id !== id);
  savePengeluaran();
  renderAll();
}

function getExpenseThisMonth() {
  const month = currentMonth();
  return pengeluaran
    .filter((item) => String(item.date || '').startsWith(month))
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
}


/* ASSET */
assetForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('assetId').value || crypto.randomUUID();
  const qty = Number(document.getElementById('assetQty').value || 0);
  const unitPrice = Number(document.getElementById('assetUnitPrice').value || 0);

  if (qty <= 0) return alert('Jumlah unit aset harus lebih dari 0.');
  if (unitPrice < 0) return alert('Harga satuan tidak valid.');

  const payload = {
    id,
    createdAt: new Date().toISOString(),
    tanggalBeli: document.getElementById('assetDate').value,
    namaAset: document.getElementById('assetName').value.trim(),
    kategori: document.getElementById('assetCategory').value,
    jumlah: qty,
    hargaSatuan: unitPrice,
    totalHarga: qty * unitPrice,
    kondisi: document.getElementById('assetCondition').value,
    lokasi: document.getElementById('assetLocation').value.trim(),
    catatan: document.getElementById('assetNote').value.trim()
  };

  if (!payload.namaAset) return alert('Nama aset wajib diisi.');

  const index = aset.findIndex((item) => item.id === id);
  const isEditAsset = index >= 0;
  if (isEditAsset) aset[index] = {...aset[index], ...payload, updatedAt: new Date().toISOString()};
  else aset.unshift(payload);
  addActivityLog(isEditAsset ? 'Edit Aset' : 'Tambah Aset', `${payload.namaAset} ${formatRupiah(payload.totalHarga)}`, { asetId: payload.id, totalHarga: payload.totalHarga });

  saveAset();
  syncAsetToGoogleSheet(payload, { silent: true });
  closeAset();
  renderAll();
  goToPage('aset');
});

function openAset(item = null) {
  assetForm.reset();
  document.getElementById('assetId').value = item?.id || '';
  assetModalTitle.textContent = item ? 'Edit Aset' : 'Tambah Aset';
  document.getElementById('assetDate').value = item?.tanggalBeli || item?.date || todayDate();
  document.getElementById('assetName').value = item?.namaAset || item?.name || '';
  document.getElementById('assetCategory').value = item?.kategori || item?.category || 'MikroTik';
  document.getElementById('assetQty').value = Number(item?.jumlah || item?.qty || 1);
  document.getElementById('assetUnitPrice').value = Number(item?.hargaSatuan || item?.unitPrice || item?.amount || 0) || '';
  document.getElementById('assetCondition').value = item?.kondisi || item?.condition || 'Baik';
  document.getElementById('assetLocation').value = item?.lokasi || item?.location || '';
  document.getElementById('assetNote').value = item?.catatan || item?.note || '';
  assetModal.classList.remove('hidden');
  setTimeout(() => document.getElementById('assetName').focus(), 80);
}

function closeAset() {
  assetModal.classList.add('hidden');
}

function renderAset() {
  const tbody = document.getElementById('assetTable');
  if (!tbody) return;

  const keyword = (searchAsset?.value || '').toLowerCase();
  const categoryValue = filterAssetCategory?.value || '';

  const filtered = aset.filter((item) => {
    const joined = `${item.tanggalBeli || item.date || ''} ${item.namaAset || item.name || ''} ${item.kategori || item.category || ''} ${item.kondisi || item.condition || ''} ${item.lokasi || item.location || ''} ${item.catatan || item.note || ''}`.toLowerCase();
    const kategori = item.kategori || item.category || '';
    return joined.includes(keyword) && (!categoryValue || kategori === categoryValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:#64748b;padding:28px">Belum ada data aset. Klik + Tambah Aset.</td></tr>`;
  } else {
    tbody.innerHTML = filtered.map((item) => {
      const qty = Number(item.jumlah || item.qty || 0);
      const unitPrice = Number(item.hargaSatuan || item.unitPrice || 0);
      const total = Number(item.totalHarga || item.total || (qty * unitPrice) || 0);
      const kondisi = item.kondisi || item.condition || '-';
      return `
        <tr>
          <td>${formatTanggal(item.tanggalBeli || item.date)}</td>
          <td><b>${escapeHtml(item.namaAset || item.name || '-')}</b><small>${escapeHtml(item.catatan || item.note || '')}</small></td>
          <td><span class="category-pill">${escapeHtml(item.kategori || item.category || '-')}</span></td>
          <td><b>${qty}</b></td>
          <td>${formatRupiah(unitPrice)}</td>
          <td><b>${formatRupiah(total)}</b></td>
          <td><span class="status ${assetStatusClass(kondisi)}">${escapeHtml(kondisi)}</span></td>
          <td>${escapeHtml(item.lokasi || item.location || '-')}</td>
          <td>
            <div class="action-group">
              <button class="action-btn icon-only" title="Edit Aset" aria-label="Edit Aset" onclick="editAset('${item.id}')">✏️</button>
              <button class="action-btn icon-only danger" title="Hapus Aset" aria-label="Hapus Aset" onclick="hapusAset('${item.id}')">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  const totalValue = aset.reduce((sum, item) => sum + Number(item.totalHarga || item.total || (Number(item.jumlah || 0) * Number(item.hargaSatuan || 0)) || 0), 0);
  const totalUnit = aset.reduce((sum, item) => sum + Number(item.jumlah || item.qty || 0), 0);
  const goodTotal = aset.filter((item) => ['Baik', 'Terpakai', 'Cadangan'].includes(item.kondisi || item.condition)).length;
  const brokenTotal = aset.filter((item) => ['Rusak', 'Hilang'].includes(item.kondisi || item.condition)).length;

  setText('assetTotalValue', formatRupiah(totalValue));
  setText('assetTotalUnit', totalUnit);
  setText('assetGoodTotal', goodTotal);
  setText('assetBrokenTotal', brokenTotal);
}

function assetStatusClass(status) {
  const value = String(status || '').toLowerCase();
  if (value.includes('rusak') || value.includes('hilang')) return 'expired';
  if (value.includes('cadangan')) return 'nonaktif';
  return 'aktif';
}

function editAset(id) {
  const item = aset.find((row) => row.id === id);
  if (item) openAset(item);
}

function hapusAset(id) {
  const item = aset.find((row) => row.id === id);
  if (!item) return;
  if (!confirm(`Hapus aset ${item.namaAset || item.name || ''}?`)) return;
  aset = aset.filter((row) => row.id !== id);
  saveAset();
  deleteAsetFromGoogleSheet(id);
  renderAll();
}

async function syncAsetToGoogleSheet(asset, options = {}) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) return { ok: false, message: 'URL Google Apps Script belum diisi' };

  try {
    const result = await postToAppsScript(endpoint, {
      action: 'saveAset',
      aset: asset
    });
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan aset ke Google Sheet');
    if (!options.silent) showToast('Aset berhasil masuk ke Google Sheet');
    return result;
  } catch (error) {
    console.error(error);
    if (!options.silent) showToast('Aset belum tersinkron ke Google Sheet');
    return { ok: false, message: error.message };
  }
}

async function deleteAsetFromGoogleSheet(id) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) return;
  try {
    await postToAppsScript(endpoint, { action: 'deleteAset', id });
  } catch (error) {
    console.error(error);
  }
}

function incomeDate(item) {
  return String(item?.tanggal || item?.date || item?.createdAt || '').slice(0, 10);
}

function incomeAmount(item) {
  return Number(item?.amount || item?.jumlah || 0);
}

function incomeType(item) {
  return String(item?.type || item?.kategori || item?.sumber || '').toLowerCase();
}


function incomeMethod(item) {
  return normalizeMethodName(item.method || item.metode || item.paymentMethod || 'Tunai');
}

function incomeByMethod(methodName) {
  return pemasukan
    .filter((item) => incomeMethod(item) === methodName)
    .reduce((sum, item) => sum + incomeAmount(item), 0);
}

function getAssetTotalValue() {
  return aset.reduce((sum, item) => {
    const total = Number(item.totalHarga || item.total || 0);
    const calculated = Number(item.jumlah || item.qty || 0) * Number(item.hargaSatuan || item.price || 0);
    return sum + (total || calculated || 0);
  }, 0);
}

function updateAssetCashComparison(balance) {
  const assetTotal = getAssetTotalValue();
  const safeBalance = Number(balance || 0);
  const progress = assetTotal > 0 ? Math.max(0, Math.min(999, (safeBalance / assetTotal) * 100)) : 0;
  const displayProgress = assetTotal > 0 ? Math.round(progress) : 0;

  let status = 'Aset belum dicatat';
  let note = 'Catat aset untuk melihat posisi kas terhadap modal aset.';

  if (assetTotal > 0) {
    if (safeBalance >= assetTotal) {
      status = 'Sudah memenuhi / laba';
      note = 'Kas sudah menyamai atau melewati total nilai aset. Posisi usaha mulai aman dan bisa dianggap sudah melewati pulih modal aset.';
    } else if (progress >= 70) {
      status = 'Mendekati pulih modal';
      note = 'Kas sudah mendekati total nilai aset. Tinggal mengejar sisa sampai pulih modal aset.';
    } else if (progress >= 40) {
      status = 'Menuju pulih modal';
      note = 'Kas mulai terbentuk, tetapi belum menyamai total nilai aset. Usaha masih proses mengejar pulih modal.';
    } else {
      status = 'Masih merintis';
      note = 'Nilai aset masih jauh lebih besar dari kas. Fokus kumpulkan pemasukan dan kendalikan pengeluaran.';
    }
  }

  setText('dashAssetTotal', formatRupiah(assetTotal));
  setText('dashCashTotal', formatRupiah(safeBalance));
  setText('dashRecoveryPercent', `${displayProgress}%`);
  setText('dashRecoveryStatus', status);
  setText('dashRecoveryNote', note);

  const bar = document.getElementById('dashRecoveryBar');
  if (bar) bar.style.width = `${Math.min(100, displayProgress)}%`;
}

function getIncomeThisMonth() {
  const month = currentMonth();
  return pemasukan
    .filter((item) => incomeDate(item).startsWith(month))
    .reduce((sum, item) => sum + incomeAmount(item), 0);
}

function updateFinanceDashboard() {
  const month = currentMonth();

  const incomePrepaid = pemasukan
    .filter((item) => incomeType(item).includes('prabayar') && incomeDate(item).startsWith(month))
    .reduce((sum, item) => sum + incomeAmount(item), 0);

  const incomePostpaid = pemasukan
    .filter((item) => incomeType(item).includes('pascabayar') && incomeDate(item).startsWith(month))
    .reduce((sum, item) => sum + incomeAmount(item), 0);

  const incomeOther = pemasukan
    .filter((item) => !incomeType(item).includes('prabayar') && !incomeType(item).includes('pascabayar') && incomeDate(item).startsWith(month))
    .reduce((sum, item) => sum + incomeAmount(item), 0);

  const income = incomePrepaid + incomePostpaid + incomeOther;
  const expense = getExpenseThisMonth();
  const profit = income - expense;
  const allIncome = pemasukan.reduce((sum, item) => sum + incomeAmount(item), 0);
  const allExpense = pengeluaran.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const balance = allIncome - allExpense + totalCashAdjustments();

  setText('dashIncome', formatRupiah(income));
  setText('dashIncomePrepaid', `Prabayar: ${formatRupiah(incomePrepaid)}`);
  setText('dashIncomePostpaid', `Pascabayar: ${formatRupiah(incomePostpaid)}`);
  setText('dashExpense', formatRupiah(expense));
  setText('dashProfit', formatRupiah(profit));
  setText('dashBalance', formatRupiah(balance));
  updateAssetCashComparison(balance);
  const breakdown = document.getElementById('dashBalanceBreakdown');
  if (breakdown) {
    breakdown.innerHTML = activeCashAccounts().map((item) => `
      <span>${escapeHtml(cashAccountMethodValue(item))} = ${formatRupiah(accountBalance(cashAccountMethodValue(item)))}</span>
    `).join('');
  }

  const profitEl = document.getElementById('dashProfit');
  if (profitEl) {
    profitEl.style.color = profit < 0 ? '#dc2626' : '#059669';
  }
}


/* ACTIONS */
function editPelanggan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (customer) openCustomer(customer);
}

function hapusPelanggan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;
  if (!confirm(`Hapus pelanggan ${customer.nama}?`)) return;
  pelanggan = pelanggan.filter((item) => item.id !== id);
  addActivityLog('Hapus Pelanggan', `${customer.nama} / ${customer.username || '-'}`, { pelangganId: customer.id, username: customer.username });
  savePelanggan();
  renderAll();
}

function editPaket(id) {
  const item = paket.find((row) => row.id === id);
  if (item) openPackage(item);
}

function hapusPaket(id) {
  const item = paket.find((row) => row.id === id);
  if (!item) return;

  const dipakai = pelanggan.some((customer) => customer.paket === item.speed);
  if (dipakai) return alert('Paket ini masih dipakai pelanggan. Ganti paket pelanggan dulu sebelum dihapus.');

  if (!confirm(`Hapus paket ${item.nama}?`)) return;
  paket = paket.filter((row) => row.id !== id);
  savePaket();
  renderAll();
}

function editInvoice(id) {
  const invoice = tagihan.find((row) => row.id === id);
  if (invoice) openInvoice(invoice);
}

function hapusInvoice(id) {
  const invoice = tagihan.find((row) => row.id === id);
  if (!invoice) return;

  const sudahDibayar = pembayaran.some((row) => row.invoiceId === id);
  if (sudahDibayar) return alert('Tagihan ini sudah memiliki pembayaran, tidak bisa dihapus.');

  if (!confirm(`Hapus tagihan ${invoice.nomor}?`)) return;
  tagihan = tagihan.filter((row) => row.id !== id);
  saveTagihan();
  renderAll();
}






/* PRABAYAR */
function renderPrabayar() {
  const tbody = document.getElementById('prepaidTable');
  if (!tbody) return;

  const keyword = (searchPrepaid?.value || '').toLowerCase();
  const statusValue = filterPrepaidStatus?.value || '';
  const daysValue = filterPrepaidDays?.value || '';

  const rows = pelanggan
    .filter((item) => item.tipe === 'Prabayar')
    .map((item) => {
      const isNeedActivation = !!item.needsActivation;
      const tunggakan = Number(item.tunggakan || 0);
      const displayStatus = isNeedActivation ? 'Isolir / Nonaktif' : (tunggakan > 0 ? (item.status || 'Menunggak') : item.status);
      return {
        ...item,
        tunggakan,
        displayStatus,
        remainingDays: isNeedActivation ? null : getRemainingDays(item.tempo)
      };
    })
    .filter((item) => {
      const joined = `${item.nama} ${item.username} ${item.paket} ${item.status} ${item.displayStatus} ${item.tempo} ${item.tunggakan}`.toLowerCase();
      const matchKeyword = joined.includes(keyword);
      const matchStatus = !statusValue || item.status === statusValue || String(item.displayStatus || '').includes(statusValue);

      let matchDays = true;
      if (daysValue === 'expired') matchDays = item.remainingDays === null || item.remainingDays < 0;
      if (daysValue === 'soon') matchDays = item.remainingDays !== null && item.remainingDays >= 0 && item.remainingDays <= 3;
      if (daysValue === 'active') matchDays = item.remainingDays !== null && item.remainingDays > 3;

      return matchKeyword && matchStatus && matchDays;
    })
    .sort((a, b) => (a.remainingDays ?? 99999) - (b.remainingDays ?? 99999));

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:#64748b;padding:28px">Belum ada pelanggan prabayar.</td></tr>`;
  } else {
    tbody.innerHTML = rows.map((item) => {
      const isExpired = item.remainingDays !== null && item.remainingDays < 0;
      const hasDebt = Number(item.tunggakan || 0) > 0;
      const needsActivation = !!item.needsActivation;
      const actions = [];

      const statusText = String(item.status || item.displayStatus || '').toLowerCase();
      const isBlocked = needsActivation || isExpired || statusText.includes('expire') || statusText.includes('isolir') || statusText.includes('nonaktif');
      const hidePeriodInfo = isBlocked;
      const isPartial = statusText.includes('bayar sebagian');
      const isDebt = hasDebt && !isPartial;

      if (hasDebt || isPartial) {
        // Kalau pelanggan sudah menunggak / bayar sebagian,
        // aksi di Prabayar dikosongkan dulu sampai tunggakan lunas dari menu Tunggakan.
      } else {
        const showWaReminder = item.remainingDays !== null && item.remainingDays >= 0 && item.remainingDays <= 1;
        actions.push(`<button class="action-btn icon-only success" title="Perpanjang" aria-label="Perpanjang" onclick="openExtendPrepaid('${item.id}')">🔁</button>`);
        if (showWaReminder) {
          actions.push(`<button class="action-btn icon-only whatsapp" title="Notifikasi WA H-1" aria-label="Notifikasi WA H-1" onclick="kirimNotifikasiWaPrabayar('${item.id}')">📲</button>`);
        }
      }

      return `
      <tr>
        <td><div class="customer-name"><b>${escapeHtml(item.nama)}</b><small>${escapeHtml(item.hp || item.phone || '-')}</small></div></td>
        <td>${escapeHtml(item.username)}</td>
        <td>${escapeHtml(item.paket || '-')}</td>
        <td>${hidePeriodInfo ? '-' : renderDateTime(item.aktif)}</td>
        <td>${hidePeriodInfo ? '-' : renderDateTime(item.tempo)}</td>
        <td>${hidePeriodInfo ? '-' : renderRemainingCountdown(item.tempo)}</td>
        <td><b>${item.tunggakan > 0 ? formatRupiah(item.tunggakan) : '-'}</b></td>
        <td><span class="status ${statusClass(item.displayStatus)}">${escapeHtml(item.displayStatus)}</span></td>
        <td><div class="action-group">${actions.join('')}</div></td>
      </tr>`;
    }).join('');
  }

  const allPrepaid = pelanggan.filter((item) => item.tipe === 'Prabayar');
  const active = allPrepaid.filter((item) => item.status === 'Aktif' && !item.needsActivation && getRemainingDays(item.tempo) >= 0);
  const expired = allPrepaid.filter((item) => item.needsActivation || item.status === 'Expired' || item.status === 'Expire' || item.status === 'Isolir' || item.status === 'Nonaktif' || getRemainingDays(item.tempo) < 0);
  const soon = allPrepaid.filter((item) => {
    const days = getRemainingDays(item.tempo);
    return !item.needsActivation && days >= 0 && days <= 3;
  });

  setText('prepaidTotal', allPrepaid.length);
  setText('prepaidActiveTotal', active.length);
  setText('prepaidExpiredTotal', expired.length);
  setText('prepaidSoonTotal', soon.length);
}



function getDebtRows() {
  return pelanggan
    .map((item) => {
      const tagihanAmount = Number(item.totalTagihan || item.nilaiTagihan || item.tagihan || item.hargaTagihan || item.tunggakanAwal || item.tunggakan || 0);
      const remaining = Number(item.tunggakan || 0);
      const paid = Math.max(0, tagihanAmount - remaining);
      const status = remaining > 0
        ? (String(item.status || '').toLowerCase().includes('sebagian') ? 'Bayar Sebagian' : 'Menunggak')
        : (String(item.status || '').toLowerCase().includes('menunggak') ? 'Belum Bayar' : 'Lunas');
      return { ...item, tagihanAmount: tagihanAmount || remaining, paidAmount: paid, remainingDebt: remaining, debtStatus: status };
    })
    .filter((item) => item.remainingDebt > 0 || ['Menunggak', 'Bayar Sebagian', 'Belum Bayar'].includes(item.debtStatus));
}

function renderTunggakan() {
  const tbody = document.getElementById('debtTable');
  if (!tbody) return;

  const keyword = (searchDebt?.value || '').toLowerCase();
  const typeValue = filterDebtType?.value || '';
  const statusValue = filterDebtStatus?.value || '';
  const rows = getDebtRows().filter((item) => {
    const joined = `${item.nama} ${item.username} ${item.tipe} ${item.paket} ${item.debtStatus} ${item.remainingDebt}`.toLowerCase();
    return joined.includes(keyword)
      && (!typeValue || item.tipe === typeValue)
      && (!statusValue || item.debtStatus === statusValue || (statusValue === 'Belum Bayar' && item.debtStatus === 'Menunggak'));
  });

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:#64748b;padding:28px">Belum ada tunggakan.</td></tr>`;
  } else {
    tbody.innerHTML = rows.map((item) => {
      const actions = [];
      actions.push(`<button class="action-btn icon-only success" title="Lunas" aria-label="Lunas" onclick="openPrepaidDebt('${item.id}', 'payDebt')">✅</button>`);
      actions.push(`<button class="action-btn icon-only warning" title="Bayar Sebagian" aria-label="Bayar Sebagian" onclick="openPrepaidDebt('${item.id}', 'partial')">💸</button>`);
      actions.push(`<button class="action-btn icon-only whatsapp" title="Notifikasi WA Tunggakan" aria-label="Notifikasi WA Tunggakan" onclick="kirimNotifikasiWaTunggakan('${item.id}')">📲</button>`);
      return `
        <tr>
          <td><div class="customer-name"><b>${escapeHtml(item.nama)}</b><small>${escapeHtml(item.hp || item.phone || item.alamat || '-')}</small></div></td>
          <td>${escapeHtml(item.username || '-')}</td>
          <td><span class="billing ${(item.tipe || '').toLowerCase()}">${escapeHtml(item.tipe || '-')}</span></td>
          <td>${escapeHtml(item.paket || item.keterangan || '-')}</td>
          <td><b>${formatRupiah(item.tagihanAmount || item.remainingDebt)}</b></td>
          <td>${item.paidAmount > 0 ? formatRupiah(item.paidAmount) : '-'}</td>
          <td><b>${formatRupiah(item.remainingDebt)}</b></td>
          <td><span class="status ${statusClass(item.debtStatus)}">${escapeHtml(item.debtStatus)}</span></td>
          <td><div class="action-group">${actions.join('')}</div></td>
        </tr>`;
    }).join('');
  }

  const all = getDebtRows();
  const unpaid = all.filter((item) => item.debtStatus === 'Menunggak' || item.debtStatus === 'Belum Bayar');
  const partial = all.filter((item) => item.debtStatus === 'Bayar Sebagian');
  const total = all.reduce((sum, item) => sum + Number(item.remainingDebt || 0), 0);
  setText('debtTotalCount', all.length);
  setText('debtUnpaidCount', unpaid.length);
  setText('debtPartialCount', partial.length);
  setText('debtTotalAmount', formatRupiah(total));
}

function tandaiLunasTunggakan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;
  if (!confirm(`Tandai tunggakan ${customer.nama} sudah lunas tanpa menambah pemasukan?`)) return;
  customer.tunggakan = 0;
  customer.status = customer.needsActivation ? 'Isolir / Nonaktif' : 'Aktif';
  savePelanggan();
  renderAll();
  showToast('Tunggakan ditandai lunas.');
}

function hapusTunggakan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;
  if (!confirm(`Hapus catatan tunggakan ${customer.nama}?`)) return;
  customer.tunggakan = 0;
  if (String(customer.status || '').toLowerCase().includes('menunggak') || String(customer.status || '').toLowerCase().includes('sebagian')) {
    customer.status = customer.needsActivation ? 'Isolir / Nonaktif' : 'Aktif';
  }
  savePelanggan();
  renderAll();
  showToast('Catatan tunggakan dihapus.');
}

function closePrepaidDebt() {
  prepaidDebtModal?.classList.add('hidden');
}

function openPrepaidDebt(id, mode = 'partial') {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const packageItem = getCustomerPackageItem(customer);
  const price = packagePrice(packageItem);
  const currentDebt = Number(customer.tunggakan || 0);
  const titleMap = {
    markDebt: 'Tandai Menunggak Prabayar',
    partial: 'Bayar Sebagian Prabayar',
    payDebt: 'Lunasi Tunggakan Prabayar',
    extensionPayment: 'Catat Pembayaran Prabayar',
    postpaidPayment: 'Catat Pembayaran Pascabayar'
  };
  const subtitleMap = {
    markDebt: 'Catat nominal tunggakan tanpa menambah pemasukan.',
    partial: 'Catat pembayaran sebagian ke sheet Pemasukan.',
    payDebt: 'Catat pembayaran pelunasan tunggakan ke sheet Pemasukan. Setelah lunas, data otomatis hilang dari menu Tunggakan.',
    extensionPayment: 'Isi nominal yang benar-benar dibayar pelanggan. Bisa penuh, sebagian, atau ditunda.',
    postpaidPayment: 'Isi nominal dan pilih uang masuk lewat Tunai, Transfer BRI, atau DANA. Command MikroTik belum dikirim sampai Aktivasi Ulang.'
  };

  document.getElementById('prepaidDebtCustomerId').value = id;
  document.getElementById('prepaidDebtMode').value = mode;
  document.getElementById('prepaidDebtTitle').textContent = titleMap[mode] || 'Pembayaran Prabayar';
  document.getElementById('prepaidDebtSubtitle').textContent = subtitleMap[mode] || '';
  document.getElementById('prepaidDebtDate').value = todayDate();
  document.getElementById('prepaidDebtAmount').value = mode === 'payDebt'
    ? (currentDebt || price || 0)
    : (mode === 'markDebt' ? (currentDebt || price || 0) : ((mode === 'extensionPayment' || mode === 'postpaidPayment') ? (price || 0) : ''));
  document.getElementById('prepaidDebtNote').value = '';
  renderPaymentMethodOptions();
  const methodSelect = document.getElementById('prepaidDebtMethod');
  if (methodSelect) methodSelect.value = activeCashAccounts().some((row) => cashAccountMethodValue(row) === 'Tunai') ? 'Tunai' : cashAccountMethodValue(activeCashAccounts()[0]);
  document.getElementById('savePrepaidDebtBtn').textContent = mode === 'markDebt' ? 'Simpan Tunggakan' : (mode === 'payDebt' ? 'Simpan Lunas' : 'Simpan Pembayaran');

  document.getElementById('prepaidDebtSummary').innerHTML = `
    <b>${escapeHtml(customer.nama)} • ${escapeHtml(customer.username)}</b>
    <span>Paket: ${escapeHtml(customer.paket || packageName(packageItem) || '-')} • Harga acuan: ${formatRupiah(price)} • Sisa tunggakan: ${formatRupiah(currentDebt)}</span>
  `;

  prepaidDebtModal?.classList.remove('hidden');
  setTimeout(() => document.getElementById('prepaidDebtAmount')?.focus(), 80);
}

async function submitPrepaidDebt(event) {
  event.preventDefault();

  const id = document.getElementById('prepaidDebtCustomerId').value;
  const mode = document.getElementById('prepaidDebtMode').value;
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const amount = Number(document.getElementById('prepaidDebtAmount').value || 0);
  const date = document.getElementById('prepaidDebtDate').value || todayDate();
  const note = document.getElementById('prepaidDebtNote').value.trim();
  const method = document.getElementById('prepaidDebtMethod')?.value || 'Tunai';
  const packageItem = getCustomerPackageItem(customer);
  const packageAmount = packagePrice(packageItem);
  const currentDebt = Number(customer.tunggakan || 0);

  if (amount <= 0) return alert('Nominal harus lebih dari 0.');

  if (mode === 'markDebt') {
    customer.tunggakan = amount;
    customer.tunggakanAwal = amount;
    customer.status = 'Menunggak';
    savePelanggan();
    closePrepaidDebt();
    renderAll();
    showToast(`${customer.nama} ditandai menunggak ${formatRupiah(amount)}.`);
    return;
  }

  if (!settings.appsScriptUrl) {
    goToPage('pengaturan');
    alert('URL Google Apps Script belum diisi. Isi dulu URL Web App agar pemasukan masuk ke sheet.');
    return;
  }

  if (mode === 'postpaidPayment') {
    let invoice = getPostpaidInvoice(customer.id);
    const willCreateInvoice = !invoice;
    if (!invoice) invoice = createPostpaidInvoice(customer, packageItem);

    const income = createPostpaidPayment(customer, packageItem, invoice, {
      amount,
      date,
      method,
      note
    });

    if (willCreateInvoice) tagihan.unshift(invoice);
    invoice.status = 'Lunas';
    customer.status = 'Isolir / Nonaktif';
    customer.needsActivation = true;

    pembayaran = pembayaran.filter((item) => item.id !== income.id);
    pembayaran.unshift(income);
    pemasukan = pemasukan.filter((item) => item.id !== income.id);
    pemasukan.unshift(income);

    saveTagihan();
    savePelanggan();
    savePembayaran();
    savePemasukan();
    addActivityLog('Pembayaran Pascabayar', `${customer.nama} ${formatRupiah(amount)} via ${method}`, { pelangganId: customer.id, username: customer.username, amount, method });
    closePrepaidDebt();
    renderAll();
    goToPage('pascabayar');

    syncPemasukanToGoogleSheet(income, { silent: true }).catch((error) => {
      console.error(error);
      showToast('Pemasukan pascabayar belum masuk Google Sheet. Periksa koneksi/Apps Script.');
    });

    showToast(`Pembayaran ${customer.nama} tersimpan. Aksi sekarang menjadi Aktivasi Ulang.`);
    return;
  }

  const income = createPrepaidDebtIncome(customer, amount, date, mode, note, packageItem, method);
  const baseDebt = currentDebt > 0 ? currentDebt : (Number(customer.tunggakanAwal || 0) || packageAmount);
  const remaining = Math.max(0, baseDebt - amount);

  // Simpan lokal dulu supaya terasa cepat, lalu sync ke sheet Pemasukan.
  pembayaran = pembayaran.filter((item) => item.id !== income.id);
  pembayaran.unshift(income);
  pemasukan = pemasukan.filter((item) => item.id !== income.id);
  pemasukan.unshift(income);

  if (!customer.tunggakanAwal && baseDebt > 0) customer.tunggakanAwal = baseDebt;

  if (mode === 'extensionPayment') {
    customer.tunggakan = remaining;
    if (remaining > 0) {
      customer.status = 'Bayar Sebagian';
      customer.needsActivation = false;
    } else {
      customer.status = 'Aktif';
      customer.needsActivation = false;
    }
  } else {
    const wasWaitingActivation = !!customer.needsActivation || ['Expired', 'Expire', 'Isolir', 'Nonaktif', 'Isolir / Nonaktif'].includes(customer.status);
    customer.tunggakan = remaining;
    if (remaining > 0) {
      customer.status = 'Bayar Sebagian';
      customer.needsActivation = wasWaitingActivation;
    } else {
      customer.status = wasWaitingActivation ? 'Isolir / Nonaktif' : 'Aktif';
      customer.needsActivation = wasWaitingActivation;
    }
  }

  if (remaining <= 0) customer.tunggakanAwal = 0;
  savePelanggan();
  savePembayaran();
  savePemasukan();
  closePrepaidDebt();
  renderAll();

  syncPemasukanToGoogleSheet(income, { silent: true }).catch((error) => {
    console.error(error);
    showToast('Pemasukan prabayar belum masuk Google Sheet. Periksa koneksi/Apps Script.');
  });

  if (mode === 'extensionPayment') {
    if (remaining > 0) {
      showToast(`Pembayaran prabayar tersimpan. Sisa yang belum dibayar ${formatRupiah(remaining)}.`);
    } else {
      showToast('Pembayaran prabayar lunas dan masuk ke sheet Pemasukan.');
    }
    await tawarkanWaInternetAktif(customer, income);
    return;
  }

  if (remaining > 0) {
    showToast(`Pembayaran sebagian tersimpan. Sisa tunggakan ${formatRupiah(remaining)}.`);
  } else {
    showToast(`Tunggakan lunas. Aksi berubah menjadi Aktivasi Ulang.`);
  }
}

function createPrepaidDebtIncome(customer, amount, date, mode, note, packageItem, method = 'Tunai') {
  const ymd = String(date || todayDate()).replaceAll('-', '');
  const next = String(pembayaran.length + 1).padStart(4, '0');
  const sumber = mode === 'payDebt'
    ? 'Bayar Tunggakan Prabayar'
    : (mode === 'extensionPayment' ? 'Pembayaran Prabayar' : 'Bayar Sebagian Prabayar');
  return {
    id: crypto.randomUUID(),
    invoiceId: '',
    nomor: `PRB-TGK-${ymd}-${next}`,
    customerId: customer.id,
    customerName: customer.nama,
    username: customer.username || '',
    paket: customer.paket || packageName(packageItem) || '',
    type: 'Prabayar',
    sumber,
    kategori: 'Prabayar',
    amount,
    method,
    metode: method,
    date,
    tanggal: date,
    note: note || sumber,
    keterangan: note || sumber
  };
}

function kirimNotifikasiWaPrabayar(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const phone = normalizePhone(customer.hp || customer.phone || '');
  if (!phone) return alert('Nomor WA pelanggan belum diisi. Lengkapi dulu nomor pelanggan di Data Pelanggan.');

  const expiredText = customer.tempo ? formatDateTime(customer.tempo) : '-';
  const message = applyTemplate(settings.waTemplateH1 || defaultSettings.waTemplateH1, {
    nama: customer.nama || '-',
    username: customer.username || '-',
    expired: expiredText,
    usaha: settings.businessName || 'Tandon Network'
  });
  addActivityLog('Kirim WA H-1', `${customer.nama} / ${customer.username || '-'}`, { pelangganId: customer.id, username: customer.username, expired: expiredText });

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}



async function tawarkanWaInternetAktif(customer, income = {}) {
  if (!customer) return;

  const phone = normalizePhone(customer.hp || customer.phone || '');
  if (!phone) {
    await openPremiumAlert({
      title: 'Nomor WhatsApp Belum Ada',
      text: 'Pembayaran sudah tersimpan, tapi WA internet aktif belum bisa dikirim karena nomor pelanggan belum diisi di Data Pelanggan.',
      yesText: 'Mengerti'
    });
    return;
  }

  const expiredText = customer.tempo ? formatDateTimeExact(customer.tempo) : '-';
  const paketText = customer.paket || packageName(getCustomerPackageItem(customer)) || '-';
  const amount = Number(income.amount || income.jumlah || 0);
  const method = income.method || income.metode || '-';
  const confirmed = await openPremiumConfirm({
    title: 'Kirim WA Internet Aktif?',
    text: 'Pembayaran sudah tersimpan. Kirim WhatsApp ke pelanggan bahwa internet sudah aktif?',
    details: [
      { label: 'Pelanggan', value: customer.nama || '-' },
      { label: 'Paket', value: paketText },
      { label: 'Dibayar', value: amount ? `${formatRupiah(amount)} via ${method}` : '-' },
      { label: 'Expired', value: expiredText }
    ],
    noteTitle: 'Isi WA',
    note: 'Template bisa diubah dari Pengaturan bagian Template WhatsApp.',
    yesText: 'Kirim WA Sekarang',
    noText: 'Nanti Saja'
  });

  if (!confirmed) return;

  const message = applyTemplate(settings.waTemplateAktif || defaultSettings.waTemplateAktif, {
    nama: customer.nama || '-',
    username: customer.username || '-',
    usaha: settings.businessName || 'Tandon Network',
    paket: paketText,
    expired: expiredText,
    aktif: customer.aktif ? formatDateTimeExact(customer.aktif) : '-',
    jumlah: amount ? formatRupiah(amount) : '-',
    metode: method
  });
  addActivityLog('Kirim WA Internet Aktif', `${customer.nama} / ${customer.username || '-'}`, { pelangganId: customer.id, username: customer.username, expired: expiredText, amount, method });
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function kirimNotifikasiWaTunggakan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;
  const phone = normalizePhone(customer.phone || customer.hp || customer.whatsapp || '');
  if (!phone) return alert('Nomor WhatsApp pelanggan belum diisi.');
  const remaining = Number(customer.tunggakan || 0);
  const total = Number(customer.tunggakanAwal || customer.totalTagihan || customer.tunggakan || 0);
  const paid = Math.max(0, total - remaining);
  const message = applyTemplate(settings.waTemplateTunggakan || defaultSettings.waTemplateTunggakan, {
    nama: customer.nama || '-',
    username: customer.username || '-',
    sudahDibayar: paid > 0 ? formatRupiah(paid) : '-',
    sisaTunggakan: formatRupiah(remaining),
    usaha: settings.businessName || 'Tandon Network'
  });
  addActivityLog('Kirim WA Tunggakan', `${customer.nama} / ${customer.username || '-'}`, { pelangganId: customer.id, username: customer.username, sisaTunggakan: remaining });
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}


function openExtendPrepaid(id, mode = 'payment') {
  currentExtendMode = mode;
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  document.getElementById('extendCustomerId').value = id;
  document.getElementById('extendCustomerInfo').textContent = `${customer.nama} • ${customer.username}`;
  const titleEl = document.querySelector('#extendModal h2');
  if (titleEl) titleEl.textContent = (mode === 'activationOnly') ? 'Aktivasi Ulang Pelanggan' : 'Perpanjang Masa Aktif';
  document.getElementById('extendNote').value = '';

  extendPackage.innerHTML = paket.map((item) => {
    const days = getPackageDays(item);
    return `<option value="${item.id}">${escapeHtml(packageName(item))} - ${formatRupiah(packagePrice(item))} - ${days} hari - profile ${escapeHtml(item.profile)}</option>`;
  }).join('');

  const selectedPackage = paket.find((item) => item.id === customer.packageId) ||
    paket.find((item) => packageName(item) === customer.paket) ||
    paket.find((item) => item.speed === customer.paket) ||
    paket[0];
  if (selectedPackage) extendPackage.value = selectedPackage.id;

  const now = new Date();
  extendStartDate.value = toDatetimeLocal(now);

  updateExtendExpiredPreview();
  extendModal.classList.remove('hidden');
}

function closeExtend() {
  extendModal.classList.add('hidden');
}

function updateExtendExpiredPreview() {
  if (!extendPackage || !extendStartDate || !extendExpiredDate) return;

  const packageItem = paket.find((item) => item.id === extendPackage.value);
  const days = getPackageDays(packageItem);
  const start = parseDatetimeLocal(extendStartDate.value);

  if (!start || !days) {
    extendExpiredDate.value = '';
    return;
  }

  const expired = addDaysToDate(start, days);
  extendExpiredDate.value = toDatetimeLocal(expired);
}


function openPremiumConfirm(options = {}) {
  if (!premiumConfirmModal) return Promise.resolve(window.confirm(options.text || 'Lanjutkan?'));

  const alertOnly = !!options.alertOnly;
  premiumConfirmModal.classList.toggle('alert-only', alertOnly);

  premiumConfirmTitle.textContent = options.title || 'Konfirmasi';
  premiumConfirmText.textContent = options.text || 'Apakah data akan dilanjutkan?';

  premiumConfirmDetails.innerHTML = (options.details || []).map((item) => `
    <div class="confirm-detail-row">
      <span>${escapeHtml(item.label)}</span>
      <b>${escapeHtml(item.value)}</b>
    </div>
  `).join('');

  const noteTitle = premiumConfirmModal.querySelector('.confirm-note b');
  const noteText = premiumConfirmModal.querySelector('.confirm-note span');
  if (noteTitle) noteTitle.textContent = options.noteTitle || 'Catatan';
  if (noteText) noteText.textContent = options.note || 'Pilih Ya untuk menyimpan data dan memasukkan command ke PendingCommand. Pilih Tidak untuk membatalkan.';

  premiumConfirmYes.textContent = options.yesText || (alertOnly ? 'Mengerti' : 'Ya');
  premiumConfirmNo.textContent = options.noText || 'Tidak';
  premiumConfirmNo.style.display = alertOnly ? 'none' : '';

  premiumConfirmModal.classList.remove('hidden');
  setTimeout(() => premiumConfirmYes.focus(), 80);

  return new Promise((resolve) => {
    premiumConfirmResolver = resolve;
  });
}

function openPremiumAlert(options = {}) {
  return openPremiumConfirm({
    ...options,
    alertOnly: true,
    yesText: options.yesText || 'Mengerti'
  });
}

function closePremiumConfirm(result = false) {
  if (!premiumConfirmModal) return;
  premiumConfirmModal.classList.add('hidden');

  if (premiumConfirmResolver) {
    premiumConfirmResolver(result);
    premiumConfirmResolver = null;
  }
}

premiumConfirmYes?.addEventListener('click', () => closePremiumConfirm(true));
premiumConfirmNo?.addEventListener('click', () => closePremiumConfirm(false));
premiumConfirmClose?.addEventListener('click', () => closePremiumConfirm(false));
premiumConfirmModal?.addEventListener('click', (event) => {
  if (event.target === premiumConfirmModal) closePremiumConfirm(false);
});

async function submitExtendPrepaid(event) {
  event.preventDefault();

  const customerId = document.getElementById('extendCustomerId').value;
  const customer = pelanggan.find((item) => item.id === customerId);
  const packageItem = paket.find((item) => item.id === extendPackage.value);

  if (!customer || !packageItem) return alert('Data pelanggan atau paket tidak ditemukan.');

  const start = parseDatetimeLocal(extendStartDate.value);
  const days = getPackageDays(packageItem);

  if (!start || !days) return alert('Tanggal start atau durasi paket tidak valid.');

  if (!settings.appsScriptUrl) {
    goToPage('pengaturan');
    alert('URL Google Apps Script belum diisi. Isi dulu URL Web App di menu Pengaturan agar command bisa langsung masuk ke sheet PendingCommand.');
    return;
  }

  const expired = addDaysToDate(start, days);
  const isActivationOnly = currentExtendMode === 'activationOnly';
  const customerType = customer.tipe === 'Pascabayar' ? 'Pascabayar' : 'Prabayar';

  // Untuk Prabayar dibuat sat-set: setelah tombol Simpan Perpanjangan,
  // modal perpanjangan langsung ditutup dan pertanyaan pembayaran langsung muncul.
  // Command tetap dikirim ke PendingCommand di background supaya operator tidak menunggu lama.
  if (isActivationOnly) {
    const confirmed = await openPremiumConfirm({
      title: 'Konfirmasi Aktivasi Ulang',
      text: 'Aktifkan ulang pelanggan dan lanjutkan command MikroTik?',
      details: [
        { label: 'Pelanggan', value: customer.nama },
        { label: 'Username', value: customer.username },
        { label: 'Paket', value: `${packageName(packageItem)} • ${formatRupiah(packagePrice(packageItem))}` },
        { label: 'Keuangan', value: 'Tidak menambah pemasukan' },
        { label: 'Masa aktif', value: `${formatDateTime(toDatetimeLocal(start))} s/d ${formatDateTime(toDatetimeLocal(expired))}` },
        { label: 'Command', value: 'ENABLE_USER' }
      ],
      yesText: 'Ya, Aktivasi & Command',
      noText: 'Tidak, Batalkan'
    });

    if (!confirmed) return;
  }

  customer.status = 'Aktif';
  customer.needsActivation = false;
  if (isActivationOnly) customer.tunggakan = 0;
  customer.packageId = packageItem.id;
  customer.paket = packageName(packageItem) || packageItem.speed;
  customer.aktif = toDatetimeLocal(start);
  customer.tempo = toDatetimeLocal(expired);

  const commandPromise = createCommand({
    action: 'ENABLE_USER',
    username: customer.username,
    profile: packageItem.profile,
    message: `${isActivationOnly ? 'Aktivasi ulang' : (customerType === 'Pascabayar' ? 'Aktivasi ulang' : 'Perpanjang')} ${customer.nama} ${packageName(packageItem)} ${getPackageDays(packageItem)} HARI sampai ${formatDateTime(customer.tempo)}`
  });

  savePelanggan();
  savePembayaran();
  savePemasukan();
  closeExtend();
  currentExtendMode = 'payment';
  renderAll();
  goToPage(customer.tipe === 'Pascabayar' ? 'pascabayar' : 'prabayar');

  // Validasi command tetap dipantau, tetapi tidak menahan popup pembayaran.
  commandPromise.then((commandResult) => {
    if (!commandResult?.syncResult?.ok) {
      openPremiumAlert({
        title: 'Command Belum Masuk Sheet',
        text: commandResult?.syncResult?.message || 'Periksa URL Apps Script dan koneksi internet. Data lokal sudah tersimpan, tetapi command belum berhasil masuk ke Google Sheet PendingCommand.',
        yesText: 'Mengerti'
      });
    }
  }).catch((error) => {
    console.error(error);
    openPremiumAlert({
      title: 'Command Gagal Diproses',
      text: error.message || 'Command belum berhasil masuk ke Google Sheet PendingCommand.',
      yesText: 'Mengerti'
    });
  });

  if (!isActivationOnly && customerType === 'Prabayar') {
    const shouldRecordPayment = await openPremiumConfirm({
      title: 'Catat Pembayaran Prabayar?',
      text: 'Masa aktif sudah disimpan. Command sedang masuk ke PendingCommand. Apakah pembayaran pelanggan ingin langsung dicatat?',
      details: [
        { label: 'Pelanggan', value: customer.nama },
        { label: 'Paket', value: `${packageName(packageItem)} • ${formatRupiah(packagePrice(packageItem))}` },
        { label: 'Catatan', value: 'Pilih Ya untuk isi nominal bayar. Bisa penuh atau sebagian. Pilih Belum Bayar kalau belum bayar.' }
      ],
      yesText: 'Ya, Isi Pembayaran',
      noText: 'Belum Bayar'
    });

    if (shouldRecordPayment) {
      openPrepaidDebt(customer.id, 'extensionPayment');
    } else {
      const debtAmount = packagePrice(packageItem);
      customer.tunggakan = debtAmount;
      customer.tunggakanAwal = debtAmount;
      customer.status = 'Menunggak';
      customer.needsActivation = false;
      savePelanggan();
      renderAll();
      showToast(`${customer.nama} masuk menu Tunggakan ${formatRupiah(debtAmount)}. Aksi Prabayar dikosongkan sampai lunas.`);
    }
    return;
  }

  if (isActivationOnly) {
    // Aktivasi ulang dibuat sat-set: jangan tunggu hasil sync command.
    // Form konfirmasi langsung berganti ke popup WA aktif, sementara command tetap dipantau di background.
    showToast(`Aktivasi ${customer.nama} disimpan. Command ENABLE_USER sedang masuk ke PendingCommand.`);
    tawarkanWaInternetAktif(customer, {
      amount: 0,
      method: 'Aktivasi Ulang',
      note: 'WA aktif setelah aktivasi ulang'
    });
    return;
  }

  const commandResult = await commandPromise;
  if (!commandResult?.syncResult?.ok) return;

  showToast(`Aktivasi ${customer.nama} disimpan dan command ENABLE_USER masuk ke PendingCommand.`);
}

function createPrepaidExtensionPayment(customer, packageItem, startDate, expiredDate) {
  const datePart = toDatetimeLocal(startDate).slice(0, 10);
  const ymd = datePart.replaceAll('-', '');
  const next = String(pembayaran.length + 1).padStart(4, '0');
  const customerType = customer.tipe === 'Pascabayar' ? 'Pascabayar' : 'Prabayar';
  const prefix = customerType === 'Pascabayar' ? 'PSC' : 'PRB';
  const sumber = customerType === 'Pascabayar' ? 'Aktivasi Ulang Pascabayar' : 'Perpanjangan Prabayar';
  const noteText = `${sumber} ${packageName(packageItem)} ${getPackageDays(packageItem)} hari sampai ${formatDateTime(toDatetimeLocal(expiredDate))}`;

  return {
    id: crypto.randomUUID(),
    invoiceId: '',
    nomor: `${prefix}-${ymd}-${next}`,
    customerId: customer.id,
    customerName: customer.nama,
    username: customer.username || '',
    paket: packageName(packageItem),
    type: customerType,
    sumber,
    kategori: customerType,
    amount: packagePrice(packageItem),
    method: 'Tunai',
    metode: 'Tunai',
    date: datePart,
    tanggal: datePart,
    note: noteText,
    keterangan: noteText
  };
}

function getPackageDays(packageItem) {
  if (!packageItem) return 0;

  const text = `${packageName(packageItem)} ${packageItem.profile || ''} ${packageNote(packageItem)} ${packageBilling(packageItem)}`.toLowerCase();
  const match = text.match(/(\d+)\s*(hari|day)/i);

  if (match) return Number(match[1]);

  if (text.includes('15')) return 15;
  if (text.includes('30')) return 30;
  if (text.includes('7')) return 7;

  return Number(settings.prepaidDays || 30);
}

function getRemainingDays(dateValue) {
  if (!dateValue) return -9999;

  const now = new Date();
  const due = parseAnyDate(dateValue);
  if (!due) return -9999;

  const diff = due.getTime() - now.getTime();
  return Math.ceil(diff / 86400000);
}

function renderRemainingDays(days) {
  if (days === -9999) return `<span class="day-badge empty">Belum diisi</span>`;
  if (days < 0) return `<span class="day-badge expired">Expired ${Math.abs(days)} hari</span>`;
  if (days === 0) return `<span class="day-badge soon">Expired hari ini</span>`;
  if (days <= 3) return `<span class="day-badge soon">Sisa ${days} hari</span>`;
  return `<span class="day-badge active">Sisa ${days} hari</span>`;
}

function getRemainingMs(dateValue) {
  const due = parseAnyDate(dateValue);
  if (!due) return null;
  return due.getTime() - Date.now();
}

function formatRemainingDuration(ms) {
  if (ms === null) return 'Belum diisi';
  if (ms <= 0) return 'Expired';

  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (num) => String(num).padStart(2, '0');

  if (days > 0) return `Sisa ${days} hari ${pad(hours)} jam ${pad(minutes)} menit ${pad(seconds)} detik`;
  if (hours > 0) return `${pad(hours)} jam ${pad(minutes)} menit ${pad(seconds)} detik`;
  if (minutes > 0) return `${pad(minutes)} menit ${pad(seconds)} detik`;
  return `${pad(seconds)} detik`;
}

function countdownClass(ms) {
  if (ms === null) return 'empty';
  if (ms <= 0) return 'expired';
  if (ms <= 86400000) return 'soon';
  return 'active';
}

function renderRemainingCountdown(dateValue) {
  const due = parseAnyDate(dateValue);
  if (!due) return `<span class="day-badge empty">Belum diisi</span>`;

  const ms = due.getTime() - Date.now();
  const cls = countdownClass(ms);
  return `<span class="day-badge ${cls} countdown-badge" data-countdown-ts="${due.getTime()}">${formatRemainingDuration(ms)}</span>`;
}

let countdownTimer = null;
function updateCountdownBadges() {
  document.querySelectorAll('[data-countdown-ts]').forEach((element) => {
    const ts = Number(element.dataset.countdownTs || 0);
    if (!ts) return;
    const ms = ts - Date.now();
    element.textContent = formatRemainingDuration(ms);
    element.classList.remove('active', 'soon', 'expired', 'empty');
    element.classList.add(countdownClass(ms));
  });
}

function startCountdownTimer() {
  if (countdownTimer) return;
  updateCountdownBadges();
  countdownTimer = setInterval(updateCountdownBadges, 1000);
}

function formatDateTimeExact(value) {
  const date = parseAnyDate(value);
  if (!date) return value ? String(value) : '-';

  const pad = (num) => String(num).padStart(2, '0');
  const tanggal = `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;
  const waktu = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  return `${tanggal} | ${waktu}`;
}

function renderDateTime(value) {
  if (!value) return '-';

  const text = formatDateTimeExact(value);
  if (text === String(value) && !parseAnyDate(value)) return escapeHtml(value);

  const [tanggal, waktu] = text.split(' | ');
  return `
    <span class="datetime-stack">
      <b>${tanggal}</b>
      <small>${waktu}</small>
    </span>
  `;
}

function parseAnyDate(value) {
  if (!value) return null;
  const normalized = String(value).includes('T') ? String(value) : `${value}T23:59`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseDatetimeLocal(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toDatetimeLocal(date) {
  const pad = (num) => String(num).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function addDaysToDate(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + Number(days || 0));
  return next;
}


/* PASCABAYAR */
function renderPascabayar() {
  const tbody = document.getElementById('postpaidTable');
  if (!tbody) return;

  const keyword = (searchPostpaid?.value || '').toLowerCase();
  const statusValue = filterPostpaidStatus?.value || '';

  const rows = pelanggan
    .filter((item) => item.tipe === 'Pascabayar')
    .map((item) => {
      const isBreak = !!item.needsActivation;
      const tempo = isBreak ? '' : (item.tempo || defaultDueDateBySettings());
      return {
        ...item,
        dueDate: tempo,
        remainingDays: isBreak ? null : getRemainingDays(tempo),
        displayStatus: isBreak ? 'Isolir / Nonaktif' : item.status,
        invoice: getPostpaidInvoice(item.id)
      };
    })
    .filter((item) => {
      const displayStatus = item.displayStatus || item.status || '';
      const joined = `${item.nama} ${item.username} ${item.paket} ${item.status} ${displayStatus} ${item.dueDate}`.toLowerCase();
      const matchStatus = !statusValue || item.status === statusValue || displayStatus.includes(statusValue);
      return joined.includes(keyword) && matchStatus;
    })
    .sort((a, b) => a.remainingDays - b.remainingDays);

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:#64748b;padding:28px">Belum ada pelanggan pascabayar.</td></tr>`;
  } else {
    tbody.innerHTML = rows.map((item) => `
      <tr>
        <td><div class="customer-name"><b>${escapeHtml(item.nama)}</b><small>${escapeHtml(item.hp || item.phone || '-')}</small></div></td>
        <td>${escapeHtml(item.username)}</td>
        <td>${escapeHtml(item.paket || '-')}</td>
        <td>${item.needsActivation ? '-' : renderDateTime(item.aktif || item.tanggalAktif)}</td>
        <td>${item.needsActivation ? '-' : renderDateTime(item.dueDate)}</td>
        <td>${item.needsActivation ? '-' : renderRemainingCountdown(item.dueDate)}</td>
        <td><span class="status ${statusClass(item.displayStatus)}">${escapeHtml(item.displayStatus)}</span></td>
        <td>
          <div class="action-group">
            ${item.needsActivation
              ? `<button class="action-btn icon-only success" title="Aktivasi Ulang" aria-label="Aktivasi Ulang" onclick="aktifkanPelangganPremium('${item.id}')">🔁</button>`
              : `<button class="action-btn icon-only success" title="Bayar" aria-label="Bayar" onclick="bayarPascabayar('${item.id}')">💵</button><button class="action-btn icon-only whatsapp" title="Kirim Notifikasi WA" aria-label="Kirim Notifikasi WA" onclick="kirimNotifikasiWaPascabayar('${item.id}')">📲</button>`}
          </div>
        </td>
      </tr>
    `).join('');
  }

  const allPostpaid = pelanggan.filter((item) => item.tipe === 'Pascabayar');
  const active = allPostpaid.filter((item) => item.status === 'Aktif' && !item.needsActivation);
  const blocked = allPostpaid.filter((item) => item.needsActivation || ['Isolir', 'Expired', 'Expire', 'Nonaktif', 'Isolir / Nonaktif'].includes(item.status));
  const postpaidUsernames = new Set(allPostpaid.map((customer) => String(customer.username || '').toLowerCase()).filter(Boolean));
  const pending = pendingCommands.filter((item) => String(item.status || '').toUpperCase() === 'PENDING' && postpaidUsernames.has(String(item.username || '').toLowerCase()));

  setText('postpaidTotal', allPostpaid.length);
  setText('postpaidActiveTotal', active.length);
  setText('postpaidBlockedTotal', blocked.length);
  setText('postpaidCommandPending', pending.length);
}

function getPostpaidInvoice(customerId, month = currentMonth()) {
  return tagihan.find((item) => item.customerId === customerId && item.type === 'Pascabayar' && item.period === month) || null;
}

function getCustomerPackageItem(customer) {
  return paket.find((item) => item.id === customer.packageId) ||
    paket.find((item) => packageName(item) === customer.paket) ||
    paket.find((item) => item.profile === customer.paket) ||
    paket.find((item) => item.speed === customer.paket) ||
    getCustomerDayPackage(customer?.paket) ||
    paket[0] || null;
}

function getCustomerPackagePrice(customer) {
  return packagePrice(getCustomerPackageItem(customer));
}

function isPastDue(dateValue) {
  if (!dateValue) return false;
  return String(dateValue).slice(0, 10) < todayDate();
}

async function buatTagihanPascabayar(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const existing = getPostpaidInvoice(customer.id);
  if (existing) {
    showToast('Tagihan bulan ini sudah ada');
    renderPascabayar();
    return;
  }

  const packageItem = getCustomerPackageItem(customer);
  const amount = packagePrice(packageItem);

  if (amount <= 0) return alert('Harga paket pelanggan belum valid. Periksa menu Paket Internet.');

  const confirmed = await openPremiumConfirm({
    title: 'Konfirmasi Buat Tagihan',
    text: 'Buat tagihan pascabayar bulan ini untuk pelanggan ini?',
    details: [
      { label: 'Pelanggan', value: customer.nama },
      { label: 'Username', value: customer.username },
      { label: 'Paket', value: `${packageName(packageItem)} • ${formatRupiah(amount)}` },
      { label: 'Periode', value: formatPeriode(currentMonth()) },
      { label: 'Jatuh Tempo', value: formatTanggal(customer.tempo || defaultDueDateBySettings()) }
    ],
    yesText: 'Ya, Buat Tagihan',
    noText: 'Tidak'
  });

  if (!confirmed) return;

  const invoice = createPostpaidInvoice(customer, packageItem);
  tagihan.unshift(invoice);
  saveTagihan();
  renderAll();
  showToast(`Tagihan ${customer.nama} berhasil dibuat`);
}

function createPostpaidInvoice(customer, packageItem = getCustomerPackageItem(customer)) {
  return {
    id: crypto.randomUUID(),
    nomor: createInvoiceNumber(),
    customerId: customer.id,
    customerName: customer.nama,
    type: 'Pascabayar',
    period: currentMonth(),
    dueDate: customer.tempo || defaultDueDateBySettings(),
    amount: packagePrice(packageItem),
    status: 'Belum Bayar',
    note: `Tagihan pascabayar ${formatPeriode(currentMonth())}`,
    createdAt: new Date().toISOString()
  };
}

async function bayarPascabayar(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const packageItem = getCustomerPackageItem(customer);
  const amount = packagePrice(packageItem);
  if (amount <= 0) return alert('Harga paket pelanggan belum valid. Periksa menu Paket Internet.');

  let invoice = getPostpaidInvoice(customer.id);
  const willCreateInvoice = !invoice;
  if (!invoice) invoice = createPostpaidInvoice(customer, packageItem);

  const confirmed = await openPremiumConfirm({
    title: 'Konfirmasi Pembayaran Pascabayar',
    text: 'Lanjut ke form catat pembayaran untuk memilih nominal dan metode pembayaran?',
    details: [
      { label: 'Pelanggan', value: customer.nama },
      { label: 'Username', value: customer.username },
      { label: 'Paket', value: `${packageName(packageItem)} • ${formatRupiah(amount)}` },
      { label: 'Tagihan', value: willCreateInvoice ? 'Dibuat otomatis bulan ini' : invoice.nomor },
      { label: 'Keuangan', value: 'Belum disimpan, isi metode pembayaran dulu' },
      { label: 'Command', value: 'Belum dikirim, menunggu Aktivasi Ulang' }
    ],
    yesText: 'Ya, Lanjut Catat Bayar',
    noText: 'Tidak, Batalkan'
  });

  if (!confirmed) return;

  openPrepaidDebt(customer.id, 'postpaidPayment');
}

function createPostpaidPayment(customer, packageItem, invoice, options = {}) {
  const datePart = options.date || todayDate();
  const method = options.method || 'Tunai';
  const amount = Number(options.amount || packagePrice(packageItem) || 0);
  const noteText = options.note || `Pembayaran pascabayar ${formatPeriode(invoice.period || currentMonth())}`;
  const ymd = String(datePart).replaceAll('-', '');
  const next = String(pembayaran.length + 1).padStart(4, '0');
  return {
    id: crypto.randomUUID(),
    invoiceId: invoice.id,
    nomor: invoice.nomor || `PSC-${ymd}-${next}`,
    customerId: customer.id,
    customerName: customer.nama,
    username: customer.username || '',
    paket: packageName(packageItem),
    type: 'Pascabayar',
    sumber: 'Pembayaran Pascabayar',
    kategori: 'Pascabayar',
    amount,
    method,
    metode: method,
    date: datePart,
    tanggal: datePart,
    note: noteText,
    keterangan: noteText
  };
}


function kirimNotifikasiWaPascabayar(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const phone = normalizePhone(customer.hp || customer.phone || '');
  if (!phone) {
    alert('Nomor WA pelanggan belum diisi. Lengkapi dulu nomor pelanggan di Data Pelanggan.');
    return;
  }

  const packageItem = getCustomerPackageItem(customer);
  const amount = packagePrice(packageItem);
  const tempo = customer.tempo || defaultDueDateBySettings();
  const business = settings.businessName || 'Tandon Network';
  const message = applyTemplate(settings.waTemplatePascabayar || defaultSettings.waTemplatePascabayar, {
    nama: customer.nama || '-',
    username: customer.username || '-',
    usaha: business,
    paket: packageName(packageItem) || customer.paket || '-',
    jumlah: formatRupiah(amount),
    tempo: renderDateTimePlain(tempo)
  });
  addActivityLog('Kirim WA Pascabayar', `${customer.nama} / ${customer.username || '-'}`, { pelangganId: customer.id, username: customer.username, jumlah: amount, tempo });

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function normalizePhone(value) {
  let phone = String(value || '').replace(/\D/g, '');
  if (!phone) return '';
  if (phone.startsWith('0')) phone = '62' + phone.slice(1);
  if (phone.startsWith('8')) phone = '62' + phone;
  return phone;
}

function renderDateTimePlain(value) {
  if (!value) return '-';
  return renderDateTime(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function aktifkanPelangganPremium(id) {
  // Aktivasi ulang Pascabayar disamakan dengan alur Perpanjang Prabayar:
  // pilih paket, tanggal start/expired, lalu simpan pemasukan + command ENABLE_USER.
  openExtendPrepaid(id, 'activationOnly');
}

function generatePostpaidDueCommands() {
  // Disediakan untuk kompatibilitas tombol lama. Aksi massal tidak ditampilkan agar tidak salah isolir banyak pelanggan.
  renderPascabayar();
  showToast('Gunakan tombol Isolir per pelanggan agar lebih aman.');
}


/* ISOLIR & MIKROTIK COMMAND */
function renderIsolation() {
  const tbody = document.getElementById('isolationTable');
  if (!tbody) return;

  const keyword = (searchIsolation?.value || '').toLowerCase();
  const statusValue = filterIsolationStatus?.value || '';
  const typeValue = filterIsolationType?.value || '';

  const filtered = pelanggan.filter((item) => {
    const joined = `${item.nama} ${item.username} ${item.tipe} ${item.paket} ${item.status} ${item.tempo}`.toLowerCase();
    return joined.includes(keyword) && (!statusValue || item.status === statusValue) && (!typeValue || item.tipe === typeValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#64748b;padding:28px">Belum ada data pelanggan yang cocok.</td></tr>`;
  } else {
    tbody.innerHTML = filtered.map((item) => {
      const customerPackage = paket.find((row) => row.speed === item.paket);
      const profile = customerPackage?.profile || item.paket;
      return `
        <tr>
          <td><div class="customer-name"><b>${escapeHtml(item.nama)}</b><small>${escapeHtml(item.alamat || '-')}</small></div></td>
          <td>${escapeHtml(item.username)}</td>
          <td><span class="billing ${item.tipe.toLowerCase()}">${escapeHtml(item.tipe)}</span></td>
          <td>${escapeHtml(item.paket || '-')}</td>
          <td><span class="status ${statusClass(item.status)}">${escapeHtml(item.status)}</span></td>
          <td>${item.tempo ? formatTanggal(item.tempo) : '-'}</td>
          <td>
            <div class="action-group">
              <button class="action-btn warning" onclick="isolirPelanggan('${item.id}')">Isolir</button>
              <button class="action-btn success" onclick="aktifkanPelanggan('${item.id}')">Aktifkan</button>
              <button class="action-btn dark" onclick="buatCommandGantiProfile('${item.id}', '${escapeHtml(profile)}')">Sync Profile</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  const activeTotal = pelanggan.filter((item) => item.status === 'Aktif').length;
  const blockedTotal = pelanggan.filter((item) => item.status === 'Isolir' || item.status === 'Expired').length;
  const commandPending = pendingCommands.filter((item) => item.status === 'PENDING').length;

  setText('isoActiveTotal', activeTotal);
  setText('isoBlockedTotal', blockedTotal);
  setText('isoCommandPending', commandPending);
}

async function isolirPelanggan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  const profile = getCustomerProfile(customer);
  const nextStatus = customer.tipe === 'Prabayar' ? 'Expired' : 'Isolir';

  const confirmed = await openPremiumConfirm({
    title: 'Konfirmasi Isolir Pelanggan',
    text: 'Apakah pelanggan ini akan diisolir dan command dikirim ke MikroTik?',
    details: [
      { label: 'Pelanggan', value: customer.nama },
      { label: 'Username', value: customer.username },
      { label: 'Tipe', value: customer.tipe },
      { label: 'Paket/Profile', value: `${customer.paket || '-'} • ${profile || '-'}` },
      { label: 'Status Baru', value: nextStatus },
      { label: 'Command', value: 'DISABLE_USER' }
    ],
    yesText: 'Ya, Isolir & Command',
    noText: 'Tidak, Batalkan'
  });

  if (!confirmed) return;

  if (!settings.appsScriptUrl) {
    goToPage('pengaturan');
    alert('URL Google Apps Script belum diisi. Isi dulu URL Web App di menu Pengaturan agar command bisa langsung masuk ke sheet PendingCommand.');
    return;
  }

  const commandResult = await createCommand({
    action: 'DISABLE_USER',
    username: customer.username,
    profile,
    message: `Isolir pelanggan ${customer.nama}`
  });

  if (!commandResult?.syncResult?.ok) {
    alert(`Data belum disimpan karena command isolir gagal masuk ke Google Sheet PendingCommand.\n\n${commandResult?.syncResult?.message || 'Periksa URL Apps Script dan koneksi internet.'}`);
    pendingCommands = pendingCommands.filter((item) => item.id !== commandResult?.id);
    saveCommands();
    renderAll();
    return;
  }

  customer.status = nextStatus;
  savePelanggan();
  renderAll();
  showToast(`Pelanggan ${customer.nama} diisolir. Command DISABLE_USER sudah masuk ke sheet PendingCommand.`);
}

function aktifkanPelanggan(id) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  customer.status = 'Aktif';
  if (customer.tipe === 'Prabayar') {
    const packageItem = paket.find((item) => item.speed === customer.paket) || paket[0];
    const start = new Date();
    const days = getPackageDays(packageItem);
    customer.aktif = toDatetimeLocal(start);
    customer.tempo = toDatetimeLocal(addDaysToDate(start, days));
  }

  createCommand({
    action: 'ENABLE_USER',
    username: customer.username,
    profile: getCustomerProfile(customer),
    message: `Aktifkan pelanggan ${customer.nama}`
  });

  savePelanggan();
  renderAll();
  showToast(`Command aktivasi dibuat untuk ${customer.nama}`);
}

function buatCommandGantiProfile(id, profile) {
  const customer = pelanggan.find((item) => item.id === id);
  if (!customer) return;

  createCommand({
    action: 'CHANGE_PROFILE',
    username: customer.username,
    profile: getCustomerProfile(customer) || profile,
    message: `Sinkron profile paket ${customer.nama}`
  });

  renderAll();
  showToast(`Command sync profile dibuat untuk ${customer.nama}`);
}

function generateDueCommands() {
  const today = todayDate();
  let count = 0;

  pelanggan.forEach((customer) => {
    const isDue = customer.tempo && customer.tempo < today;
    const isStillActive = customer.status === 'Aktif';

    if (isDue && isStillActive) {
      customer.status = customer.tipe === 'Prabayar' ? 'Expired' : 'Isolir';
      createCommand({
        action: 'DISABLE_USER',
        username: customer.username,
        profile: getCustomerProfile(customer),
        message: `Auto isolir karena tempo/expired ${customer.tempo}`
      });
      count++;
    }
  });

  savePelanggan();
  renderAll();
  showToast(count ? `${count} command isolir tempo dibuat` : 'Tidak ada pelanggan lewat tempo');
}

function createCommand({action, username, profile, message, pemasukan}) {
  const existing = pendingCommands.find((item) => {
    return item.status === 'PENDING' && item.action === action && item.username === username;
  });

  if (existing) {
    // Command lama yang masih PENDING wajib ditimpa dengan pilihan terbaru.
    // Contoh: awalnya 7 Day, lalu pelanggan pilih 15 Day, maka yang dikirim ke Sheet harus 15 Day.
    existing.createdAt = new Date().toISOString();
    existing.profile = profile || '';
    existing.message = message || '';
    existing.status = 'PENDING';

    if (pemasukan) {
      const incomeId = existing.pemasukanId || `PM-${existing.id}`;
      existing.pemasukanId = incomeId;
      existing.pemasukan = {
        ...pemasukan,
        id: incomeId,
        commandId: existing.id
      };
    }

    saveCommands();

    return syncCommandToGoogleSheet(existing, { silent: true }).then((syncResult) => ({
      ...existing,
      syncResult,
      pemasukan: existing.pemasukan
    }));
  }

  const commandId = crypto.randomUUID();
  const command = {
    id: commandId,
    createdAt: new Date().toISOString(),
    action,
    username,
    profile: profile || '',
    status: 'PENDING',
    message: message || ''
  };

  if (pemasukan) {
    const incomeId = `PM-${commandId}`;
    command.pemasukanId = incomeId;
    command.pemasukan = {
      ...pemasukan,
      id: incomeId,
      commandId
    };
  }

  pendingCommands.unshift(command);
  addActivityLog('Tambah Command MikroTik', `${action} ${username}${profile ? ' -> ' + profile : ''}`, { commandId, action, username, profile });
  saveCommands();

  return syncCommandToGoogleSheet(command).then((syncResult) => ({
    ...command,
    syncResult,
    pemasukan: command.pemasukan
  }));
}

async function syncCommandToGoogleSheet(command, options = {}) {
  if (!command) return { ok: false, message: 'Command kosong' };

  const endpoint = settings.appsScriptUrl;
  if (!endpoint) {
    const message = 'URL Google Apps Script belum diisi di menu Pengaturan.';
    if (!options.silent) {
      showToast(message);
    }
    return { ok: false, message };
  }

  try {
    const result = await postToAppsScript(endpoint, {
      action: 'addCommand',
      command
    });

    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan command');

    if (!options.silent) {
      showToast('Command berhasil masuk ke Google Sheet PendingCommand');
    }

    return result;
  } catch (error) {
    console.error(error);
    const message = error.message || 'Gagal masuk Google Sheet PendingCommand';
    if (!options.silent) {
      showToast('Command gagal masuk ke Google Sheet PendingCommand');
    }
    return { ok: false, message };
  }
}

function renderCommands() {
  const tbody = document.getElementById('commandTable');
  if (!tbody) return;

  const keyword = (searchCommand?.value || '').toLowerCase();
  const statusValue = filterCommandStatus?.value || '';

  const filtered = pendingCommands.filter((item) => {
    const joined = `${item.createdAt} ${item.action} ${item.username} ${item.profile} ${item.status} ${item.message}`.toLowerCase();
    return joined.includes(keyword) && (!statusValue || item.status === statusValue);
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#64748b;padding:28px">Belum ada command MikroTik.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item) => `
    <tr>
      <td>${formatDateTime(item.createdAt)}</td>
      <td><b>${escapeHtml(item.action)}</b></td>
      <td>${escapeHtml(item.username)}</td>
      <td>${escapeHtml(item.profile || '-')}</td>
      <td><span class="command-badge ${item.status.toLowerCase()}">${escapeHtml(item.status)}</span></td>
      <td>${escapeHtml(item.message || '-')}</td>
      <td>
        <div class="action-group">
          <button class="action-btn success" onclick="markCommandDone('${item.id}')">DONE</button>
          <button class="action-btn danger" onclick="deleteCommand('${item.id}')">Hapus</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function markCommandDone(id) {
  const command = pendingCommands.find((item) => item.id === id);
  if (!command) return;

  command.status = 'DONE';
  command.message = command.message ? `${command.message} • selesai manual` : 'Selesai manual';
  saveCommands();
  renderAll();
}

function deleteCommand(id) {
  const command = pendingCommands.find((item) => item.id === id);
  if (!command) return;

  if (!confirm(`Hapus command ${command.action} untuk ${command.username}?`)) return;
  pendingCommands = pendingCommands.filter((item) => item.id !== id);
  saveCommands();
  renderAll();
}

function clearDoneCommands() {
  const doneCount = pendingCommands.filter((item) => item.status === 'DONE').length;
  if (!doneCount) return showToast('Tidak ada command DONE');

  if (!confirm(`Bersihkan ${doneCount} command DONE?`)) return;
  pendingCommands = pendingCommands.filter((item) => item.status !== 'DONE');
  saveCommands();
  renderAll();
}

function getCustomerProfile(customer) {
  const customerPackage = getCustomerPackageItem(customer);
  return customerPackage?.profile || customer?.paket || '';
}

function formatDateTime(value) {
  return formatDateTimeExact(value);
}




async function syncPemasukanToGoogleSheet(income, options = {}) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) {
    const message = 'URL Google Apps Script belum diisi di menu Pengaturan.';
    if (!options.silent) showToast(message);
    return { ok: false, message };
  }

  try {
    const result = await postToAppsScript(endpoint, {
      action: 'addPemasukan',
      pemasukan: income
    });

    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan pemasukan');

    if (!options.silent) {
      showToast('Pemasukan berhasil masuk ke Google Sheet Pemasukan');
    }

    return result;
  } catch (error) {
    console.error(error);
    const message = error.message || 'Gagal masuk Google Sheet Pemasukan';
    if (!options.silent) {
      showToast('Pemasukan gagal masuk ke Google Sheet');
    }
    return { ok: false, message };
  }
}

async function refreshPemasukanFromSheet(options = {}) {
  if (isRefreshingPemasukan && !options.force) return;

  if (!settings.appsScriptUrl) {
    pemasukan = [];
    savePemasukan();
    updateFinanceDashboard();
    renderLaporan();
    return;
  }

  isRefreshingPemasukan = true;

  try {
    const result = await postToAppsScript(settings.appsScriptUrl, {
      action: 'getPemasukan',
      t: Date.now()
    });

    if (result?.ok && Array.isArray(result.pemasukan || result.data)) {
      pemasukan = result.pemasukan || result.data || [];
      savePemasukan();
      updateFinanceDashboard();
      renderLaporan();
    }
  } catch (error) {
    console.warn('Gagal refresh sheet Pemasukan:', error);
  } finally {
    isRefreshingPemasukan = false;
  }
}

async function refreshPendingCommandsFromSheet(options = {}) {
  if (isRefreshingPendingCommands && !options.force) return;

  if (!settings.appsScriptUrl) {
    pendingCommands = [];
    saveCommands();
    renderCommands();
    renderPascabayar();
    return;
  }

  isRefreshingPendingCommands = true;

  try {
    const result = await postToAppsScript(settings.appsScriptUrl, {
      action: 'getPendingCommands',
      t: Date.now()
    });

    if (result?.ok && Array.isArray(result.pendingCommands || result.data)) {
      pendingCommands = result.pendingCommands || result.data || [];
      saveCommands();
      renderCommands();
      renderPascabayar();
      renderIsolation();
    }
  } catch (error) {
    console.warn('Gagal refresh sheet PendingCommand:', error);
  } finally {
    isRefreshingPendingCommands = false;
  }
}

function startSheetAutoRefresh() {
  stopSheetAutoRefresh();

  if (!settings.appsScriptUrl) return;

  refreshPemasukanFromSheet({ force: true });
  refreshPendingCommandsFromSheet({ force: true });

  sheetRefreshTimer = setInterval(() => {
    if (localStorage.getItem('tandon_login') === 'true' && !document.hidden) {
      refreshPemasukanFromSheet();
      refreshPendingCommandsFromSheet();
    }
  }, SHEET_REFRESH_INTERVAL_MS);
}

function stopSheetAutoRefresh() {
  if (sheetRefreshTimer) {
    clearInterval(sheetRefreshTimer);
    sheetRefreshTimer = null;
  }
}

window.addEventListener('focus', () => {
  if (localStorage.getItem('tandon_login') === 'true') {
    refreshPemasukanFromSheet({ force: true });
  }
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && localStorage.getItem('tandon_login') === 'true') {
    refreshPemasukanFromSheet({ force: true });
  }
});

/* GOOGLE SHEET SYNC */
async function pushToGoogleSheet() {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) {
    goToPage('pengaturan');
    alert('Isi dulu URL Google Apps Script di menu Pengaturan.');
    return;
  }

  setSyncLoading(true);

  try {
    const payload = {
      action: 'saveAll',
      data: {
        pelanggan,
        paket,
        tagihan,
        pembayaran,
        pemasukan,
        pengeluaran,
        aset,
        cashAccounts,
        cashAdjustments,
        pendingCommands,
        activityLogs,
        settings
      }
    };

    const result = await postToAppsScript(endpoint, payload);
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan data');

    showToast('Data berhasil dikirim ke Google Sheet');
  } catch (error) {
    console.error(error);
    alert(`Gagal kirim ke Google Sheet: ${error.message}`);
  } finally {
    setSyncLoading(false);
  }
}

async function pullFromGoogleSheet() {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) {
    goToPage('pengaturan');
    alert('Isi dulu URL Google Apps Script di menu Pengaturan.');
    return;
  }

  if (!confirm('Ambil data dari Google Sheet akan mengganti data lokal saat ini. Lanjutkan?')) return;

  setSyncLoading(true);

  try {
    const result = await postToAppsScript(endpoint, {action: 'getAll'});
    if (!result.ok) throw new Error(result.message || 'Gagal mengambil data');

    const data = result.data || {};
    pelanggan = Array.isArray(data.pelanggan) ? data.pelanggan : pelanggan;
    paket = Array.isArray(data.paket) ? data.paket : paket;
    tagihan = Array.isArray(data.tagihan) ? data.tagihan : tagihan;
    pembayaran = Array.isArray(data.pembayaran) ? data.pembayaran : pembayaran;
    pemasukan = Array.isArray(data.pemasukan) ? data.pemasukan : pemasukan;
    pengeluaran = Array.isArray(data.pengeluaran) ? data.pengeluaran : pengeluaran;
    aset = Array.isArray(data.aset) ? data.aset : aset;
    cashAccounts = Array.isArray(data.cashAccounts) ? data.cashAccounts : cashAccounts;
    cashAdjustments = Array.isArray(data.cashAdjustments) ? data.cashAdjustments : cashAdjustments;
    pendingCommands = Array.isArray(data.pendingCommands) ? data.pendingCommands : pendingCommands;
    activityLogs = Array.isArray(data.activityLogs) ? data.activityLogs : activityLogs;
    settings = data.settings && typeof data.settings === 'object' ? {...defaultSettings, ...data.settings} : settings;

    savePelanggan();
    savePaket();
    saveTagihan();
    savePembayaran();
    savePemasukan();
    savePengeluaran();
    saveAset();
    saveCashAccounts();
    saveCashAdjustments();
    saveCommands();
    saveActivityLogs();
    saveSettings();

    renderAll();
    showToast('Data berhasil diambil dari Google Sheet');
  } catch (error) {
    console.error(error);
    alert(`Gagal ambil dari Google Sheet: ${error.message}`);
  } finally {
    setSyncLoading(false);
  }
}


async function syncLoginToGoogleSheet(options = {}) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) return { ok: false, message: 'URL Apps Script belum diisi' };

  const payload = {
    action: 'updateLogin',
    username: settings.loginUsername || 'admin',
    password: settings.loginPassword || 'admin',
    name: settings.adminName || 'Administrator',
    role: 'Admin',
    status: 'Aktif'
  };

  try {
    const result = await postToAppsScript(endpoint, payload);
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan UserLogin');
    if (!options.silent) showToast('UserLogin berhasil disimpan ke Google Sheet');
    return result;
  } catch (error) {
    if (!options.silent) alert('Gagal menyimpan UserLogin ke Google Sheet.\n\n' + error.message);
    return { ok: false, message: error.message };
  }
}

async function syncSettingsToGoogleSheet(options = {}) {
  const endpoint = settings.appsScriptUrl;
  if (!endpoint) return { ok: false, message: 'URL Apps Script belum diisi' };

  try {
    const result = await postToAppsScript(endpoint, {
      action: 'updateSettings',
      settings
    });
    if (!result.ok) throw new Error(result.message || 'Gagal menyimpan Pengaturan');
    if (!options.silent) showToast('Pengaturan berhasil disimpan ke Google Sheet');
    return result;
  } catch (error) {
    if (!options.silent) alert('Gagal menyimpan Pengaturan ke Google Sheet.\n\n' + error.message);
    return { ok: false, message: error.message };
  }
}


async function postToAppsScript(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error('Response Apps Script bukan JSON valid.');
  }
}

function setSyncLoading(isLoading) {
  [pushSheetBtn, pullSheetBtn].forEach((button) => {
    if (!button) return;
    button.classList.toggle('sync-loading', isLoading);
    button.disabled = isLoading;
  });
}


/* BACKUP & EXPORT */
function exportBackupJson() {
  const backup = {
    app: 'Tandon Network Billing',
    version: 'tahap-8-backup-export',
    exportedAt: new Date().toISOString(),
    data: {
      pelanggan,
      paket,
      tagihan,
      pembayaran,
      pemasukan,
      pengeluaran,
      aset,
      cashAccounts,
      cashAdjustments,
      pendingCommands,
      activityLogs,
      settings
    }
  };

  const filename = `backup-tandon-network-${todayDate()}.json`;
  downloadFile(filename, JSON.stringify(backup, null, 2), 'application/json');
  showToast('Backup JSON berhasil dibuat');
}

function importBackupJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const backup = JSON.parse(reader.result);
      const data = backup.data || backup;

      if (!confirm('Import backup akan mengganti data lokal saat ini. Lanjutkan?')) {
        backupFileInput.value = '';
        return;
      }

      pelanggan = Array.isArray(data.pelanggan) ? data.pelanggan : pelanggan;
      paket = Array.isArray(data.paket) ? data.paket : paket;
      tagihan = Array.isArray(data.tagihan) ? data.tagihan : tagihan;
      pembayaran = Array.isArray(data.pembayaran) ? data.pembayaran : pembayaran;
      pemasukan = Array.isArray(data.pemasukan) ? data.pemasukan : pemasukan;
      pengeluaran = Array.isArray(data.pengeluaran) ? data.pengeluaran : pengeluaran;
      aset = Array.isArray(data.aset) ? data.aset : aset;
      cashAccounts = Array.isArray(data.cashAccounts) ? data.cashAccounts : cashAccounts;
      cashAdjustments = Array.isArray(data.cashAdjustments) ? data.cashAdjustments : cashAdjustments;
      pendingCommands = Array.isArray(data.pendingCommands) ? data.pendingCommands : pendingCommands;
      activityLogs = Array.isArray(data.activityLogs) ? data.activityLogs : activityLogs;
      settings = data.settings && typeof data.settings === 'object' ? {...defaultSettings, ...data.settings} : settings;

      savePelanggan();
      savePaket();
      saveTagihan();
      savePembayaran();
      savePemasukan();
      savePengeluaran();
      saveAset();
      saveCashAccounts();
      saveCashAdjustments();
      saveCommands();
      saveActivityLogs();
      saveSettings();

      renderAll();
      showToast('Backup berhasil diimport');
    } catch (error) {
      alert('File backup tidak valid.');
      console.error(error);
    } finally {
      backupFileInput.value = '';
    }
  };

  reader.readAsText(file);
}

function exportCsv(name, rows) {
  if (!rows.length) {
    showToast(`Data ${name} masih kosong`);
    return;
  }

  const headers = Object.keys(rows[0]);
  const csvRows = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(','))
  ];

  downloadFile(`${name}-tandon-network-${todayDate()}.csv`, csvRows.join('\n'), 'text/csv;charset=utf-8');
  showToast(`Export ${name} CSV berhasil`);
}

function csvCell(value) {
  const text = String(value ?? '').replaceAll('"', '""');
  return `"${text}"`;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

function resetLocalData() {
  const yakin = confirm('Yakin reset semua data lokal? Data pelanggan, paket, tagihan, pembayaran, pengeluaran, command, dan pengaturan akan kembali default.');
  if (!yakin) return;

  localStorage.removeItem(CUSTOMER_STORAGE_KEY);
  localStorage.removeItem(PACKAGE_STORAGE_KEY);
  localStorage.removeItem(INVOICE_STORAGE_KEY);
  localStorage.removeItem(PAYMENT_STORAGE_KEY);
  localStorage.removeItem(INCOME_STORAGE_KEY);
  localStorage.removeItem(EXPENSE_STORAGE_KEY);
  localStorage.removeItem(ASSET_STORAGE_KEY);
  localStorage.removeItem(CASH_ACCOUNT_STORAGE_KEY);
  localStorage.removeItem(CASH_ADJUST_STORAGE_KEY);
  localStorage.removeItem(COMMAND_STORAGE_KEY);
  localStorage.removeItem(SETTINGS_STORAGE_KEY);

  pelanggan = JSON.parse(JSON.stringify(defaultPelanggan));
  paket = JSON.parse(JSON.stringify(defaultPaket));
  tagihan = [];
  pembayaran = [];
  pemasukan = [];
  pengeluaran = JSON.parse(JSON.stringify(defaultPengeluaran));
  aset = JSON.parse(JSON.stringify(defaultAset));
  cashAccounts = JSON.parse(JSON.stringify(defaultCashAccounts));
  cashAdjustments = JSON.parse(JSON.stringify(defaultCashAdjustments));
  pendingCommands = [];
  settings = {...defaultSettings};

  savePelanggan();
  savePaket();
  saveTagihan();
  savePembayaran();
  savePemasukan();
  savePengeluaran();
  saveAset();
  saveCashAccounts();
  saveCashAdjustments();
  saveCommands();
  saveSettings();

  renderAll();
  goToPage('dashboard');
  showToast('Semua data lokal direset');
}


/* SETTINGS */
function renderSettings() {
  const businessName = document.getElementById('settingBusinessName');
  if (!businessName) return;

  businessName.value = settings.businessName || '';
  document.getElementById('settingBusinessAddress').value = settings.businessAddress || '';
  document.getElementById('settingAdminPhone').value = settings.adminPhone || '';
  document.getElementById('settingAdminName').value = settings.adminName || '';
  const loginUsername = document.getElementById('settingLoginUsername');
  const loginPassword = document.getElementById('settingLoginPassword');
  if (loginUsername) loginUsername.value = settings.loginUsername || 'admin';
  if (loginPassword) loginPassword.value = settings.loginPassword || '';
  const dueDayInput = document.getElementById('settingDueDay');
  const prepaidDaysInput = document.getElementById('settingPrepaidDays');
  const isolationModeInput = document.getElementById('settingIsolationMode');
  const currencyInput = document.getElementById('settingCurrency');
  if (dueDayInput) dueDayInput.value = settings.dueDay || 10;
  if (prepaidDaysInput) prepaidDaysInput.value = settings.prepaidDays || 30;
  if (isolationModeInput) isolationModeInput.value = settings.isolationMode || 'Manual';
  if (currencyInput) currencyInput.value = settings.currency || 'IDR';
  document.getElementById('settingAppsScriptUrl').value = settings.appsScriptUrl || '';
  const mikrotikTokenInput = document.getElementById('settingMikrotikToken');
  if (mikrotikTokenInput) mikrotikTokenInput.value = settings.mikrotikToken || '';
  const oldProxyInput = document.getElementById('settingMikrotikProxyUrl');
  if (oldProxyInput) oldProxyInput.value = settings.mikrotikProxyUrl || '';
  document.getElementById('settingRouterName').value = settings.routerName || '';
  document.getElementById('settingConnectionNote').value = settings.connectionNote || '';
  const waH1 = document.getElementById('settingWaTemplateH1');
  const waAktif = document.getElementById('settingWaTemplateAktif');
  const waTunggakan = document.getElementById('settingWaTemplateTunggakan');
  const waPascabayar = document.getElementById('settingWaTemplatePascabayar');
  if (waH1) waH1.value = settings.waTemplateH1 || defaultSettings.waTemplateH1;
  if (waAktif) waAktif.value = settings.waTemplateAktif || defaultSettings.waTemplateAktif;
  if (waTunggakan) waTunggakan.value = settings.waTemplateTunggakan || defaultSettings.waTemplateTunggakan;
  if (waPascabayar) waPascabayar.value = settings.waTemplatePascabayar || defaultSettings.waTemplatePascabayar;

  updateConnectionStatus();
  applySettingsToUI();
}

function collectSettings() {
  settings = {
    businessName: document.getElementById('settingBusinessName')?.value.trim() || 'Tandon Network',
    businessAddress: document.getElementById('settingBusinessAddress')?.value.trim() || '',
    adminPhone: document.getElementById('settingAdminPhone')?.value.trim() || '',
    adminName: document.getElementById('settingAdminName')?.value.trim() || 'Administrator',
    loginUsername: document.getElementById('settingLoginUsername')?.value.trim() || settings.loginUsername || 'admin',
    loginPassword: document.getElementById('settingLoginPassword')?.value.trim() || settings.loginPassword || 'admin',
    dueDay: Number(document.getElementById('settingDueDay')?.value || 10),
    prepaidDays: Number(document.getElementById('settingPrepaidDays')?.value || 30),
    isolationMode: document.getElementById('settingIsolationMode')?.value || 'Manual',
    currency: 'IDR',
    appsScriptUrl: document.getElementById('settingAppsScriptUrl')?.value.trim() || '',
    mikrotikProxyUrl: document.getElementById('settingMikrotikProxyUrl')?.value.trim() || settings.mikrotikProxyUrl || '',
    mikrotikToken: document.getElementById('settingMikrotikToken')?.value.trim() || settings.mikrotikToken || '',
    routerName: document.getElementById('settingRouterName')?.value.trim() || '',
    connectionNote: document.getElementById('settingConnectionNote')?.value.trim() || '',
    waTemplateH1: document.getElementById('settingWaTemplateH1')?.value.trim() || defaultSettings.waTemplateH1,
    waTemplateAktif: document.getElementById('settingWaTemplateAktif')?.value.trim() || defaultSettings.waTemplateAktif,
    waTemplateTunggakan: document.getElementById('settingWaTemplateTunggakan')?.value.trim() || defaultSettings.waTemplateTunggakan,
    waTemplatePascabayar: document.getElementById('settingWaTemplatePascabayar')?.value.trim() || defaultSettings.waTemplatePascabayar
  };
}

function updateConnectionStatus() {
  const sheetStatus = document.getElementById('sheetStatus');
  const mikrotikStatus = document.getElementById('mikrotikStatus');

  if (sheetStatus) {
    sheetStatus.textContent = settings.appsScriptUrl ? 'Apps Script sudah diisi' : 'Belum disambungkan';
    sheetStatus.classList.toggle('ready', Boolean(settings.appsScriptUrl));
  }

  if (mikrotikStatus) {
    const mikrotikReady = Boolean(settings.mikrotikToken && settings.appsScriptUrl);
    mikrotikStatus.textContent = mikrotikReady ? 'Token siap, langsung ke Apps Script' : 'Token / Apps Script belum lengkap';
    mikrotikStatus.classList.toggle('ready', mikrotikReady);
  }
}

function applySettingsToUI() {
  const name = settings.businessName || 'Tandon Network';
  const admin = settings.adminName || 'Administrator';

  document.querySelectorAll('.brand h2, .mobile-topbar b').forEach((el) => {
    el.textContent = name;
  });

  document.querySelectorAll('.admin-pill b, .sidebar-user .user-text b').forEach((el) => {
    el.textContent = admin;
  });

  document.title = `${name} - Billing ISP`;
}

function showToast(message) {
  const old = document.querySelector('.toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2400);
}


/* REPORT */
function renderLaporan() {
  if (!reportPreview) return;

  setDefaultReportDates();

  const type = reportType?.value || 'ringkasan';
  const start = reportStartDate?.value || '';
  const end = reportEndDate?.value || '';

  const filteredIncomes = filterByRange(pemasukan, 'tanggal', start, end);
  const filteredExpenses = filterByRange(pengeluaran, 'date', start, end);
  const filteredAssets = filterByRange(aset, 'tanggalBeli', start, end);
  const debtRows = getDebtRows();

  const totalIncome = filteredIncomes.reduce((sum, item) => sum + incomeAmount(item), 0);
  const totalExpense = filteredExpenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const profit = totalIncome - totalExpense;
  const totalDebt = debtRows.reduce((sum, item) => sum + Number(item.remainingDebt || 0), 0);
  const totalAssetValueAll = getAssetTotalValue();
  const totalAssetValuePeriod = filteredAssets.reduce((sum, item) => {
    const qty = Number(item.jumlah || item.qty || 0);
    const unitPrice = Number(item.hargaSatuan || item.unitPrice || 0);
    return sum + Number(item.totalHarga || item.total || (qty * unitPrice) || 0);
  }, 0);
  const methodRows = activeCashAccounts().map((account) => {
    const name = cashAccountMethodValue(account);
    const total = filteredIncomes
      .filter((item) => normalizeMethodName(item.method || item.metode || item.paymentMethod || 'Tunai') === name)
      .reduce((sum, item) => sum + incomeAmount(item), 0);
    return [cashAccountLabel(account), formatRupiah(total)];
  });
  const methodText = methodRows.map((row) => `${row[0]} ${row[1]}`).join(' • ');
  const methodSummaryCards = methodRows.map((row) => createReportSummaryCard(row[0].replace(/^Transfer\s+/i, ''), row[1])).join('');
  const activePrepaid = pelanggan.filter((x) => x.tipe === 'Prabayar' && x.status === 'Aktif').length;
  const activePostpaid = pelanggan.filter((x) => x.tipe === 'Pascabayar' && x.status === 'Aktif').length;
  const assetBasis = totalAssetValueAll || totalAssetValuePeriod;
  const recoveryPercent = assetBasis > 0 ? Math.min(999, Math.round((Math.max(profit, 0) / assetBasis) * 100)) : 0;
  const businessStatus = getBusinessRecoveryStatus(recoveryPercent, profit, assetBasis);

  let content = `
    <article class="report-paper premium-report">
      <div class="report-kop premium-report-kop">
        <div>
          <span class="report-kop-badge">LAPORAN USAHA RT/RW NET</span>
          <h2>${escapeHtml(settings.businessName || 'Tandon Network')}</h2>
          <p>${escapeHtml(settings.businessAddress || '')}</p>
        </div>
        <div class="report-kop-meta">
          <b>${escapeHtml(labelReportType(type))}</b>
          <span>${formatTanggal(start)} s/d ${formatTanggal(end)}</span>
        </div>
      </div>
      <div class="report-body premium-report-body">
  `;

  if (type === 'ringkasan') {
    content += `
      <div class="report-hero-grid">
        <section class="report-hero-card primary">
          <span>Saldo Kas / Laba Periode</span>
          <strong>${formatRupiah(profit)}</strong>
          <p>${methodText || 'Belum ada pemasukan'}</p>
        </section>
        <section class="report-hero-card asset">
          <span>Progress Pulih Modal</span>
          <strong>${recoveryPercent}%</strong>
          <p>${escapeHtml(businessStatus)}</p>
          <div class="report-progress"><i style="width:${Math.min(recoveryPercent, 100)}%"></i></div>
        </section>
      </div>
      <div class="report-summary-grid compact">
        ${createReportSummaryCard('Total Pemasukan', formatRupiah(totalIncome))}
        ${createReportSummaryCard('Total Pengeluaran', formatRupiah(totalExpense))}
        ${createReportSummaryCard('Laba / Rugi', formatRupiah(profit))}
        ${createReportSummaryCard('Total Aset', formatRupiah(assetBasis))}
        ${createReportSummaryCard('Total Tunggakan', formatRupiah(totalDebt))}
        ${createReportSummaryCard('Pelanggan Aktif', `${activePrepaid + activePostpaid}`)}
      </div>
      ${createReportTable(
        'Ringkasan Metode Pemasukan',
        ['Metode', 'Total'],
        methodRows
      )}
      ${createReportTable(
        'Ringkasan Tunggakan',
        ['Keterangan', 'Jumlah'],
        [
          ['Pelanggan Menunggak', `${debtRows.length} pelanggan`],
          ['Total Sisa BON / Belum Terbayar', formatRupiah(totalDebt)]
        ]
      )}
    `;
  }

  if (type === 'keuangan') {
    content += `
      <div class="report-summary-grid compact">
        ${createReportSummaryCard('Total Pemasukan', formatRupiah(totalIncome))}
        ${createReportSummaryCard('Total Pengeluaran', formatRupiah(totalExpense))}
        ${createReportSummaryCard('Laba / Rugi', formatRupiah(profit))}
        ${methodSummaryCards}
      </div>
      ${createReportTable(
        'Detail Pemasukan',
        ['Tanggal', 'Sumber', 'Pelanggan', 'Metode', 'Keterangan', 'Jumlah'],
        filteredIncomes.map((item) => [
          formatTanggal(incomeDate(item)),
          item.sumber || item.nomor || '-'.toString(),
          item.customerName || item.nama || '-',
          incomeMethod(item),
          item.keterangan || item.note || item.kategori || '-',
          formatRupiah(incomeAmount(item))
        ])
      )}
      ${createReportTable(
        'Detail Pengeluaran',
        ['Tanggal', 'Kategori', 'Deskripsi', 'Metode', 'Jumlah'],
        filteredExpenses.map((item) => [
          formatTanggal(item.date),
          item.category || '-',
          item.description || '-',
          item.method || '-',
          formatRupiah(item.amount)
        ])
      )}
    `;
  }

  if (type === 'tunggakan') {
    const totalPaidDebt = debtRows.reduce((sum, item) => sum + Number(item.paidAmount || 0), 0);
    content += `
      <div class="report-summary-grid compact">
        ${createReportSummaryCard('Total Pelanggan Menunggak', `${debtRows.length}`)}
        ${createReportSummaryCard('Total Tagihan', formatRupiah(debtRows.reduce((sum, item) => sum + Number(item.tagihanAmount || item.remainingDebt || 0), 0)))}
        ${createReportSummaryCard('Sudah Dibayar', formatRupiah(totalPaidDebt))}
        ${createReportSummaryCard('Sisa Tunggakan', formatRupiah(totalDebt))}
      </div>
      ${createReportTable(
        'Daftar Tunggakan',
        ['Pelanggan', 'Username', 'Tipe', 'Paket / Keterangan', 'Total Tagihan', 'Sudah Dibayar', 'Sisa Tunggakan', 'Status'],
        debtRows.map((item) => [
          item.nama || '-',
          item.username || '-',
          item.tipe || '-',
          item.paket || item.keterangan || '-',
          formatRupiah(item.tagihanAmount || item.remainingDebt || 0),
          item.paidAmount > 0 ? formatRupiah(item.paidAmount) : '-',
          formatRupiah(item.remainingDebt || 0),
          item.debtStatus || item.status || '-'
        ])
      )}
    `;
  }

  if (type === 'aset') {
    const assetGood = filteredAssets.filter((item) => String(item.kondisi || item.condition || '').toLowerCase().includes('baik')).length;
    const assetBroken = filteredAssets.filter((item) => String(item.kondisi || item.condition || '').toLowerCase().includes('rusak')).length;
    const assetUnits = filteredAssets.reduce((sum, item) => sum + Number(item.jumlah || item.qty || 0), 0);
    content += `
      <div class="report-summary-grid compact">
        ${createReportSummaryCard('Total Nilai Aset Periode', formatRupiah(totalAssetValuePeriod))}
        ${createReportSummaryCard('Total Nilai Aset Semua', formatRupiah(totalAssetValueAll))}
        ${createReportSummaryCard('Jumlah Unit', `${assetUnits}`)}
        ${createReportSummaryCard('Aset Baik', `${assetGood}`)}
        ${createReportSummaryCard('Aset Rusak', `${assetBroken}`)}
      </div>
      ${createReportTable(
        'Daftar Aset',
        ['Tanggal Beli', 'Nama Aset', 'Kategori', 'Jumlah', 'Harga Satuan', 'Total', 'Kondisi', 'Lokasi'],
        filteredAssets.map((item) => {
          const qty = Number(item.jumlah || item.qty || 0);
          const unitPrice = Number(item.hargaSatuan || item.unitPrice || 0);
          const total = Number(item.totalHarga || item.total || (qty * unitPrice) || 0);
          return [
            formatTanggal(item.tanggalBeli || item.date),
            item.namaAset || item.name || '-',
            item.kategori || item.category || '-',
            qty,
            formatRupiah(unitPrice),
            formatRupiah(total),
            item.kondisi || item.condition || '-',
            item.lokasi || item.location || '-'
          ];
        })
      )}
    `;
  }

  content += `
        <div class="report-signature">
          <div>
            <b>Catatan</b>
            <p>Laporan dibuat otomatis dari data Pemasukan, Pengeluaran, Tunggakan, dan Aset.</p>
          </div>
          <div class="signature-box">
            <span>Dicetak oleh</span>
            <strong>${escapeHtml(settings.adminName || 'Administrator')}</strong>
          </div>
        </div>
      </div>
    </article>
  `;

  reportPreview.innerHTML = content;
}

function sumIncomeByMethod(rows, methodName) {
  return rows
    .filter((item) => incomeMethod(item) === methodName)
    .reduce((sum, item) => sum + incomeAmount(item), 0);
}

function getBusinessRecoveryStatus(percent, profit, assetTotal) {
  if (!assetTotal) return 'Belum ada data aset untuk perbandingan modal.';
  if (profit <= 0) return 'Masih merintis dan belum menutup pengeluaran periode ini.';
  if (percent < 40) return 'Masih merintis, kas mulai terkumpul untuk pulih modal.';
  if (percent < 80) return 'Menuju pulih modal, perkembangan usaha sudah terlihat.';
  if (percent < 100) return 'Mendekati pulih modal, tinggal sedikit lagi.';
  return 'Sudah memenuhi pulih modal dan mulai masuk area laba.';
}

function createReportSummaryCard(label, value) {
  return `<div class="report-summary-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function setDefaultReportDates() {
  if (!reportStartDate || !reportEndDate) return;

  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0, 10);

  if (!reportStartDate.value) reportStartDate.value = firstDay;
  if (!reportEndDate.value) reportEndDate.value = lastDay;
}

function filterByRange(rows, key, start, end) {
  return rows.filter((item) => {
    const rawValue = item[key] || (key === 'tanggal' ? item.date : '') || '';
    const value = String(rawValue).slice(0, 10);
    if (!value) return false;
    if (start && value < start) return false;
    if (end && value > end) return false;
    return true;
  });
}

function labelReportType(type) {
  const labels = {
    ringkasan: 'Ringkasan Usaha',
    keuangan: 'Laporan Keuangan',
    tunggakan: 'Laporan Tunggakan',
    aset: 'Laporan Aset'
  };
  return labels[type] || 'Ringkasan Usaha';
}

function createReportTable(title, headers, rows) {
  if (!rows.length) {
    return `
      <h3 class="report-section-title">${title}</h3>
      <div class="report-empty">Belum ada data untuk periode ini.</div>
    `;
  }

  return `
    <h3 class="report-section-title">${title}</h3>
    <div class="report-table-wrap">
      <table class="report-table">
        <thead>
          <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}


/* SHARED */
function updateStats() {
  const aktif = pelanggan.filter((item) => item.status === 'Aktif').length;
  const prabayar = pelanggan.filter((item) => item.tipe === 'Prabayar' && item.status === 'Aktif').length;
  const pascabayar = pelanggan.filter((item) => item.tipe === 'Pascabayar' && item.status === 'Aktif').length;
  const isolir = pelanggan.filter((item) => item.status === 'Isolir').length;
  const tempo = pelanggan.filter((item) => item.status === 'Expired' || item.status === 'Isolir' || item.status === 'Expire' || item.status === 'Isolir / Nonaktif').length;
  const debtRows = getDebtRows();
  const totalTunggakan = debtRows.reduce((sum, item) => sum + Number(item.remainingDebt || item.tunggakan || 0), 0);

  setText('statAktif', aktif);
  setText('statPrabayar', prabayar);
  setText('statPascabayar', pascabayar);
  setText('statIsolir', isolir);
  setText('statTempo', tempo);
  setText('statTotalTunggakan', formatRupiah(totalTunggakan));

  const totalEl = document.querySelector('.stat-card.green .money');
  if (totalEl) totalEl.textContent = formatRupiah(totalTunggakan);
}

function goToPage(pageName) {
  document.querySelectorAll('.menu-item').forEach((item) => item.classList.toggle('active', item.dataset.page === pageName));
  document.querySelectorAll('.page-section').forEach((page) => page.classList.remove('active'));
  document.getElementById(`page-${pageName}`)?.classList.add('active');

  if (['dashboard', 'laporan', 'pembayaran', 'pascabayar'].includes(pageName)) {
    refreshPemasukanFromSheet({ force: true });
  }
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function todayDate() { return new Date().toISOString().slice(0, 10); }
function currentMonth() { return new Date().toISOString().slice(0, 7); }

function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function defaultDueDateBySettings() {
  const now = new Date();
  const dueDay = Number(settings.dueDay || 10);
  const safeDay = Math.min(Math.max(dueDay, 1), 28);
  const date = new Date(now.getFullYear(), now.getMonth(), safeDay);
  return date.toISOString().slice(0, 10);
}

function createInvoiceNumber() {
  const date = new Date();
  const ymd = date.toISOString().slice(0, 10).replaceAll('-', '');
  const next = String(tagihan.length + 1).padStart(4, '0');
  return `INV-${ymd}-${next}`;
}

function formatTanggal(dateString) {
  if (!dateString) return '-';
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatPeriode(value) {
  if (!value) return '-';
  const [year, month] = value.split('-');
  const date = new Date(Number(year), Number(month) - 1, 1);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
}

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
    .format(Number(value || 0))
    .replace(/\s/g, ' ');
}

function statusClass(value) {
  const text = String(value || '').toLowerCase();
  if (text.includes('isolir') || text.includes('expire')) return 'isolir';
  if (text.includes('nonaktif')) return 'nonaktif';
  if (text.includes('aktif')) return 'aktif';
  return text.replaceAll(' ', '-').replaceAll('/', '-');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

startCountdownTimer();
if (localStorage.getItem('tandon_login') === 'true') showDashboard();
