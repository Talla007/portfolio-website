# Portfolio Website — Atalla Ahsan Indrayana

Dokumentasi proyek website portfolio profesional yang dirancang khusus dengan tema **Cyber Security**. Proyek ini mengimplementasikan tampilan dark mode premium, animasi interaktif modern, dan tata letak yang sepenuhnya responsif.

---

## Struktur File

Proyek ini memiliki struktur direktori yang efisien dan modular sebagai berikut:

```
portfolio-website/
├── index.html    - Struktur halaman (HTML5)
├── style.css     - Styling visual dan desain sistem (CSS3)
├── script.js     - Logika interaksi dan animasi (JavaScript ES6+)
└── README.md     - Dokumentasi proyek
```

---

## Teknologi yang Digunakan

### 1. HTML5 (HyperText Markup Language)

**File:** `index.html`

HTML5 digunakan untuk membangun struktur dasar halaman web dengan menerapkan elemen semantik untuk meningkatkan aksesibilitas dan optimasi SEO.

**Fitur HTML5 yang diterapkan:**

| Fitur | Contoh | Keterangan |
|---|---|---|
| Elemen Semantik | `<nav>`, `<section>`, `<footer>` | Memberikan struktur dokumen yang terstandarisasi dan mudah dibaca oleh mesin pencari |
| Meta Tags | `<meta name="description">` | Mengoptimalkan SEO dan metadata media sosial (Open Graph, Twitter Card) |
| Elemen Formulir | `<input>`, `<select>`, `<textarea>` | Menyediakan input interaktif pada formulir kontak |
| SVG Inline | `<svg>...</svg>` | Menyajikan ikon vektor beresolusi tinggi dengan beban pemuatan minimal |
| Data Attributes | `data-category`, `data-count` | Menyimpan data kustom langsung pada elemen HTML untuk diolah JavaScript |
| Label ARIA | `aria-label="Toggle menu"` | Meningkatkan aksesibilitas bagi pengguna dengan alat bantu pembaca layar (screen reader) |

---

### 2. CSS3 (Cascading Style Sheets)

**File:** `style.css`

CSS3 bertanggung jawab penuh atas estetika visual halaman. Implementasinya mencakup penggunaan variabel (custom properties) untuk mempermudah pemeliharaan serta implementasi visual effects premium.

**Fitur CSS3 yang diterapkan:**

| Fitur | Contoh | Keterangan |
|---|---|---|
| Custom Properties | `--accent: #10b981` | Variabel CSS untuk memastikan konsistensi warna, font, dan jarak (spacing) |
| Flexbox | `display: flex` | Mengatur tata letak satu dimensi (baris atau kolom) secara dinamis |
| CSS Grid | `display: grid` | Mengatur tata letak dua dimensi pada grid kartu portofolio dan layanan |
| Conic Gradient | `conic-gradient(...)` | Membuat representasi visual melingkar pada statistik kemampuan (skills progress) |
| Backdrop Filter | `backdrop-filter: blur(20px)` | Menerapkan efek kaca transparan (glassmorphism) pada bilah navigasi |
| Keyframe Animations | `@keyframes float` | Menghasilkan pergerakan elemen dekoratif yang halus di latar belakang |
| Transitions | `transition: all 300ms ease` | Memberikan transisi transisi halus saat pengguna berinteraksi dengan elemen (hover) |
| Media Queries | `@media (max-width: 768px)` | Menyesuaikan tampilan agar optimal pada perangkat mobile dan tablet |
| Custom Scrollbar | `::-webkit-scrollbar` | Menyelaraskan tampilan scrollbar bawaan browser dengan tema gelap website |
| Pseudo Elements | `::before`, `::after` | Menambahkan dekorasi visual tambahan tanpa mengotori struktur HTML |
| Aspect Ratio | `aspect-ratio: 16/9` | Mempertahankan rasio dimensi visual pada thumbnail portofolio |
| Color Functions | `rgba()` | Menghasilkan efek transparansi dan efek cahaya (glow effect) |

**Arsitektur CSS:**

```
:root (Design Tokens)
  └── Base Reset & Globals
      └── Utility Classes (.container, .btn, .glass)
          └── Component Styles (per section)
              └── Animations (@keyframes)
                  └── Responsive (@media queries)
                      └── Accessibility (@prefers-reduced-motion)
```

---

### 3. JavaScript (ES6+)

**File:** `script.js`

JavaScript digunakan untuk menambahkan interaktivitas dinamis pada website dengan menggunakan standar ES6+ guna menghasilkan performa yang optimal.

**Fitur JavaScript yang diterapkan:**

