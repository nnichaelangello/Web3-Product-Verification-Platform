# Product Verification System

![Blockchain](https://img.shields.io/badge/Blockchain-Solidity-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![Backend](https://img.shields.io/badge/Backend-Web3.js-orange)

**Product Verification System** adalah sebuah sistem berbasis blockchain yang dirancang untuk memverifikasi keaslian produk menggunakan barcode. Sistem ini memanfaatkan teknologi blockchain untuk memastikan keamanan, transparansi, dan keaslian data produk. Dengan sistem ini, konsumen dapat memindai barcode produk untuk memverifikasi keasliannya, sementara admin dapat menambah, memperbarui, atau menghapus data produk.

---

## **Fitur Utama**

### **1. Modul Admin**
- **Login Admin**: Admin dapat login menggunakan alamat Ethereum yang terdaftar.
- **Manajemen Produk**:
  - Tambah produk baru dengan detail lengkap (ID serial, nama produk, tanggal produksi, asal produk, tanggal kedaluwarsa, informasi penjual, dan barcode).
  - Perbarui informasi produk.
  - Hapus produk dari sistem.
- **Verifikasi Produk**: Admin dapat memverifikasi keaslian produk berdasarkan barcode.

### **2. Modul User**
- **Registrasi dan Login**: User dapat registrasi dan login ke sistem.
- **Verifikasi Produk**: User dapat memindai barcode produk untuk memverifikasi keasliannya.
- **Laporkan Produk Palsu**: User dapat melaporkan produk yang dianggap palsu.
- **Notifikasi**: Sistem akan memberikan notifikasi jika produk tidak ditemukan atau berhasil diverifikasi.

---

## **Teknologi yang Digunakan**

### **1. Blockchain**
- **Solidity**: Bahasa pemrograman untuk menulis smart contract.
- **Remix IDE**: Lingkungan pengembangan untuk menulis, meng-compile, dan meng-deploy smart contract.
- **Ethereum**: Jaringan blockchain yang digunakan untuk menyimpan data produk.

### **2. Frontend**
- **HTML/CSS/JavaScript**: Digunakan untuk membangun antarmuka pengguna.
- **Web3.js**: Library untuk menghubungkan frontend dengan smart contract.

### **3. Backend**
- **Google Spreadsheet**: Digunakan sebagai database sementara (opsional).
- **MetaMask**: Wallet untuk mengelola akun Ethereum dan menandatangani transaksi.

---

## **Cara Instalasi**

### **1. Prasyarat**
- Install [MetaMask](https://metamask.io/) di browser Anda.
- Pastikan Anda memiliki akun Ethereum dan cukup ETH untuk gas fee (jika menggunakan jaringan mainnet atau testnet).
- Install [Node.js](https://nodejs.org/) (jika diperlukan).

### **2. Langkah-Langkah Instalasi**

#### **a. Clone Repository**
```bash
git clone https://github.com/username/product-verification-system.git
cd product-verification-system
```

#### **b. Deploy Smart Contract**
1. Buka [Remix IDE](https://remix.ethereum.org/).
2. Buat file baru dengan nama `ProductVerification.sol` dan salin kode smart contract dari file `contracts/ProductVerification.sol`.
3. Compile dan deploy smart contract ke jaringan Ethereum (misalnya: Ropsten, Rinkeby, atau jaringan lokal).
4. Simpan alamat smart contract dan ABI untuk digunakan di frontend.

#### **c. Menambahkan Admin**
Sebelum admin dapat login dan menggunakan sistem, Anda perlu menambahkan alamat Ethereum admin ke dalam smart contract. Berikut caranya:

1. **Deploy Smart Contract**:
   - Deploy smart contract `ProductVerification.sol` di Remix IDE.
   - Simpan alamat smart contract yang di-deploy.

2. **Tambahkan Admin**:
   - Buka tab **"Deploy & Run Transactions"** di Remix IDE.
   - Pilih fungsi `addAdmin` dari daftar fungsi yang tersedia.
   - Masukkan alamat Ethereum admin yang ingin ditambahkan.
   - Klik **"Transact"** untuk mengeksekusi fungsi.

3. **Verifikasi Admin**:
   - Panggil fungsi `admins` dengan memasukkan alamat Ethereum yang baru ditambahkan.
   - Pastikan nilai yang dikembalikan adalah `true` (artinya alamat tersebut sudah terdaftar sebagai admin).

Setelah langkah ini selesai, admin dapat login ke sistem menggunakan alamat Ethereum yang sudah ditambahkan.

#### **d. Setup Frontend**
1. Buka folder `frontend`.
2. Edit file `script.js`:
   - Ganti `contractAddress` dengan alamat smart contract yang sudah di-deploy.
   - Ganti `abi` dengan ABI yang didapatkan dari Remix IDE.
3. Buka file `index.html` di browser untuk menjalankan aplikasi.

---

## **Cara Penggunaan**

### **1. Modul Admin**
- **Login Admin**:
  1. Masukkan alamat Ethereum admin.
  2. Klik tombol **"Login as Admin"**.
- **Tambah Produk**:
  1. Isi semua field yang diperlukan (ID serial, nama produk, tanggal produksi, asal produk, tanggal kedaluwarsa, informasi penjual, dan barcode).
  2. Klik tombol **"Add Product"**.
- **Verifikasi Produk**:
  1. Masukkan barcode produk.
  2. Klik tombol **"Verify Product"**.

### **2. Modul User**
- **Verifikasi Produk**:
  1. Masukkan barcode produk.
  2. Klik tombol **"Verify Product"**.
- **Laporkan Produk Palsu**:
  1. Masukkan barcode produk.
  2. Klik tombol **"Report Fake Product"**.

---

## **Kontribusi**

Kontribusi sangat diterima! Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:
1. Fork repository ini.
2. Buat branch baru (`git checkout -b fitur-baru`).
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4. Push ke branch (`git push origin fitur-baru`).
5. Buat Pull Request.

---

## **Lisensi**

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---
