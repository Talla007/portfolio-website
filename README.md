# 🛡️ Portfolio Website — Atalla Ahsan Indrayana

Website portfolio profesional bertema **Cyber Security** dengan dark mode premium,
animasi modern, dan desain responsif.

---

## 📂 Struktur File

```
portfolio-website/
├── index.html    ← Struktur halaman (HTML5)
├── style.css     ← Styling visual lengkap (CSS3)
├── script.js     ← Logika interaktif (JavaScript ES6+)
└── README.md     ← Dokumentasi ini
```

---

## 🌐 Bahasa & Teknologi yang Digunakan

### 1. HTML5 (HyperText Markup Language)

**File:** `index.html`

HTML adalah bahasa markup standar untuk membuat struktur halaman web.
Versi ke-5 (HTML5) memperkenalkan elemen semantik yang lebih bermakna.

**Fitur HTML5 yang digunakan:**
| Fitur | Contoh | Penjelasan |
|---|---|---|
| Semantic Elements | `<nav>`, `<section>`, `<footer>` | Memberikan makna pada struktur halaman |
| Meta Tags | `<meta name="description">` | SEO & media sosial (Open Graph, Twitter Card) |
| Form Elements | `<input>`, `<select>`, `<textarea>` | Form kontak interaktif |
| SVG Inline | `<svg>...</svg>` | Ikon vektor yang ringan & scalable |
| Data Attributes | `data-category`, `data-count` | Menyimpan data kustom di elemen HTML |
| ARIA Labels | `aria-label="Toggle menu"` | Aksesibilitas untuk screen reader |

---

### 2. CSS3 (Cascading Style Sheets)

**File:** `style.css` (~1200 baris)

CSS adalah bahasa untuk mendesain tampilan visual halaman web.
CSS3 menambahkan fitur canggih seperti animasi, gradient, dan flexbox.

**Fitur CSS3 yang digunakan:**

| Fitur | Contoh | Penjelasan |
|---|---|---|
| Custom Properties | `--accent: #10b981` | Variabel CSS untuk konsistensi warna & spacing |
| Flexbox | `display: flex` | Layout 1 dimensi (horizontal/vertikal) |
| CSS Grid | `display: grid` | Layout 2 dimensi untuk card grid |
| Conic Gradient | `conic-gradient(...)` | Membuat lingkaran progress skill |
| Backdrop Filter | `backdrop-filter: blur(20px)` | Efek kaca (glassmorphism) pada navbar |
| Keyframe Animations | `@keyframes float` | Animasi floating blobs di hero |
| Transitions | `transition: all 300ms ease` | Animasi halus saat hover |
| Media Queries | `@media (max-width: 768px)` | Responsive design untuk mobile/tablet |
| Custom Scrollbar | `::-webkit-scrollbar` | Scrollbar yang sesuai tema dark |
| Pseudo Elements | `::before`, `::after` | Dekorasi visual tanpa HTML tambahan |
| Aspect Ratio | `aspect-ratio: 16/9` | Rasio tetap untuk thumbnail portfolio |
| Color Functions | `rgba()` | Warna transparan untuk glow effects |

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

### 3. JavaScript ES6+ (ECMAScript 2015+)

**File:** `script.js` (~240 baris)

JavaScript adalah bahasa pemrograman untuk membuat halaman web interaktif.
ES6+ adalah versi modern dengan syntax yang lebih bersih dan powerful.

**Fitur JavaScript yang digunakan:**

| Fitur | Contoh | Penjelasan |
|---|---|---|
| Arrow Functions | `(e) => { ... }` | Sintaks fungsi yang ringkas |
| `const` / `let` | `const navbar = ...` | Deklarasi variabel modern (block-scoped) |
| Template Literals | `` `Hello ${name}` `` | String interpolasi untuk mailto body |
| IntersectionObserver | `new IntersectionObserver()` | Deteksi elemen masuk viewport (scroll animation) |
| DOM API | `querySelector`, `classList` | Manipulasi elemen HTML |
| Event Listeners | `addEventListener("click")` | Menangani interaksi user |
| FormData API | `new FormData(form)` | Membaca data form secara programatis |
| requestAnimationFrame | `requestAnimationFrame(step)` | Animasi counter yang smooth (60fps) |
| CSS Custom Properties | `style.setProperty("--percent")` | Mengubah variabel CSS dari JavaScript |
| Passive Listeners | `{ passive: true }` | Optimasi performa scroll |

**Modul Fungsional:**
```
script.js
├── 1. Navbar Scroll Effect (background blur saat scroll)
├── 2. Mobile Menu Toggle (hamburger → X)
├── 3. Smooth Scroll (navigasi anchor)
├── 4. Scroll Reveal (animasi muncul saat scroll)
├── 5. Stat Counter (animasi angka naik)
├── 6. Skill Circles (animasi progress conic-gradient)
├── 7. Portfolio Filter (filter berdasarkan kategori)
├── 8. Contact Form (submit → mailto)
├── 9. Toast Notification (popup feedback)
├── 10. Parallax Blobs (ikut gerakan mouse)
└── 11. Typing Effect (ketikan di hero)
```

---

### 4. Teknologi Pendukung

| Teknologi | Sumber | Fungsi |
|---|---|---|
| **Google Fonts** | `fonts.googleapis.com` | Font "Inter" — tipografi modern & profesional |
| **SVG Icons** | Inline SVG | Ikon vektor ringan (Lucide icon style) |

---

## 🎨 Design System

### Palet Warna
```
Background:  #09090b → #18181b → #27272a → #3f3f46
Text:        #ffffff → #d4d4d8 → #a1a1aa → #71717a
Accent:      #059669 → #10b981 → #34d399 (emerald)
```

### Efek Visual Premium
- **Glassmorphism** — Navbar dengan backdrop-blur transparan
- **Gradient Blobs** — Animasi floating di hero section
- **Grid Overlay** — Pattern grid halus di background hero
- **Glow Effects** — Shadow emerald pada hover buttons
- **Conic Gradient Skills** — Circular progress bars
- **Scroll Reveal** — Elemen muncul dengan animasi saat di-scroll
- **Parallax** — Blobs bergerak mengikuti mouse
- **Micro-interactions** — Hover scale, color transitions, focus glow

---

## 🚀 Cara Menjalankan

### Cara Paling Mudah
1. Buka folder `portfolio-website/`
2. Double-click file `index.html`
3. Website akan terbuka di browser default

### Dengan Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Klik kanan `index.html` → "Open with Live Server"
3. Browser akan terbuka otomatis dengan hot-reload

---

## 📱 Responsive Design

Website ini mendukung 4 ukuran layar:

| Breakpoint | Ukuran | Layout |
|---|---|---|
| Desktop | > 1024px | Grid 3 kolom, layout horizontal |
| Tablet | ≤ 1024px | Grid 2 kolom, about vertical |
| Mobile | ≤ 768px | Grid 1 kolom, hamburger menu |
| Small Mobile | ≤ 480px | Full-width buttons, stacked stats |

---

## 📋 Daftar Section

1. **Navbar** — Fixed top, glassmorphism, hamburger mobile
2. **Hero** — Nama, titel "Cyber Security", social links, CTA
3. **Services** — 6 kartu layanan dengan hover effects
4. **About Me** — Bio, statistik, skill circles
5. **Portfolio** — 9 proyek dengan filter kategori
6. **Contact** — Form kontak → mailto
7. **Footer** — Credit line

---

Built by Atalla Ahsan Indrayana
