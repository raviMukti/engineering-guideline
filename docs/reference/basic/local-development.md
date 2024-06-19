# Local Development

## Pendahuluan
Dokumen ini memberikan panduan lengkap mengenai proses pengembangan lokal untuk tim Development di Waizly. Panduan ini mencakup persyaratan lingkungan, langkah-langkah setup, alur kerja pengembangan, dan praktik terbaik.

## Persyaratan Lingkungan
Sebelum memulai pengembangan lokal, pastikan sistem Anda memenuhi persyaratan berikut:
- **Perangkat Lunak:**
  - Git
  - Docker
  - VSCode
  - Postman
  - DBeaver

## Langkah-Langkah Setup
Ikuti langkah-langkah berikut untuk menyiapkan lingkungan pengembangan lokal di Waizly:

### 1. Clone Repository
Clone repository proyek ke mesin lokal Anda.
```bash
git clone https://github.com/waizly/repo-name.git
cd repo-name
```

### 2. Menjalankan Docker
Pastikan Docker terinstal dan berjalan di sistem Anda. Jalankan perintah berikut untuk memulai layanan yang diperlukan.
```bash
docker-compose up -d
```

### 3. Menjalankan Aplikasi
Setelah semua layanan berjalan, Anda bisa memulai aplikasi dengan mengecek README yang ada pada setiap project.
```bash
npm start
# hanya contoh jika project menggunakan npm
yarn start
```

### 4. Menggunakan Postman untuk API Testing
- Buka Postman dan impor koleksi API yang diperlukan.
- Konfigurasikan environment sesuai dengan file `.env` Anda.
- Jalankan request API untuk memastikan semuanya bekerja dengan baik.

### 5. Menggunakan DBeaver untuk Database Management
- Buka DBeaver dan tambahkan koneksi database baru.
- Konfigurasikan koneksi sesuai dengan pengaturan database di file `.env`.
- Gunakan DBeaver untuk mengelola dan menguji database.

## Alur Kerja Pengembangan
### 1. Membuat Branch Baru
Sebelum memulai fitur atau perbaikan baru, buat branch baru dari `develop` atau `sit`.
```bash
git checkout -b {JIRA-TICKET-ID}
```

### 2. Mengembangkan Fitur
Lakukan pengembangan fitur atau perbaikan bug pada branch tersebut. Pastikan untuk sering melakukan commit perubahan Anda.
```bash
git add .
git commit -m "{JIRA-TICKET-ID} #Menambahkan fitur X"
```

### 3. Menjalankan Tes
Pastikan semua tes berjalan dengan baik sebelum melakukan push.
```bash
npm test
# atau jika menggunakan yarn
yarn test
```

### 4. Push dan Pull Request
Push perubahan ke repository remote dan buka Pull Request di GitHub.
```bash
git push origin {JIRA-TICKET-ID}
```

## Best Practice
- **Menulis Kode Bersih:** Ikuti standar penulisan kode yang telah ditetapkan di Waizly.
- **Review Kode:** Selalu minta review kode sebelum menggabungkan ke branch `main`.
- **Dokumentasi:** Tambahkan dokumentasi yang relevan untuk setiap perubahan atau fitur baru.
- **Backup Data:** Selalu backup data penting sebelum memulai pengembangan besar.

## Troubleshooting
### Masalah Umum dan Solusinya
- **Layanan Docker Tidak Berjalan:** Pastikan Docker berjalan dan coba jalankan ulang perintah `docker-compose up -d`.
- **Dependency Tidak Terinstal:** Hapus `node_modules` dan jalankan ulang perintah `npm install` atau `yarn install`.
- **Variabel Lingkungan Tidak Terbaca:** Pastikan file `.env` telah dikonfigurasi dengan benar dan terminal di-restart setelah perubahan.

### Kontak Dukungan
Jika menghadapi masalah yang tidak bisa diatasi, hubungi tim dukungan teknis melalui kanal Discord #engineering.
Dengan panduan ini, diharapkan proses pengembangan lokal di Waizly menjadi lebih terstruktur dan efisien. Selamat bekerja dan semoga sukses!

