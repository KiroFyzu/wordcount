# Word Count Analyzer 📊

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Multer-F46519?logo=ipfs" alt="Multer">
  <img src="https://img.shields.io/badge/EJS-8A2BE2" alt="EJS">
</div>

Aplikasi web yang dibuat dengan ExpressJS yang menganalisis berkas teks (.txt) dan menyediakan statistik jumlah kata, jumlah karakter, dan jumlah baris. Dilengkapi dengan fungsi pengunggahan berkas dan antarmuka pengguna yang bersih.

## ✨ Fitur 
- **Unggah File**: Unggah file `.txt` apa pun untuk analisis 
- **Statistik Teks**: Hitung jumlah kata, jumlah karakter (tidak termasuk spasi), dan jumlah baris 
- **UI Sederhana**: Antarmuka yang ramah pengguna dengan desain responsif 
- **Titik Akhir API**: Dibuat dengan rute RESTful untuk potensi integrasi 

## 🛠️ Tumpukan Teknologi 
- **Backend**: Node.js + ExpressJS 
- **Frontend**: Template EJS + JavaScript vanilla 
- **Middleware**: Multer (unggah file), file statis Express 
- **Penerapan**: Siap untuk Vercel/Heroku (tambahkan konfigurasi Anda sendiri)
  
```mermaid
flowchart TD
    A[Pengguna Mengakses Website] --> B[Halaman Utama]
    B --> C[Form Upload File]
    C --> D{File Valid?}
    D -- Ya --> E[Upload ke Server]
    D -- Tidak --> C
    E --> F[Middleware Multer\nSimpan File di /uploads]
    F --> G[Server Actions:\nBaca File & Hitung]
    G --> H[Hasil:\n- Word Count\n- Char Count\n- Line Count]
    H --> I[Client Components:\nRender Hasil]
    I --> J[Selesai]

    subgraph Server-Side
    F
    G
    end

    subgraph Client-Side
    C
    D
    I
    end
```

## 🚀 Mulai Cepat 
1. Kloning repo ini 
2. Instal dependensi: `npm install` 
3. Jalankan aplikasi: `node app.js` 
4. Akses di `http://localhost:3000` 

## 📝 Kasus Penggunaan Ideal 
- Penulis konten memeriksa panjang artikel 
- Siswa menganalisis metrik dokumen 
- Pengembang menguji logika pemrosesan teks 

🔗 *Dapat diadaptasi sebagai proyek awal untuk menambahkan lebih banyak fitur NLP!*

