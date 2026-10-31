'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { KingdomHeader } from './KingdomHeader';
import { KingdomFooter } from './KingdomFooter';

export function StitchCleanParallax() {
  useParallax();

  return (
    <div className="w-full min-h-screen text-jpcc-black font-sans antialiased overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
      {/*  Floating Left Social Column  */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer">
          <span className="text-xs font-mono">𝕏</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer">
          <span className="text-xs font-mono">f</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[14px]">smart_display</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[14px]">photo_camera</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[14px]">podcasts</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer">
          <span className="text-xs font-mono">♪</span>
        </div>
      </div>
      {/*  ========================================================
       TOP NAVIGATION BAR
       ========================================================  */}
      <KingdomHeader />
      {/*  ========================================================
       SEGMENT 1: HERO SECTION — GELAP (DARK)
       ========================================================  */}
      <section
        className="relative min-h-[96vh] flex items-center justify-center bg-black overflow-hidden pt-24 pb-16 px-6"
        id="hero"
      >
        {/*  Cinematic Dark Worship Sanctuary Image with subtle Parallax  */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt="Kingdom Life Church vibrant charismatic worship night crowd raising hands in adoration"
            className="parallax-item w-full h-[135%] object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.1]"
            data-parallax-speed="0.28"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XY-2_kVFwn7m19r7MblZMn5vSjw5XPgwUlLtjyuXA4EEgpxHqINGRMnnan-Je920s6diKHwBYFIxSyGe7xPVH2SqDlWBLy-gba48IijQ2f0H5NGGjFIg4-BBVPeveBDo6a5-1EOJrJNTQhxAx_WWGRXzWwvTjsLIy9g8816yvyOtgTitr2S47lISFmyxDrAC0xZObn_9rWwg8FodGPdxF3AO6hL7LlkfEZ9U7Rzg6YstS7G-bj2dgbfN0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-black/40 to-black/80"></div>
        </div>
        {/*  Evocative Headline & Content  */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 mt-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
            In the house of GOD, we flourish
          </h1>
          <p className="text-white/70 text-base sm:text-xl font-light max-w-2xl mx-auto mb-10 tracking-wide">
            Encounter God. Walk in supernatural life. A community committed to loving God and blessing nations.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 active:scale-95 transition-all shadow-2xl"
              href="#story"
            >
              Explore What&apos;s New
            </a>
            <a
              className="px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 active:scale-95 transition-all flex items-center gap-2"
              href="#jadwal-ibadah"
            >
              <span>Campus Times</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
        {/*  Minimal Scroll Indicator  */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">Scroll Down</span>
          <span className="material-symbols-outlined text-white text-[18px] animate-bounce">expand_more</span>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 2: OUR STORY & LEADERSHIP SPOTLIGHT — TERANG (LIGHT)
       ========================================================  */}
      <section className="bg-[#faf8f5] text-[#111827] py-28 px-6 lg:px-12 relative overflow-hidden" id="story">
        {/*  Parallax Typographic Watermark  */}
        <div
          className="absolute -top-16 left-8 w-full pointer-events-none opacity-[0.035] parallax-item"
          data-parallax-speed="-0.15"
        >
          <span className="watermark-subtle block font-black text-[20vw] leading-none text-[#111827] uppercase select-none">
            OUR STORY
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/*  Leadership Spotlight Box with Senior Pastor Photo  */}
          <div
            className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl bg-black group parallax-item"
            data-parallax-speed="0.06"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <img
                alt="Ps. David &amp; Sarah Miller preaching dynamically on stage"
                className="w-full h-full object-cover object-center filter brightness-[0.8] group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W0gldtbjiMXaaWSYBaN3raD6wfa6nU37cqgA5_MhXaznECn5LhXVyx7qB8cRlNM2exgBlf18ca9u2vvoc763U3Eok0EHkAym1VwzpVGdlTr9HeElx2hsaotTSuMGdCtiEUGNKC4n9jdgob_SvygI6E30n7klNl1f0NOm8z1JRofYp5scP6p_hxweOJEsRBFfN1VBHP81Td3CuzoyFknADgUKZgdriQMqS8F_P1iyM8McVdyRXHZWIVvw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              {/*  Pastor Signature Overlay  */}
              <div className="absolute bottom-8 md:bottom-12 left-8 md:left-14">
                <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white font-medium tracking-wide drop-shadow-md block">
                  Ps. David &amp; Sarah Miller
                </span>
                <div className="flex items-center gap-3 mt-3">
                  <span className="w-8 h-0.5 bg-white/60"></span>
                  <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-white/80">
                    Senior Pastors
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  Vision & Mission Editorial 2-Column Split (No lines/dividers)  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-2">
            {/*  Column 1: Our Vision  */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary block">Our Vision</span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] leading-snug">
                Gereja lokal yang relevan dengan dampak global.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal pt-2">
                A spirit-filled apostolic family walking in the tangible glory of God, bringing the living authority of
                Jesus Christ into every sphere of culture and society.
              </p>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 hover:bg-black hover:text-white text-xs font-bold uppercase tracking-wider text-gray-900 transition-all group"
                  href="#jadwal-ibadah"
                >
                  <span>More About Us</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/*  Column 2: Our Mission  */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary block">Our Mission</span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] leading-snug">
                Membangun generasi-generasi bintang yang berkenan kepada Allah dan dihormati manusia.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal pt-2">
                Equipping sons and daughters of God to grow deep in sound doctrine, uncompromised holiness, authentic
                community, and marketplace excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 3: CAMPUSES & SUNDAY SERVICE SCHEDULE — GELAP (DARK)
       ========================================================  */}
      <section className="bg-[#0d0f14] text-white py-28 px-6 lg:px-12 relative overflow-hidden" id="jadwal-ibadah">
        {/*  Background Glow Watermark  */}
        <div
          className="absolute -top-24 right-10 pointer-events-none opacity-[0.03] parallax-item"
          data-parallax-speed="-0.12"
        >
          <span className="watermark-subtle block font-black text-[18vw] leading-none text-white uppercase select-none">
            SCHEDULE
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Sunday Services &amp; Schedule</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">Jadwal Ibadah</h2>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl font-light">
                Bergabunglah bersama kami secara onsite di Central Sanctuary maupun melalui tayangan siaran langsung.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                href="#prayer-support"
              >
                <span className="material-symbols-outlined text-[16px]">notifications</span>
                <span>Info Pelayanan</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-purple-600 transition-all shadow-lg"
                href="#hero"
              >
                <span className="material-symbols-outlined text-[16px]">live_tv</span>
                <span>Nonton Live</span>
              </a>
            </div>
          </div>
          {/*  Schedule Items without horizontal divider lines  */}
          <div className="space-y-4 mt-6">
            {/*  Sesi 1: Ibadah Umum  */}
            <div className="py-7 px-6 md:px-8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-extrabold uppercase tracking-wider">
                    Ibadah Umum
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-bold uppercase tracking-wider">
                    Onsite &amp; Live Stream
                  </span>
                </div>
                <h3 className="text-3xl font-mono font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  10:00 - 12:00 <span className="text-base font-sans font-medium text-white/50">WIB</span>
                </h3>
                <span className="text-xs text-white/60 font-semibold uppercase tracking-wider block mt-1">
                  General &amp; Family Celebration
                </span>
              </div>
              <div className="md:col-span-5 space-y-1">
                <p className="text-sm text-white/90 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">location_on</span>
                  <span>Grand Ballroom Grand Indonesia, 8th Floor</span>
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Ibadah raya mingguan jemaat, persekutuan keluarga, pujian penyembahan, dan khotbah firman Tuhan.
                </p>
              </div>
              <div className="md:col-span-3 flex justify-start md:justify-end gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  <span>Live Broadcast</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/80">
                  <span className="material-symbols-outlined text-[14px]">translate</span>
                  <span>EN/ID</span>
                </span>
              </div>
            </div>
            {/*  Sesi 2: Ibadah Sekolah Minggu  */}
            <div className="py-7 px-6 md:px-8 rounded-2xl bg-white/[0.015] hover:bg-white/[0.05] transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] uppercase font-bold tracking-wider text-white/80">
                    Ibadah Sekolah Minggu
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold uppercase tracking-wider">
                    Kids Service (Onsite)
                  </span>
                </div>
                <h3 className="text-3xl font-mono font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  10:00 - 12:00 <span className="text-base font-sans font-medium text-white/50">WIB</span>
                </h3>
                <span className="text-xs text-white/60 font-semibold uppercase tracking-wider block mt-1">
                  Kingdom Kids Sanctuary
                </span>
              </div>
              <div className="md:col-span-5 space-y-1">
                <p className="text-sm text-white/90 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">location_on</span>
                  <span>Kingdom Kids Sanctuary, 8th Floor</span>
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Ibadah kreatif, pembelajaran firman yang interaktif, puji-pujian ceria, dan kelompok tumbuh untuk
                  anak-anak (Batita - SD).
                </p>
              </div>
              <div className="md:col-span-3 flex justify-start md:justify-end">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/80">
                  <span className="material-symbols-outlined text-[14px]">child_care</span>
                  <span>Kelas Kids (Usia 1-12 Tahun)</span>
                </span>
              </div>
            </div>
            {/*  Sesi 3: Ibadah Way-Ex  */}
            <div className="py-7 px-6 md:px-8 rounded-2xl bg-white/[0.015] hover:bg-white/[0.05] transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] uppercase font-bold tracking-wider">
                    Ibadah Way-Ex
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-bold uppercase tracking-wider">
                    Youth &amp; Campus
                  </span>
                </div>
                <h3 className="text-3xl font-mono font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  13:00 - 15:00 <span className="text-base font-sans font-medium text-white/50">WIB</span>
                </h3>
                <span className="text-xs text-white/60 font-semibold uppercase tracking-wider block mt-1">
                  Teens, Youth &amp; Campus Community
                </span>
              </div>
              <div className="md:col-span-5 space-y-1">
                <p className="text-sm text-white/90 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">location_on</span>
                  <span>Youth Chapel - 9th Floor, Grand Indonesia</span>
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Ibadah generasi muda dinamis (SMP, SMA, &amp; Mahasiswa/Youth Adults) dengan worship berenergi tinggi,
                  komunitas otentik, dan firman yang relevan.
                </p>
              </div>
              <div className="md:col-span-3 flex justify-start md:justify-end">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-bold uppercase tracking-wider text-white transition-all"
                  href="#community"
                >
                  <span>Youth Community &amp; Tribe</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 4: "COMMUNITY" — TERANG (LIGHT)
       ========================================================  */}
      <section className="bg-[#fdfcfa] text-[#111] py-28 px-6 lg:px-12 relative overflow-hidden" id="community">
        {/*  Background Watermark  */}
        <div
          className="absolute -top-16 left-12 pointer-events-none opacity-[0.035] parallax-item"
          data-parallax-speed="-0.14"
        >
          <span className="watermark-subtle block font-black text-[20vw] leading-none text-[#111] uppercase select-none">
            COMMUNITY
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-primary text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Life Groups &amp; Fellowship</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111] leading-[1.05]">
                Community
                <br />
                <span className="text-2xl sm:text-4xl font-light text-gray-500 block mt-2">
                  Tumbuh Bersama dalam Komunitas yang Autentik.
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                Gereja bukan hanya sekadar gedung atau acara di hari Minggu, melainkan keluarga rohani yang saling
                mengasihi, mendoakan, dan menopang di setiap musim kehidupan melalui Connect Groups (Date Community).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
                    <span className="material-symbols-outlined text-[20px]">diversity_1</span>
                    <span>Kingdom Youth</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Komunitas remaja &amp; mahasiswa penuh antusiasme, kreativitas, dan persahabatan sejati.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
                    <span className="material-symbols-outlined text-[20px]">work</span>
                    <span>Young Professionals</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Grup kaum muda profesional berdiskusi tentang iman, tujuan hidup, dan tantangan karir.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
                    <span className="material-symbols-outlined text-[20px]">family_restroom</span>
                    <span>Couples &amp; Families</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Membangun pernikahan kokoh, pola asuh berakar firman, dan kehangatan rumah tangga.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
                    <span className="material-symbols-outlined text-[20px]">store</span>
                    <span>Marketplace Guild</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Para entrepreneur &amp; pemimpin bisnis yang mempraktikkan integritas Kerajaan Allah.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  className="px-8 py-3.5 rounded-full bg-[#111] text-white font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-md flex items-center gap-2"
                  href="#prayer-support"
                >
                  <span>Temukan Komunitasmu</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl group bg-white parallax-item"
                data-parallax-speed="0.08"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    alt="Warm outdoor community church dinner table with smiling fellowship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VovMZd4WbD4R9WRFoT7kQo6L1CQjAn2uA-UajvUwlxBrHPkpZt_KfpKH6k7OSWt16yrZkY0drQUr68zT_yIGHNXTNxJ1rvMD4R-h-n8jb7PLSMxTrYTKNuWb9RkU3cE23F2DmFsBSQc9l3Gb78nF9D_3HY7Ad9qIh7WuVuqLY-1KdbWOPRNg42p2aSdi66ozzzRFO4CtfH0BVqIW7hAaWaWd72AHzXt55XKvfV4lU2PSf3_m-txr2w1XE"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-[10px] font-extrabold uppercase tracking-wider inline-block mb-3">
                    Connect Groups Gathering
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    &ldquo;Di mana dua atau tiga orang berkumpul dalam nama-Ku, di situ Aku ada di tengah mereka.&rdquo;
                  </h3>
                  <p className="text-xs text-white/80 mt-2 font-light">
                    Pertemuan rutin mingguan di rumah-rumah &amp; ruang hangat di sekeliling Jabodetabek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 5: PEMURIDAN / DISCIPLESHIP JOURNEY — GELAP (DARK)
       CLEAN EDITORIAL, NO DIVIDERS, NO CARDS, NO TIMELINE LINES
       ========================================================  */}
      <section className="relative bg-[#0c0d13] text-white px-6 lg:px-12 overflow-hidden py-28" id="pemuridan">
        {/*  Ambient Glow & Parallax Watermark  */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] rounded-full bg-purple-900/25 filter blur-[150px] pointer-events-none"></div>
        <div
          className="absolute -top-16 left-6 pointer-events-none opacity-[0.03] parallax-item"
          data-parallax-speed="-0.16"
        >
          <span className="watermark-subtle block font-black text-[19vw] leading-none text-white uppercase select-none">
            DISCIPLESHIP
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/*  Header Section without divider line  */}
          <div className="pb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Jalur Pemuridan • Discipleship Journey</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Bukan sekadar program.
                <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-amber-200 to-white">
                  Sebuah transformasi seutuhnya.
                </span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-4 max-w-2xl font-light leading-relaxed">
                Perjalanan pembinaan bertahap untuk menuntun setiap pribadi dari perjumpaan awal dengan Kristus hingga
                menjadi saksi dan pemimpin yang berdampak nyata bagi generasi.
              </p>
            </div>
          </div>
          {/*  Clean Editorial 3-Column Layout: No Lines, No Cards, No Badges  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-2">
            {/*  4MT  */}
            <div className="group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-mono font-bold tracking-tight text-purple-400">4MT</span>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Kelas Dasar</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  Fondasi Iman &amp; Kebenaran
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Membangun dasar iman, pemahaman karya keselamatan di kayu salib, dan identitas baru sebagai ciptaan
                  baru di dalam Kristus.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                  <span className="text-amber-300">Batch Terbuka</span>
                  <span>•</span>
                  <span>Info Kelas / Daftar</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-white/40 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
            {/*  SOM  */}
            <div className="group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-mono font-bold tracking-tight text-purple-400">SOM</span>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold">School of Ministry</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  Bertumbuh, Berakar &amp; Melayani
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Membangun kedewasaan rohani, hidup berakar dalam kebenaran firman, mempraktikkan gaya hidup
                  penyembahan, serta melengkapi jemaat untuk melayani sesama dalam tubuh Kristus.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                  <span className="text-amber-300">Prasyarat 4MT</span>
                  <span>•</span>
                  <span>Connect Groups &amp; Ministry</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-white/40 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
            {/*  SOD  */}
            <div className="group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-mono font-bold tracking-tight text-amber-300">SOD</span>
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold">School of Disciples</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  Melayani &amp; Memuridkan Bangsa-Bangsa
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Menemukan panggilan otoritas Kerajaan Allah, menjadi saksi yang berdampak nyata di dunia kerja,
                  masyarakat, dan diutus untuk memuridkan bangsa-bangsa.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                  <span className="text-amber-300">Prasyarat SOM</span>
                  <span>•</span>
                  <span>Leadership &amp; Mission</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 6: EVENTS & CONFERENCES — TERANG (LIGHT)
       ========================================================  */}
      <section className="bg-[#f8f6f2] py-24 px-6 lg:px-12 relative overflow-hidden" id="events">
        {/*  Background Watermark  */}
        <div
          className="absolute -top-14 right-8 pointer-events-none opacity-[0.035] parallax-item"
          data-parallax-speed="-0.12"
        >
          <span className="watermark-subtle block font-black text-[20vw] leading-none text-[#111] uppercase select-none">
            EVENTS
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary block mb-1">
                Calendar &amp; Assemblies
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight">Events</h2>
            </div>
            <a
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#111827] hover:text-primary transition-colors group"
              href="#"
            >
              <span>More Events</span>
              <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </a>
          </div>
          {/*  Events Grid with subtle floating parallax  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/*  Event 1: Awakening Conference 2025  */}
            <div
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 parallax-item"
              data-parallax-speed="0.05"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-purple-950">
                <img
                  alt="Youth rally praise crowd"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V4CA-LqJ4z40ebiKhflzlpTGLroIDV9CZ386MgbYxVPvhAwnkGGu3zTnNeeLnI3UBQRS3uSeV98LQj-3GHy8DS_L0ibGIl9m-vvF9FK8gtQ49QqDwetW0mniqdi38xLpFqT1hOo-q24Od8qmu3feYx5q5arquiKAXD4Zjrt5mn3vYccn48Iy3TIUtbBrrVdF5WL2lZPShNw86fyiGwpI-K6GEAGPfVrOQAVz6LsdCbpcYPdcV-LsyJxOA"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-[10px] font-extrabold uppercase tracking-wider">
                    Upcoming
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-white/70">Annual Gathering</span>
                  <h3 className="text-2xl font-black">Awakening Conference 2025: Ignite</h3>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between bg-white">
                <div>
                  <span className="text-xs font-mono uppercase text-gray-500">
                    Fri-Sat, 14–15 Nov 2025 • Main Auditorium
                  </span>
                  <p className="text-sm font-bold text-[#111827] mt-0.5">Registration Open for All Generations</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#111] group-hover:text-white flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
            {/*  Event 2: Worship Night  */}
            <div
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 parallax-item"
              data-parallax-speed="0.08"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-indigo-950">
                <img
                  alt="Kingdom Life worship night auditorium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XY-2_kVFwn7m19r7MblZMn5vSjw5XPgwUlLtjyuXA4EEgpxHqINGRMnnan-Je920s6diKHwBYFIxSyGe7xPVH2SqDlWBLy-gba48IijQ2f0H5NGGjFIg4-BBVPeveBDo6a5-1EOJrJNTQhxAx_WWGRXzWwvTjsLIy9g8816yvyOtgTitr2S47lISFmyxDrAC0xZObn_9rWwg8FodGPdxF3AO6hL7LlkfEZ9U7Rzg6YstS7G-bj2dgbfN0"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-white text-black text-[10px] font-extrabold uppercase tracking-wider">
                    Live &amp; Onsite
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-white/70">
                    Praise &amp; Prophetic Prayer
                  </span>
                  <h3 className="text-2xl font-black">Holy Spirit Worship &amp; Miracle Night</h3>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between bg-white">
                <div>
                  <span className="text-xs font-mono uppercase text-gray-500">Friday, 28 Nov 2025 • 19:00 WIB</span>
                  <p className="text-sm font-bold text-[#111827] mt-0.5">Free Admission • Open for Public</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#111] group-hover:text-white flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 7: DEVOTIONAL / RENUNGAN HARIAN — GELAP (DARK)
       ========================================================  */}
      <section className="bg-[#0a0c10] text-white py-28 px-6 lg:px-12 relative overflow-hidden" id="devotional">
        {/*  Background Watermark  */}
        <div
          className="absolute -top-16 left-10 pointer-events-none opacity-[0.03] parallax-item"
          data-parallax-speed="-0.14"
        >
          <span className="watermark-subtle block font-black text-[19vw] leading-none text-white uppercase select-none">
            DEVOTIONAL
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Daily Devotional • Food for the Soul</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">Renungan Harian</h2>
              <p className="text-white/60 text-base mt-2 max-w-xl font-light">
                Segarkan jiwamu setiap pagi dengan santapan rohani yang berakar kuat pada kebenaran Firman Allah.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="px-6 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[16px]">archive</span>
                <span>Arsip Renungan</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/*  Main Featured Devotional  */}
            <div className="lg:col-span-8 bg-[#141720] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-amber-300 font-mono">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Hari Ini • 27 Oktober 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> 3 min read
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">person</span> Oleh Ps. David Miller
                    </span>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5">
                  <span className="text-[11px] uppercase tracking-widest text-white/50 font-bold block mb-2">
                    Ayat Emas Hari Ini (Scripture Verse of the Day)
                  </span>
                  <blockquote className="text-lg sm:text-2xl font-serif italic text-white leading-relaxed">
                    “Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali
                    yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka berjalan
                    dan tidak menjadi lelah.”
                  </blockquote>
                  <span className="text-xs font-mono font-bold text-amber-400 block mt-3">— Yesaya 40:31 (TB)</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Menemukan Kekuatan di Tengah Keheningan
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
                    Sering kali kita mengira bahwa kekuatan datang dari kesibukan kita untuk menyelesaikan segala
                    persoalan dengan daya kita sendiri. Namun, prinsip Kerajaan Allah mengajarkan hal sebaliknya:
                    kekuatan supranatural bermula dari perhentian kudus di hadirat Tuhan. Ketika kita berdiam dan
                    menanti-nantikan-Nya, Dia menukar kelelahan kita dengan daya ilahi-Nya.
                  </p>
                </div>
              </div>
              <div className="pt-8 mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    aria-label="Putar Audio Renungan"
                    className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-400 transition-colors shadow-lg"
                  >
                    <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                  </button>
                  <div>
                    <span className="text-xs font-bold text-white block">Dengarkan Audio Renungan</span>
                    <span className="text-[11px] text-white/50 font-mono">Format Podcast • 04:12 Menit</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-600 transition-all">
                    <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    <span>Baca Selengkapnya</span>
                  </button>
                  <button
                    aria-label="Bagikan Renungan"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </button>
                </div>
              </div>
            </div>
            {/*  Sidebar Devotionals & Newsletter  */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="bg-[#141720] rounded-3xl p-6">
                <span className="text-xs uppercase font-extrabold tracking-widest text-white/50 block mb-4">
                  Renungan Pekan Ini
                </span>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-pointer">
                    <span className="text-[10px] font-mono text-amber-300">26 Okt • Ps. Sarah Miller</span>
                    <h4 className="text-sm font-bold text-white hover:text-amber-300 transition-colors mt-0.5">
                      Damai Sejahtera yang Melampaui Akal Manusia
                    </h4>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-pointer">
                    <span className="text-[10px] font-mono text-amber-300">25 Okt • Pastoral Team</span>
                    <h4 className="text-sm font-bold text-white hover:text-amber-300 transition-colors mt-0.5">
                      Menabur Benih Kebaikan di Tempat Kerja
                    </h4>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-pointer">
                    <span className="text-[10px] font-mono text-amber-300">24 Okt • Ps. David Miller</span>
                    <h4 className="text-sm font-bold text-white hover:text-amber-300 transition-colors mt-0.5">
                      Berakar Teguh dalam Kasih yang Kekal
                    </h4>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-tr from-purple-950 via-indigo-950 to-black rounded-3xl p-6 relative overflow-hidden shadow-xl">
                <span className="material-symbols-outlined text-[36px] text-amber-400 mb-2">mail</span>
                <h4 className="text-lg font-black text-white">Langganan Renungan Harian</h4>
                <p className="text-xs text-white/70 mt-1 font-light">
                  Kutipan ayat &amp; renungan langsung dikirim ke WhatsApp / email Anda setiap pagi pukul 06:00 WIB.
                </p>
                <form className="mt-4 space-y-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-1 focus:ring-amber-400 border-0"
                    placeholder="Alamat Email atau No. WhatsApp"
                    type="text"
                  />
                  <button
                    className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                    type="submit"
                  >
                    Kirimkan Setiap Pagi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 8: PASTORAL CARE & PRAYER REQUEST — TERANG (LIGHT)
       ========================================================  */}
      <section className="bg-[#fbf9f6] text-[#111827] py-28 px-6 lg:px-12 relative overflow-hidden" id="prayer-support">
        {/*  Background Watermark  */}
        <div
          className="absolute -top-16 right-10 pointer-events-none opacity-[0.035] parallax-item"
          data-parallax-speed="-0.14"
        >
          <span className="watermark-subtle block font-black text-[20vw] leading-none text-[#111] uppercase select-none">
            PRAYER
          </span>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-primary text-[11px] font-bold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>Pastoral Care &amp; Prayer Support</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111827] leading-tight">
                  How can we pray for you?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-3">
                  Kami percaya pada kuasa doa. Tim pastoral dan pendoa syafaat kami siap mendoakan setiap kebutuhan,
                  beban, dan pergumulan Anda secara khusus dan rahasia.
                </p>
              </div>
              {/*  Pastoral WhatsApp Card  */}
              <div className="p-6 rounded-2xl bg-white shadow-lg space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#111827]">Butuh Bantuan Mendesak?</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Untuk kebutuhan konseling kedukaan, krisis darurat, atau percakapan langsung dengan pastoral care:
                    </p>
                  </div>
                </div>
                <a
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md"
                  href="https://wa.me/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Hubungi Sekretariat via WhatsApp</span>
                </a>
                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 font-mono">
                  <span>Jam Layanan Cepat:</span>
                  <span className="text-gray-900 font-bold">08:00 - 21:00 WIB</span>
                </div>
              </div>
              <div className="space-y-2 text-xs text-gray-600 font-normal">
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-purple-700">lock</span>
                  <span>Setiap permohonan doa dijaga kerahasiaannya.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-purple-700">verified</span>
                  <span>Tim pendoa mendoakan setiap pokok doa secara langsung.</span>
                </p>
              </div>
            </div>
            {/*  Form Container Card in Light Mode without borders  */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl relative">
                <div className="mb-6 pb-2">
                  <h3 className="text-2xl font-bold text-[#111827]">Form Permohonan Doa</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Silakan isi form di bawah ini agar tim kami dapat mendoakan Anda secara spesifik.
                  </p>
                </div>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 text-[#111827] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all border-0"
                        placeholder="Contoh: Jonathan Aditya"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        No. WhatsApp / Email
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 text-[#111827] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all border-0"
                        placeholder="0812-xxxx-xxxx atau email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer border-0 bg-gray-100"
                      id="anonymous-check"
                      type="checkbox"
                    />
                    <label className="text-xs text-gray-600 cursor-pointer" htmlFor="anonymous-check">
                      Kirim sebagai Anonim (Nama Anda tidak akan dipublikasikan ke pendoa syafaat)
                    </label>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2">
                      Kategori Pokok Doa
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 cursor-pointer text-xs text-gray-800 transition-colors">
                        <input
                          defaultChecked={true}
                          className="text-primary focus:ring-0"
                          name="prayer_category"
                          type="radio"
                        />
                        <span>Kesehatan &amp; Kesembuhan</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 cursor-pointer text-xs text-gray-800 transition-colors">
                        <input className="text-primary focus:ring-0" name="prayer_category" type="radio" />
                        <span>Keluarga &amp; Pernikahan</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 cursor-pointer text-xs text-gray-800 transition-colors">
                        <input className="text-primary focus:ring-0" name="prayer_category" type="radio" />
                        <span>Pemulihan Finansial</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 cursor-pointer text-xs text-gray-800 transition-colors">
                        <input className="text-primary focus:ring-0" name="prayer_category" type="radio" />
                        <span>Pekerjaan &amp; Karir</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 cursor-pointer text-xs text-gray-800 transition-colors">
                        <input className="text-primary focus:ring-0" name="prayer_category" type="radio" />
                        <span>Ketenangan Jiwa / Mental Peace</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-purple-50 cursor-pointer text-xs text-gray-800 transition-colors">
                        <input className="text-primary focus:ring-0" name="prayer_category" type="radio" />
                        <span>Lainnya</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2">
                      Kotak Pesan Pokok Doa
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 text-[#111827] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all border-0"
                      placeholder="Tuliskan pokok doa atau kebutuhan Anda secara bebas di sini..."
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-700 via-primary to-amber-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Kirim Pokok Doa</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/*  Social Links in Light Section  */}
          <div className="max-w-6xl mx-auto mt-16 flex items-center justify-center gap-6 text-gray-500">
            <a className="hover:text-primary transition-colors" href="#">
              <span className="text-xs font-mono">𝕏</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="text-xs font-mono">f</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[16px]">smart_display</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[16px]">podcasts</span>
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <span className="text-xs font-mono">♪</span>
            </a>
          </div>
        </div>
      </section>
      {/*  ========================================================
       SEGMENT 9: FOOTER — GELAP (DARK)
       ========================================================  */}
      <KingdomFooter />
      {/*  ========================================================
       VANILLA JAVASCRIPT: SMOOTH HIGH-PERFORMANCE PARALLAX
       ========================================================  */}
    </div>
  );
}