| Fitur | Contoh | Keterangan |
|---|---|---|
| Arrow Functions | `(e) => { ... }` | Penulisan sintaks fungsi yang lebih ringkas dan modern |
| Deklarasi Variabel | `const`, `let` | Mengelola cakupan variabel (block-scoped) secara aman |
| Template Literals | `` `Hello ${name}` `` | Mempermudah manipulasi string secara dinamis |
| IntersectionObserver | `new IntersectionObserver()` | Memicu animasi masuk (reveal animation) saat elemen masuk ke viewport |
| DOM API | `querySelector`, `classList` | Mengakses dan memanipulasi elemen HTML secara dinamis |
| Event Listeners | `addEventListener("click")` | Menangkap dan merespons interaksi pengguna |
| FormData API | `new FormData(form)` | Mengumpulkan data input formulir secara terstruktur |
| requestAnimationFrame | `requestAnimationFrame(step)` | Mengoptimalkan rendering animasi angka counter agar berjalan pada 60fps |
| CSS Custom Properties | `style.setProperty("--percent")` | Memperbarui variabel CSS secara dinamis untuk grafik progress |
| Passive Listeners | `{ passive: true }` | Meningkatkan performa scroll pada perangkat mobile |

**Modul Fungsional:**

```
script.js
├── 1. Navbar Scroll Effect (efek blur pada latar belakang navigasi saat scroll)
├── 2. Mobile Menu Toggle (kontrol menu hamburger responsif)
├── 3. Smooth Scroll (navigasi perpindahan halaman yang halus)
├── 4. Scroll Reveal (animasi pemunculan elemen saat di-scroll)
├── 5. Stat Counter (animasi perhitungan angka statistik)
├── 6. Skill Circles (animasi visual progress kemampuan)
├── 7. Portfolio Filter (penyaringan kategori proyek portofolio)
├── 8. Contact Form (mekanisme pengiriman pesan melalui formulir kontak)
├── 9. Toast Notification (notifikasi melayang untuk umpan balik pengguna)
├── 10. Parallax Blobs (efek interaksi elemen latar belakang dengan gerakan mouse)
└── 11. Typing Effect (animasi teks mengetik pada bagian hero)
```

---

### 4. Sumber Daya Eksternal

| Sumber Daya | Penyedia | Fungsi |
|---|---|---|
| Google Fonts | `fonts.googleapis.com` | Penyedia tipografi utama menggunakan font "Inter" |
| SVG Icons | Kode Inline | Ikon berbasis vektor yang ringan dan responsif (gaya Lucide) |

---

## Design System

### Palet Warna
```
Latar Belakang:  #09090b → #18181b → #27272a → #3f3f46
Teks:            #ffffff → #d4d4d8 → #a1a1aa → #71717a
Aksen:           #059669 → #10b981 → #34d399 (emerald)
```

### Efek Visual Premium
- **Glassmorphism:** Bilah navigasi dengan efek blur latar belakang transparan.
- **Gradient Blobs:** Animasi elemen melayang yang dinamis pada bagian utama (hero section).
- **Grid Overlay:** Pola garis grid halus untuk memperkuat tema teknologi/keamanan siber.
- **Glow Effects:** Efek pancaran cahaya emerald saat tombol disorot (hover).
- **Conic Gradient Skills:** Grafik kemajuan melingkar yang dinamis.
- **Scroll Reveal:** Pemunculan elemen dengan animasi transisi saat halaman digulir.
- **Parallax:** Elemen dekoratif latar belakang yang bergerak mengikuti pergerakan kursor mouse.
- **Micro-interactions:** Efek pembesaran skala (scale), transisi warna, serta fokus berpendar pada elemen interaktif.

---

## Cara Menjalankan Proyek

### Metode Langsung
1. Buka direktori proyek `portfolio-website/`.
2. Klik dua kali pada file `index.html`.
3. Halaman website secara otomatis akan dimuat pada peramban (browser) utama Anda.

### Menggunakan Live Server (VS Code)
1. Pasang ekstensi "Live Server" melalui VS Code Marketplace.
2. Klik kanan pada file `index.html` lalu pilih opsi "Open with Live Server".
3. Halaman akan terbuka secara otomatis di browser dengan fitur pembaruan instan (hot-reload).

---

## Desain Responsif

Website ini dirancang untuk beradaptasi secara optimal pada berbagai resolusi layar:

| Tingkat Responsif | Resolusi | Karakteristik Tata Letak |
|---|---|---|
| Desktop | > 1024px | Grid 3 kolom, tata letak menyamping (horizontal) |
| Tablet | ≤ 1024px | Grid 2 kolom, tata letak bio vertikal |
| Mobile | ≤ 768px | Grid 1 kolom, navigasi berbasis menu hamburger |
| Small Mobile | ≤ 480px | Tombol dengan lebar penuh, statistik tertumpuk secara vertikal |

---

## Struktur Halaman (Sections)

1. **Navbar:** Navigasi atas melayang, efek glassmorphism, menu hamburger untuk tampilan mobile.
2. **Hero:** Penyebutan nama, keahlian "Cyber Security", tautan media sosial, serta tombol ajakan bertindak (CTA).
3. **Services:** 6 kartu layanan utama dengan efek interaksi saat disorot.
4. **About Me:** Profil singkat, statistik pencapaian, dan grafik keahlian interaktif.
5. **Portfolio:** Galeri yang menampilkan 9 proyek terpilih dilengkapi fitur filter kategori.
6. **Contact:** Formulir kontak interaktif terintegrasi dengan tautan kirim email.
7. **Footer:** Bagian penutup yang memuat hak cipta dan kepemilikan karya.

---

Dikembangkan oleh Atalla Ahsan Indrayana
