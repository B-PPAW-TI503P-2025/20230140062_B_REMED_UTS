Instruksi Instalasi dan Menjalankan Aplikasi

Clone Repositori:
git clone <url-repository-organisasi>
cd <nama-folder-kalian>

Instal Dependensi:
npm install

Konfigurasi Database:
Buat database baru di MySQL Workbench bernama library_remedial_db.
Sesuaikan kredensial database mu (username, password, port) 

Menjalankan Server:
npx nodemon app.js

Dokumentasi Hasil Pengujian (Screenshots)

1. Test Endpoint API
Berikut adalah hasil pengujian fungsionalitas utama menggunakan Thunder Client:

Tambah Buku (Admin Mode): Berhasil menambahkan buku baru dengan header x-user-role: admin.
<img width="1442" height="402" alt="Screenshot 2026-01-30 201039" src="https://github.com/user-attachments/assets/94ab0f24-c998-4c8d-97ef-c09b50e809a5" />

Melihat Semua Buku (Public): Menampilkan daftar buku yang tersedia.
<img width="1480" height="558" alt="Screenshot 2026-01-29 210110" src="https://github.com/user-attachments/assets/47705b3f-f53d-4e4a-8a39-e914ba478b6f" />

Detail Buku (Public): Menampilkan informasi lengkap satu buku berdasarkan ID.
<img width="1401" height="346" alt="Screenshot 2026-01-30 195224" src="https://github.com/user-attachments/assets/f963942d-b9b6-47d7-8354-583a2efce437" />

Meminjam Buku (User Mode): Mencatat transaksi peminjaman beserta koordinat lokasi.
<img width="1472" height="592" alt="Screenshot 2026-01-29 210313" src="https://github.com/user-attachments/assets/c97cd65d-67e1-4ad3-911d-5cabdcecf4f2" />

Validasi Input: Sistem menolak input jika title atau author kosong dengan status 400 Bad Request.
<img width="1442" height="375" alt="Screenshot 2026-01-30 195305" src="https://github.com/user-attachments/assets/8481a89f-9a8f-4963-b73b-3e00e7aa36e8" />
<img width="1446" height="402" alt="Screenshot 2026-01-30 195238" src="https://github.com/user-attachments/assets/f4c57c34-3c0c-4d61-a19a-e9f969790bf7" />

Update & Delete Buku: Fitur pengelolaan data buku oleh Admin.
<img width="1472" height="557" alt="Screenshot 2026-01-29 213847" src="https://github.com/user-attachments/assets/1aa6dc5d-b7a6-4d7c-81fe-80751f13e464" />
<img width="1471" height="558" alt="Screenshot 2026-01-29 213918" src="https://github.com/user-attachments/assets/6b2c7432-9a3a-480e-b713-f0aa4f581e05" />

2. Struktur Database
Tabel yang dihasilkan secara otomatis oleh Sequelize di MySQL Workbench:

Tabel books: Menyimpan data id, title, author, dan stock.

Tabel borrowlogs: Menyimpan histori peminjaman termasuk userId, bookId, serta koordinat latitude dan longitude.

<img width="1380" height="657" alt="Screenshot 2026-01-30 195532" src="https://github.com/user-attachments/assets/b9ae4db5-9bbd-44f5-83a1-84791fab2469" />
<img width="1378" height="667" alt="Screenshot 2026-01-30 195520" src="https://github.com/user-attachments/assets/5ddfe3d9-bff8-43b6-91a6-3d62353843bb" />
