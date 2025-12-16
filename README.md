# 🚀 Core Backend CMS API

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

Backend inti untuk platform **Content Management System (CMS)** yang tangguh. Dibangun dengan arsitektur modular **NestJS**, menggunakan **TypeORM** untuk manajemen database, serta diamankan dengan **Passport JWT** dan **Bcrypt**.

---

## 🛠️ Panduan Persiapan (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan lokal:

1.  **Clone Repositori**
    ```bash
    git clone git@github.com:itsmeWildan/Core-Backend-CMS.git
    cd Core-Backend-CMS
    ```

2.  **Instalasi Dependensi**
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment**
    Buat file `.env` di root direktori:
    ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=blognest
    JWT_SECRET=jwtsecretbuatansaya
    ```

4.  **Jalankan Server**
    ```bash
    npm run start:dev
    ```

---

## 📡 Dokumentasi API (Routes)

### 🔐 Modul Autentikasi & User
| Method | Endpoint | Fungsi | Kebutuhan Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Registrasi pengguna baru | ❌ Bebas |
| `POST` | `/auth/login` | Login & ambil JWT Token | ❌ Bebas |
| `GET` | `/auth/getUser` | Ambil profil user saat ini | ✅ Bearer Token |
| `GET` | `/users` | List semua user (Admin) | ✅ Bearer Token |

---

### 📄 Modul Artikel (Content)
Digunakan untuk mengelola postingan atau konten utama.

* `GET /article` — Menampilkan semua daftar artikel.
* `GET /article/:id` — Mengambil detail satu artikel.
* `POST /article` — Membuat artikel baru.
    * **Payload:** `{ "title": string, "content": string, "status": "SUCCESS" }`
* `PUT /article/:id` — Memperbarui data artikel.
* `DELETE /article/:id` — Menghapus artikel dari database.

---

### 📂 Modul Kategori
Manajemen kategori untuk pengelompokan konten.

* `GET /category` — Daftar semua kategori.
* `POST /category` — Tambah kategori (Contoh: `"ReactJS"`).
* `GET /category/:id` — Detail kategori tertentu.
* `PUT /category/:id` — Edit nama kategori.
* `DELETE /category/:id` — Hapus kategori.

---

## 🧪 Pengujian (Testing)

Proyek ini mendukung pengujian via **HTTPie**.
1. Buka **HTTPie Desktop**.
2. Import file `httpie-space-nest-dev.json`.
3. Pastikan environment variable `{{URL}}` sudah mengarah ke `http://localhost:3000`.

---

## 📦 Script Perintah

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run start:dev` | Menjalankan server dalam mode *Development* |
| `npm run build` | Kompilasi kode ke dalam folder `/dist` |
| `npm run migration:run` | Menjalankan migrasi database TypeORM |
| `npm run lint` | Memeriksa kualitas penulisan kode |

---
**Maintained by [itsmeWildan](https://github.com/itsmeWildan)** *© 2025 Core Backend CMS Project.*
