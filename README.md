# Mini Project UTS – REST API CRUD Express.js + MySQL

## Deskripsi Proyek

Proyek ini merupakan **Mini Project UTS** untuk mata kuliah **Pemrograman Web Lanjut (PWL25)**.
Aplikasi ini dibuat menggunakan **Express.js** dan **MySQL** dengan menerapkan **konsep REST API dan arsitektur MVC (Model-View-Controller)**.

Kasus yang diambil adalah **Music API**, yang berfungsi untuk mengelola data lagu daerah, termasuk menambahkan, menampilkan, memperbarui, dan menghapus data musik.

---

## Struktur Folder Project

```
pwl25-mini-project/
│
├── config/
│   └── db.js               # Koneksi ke database MySQL
│
├── controllers/
│   └── musicController.js  # Logika CRUD untuk tabel music
│
├── models/
│   └── musicModel.js       # Query SQL utama untuk tabel music
│
├── routes/
│   └── musicRoutes.js      # Routing endpoint REST API
│
├── middleware/
│   ├── logger.js           # Mencatat request method dan URL
│   ├── validate.js         # Memvalidasi input body
│   └── errorHandler.js     # Menangani error secara global
│
├── .env                    # Menyimpan konfigurasi DB dan port
├── app.js                  # Entry point aplikasi
├── package.json
├── README.md
└── screenshot/             # Berisi hasil uji API di Postman
```

---

##  Struktur Tabel Database

**Tabel:** `music`

| Kolom        | Tipe Data    | Keterangan             |
| ------------ | ------------ | ---------------------- |
| id           | INT (AI, PK) | Primary key            |
| title        | VARCHAR(100) | Judul lagu             |
| artist       | VARCHAR(100) | Nama penyanyi/pencipta |
| region       | VARCHAR(50)  | Asal daerah lagu       |
| youtube_url  | TEXT         | Link video lagu        |
| duration     | FLOAT        | Durasi lagu (menit)    |
| release_date | DATE         | Tanggal rilis          |

---

##  Endpoint REST API

| Metode | Endpoint         | Deskripsi                             |
| ------ | ---------------- | ------------------------------------- |
| GET    | `/api/music`     | Menampilkan semua data musik          |
| GET    | `/api/music/:id` | Menampilkan data musik berdasarkan ID |
| POST   | `/api/music`     | Menambahkan data musik baru           |
| PUT    | `/api/music/:id` | Memperbarui data musik berdasarkan ID |
| DELETE | `/api/music/:id` | Menghapus data musik berdasarkan ID   |

---

##  Contoh `.env` File

```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=db_music
PORT=5000
```

---

##  Middleware

1. **Logger Middleware (`logger.js`)**

   * Mencatat setiap request method dan URL yang masuk ke server.
   * Contoh output di terminal:

     ```
     [2025-10-27 10:00:00] GET /api/music
     ```

2. **Validate Middleware (`validate.js`)**

   * Memastikan input `POST` dan `PUT` tidak kosong sebelum dikirim ke database.

3. **Error Handler Middleware (`errorHandler.js`)**

   * Menangani error global dan menampilkan pesan error dengan format JSON yang rapi.

---

##  Live Coding (Skenario di Video)

Pada bagian live coding, saya menampilkan implementasi lengkap **fungsi `createMusic`** yang meliputi:

---

## Hasil Uji API di Postman

**GET /api/music**
Menampilkan semua data lagu dari database.

*Lihat screenshot:*
`screenshot/get_all_music.png`

**POST /api/music**
Menambahkan lagu baru dengan body JSON:

```json
{
  "title": "Tembang Samawa",
  "artist": "Samawa Harmony",
  "region": "Sumbawa",
  "youtube_url": "https://youtu.be/example2",
  "duration": 345,
  "release_date": "2024-03-10"
}
```

*Lihat screenshot:*
`screenshot/post_music.png`

**PUT /api/music/:id**
Memperbarui data lagu tertentu.

*Lihat screenshot:*
`screenshot/put_music.png`

**DELETE /api/music/:id**
Menghapus data lagu berdasarkan ID.

*Lihat screenshot:*
`screenshot/delete_music.png`

---

## Cara Menjalankan Project

1. Clone repository:

   ```bash
   git clone https://github.com/username/pwl25-mini-project.git
   ```

2. Masuk ke folder project:

   ```bash
   cd pwl25-mini-project
   ```

3. Install dependency:

   ```bash
   npm install
   ```

4. Jalankan server:

   ```bash
   npm run dev
   ```

   atau

   ```bash
   node app.js
   ```

5. Akses di browser/Postman:

   ```
   http://localhost:5000/api/music
   ```

---

## Kesimpulan Pribadi

Melalui mini project ini, saya memahami bagaimana cara membangun REST API sederhana dengan Express.js dan MySQL menggunakan pola **MVC**.
Saya juga belajar menggunakan **middleware**, **Postman untuk uji API**, dan **dotenv** untuk menjaga keamanan konfigurasi.
Project ini membantu saya memahami alur backend web development secara lebih nyata dan terstruktur.

---

## Teknologi yang Digunakan

* Node.js (Express.js)
* MySQL
* dotenv
* nodemon
* Postman

---
