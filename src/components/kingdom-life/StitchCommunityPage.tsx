'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { KingdomHeader } from './KingdomHeader';
import { KingdomFooter } from './KingdomFooter';

export function StitchCommunityPage() {
  useParallax();

  return (
    <div className="w-full min-h-screen text-jpcc-black font-sans antialiased overflow-x-hidden selection:bg-purple-100 selection:text-purple-900 pt-20">
      <KingdomHeader />
      <main className="w-full pt-0 bg-[#0a0710] min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/*  SECTION 1: HERO PARALLAX (Dark Editorial)  */}
          <section className="relative w-full min-h-[960px] flex items-center justify-center overflow-hidden bg-[#0a0710] pb-24 pt-16">
            {/*  Ambient Parallax Image & Scrim  */}
            <div
              className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center transition-transform duration-300 ease-out will-change-transform"
              data-alt="A warm sunset community gathering of diverse believers sitting around long rustic outdoor wooden dining tables in front of a modern warm stone church sanctuary, breaking artisan bread, holding hands in joyful prayer, golden string lights twinkling overhead, deep violet and amber ambient tones, rich editorial lighting, genuine laughter and warm fellowship."
              id="hero-parallax-bg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJvyNDAMk1ZOOxhit4WjlFnGl7YAambUUtV4V8WTW9e4HqmjRh8kvTXaiPQyM4p02tRugF5vu1f12_H3aG8_HG_GZhrf0gy9T_Iqfq7efLBMAxuZisJVClv_LjQojIB9PBQCCMJt6ML5LutvB49docnnShPxYNgqJYWkd2_AIss-x_czwGV1PoG8odeDuksV3hv4hi8ShGDyCxNpiZHdzC2HS_TLfGixQEWgNfR_s')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0710]/95 via-[#0a0710]/80 to-[#0a0710]"></div>
            {/*  Floating Background Typographic Watermark  */}
            <div
              className="absolute inset-x-0 top-1/4 select-none pointer-events-none text-center font-display-hero text-[12vw] leading-none font-extrabold tracking-tighter text-surface-container-highest/5 uppercase whitespace-nowrap will-change-transform"
              id="watermark-community"
            >
              COMMUNITY
            </div>
            {/*  Content Container  */}
            <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-margin text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-surface-container-lowest/10 backdrop-blur-md mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim">
                  Connect Groups • Kingdom Life Sanctuary
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-surface max-w-4xl tracking-tight leading-[1.08] mb-6 drop-shadow-md">
                Di Sini Ada Rumah.
                <br />
                <span className="italic font-light text-secondary-fixed">Di Sini Ada Keluarga.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl font-normal leading-relaxed mb-10">
                Temukan lingkaran rohani autentik di mana kamu dikenal seutuhnya, dikasihi tanpa syarat, dan bertumbuh
                dalam hadirat Tuhan bersama saudara seiman.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <a
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-lg text-label-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  href="#explore-groups"
                >
                  Cari Connect Group
                </a>
                <a
                  className="px-8 py-3.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface hover:bg-surface-container-lowest/25 font-label-lg text-label-lg transition-all"
                  href="#host-section"
                >
                  Buka Rumahmu
                </a>
              </div>
              {/*  Ticker Stats Floating Glass Bar  */}
              <div className="w-full max-w-4xl rounded-full bg-surface-container-lowest/10 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-headline-md text-headline-md text-secondary-fixed font-bold">120+</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-dim">
                      Connect Groups
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-headline-md text-headline-md text-primary-fixed font-bold">14</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-dim">
                      Wilayah Jabodetabek
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-headline-md text-headline-md text-secondary-fixed font-bold">3,200+</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-dim">
                      Anggota Aktif
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-headline-md text-headline-md text-primary-fixed font-bold">Mingguan</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-dim">
                      Persekutuan Meja
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 2: THE HEART OF COMMUNITY (Light Warm Ivory Section)  */}
          <section className="relative w-full py-28 bg-surface overflow-hidden">
            {/*  Floating Editorial Watermark  */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center font-display-hero text-[15vw] leading-none font-black tracking-tighter text-surface-container-highest/25 uppercase whitespace-nowrap will-change-transform"
              id="watermark-fellowship"
            >
              FELLOWSHIP
            </div>
            <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-margin">
              {/*  Section Header  */}
              <div className="max-w-3xl mb-20">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-3">
                  Nafas &amp; DNA Persekutuan
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-6">
                  Gereja bukan sekadar mimbar raya Minggu,
                  <br />
                  <span className="italic text-primary font-serif">tetapi meja makan di hari biasa.</span>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  “Dengan bertekun dan dengan sehati mereka berkumpul tiap-tiap hari dalam Bait Allah. Mereka memecahkan
                  roti di rumah masing-masing secara bergilir dan makan bersama-sama dengan gembira dan dengan tulus
                  hati.”
                </p>
                <span className="font-label-md text-label-md uppercase tracking-wider text-outline block mt-3">
                  — Kisah Para Rasul 2:46
                </span>
              </div>
              {/*  Core Pillars (Ultra-clean, zero border boxes, asymmetric flow)  */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="group flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">favorite</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold mb-2">
                    01 / Authenticity
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-3">Keterbukaan Hati</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Tempat yang aman untuk membuka topeng rohani, membagikan luka, dan menerima doa tanpa rasa dihakimi
                    atau dikucilkan.
                  </p>
                </div>
                <div className="group flex flex-col md:translate-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-secondary-container mb-6 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">menu_book</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold mb-2">
                    02 / Discipleship
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-3">Bertumbuh dalam Firman</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Bukan sekadar diskusi teori Alkitab, melainkan penerapan praktis firman hari Minggu ke dalam
                    tantangan dunia kerja dan relasi.
                  </p>
                </div>
                <div className="group flex flex-col lg:translate-y-12">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary-container mb-6 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold mb-2">
                    03 / Intercession
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-3">Dukungan Doa Konstan</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Menghadapi lembah kekelaman bersama. Rekan sekelompok yang siap berdoa di saat genting tengah malam
                    sekalipun.
                  </p>
                </div>
                <div className="group flex flex-col md:translate-y-6 lg:translate-y-16">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-tertiary-container mb-6 transition-transform group-hover:scale-110 shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">public</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold mb-2">
                    04 / Urban Impact
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-3">Dampak Nyata bagi Kota</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Kelompok tidak hidup untuk dirinya sendiri. Setiap bulan kami bergerak memberkati panti asuhan,
                    pemulung, dan lingkungan rukun tetangga.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 3: EXPLORE GROUPS (Dark Editorial Section)  */}
          <section className="relative w-full py-32 bg-[#0c0817] overflow-hidden" id="explore-groups">
            {/*  Huge Watermark  */}
            <div
              className="absolute top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center font-display-hero text-[16vw] leading-none font-black tracking-tighter text-surface-container-highest/5 uppercase whitespace-nowrap will-change-transform"
              id="watermark-discover"
            >
              DISCOVER
            </div>
            <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-margin">
              {/*  Section Header  */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-bold block mb-3">
                    Temukan Komunitasmu
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight">
                    Pilih Menurut Tahap Hidup &amp; Lokasi
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-surface-variant max-w-md">
                  Semua grup mengadakan pertemuan tatap muka mingguan dengan opsi streaming hybrid bagi jemaat yang
                  sedang dinas luar kota.
                </p>
              </div>
              {/*  Filter Tabs (Pill Buttons)  */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none" id="group-filters">
                <button
                  className="filter-btn px-6 py-2.5 rounded-full font-label-md text-label-md transition-all bg-surface text-on-surface shadow-md"
                  data-filter="all"
                  type="button"
                >
                  Semua Grup
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full font-label-md text-label-md transition-all bg-surface-container-highest/10 text-surface-variant hover:text-surface hover:bg-surface-container-highest/20"
                  data-filter="youth"
                  type="button"
                >
                  Kingdom Youth
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full font-label-md text-label-md transition-all bg-surface-container-highest/10 text-surface-variant hover:text-surface hover:bg-surface-container-highest/20"
                  data-filter="pro"
                  type="button"
                >
                  Young Professionals
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full font-label-md text-label-md transition-all bg-surface-container-highest/10 text-surface-variant hover:text-surface hover:bg-surface-container-highest/20"
                  data-filter="family"
                  type="button"
                >
                  Couples &amp; Families
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full font-label-md text-label-md transition-all bg-surface-container-highest/10 text-surface-variant hover:text-surface hover:bg-surface-container-highest/20"
                  data-filter="marketplace"
                  type="button"
                >
                  Marketplace Guild
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full font-label-md text-label-md transition-all bg-surface-container-highest/10 text-surface-variant hover:text-surface hover:bg-surface-container-highest/20"
                  data-filter="golden"
                  type="button"
                >
                  Golden Age (55+)
                </button>
              </div>
              {/*  Group Cards Mosaic (No harsh borders, elevated glass)  */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="groups-grid">
                {/*  Card 1  */}
                <div
                  className="group-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-lg transition-all duration-300"
                  data-category="pro"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-primary-container/40 text-primary-fixed uppercase tracking-wider">
                        Young Pro
                      </span>
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-secondary-fixed">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Tatap Muka + Hybrid
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-surface mb-2">SCBD Light Bearers</h3>
                    <p className="font-body-md text-body-md text-surface-variant mb-6 line-clamp-2">
                      Bertumbuh dalam integritas karier korporat, keseimbangan kerja, dan doa syafaat bagi rekan kantor
                      di pusat bisnis Jakarta.
                    </p>
                    <div className="space-y-2 mb-8 text-surface-dim font-body-sm text-body-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">person</span>
                        <span className="">Leader: Jonathan Kevin &amp; Vania</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">schedule</span>
                        <span className="">Rabu, 19:30 WIB (Mingguan)</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
                          location_on
                        </span>
                        <span className="">Senopati / Coffee Lab Lt. 2</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-full bg-surface-container-lowest/15 hover:bg-primary-container text-surface hover:text-on-primary font-label-md text-label-md transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                    type="button"
                  >
                    <span className="">Gabung Grup</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                {/*  Card 2  */}
                <div
                  className="group-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-lg transition-all duration-300"
                  data-category="youth"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-secondary-container/30 text-secondary-fixed uppercase tracking-wider">
                        Kingdom Youth
                      </span>
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-primary-fixed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> On-Site
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-surface mb-2">
                      Campus Catalyst UI &amp; Trisakti
                    </h3>
                    <p className="font-body-md text-body-md text-surface-variant mb-6 line-clamp-2">
                      Wadah mahasiswa saling menguatkan di tengah tekanan akademik, menemukan panggilan hidup sejati,
                      dan penyembahan akustik santai.
                    </p>
                    <div className="space-y-2 mb-8 text-surface-dim font-body-sm text-body-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">person</span>
                        <span className="">Leader: Daniel Pratama &amp; Grace</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">schedule</span>
                        <span className="">Jumat, 17:00 WIB (Mingguan)</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
                          location_on
                        </span>
                        <span className="">Grogol Community Hub</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-full bg-surface-container-lowest/15 hover:bg-primary-container text-surface hover:text-on-primary font-label-md text-label-md transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                    type="button"
                  >
                    <span className="">Gabung Grup</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                {/*  Card 3  */}
                <div
                  className="group-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-lg transition-all duration-300"
                  data-category="family"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-tertiary-container/50 text-tertiary-fixed uppercase tracking-wider">
                        Couples &amp; Family
                      </span>
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-secondary-fixed">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> On-Site + Kids Care
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-surface mb-2">
                      Bintaro Covenant Families
                    </h3>
                    <p className="font-body-md text-body-md text-surface-variant mb-6 line-clamp-2">
                      Membangun mezbah doa dalam pernikahan muda, parenting alkitabiah, dan persekutuan makan malam
                      hangat bersama anak-anak.
                    </p>
                    <div className="space-y-2 mb-8 text-surface-dim font-body-sm text-body-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">person</span>
                        <span className="">Leader: Hendra &amp; Melissa Wijaya</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">schedule</span>
                        <span className="">Sabtu, 17:00 WIB (2 Minggu Sekali)</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
                          location_on
                        </span>
                        <span className="">Sektor 9 Bintaro (Rumah Jemaat)</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-full bg-surface-container-lowest/15 hover:bg-primary-container text-surface hover:text-on-primary font-label-md text-label-md transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                    type="button"
                  >
                    <span className="">Gabung Grup</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                {/*  Card 4  */}
                <div
                  className="group-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-lg transition-all duration-300"
                  data-category="marketplace"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-primary-container/40 text-primary-fixed uppercase tracking-wider">
                        Marketplace Guild
                      </span>
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-secondary-fixed">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Hybrid
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-surface mb-2">
                      Entrepreneurs Kingdom Circle
                    </h3>
                    <p className="font-body-md text-body-md text-surface-variant mb-6 line-clamp-2">
                      Pendiri startup, pengusaha UMKM, dan eksekutif bisnis berkumpul untuk saling menopang dalam etika
                      Kristiani dan penatalayanan finansial.
                    </p>
                    <div className="space-y-2 mb-8 text-surface-dim font-body-sm text-body-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">person</span>
                        <span className="">Leader: Samuel Gunawan &amp; Team</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">schedule</span>
                        <span className="">Kamis Pagi, 07:00 WIB (Breakfast CG)</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
                          location_on
                        </span>
                        <span className="">Pondok Indah Sanctuary Club</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-full bg-surface-container-lowest/15 hover:bg-primary-container text-surface hover:text-on-primary font-label-md text-label-md transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                    type="button"
                  >
                    <span className="">Gabung Grup</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                {/*  Card 5  */}
                <div
                  className="group-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-lg transition-all duration-300"
                  data-category="golden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-tertiary-container/50 text-tertiary-fixed uppercase tracking-wider">
                        Golden Age
                      </span>
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-primary-fixed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> On-Site
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-surface mb-2">
                      Simeon &amp; Anna Fellowship
                    </h3>
                    <p className="font-body-md text-body-md text-surface-variant mb-6 line-clamp-2">
                      Jemaat senior usia 55+ yang penuh hikmat. Persekutuan puji-pujian himne, sharing kesaksian
                      pemeliharaan Tuhan, dan doa syafaat gereja.
                    </p>
                    <div className="space-y-2 mb-8 text-surface-dim font-body-sm text-body-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">person</span>
                        <span className="">Leader: Opa Paulus &amp; Oma Deborah</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">schedule</span>
                        <span className="">Selasa, 10:00 WIB (Pagi)</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
                          location_on
                        </span>
                        <span className="">Chapel Lt. 2 Senayan Boulevard</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-full bg-surface-container-lowest/15 hover:bg-primary-container text-surface hover:text-on-primary font-label-md text-label-md transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                    type="button"
                  >
                    <span className="">Gabung Grup</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                {/*  Card 6  */}
                <div
                  className="group-card flex flex-col justify-between p-8 rounded-2xl bg-surface-container-highest/5 hover:bg-surface-container-highest/10 backdrop-blur-lg transition-all duration-300"
                  data-category="pro"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-primary-container/40 text-primary-fixed uppercase tracking-wider">
                        Young Pro
                      </span>
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-secondary-fixed">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> On-Site
                      </span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-surface mb-2">
                      North Coast Creatives &amp; Media
                    </h3>
                    <p className="font-body-md text-body-md text-surface-variant mb-6 line-clamp-2">
                      Para desainer, pembuat film, musisi, dan copywriter berkumpul menjelajahi teologi keindahan dan
                      panggilan garam dunia digital.
                    </p>
                    <div className="space-y-2 mb-8 text-surface-dim font-body-sm text-body-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">person</span>
                        <span className="">Leader: Rayhan Hartono &amp; Clara</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">schedule</span>
                        <span className="">Kamis, 19:45 WIB</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-primary-fixed-dim">
                          location_on
                        </span>
                        <span className="">PIK Avenue Co-Working Hub</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 rounded-full bg-surface-container-lowest/15 hover:bg-primary-container text-surface hover:text-on-primary font-label-md text-label-md transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                    type="button"
                  >
                    <span className="">Gabung Grup</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 4: HOST A CONNECT GROUP (Light Section)  */}
          <section className="relative w-full py-28 bg-surface-container-low overflow-hidden" id="host-section">
            {/*  Floating Typographic Watermark  */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center font-display-hero text-[15vw] leading-none font-black tracking-tighter text-surface-container-highest/30 uppercase whitespace-nowrap will-change-transform"
              id="watermark-connect"
            >
              CONNECT
            </div>
            <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/*  Visual Column  */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div
                      className="w-full h-[460px] bg-cover bg-center"
                      data-alt="A warm, sunlit modern Indonesian living room where an inviting young couple hosts a small fellowship group with iced tea, home-baked cookies on wooden trays, open Bibles, cozy cushions, soft morning sunlight casting glowing lens flares, radiating warmth and joyful hospitality."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCS5rbqq20KO3pH-uAI0wqHtlaGhItTT6Gsw8hutVbRwIYEOcRXn9X7g3CTtRJrOc483h4Ea9iQQyg3LDNLtFTBpBxPlmireoOJMMepgCd_Es8PLY0YriZM3USG1DkgSID-7eSSZhCF6sMk7C2uasKH3jyy884saRsapJUbYrf1lp7KK-pb8DgH2iDBGLNzrKNlrK9wXQ_NX5leWy3eFYWOw0NyaQAnvdzlIV2Z94')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 inset-x-6 text-on-primary">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block mb-1">
                        Panggilan Pemimpin
                      </span>
                      <p className="font-headline-sm text-headline-sm font-bold">
                        Kamu tidak butuh rumah mewah, cukup hati yang menyambut.
                      </p>
                    </div>
                  </div>
                </div>
                {/*  Editorial Info Column  */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-3">
                    Host or Facilitate
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-6">
                    Buka Rumahmu,
                    <br />
                    <span className="italic text-primary font-serif">Nyalakan Lingkunganmu.</span>
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                    Setiap kebangunan rohani kota berawal dari satu meja makan yang dibuka dengan kerendahan hati. Kami
                    mendampingi setiap Host dan Facilitator dari langkah pertama sehingga kamu tidak melangkah
                    sendirian.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    <div className="p-4 rounded-2xl bg-surface shadow-sm">
                      <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">school</span>
                      <h4 className="font-title-md text-title-md font-bold text-on-surface mb-1">
                        Starter Kit &amp; Modul
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Panduan diskusi mingguan terstruktur selaras khotbah Minggu.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface shadow-sm">
                      <span className="material-symbols-outlined text-secondary-container text-[28px] mb-2 block">
                        support_agent
                      </span>
                      <h4 className="font-title-md text-title-md font-bold text-on-surface mb-1">
                        Pendampingan Pastor
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Dimentori langsung oleh Pastoral Team di zonamu setiap bulan.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface shadow-sm">
                      <span className="material-symbols-outlined text-tertiary-container text-[28px] mb-2 block">
                        groups
                      </span>
                      <h4 className="font-title-md text-title-md font-bold text-on-surface mb-1">Leader Community</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Gathering hamba Tuhan sehati untuk recharge rohani &amp; doa.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                      onClick={() => {}}
                      type="button"
                    >
                      Daftar Menjadi Pemimpin CG
                    </button>
                    <a
                      className="px-6 py-3.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors"
                      href="#faq"
                    >
                      Pelajari Alur Persiapan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 5: KESAKSIAN HIDUP / COMMUNITY STORIES (Dark Section)  */}
          <section className="relative w-full py-32 bg-[#0a0710] overflow-hidden">
            {/*  Huge Watermark  */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center font-display-hero text-[18vw] leading-none font-black tracking-tighter text-surface-container-highest/5 uppercase whitespace-nowrap will-change-transform"
              id="watermark-family"
            >
              FAMILY
            </div>
            <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-margin">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-bold block mb-3">
                  Buah Persekutuan
                </span>
                <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight">
                  Cerita dari Meja Makan
                </h2>
              </div>
              {/*  Asymmetric Editorial Testimonial Grid  */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/*  Main Story (8 Cols)  */}
                <div className="lg:col-span-7 p-10 md:p-14 rounded-3xl bg-surface-container-highest/5 backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-[48px] text-secondary-container mb-6 opacity-60">
                      format_quote
                    </span>
                    <p className="font-headline-sm text-headline-sm text-surface font-normal leading-relaxed mb-8">
                      “Saat saya dirumahkan dari pekerjaan dan ibu saya masuk ICU, saya tidak tahu harus mengadu ke
                      siapa. Connect Group saya tidak hanya mendoakan setiap malam, mereka mengumpulkan dana talangan
                      rumah sakit dan mengantar makanan ke kosan saya tanpa saya minta. Di sanalah saya melihat wajah
                      Yesus yang sesungguhnya.”
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary-container flex items-center justify-center text-on-primary font-bold">
                      AT
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-surface">Andreas Triputra</h4>
                      <p className="font-body-sm text-body-sm text-surface-variant">
                        Anggota CG Kuningan Young Professionals (Bergabung 3 tahun)
                      </p>
                    </div>
                  </div>
                </div>
                {/*  Secondary Story (5 Cols)  */}
                <div className="lg:col-span-5 p-10 rounded-3xl bg-surface-container-highest/5 backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-[48px] text-primary-fixed-dim mb-6 opacity-60">
                      format_quote
                    </span>
                    <p className="font-body-lg text-body-lg text-surface-dim font-normal leading-relaxed mb-6">
                      “Dulu pernikahan kami di ujung tanduk karena luka masa lalu. Melalui keterbukaan dengan pasangan
                      mentor di Family CG, kami dipulihkan secara perlahan dan kini rumah kami menjadi tempat berkumpul
                      anak-anak muda.”
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-secondary-container to-tertiary flex items-center justify-center text-on-primary font-bold">
                      DW
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-surface">David &amp; Wendy Kusuma</h4>
                      <p className="font-body-sm text-body-sm text-surface-variant">Leaders CG Tangerang Family</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 6: FAQ & NEXT STEPS (Light Section)  */}
          <section className="relative w-full py-28 bg-surface overflow-hidden" id="faq">
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/*  FAQ Intro & Pastoral Chat  */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-3">
                      Panduan Langkah Pertama
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-6">
                      Pertanyaan yang Sering Muncul
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                      Merasa gugup untuk datang pertama kali adalah hal yang wajar. Kami ingin memastikan langkah
                      pertamamu senyaman mungkin.
                    </p>
                  </div>
                  {/*  Pastoral Assistant Card  */}
                  <div className="p-6 rounded-3xl bg-surface-container-low shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-[24px]">chat</span>
                      </div>
                      <div>
                        <h4 className="font-title-md text-title-md font-bold text-on-surface">
                          Butuh Rekomendasi Pribadi?
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Tim Pastoral Siap Menjawab WhatsApp Anda
                        </p>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                      Ceritakan area tempat tinggalmu atau kesibukan harianmu, tim kami akan mencocokkan grup yang
                      paling sesuai.
                    </p>
                    <a
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all"
                      href="https://wa.me/6281234567890?text=Halo%20Pastoral%20Kingdom%20Life,%20saya%20ingin%20bergabung%20dengan%20Connect%20Group."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">forum</span>
                      <span className="">Hubungi Pastoral Assistant (+62 812-3456-7890)</span>
                    </a>
                  </div>
                </div>
                {/*  Accordion Q&A Items (Zero rigid lines)  */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  {/*  Item 1  */}
                  <div
                    className="faq-item p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Bagaimana cara pertama kali bergabung?
                      </h3>
                      <span className="faq-icon material-symbols-outlined text-primary transition-transform duration-300">
                        expand_more
                      </span>
                    </div>
                    <div className="faq-content hidden pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      Cukup pilih grup dari daftar di atas lalu klik tombol “Gabung Grup”. Pemimpin grup akan
                      menghubungimu dalam kurun 24 jam untuk memberi tahu jadwal pertemuan terdekat serta lokasi titik
                      kumpul.
                    </div>
                  </div>
                  {/*  Item 2  */}
                  <div
                    className="faq-item p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Bolehkah saya datang mencoba dulu tanpa komitmen?
                      </h3>
                      <span className="faq-icon material-symbols-outlined text-primary transition-transform duration-300">
                        expand_more
                      </span>
                    </div>
                    <div className="faq-content hidden pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      Tentu saja! Kami sangat menganjurkan kamu menghadiri 2–3 sesi pertemuan terlebih dahulu untuk
                      merasakan dinamika persekutuan dan kenyamanan bersama saudara seiman di grup tersebut sebelum
                      memutuskan bergabung permanen.
                    </div>
                  </div>
                  {/*  Item 3  */}
                  <div
                    className="faq-item p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Apakah ada grup yang berformat online / daring?
                      </h3>
                      <span className="faq-icon material-symbols-outlined text-primary transition-transform duration-300">
                        expand_more
                      </span>
                    </div>
                    <div className="faq-content hidden pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      Ya. Sebagian besar Connect Group berstatus hybrid atau memiliki sesi virtual via Zoom setiap
                      bulan, terutama bagi jemaat yang berdomisili di luar kota atau jemaat global sanctuary yang
                      mengikuti ibadah daring.
                    </div>
                  </div>
                  {/*  Item 4  */}
                  <div
                    className="faq-item p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Bagaimana jika saya belum dibaptis atau baru mengenal iman Kristen?
                      </h3>
                      <span className="faq-icon material-symbols-outlined text-primary transition-transform duration-300">
                        expand_more
                      </span>
                    </div>
                    <div className="faq-content hidden pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      Connect Group adalah ruang terbuka untuk setiap pencari kebenaran. Kamu tidak diwajibkan memiliki
                      latar belakang rohani tertentu. Semua orang disambut hangat apa adanya.
                    </div>
                  </div>
                  {/*  Item 5  */}
                  <div
                    className="faq-item p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Apa saja syarat untuk membuka rumah sebagai Host CG?
                      </h3>
                      <span className="faq-icon material-symbols-outlined text-primary transition-transform duration-300">
                        expand_more
                      </span>
                    </div>
                    <div className="faq-content hidden pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      Syarat utamanya adalah kerinduan melayani jemaat. Kamu telah mengikuti ibadah reguler setidaknya 6
                      bulan di Kingdom Life dan bersedia mengikuti pembekalan singkat Leader Onboarding selama 2 sesi
                      bersama Pastoral Team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  Interactive Join Modal Sheet  */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300"
            id="join-modal"
          >
            <div
              className="w-full max-w-lg mx-4 p-8 rounded-3xl bg-surface shadow-2xl transition-all transform scale-95"
              id="modal-box"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block">
                    Pendaftaran Terbuka
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface" id="modal-title">
                    Gabung Connect Group
                  </h3>
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <form className="space-y-4" id="join-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container transition-all"
                    placeholder="cth. Natanael Wijaya"
                    required={true}
                    type="text"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container transition-all"
                    placeholder="0812 3456 xxxx"
                    required={true}
                    type="tel"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Domisili Area
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container transition-all"
                    placeholder="cth. Jakarta Barat / Kebon Jeruk"
                    required={true}
                    type="text"
                  />
                </div>
                <div className="pt-2">
                  <button
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-lg text-label-lg shadow-lg hover:opacity-95 transition-opacity"
                    type="submit"
                  >
                    Kirim Permohonan Gabung
                  </button>
                </div>
              </form>
              <div className="hidden text-center py-6" id="join-success">
                <span className="material-symbols-outlined text-primary text-[52px] mb-2">check_circle</span>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-2">Terima Kasih!</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Pemimpin grup akan menghubungimu melalui WhatsApp dalam waktu 24 jam ke depan.
                </p>
                <button
                  className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md"
                  onClick={() => {}}
                  type="button"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
          {/*  Interactive Host Leader Modal Sheet  */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300"
            id="host-modal"
          >
            <div
              className="w-full max-w-lg mx-4 p-8 rounded-3xl bg-surface shadow-2xl transition-all transform scale-95"
              id="host-modal-box"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block">
                    Panggilan Pelayanan
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Daftar Menjadi Pemimpin CG
                  </h3>
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <form className="space-y-4" id="host-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Nama Pasangan / Pribadi
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container transition-all"
                    placeholder="cth. Ronald &amp; Jessica"
                    required={true}
                    type="text"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container transition-all"
                    placeholder="0811 xxxx xxxx"
                    required={true}
                    type="tel"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Rencana Wilayah Pertemuan
                  </label>
                  <input
                    className="w-full px-5 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container transition-all"
                    placeholder="cth. Kelapa Gading, Jakarta Utara"
                    required={true}
                    type="text"
                  />
                </div>
                <div className="pt-2">
                  <button
                    className="w-full py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-primary-container transition-all"
                    type="submit"
                  >
                    Kirim Pengajuan Pemimpin
                  </button>
                </div>
              </form>
              <div className="hidden text-center py-6" id="host-success">
                <span className="material-symbols-outlined text-secondary-container text-[52px] mb-2">
                  volunteer_activism
                </span>
                <h4 className="font-title-lg text-title-lg font-bold text-on-surface mb-2">Langkah Awal yang Indah!</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Pastoral Director Wilayahmu akan mengundangmu untuk sesi bincang hangat dan kopi bersama.
                </p>
                <button
                  className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md"
                  onClick={() => {}}
                  type="button"
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <KingdomFooter />
    </div>
  );
}
