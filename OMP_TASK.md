# OMP Task: Transform to Kingdom Life UI (Public Parallax Church Profile)

## Background & Objectives
1. Ini adalah web public profile "Kingdom Life Church" berdasarkan Stitch project ID `2528040876208626066`.
2. File stitch HTML & assets sudah diekstrak ke `/opt/data/stitch_export_2528040876208626066/clean_parallax.html` dan screen lainnya (`events.html`, `community.html`, `daily.html`, `profile.html`).
3. Sesuai instruksi Mas Soerjo:
   - "karena ini public middleware dan authentication nya bisa di takeout"
   - "ini harusnya implement paralax, kalo ada component https://reactbits.dev/ boleh di pakai"
   - "tolong pakai nextjs template"
   - Repo ini diturunkan dari `my-nextjs-template`.

## Requirements
1. **Take out Authentication & Middleware Gate**:
   - `src/proxy.ts`: Jadikan passthrough sederhana atau hapus route redirect login. Public visitor yang membuka `/` langsung melihat landing page Kingdom Life, BUKAN diredirect ke `/dashboard` atau `/login`.
   - Bersihkan route-route auth `(auth)` atau jadikan route publik jika tidak dipakai. Hapus redirect wajib login.
2. **Setup Tailwind & Styling**:
   - Pastikan font Google: `Plus Jakarta Sans` dan `Playfair Display` terload di root layout `src/app/layout.tsx`.
   - Google Material Symbols Outlined icons (`flare`, `search`, `menu`, `close`, `calendar_month`, `groups`, `church`, `auto_stories`, `volunteer_activism`, `location_on`, `schedule`, `arrow_forward`, `favorite`, etc.) terload atau menggunakan Lucide React icons yang semantik dan bersih.
   - Warna tema di `src/app/globals.css` / Tailwind:
     - `primary`: `#4f1c9e`
     - `primary-container`: `#673ab7`
     - `secondary-container`: `#ff5722`
     - `jpcc-black`: `#0f0f11`
     - `jpcc-dark`: `#16161a`
     - `jpcc-gray`: `#76767c`
     - `jpcc-light-bg`: `#f9f9fa`
     - `jpcc-card`: `#ffffff`
3. **Parallax Implementation**:
   - Gunakan `framer-motion` (atau `motion`), hook scroll parallax, atau vanilla requestAnimationFrame parallax seperti di Stitch (`data-parallax-speed`).
   - Implementasikan layered parallax depth:
     - Background layer bergerak lambat saat scroll (speed ~0.05 - 0.1)
     - Foreground cards / badges mengambang dengan subtle floating offset
     - Text / floating badge parallax translation.
4. **React Bits Components**:
   - Buat folder `src/components/react-bits/` (seperti di `kuykilat-ui`):
     - `SpotlightCard.tsx`
     - `SplitText.tsx`
     - `CountUp.tsx`
     - `ShinyText.tsx`
   - Pakai di landing page untuk hero text, stat counter (e.g. jemaat / komunitas / cabang), spotlight card pada jadwal ibadah / kartu connect groups.
5. **Kingdom Life Sections on Landing Page (`src/app/(marketing)/page.tsx` atau `src/app/page.tsx`)**:
   - **Navbar / Header**: Logo "Kingdom Life - Contemporary Church", Links (`About Us`, `Jadwal Ibadah`, `Community`, `Pemuridan`, `Renungan`, `Events`, `Doa & Konseling`), CTA "Join Online" & "Sign Up". Responsive mobile menu.
   - **Hero Section**: "In the House of GOD, We Flourish" / "Gereja Kontemporer yang Berpusat pada Kristus", immersive background image, floating pill badges dengan parallax translation.
   - **About / Our Story Section**: Narasi visi misi, nilai budaya gereja (Kasih Tanpa Syarat, Komunitas Nyata, Bertumbuh Menjadi Murid), typography elegan Playfair Display + Plus Jakarta Sans.
   - **Jadwal Ibadah (Services)**: Sunday Service 09:00, 11:30, 17:00, Youth & Teens, Kids Church, lokasi & link online stream.
   - **Connect Groups / Community**: "Lebih Dari Sekadar Hari Minggu" - connect groups berdasarkan usia & minat, CTA gabung CG.
   - **Pemuridan (Discipleship Journey)**: Foundation, Growth, Ministry, Leadership.
   - **Events & Konferensi**: Kalender event terdekat (Youth Camp, Worship Night, Leadership Summit).
   - **Renungan Harian (Devotional)**: Kutipan firman hari ini & link bacaan.
   - **Doa & Konseling (Pastoral Care & WhatsApp Hotline)**: Form permohonan doa / pastoral WhatsApp link.
   - **Footer**: Brand info, alamat kampus/ibadah, jadwal, link media sosial, copyright © 2026 Kingdom Life Church.
6. **Code Quality & Testing**:
   - Semua linting `bun run lint` lolos.
   - TypeScript `bun x tsc --noEmit` lolos 0 error.
   - Unit/Component tests di `src/__tests__/kingdom-life.test.tsx` lolos (`bun run test`).
   - Next.js build `bun run build` sukses.

Lakukan semua langkah ini sekarang dengan standar kualitas frontend tertinggi.
