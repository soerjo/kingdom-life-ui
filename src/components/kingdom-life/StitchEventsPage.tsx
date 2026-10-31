'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { KingdomHeader } from './KingdomHeader';
import { KingdomFooter } from './KingdomFooter';

export function StitchEventsPage() {
  useParallax();

  return (
    <div className="w-full min-h-screen text-jpcc-black font-sans antialiased overflow-x-hidden selection:bg-purple-100 selection:text-purple-900 pt-20">
      <KingdomHeader />
      <main className="w-full bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/*  SECTION 1: HERO (Dark Editorial Parallax)  */}
          <section className="relative w-full overflow-hidden bg-[#0a0710] text-white pb-20 md:pb-28 pt-16">
            <div
              className="absolute inset-0 bg-cover bg-center pointer-events-none scale-105 opacity-25 mix-blend-luminosity will-change-transform"
              data-alt="Massive vibrant modern charismatic church worship concert night with confetti falling, atmospheric stage lighting in amber and violet beams, thousands of people with raised hands singing in unison with live band."
              id="parallax-hero-bg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr2DIT5vxtnPxUBvfi4a_2FwC2vg1pldIWo7nKrZmECde_-bVhTs6hhijVw_vuLnnA4kSYieU3ZfZqhRKGl7vueNzURczeTQyZwHV3G7e4NO4uaNlm6cmhGgzRjRqMCobCs9w_DZG4qwk64azq3pbKjTOqnESHR2thM8nYWxw0y-vjMiXvVk-HcmQnYsPHBaUno_ZKKc_m_dGZRH-g6HONNYIjwidESNOtfYdpsu4')",
              }}
            ></div>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#673ab7]/35 via-[#ff5722]/15 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
            <div
              className="absolute top-1/4 -right-16 text-[11rem] md:text-[16rem] font-display-hero font-extrabold tracking-tighter text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap will-change-transform"
              id="watermark-assembly"
            >
              ASSEMBLY
            </div>
            <div className="relative max-w-[1240px] mx-auto px-6 lg:px-margin z-10 flex flex-col items-start pt-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#d3bbff]">
                  Kalender Musim Rohani 2025
                </span>
              </div>
              <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero max-w-4xl text-white font-extrabold leading-[1.08] tracking-tight mb-8">
                Momen Pertemuan dengan Hadirat-Nya.
              </h1>
              <p className="font-body-lg text-body-lg text-white/70 max-w-2xl leading-relaxed mb-12">
                Dari Worship Night yang intim hingga Konferensi Akbar yang membangkitkan generasi. Bersiaplah mengalami
                lawatan Roh Kudus, pemulihan hati, dan api revival baru.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 max-w-3xl" id="filter-pill-group">
                <button
                  className="filter-btn active px-6 py-2.5 rounded-full bg-white text-[#1d192a] font-label-lg text-label-lg shadow-lg hover:shadow-xl transition-all"
                  type="button"
                >
                  Semua Acara
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 font-label-lg text-label-lg transition-all backdrop-blur-sm"
                  type="button"
                >
                  Konferensi Akbar
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 font-label-lg text-label-lg transition-all backdrop-blur-sm"
                  type="button"
                >
                  Worship Nights
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 font-label-lg text-label-lg transition-all backdrop-blur-sm"
                  type="button"
                >
                  Youth Rallies
                </button>
                <button
                  className="filter-btn px-6 py-2.5 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 font-label-lg text-label-lg transition-all backdrop-blur-sm"
                  type="button"
                >
                  Workshop &amp; Masterclass
                </button>
              </div>
            </div>
          </section>
          {/*  SECTION 2: FEATURED FLAGSHIP EVENT (Warm Ivory Light Section)  */}
          <section className="relative w-full py-32 bg-surface text-on-surface overflow-hidden">
            {/*  Huge Editorial Watermark  */}
            <div
              className="absolute top-12 -left-20 text-[10rem] md:text-[18rem] font-display-hero font-extrabold text-primary/[0.03] select-none pointer-events-none uppercase whitespace-nowrap will-change-transform"
              id="watermark-awakening"
            >
              AWAKENING
            </div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin z-10">
              {/*  Section Tag  */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-0.5 bg-secondary-container"></span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container">
                  Konferensi Tahunan Nasional
                </span>
              </div>
              {/*  Main Showcase Grid  */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/*  Left: Editorial Typography & Registration  */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Early Bird Dibuka
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                      14–15 November 2025
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-extrabold text-on-surface tracking-tight mb-6">
                    Awakening Conference 2025: <span className="italic font-light text-primary">IGNITE</span>
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                    Dua hari perjumpaan supernatural di hadirat Tuhan. Kami merindukan setiap anak muda, pemimpin gereja
                    lokal, dan keluarga menerima urapan segar Roh Kudus untuk membakar kota kita dengan kasih Kristus.
                  </p>
                  {/*  Schedule Breakdown  */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl bg-surface-container-low shadow-sm mb-10">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Hari 1 · Jumat
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Pembukaan &amp; Fire Night
                      </span>
                      <span className="font-body-sm text-body-sm text-outline mt-1">Sesi 1–2 (17:00 – 21:30)</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Hari 2 · Siang
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Masterclasses &amp; Labs
                      </span>
                      <span className="font-body-sm text-body-sm text-outline mt-1">Sesi 3–4 (09:30 – 15:00)</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Hari 2 · Malam
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Prophetic Impartation
                      </span>
                      <span className="font-body-sm text-body-sm text-outline mt-1">Sesi 5 (17:00 – 21:00)</span>
                    </div>
                  </div>
                  {/*  CTAs  */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary-container text-white font-label-lg text-label-lg shadow-[0_10px_25px_-5px_rgba(103,58,183,0.35)] hover:scale-[1.02] transition-transform"
                      href="#"
                    >
                      <span className="">Registrasi Early Bird (IDR 250k)</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[18px]">group</span>
                      <span className="">Daftar Rombongan (Min. 5 Orang)</span>
                    </a>
                  </div>
                </div>
                {/*  Right: Speaker Lineup & Visual Banner  */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-highest">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-alt="Passionate youth rally onstage with dynamic praise worship team, laser spotlights in warm orange and violet tones, confetti floating midair, and vibrant joyful atmosphere."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2GsTK3wmBJc44e53ShF35jfBBAKEB4Ykiof9IuxoH9lGGciedE4XnH3-Tvngy4lktlcuiFbWxwafute-XsqU__UJ37RPQj40A705Re27C5hjSqoWgOv4NpzFKnppe2OPcKi38Vre3eACVCp2rznCFwwhhj1wZ1L-2fyH7H7vUv6R_vDs1MfU-7i-ZbctBVRgdC-0ORrtww5-gqyqE6g_zKXzYTBvPK2XGXHPhxZY')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-transparent flex flex-col justify-end p-8">
                      <span className="text-white font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-1">
                        Venue Utama
                      </span>
                      <span className="text-white font-title-lg text-title-lg font-bold">
                        The Grand Hall Sanctuary · Senayan Jakarta
                      </span>
                    </div>
                  </div>
                  {/*  Speakers Row  */}
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col gap-4">
                    <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">
                      Lineup Pembicara &amp; Pelayan Firman
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3 overflow-hidden">
                        <div
                          className="w-12 h-12 rounded-full bg-cover bg-center shadow-md ring-2 ring-surface"
                          data-alt="Portrait of dynamic male lead pastor in crisp minimalist attire smiling warmly against soft studio glow."
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWViEnNJotcU-LQBjfRF80H-yyRPncjKU6ze1xZGOD0Ao3AjcRn6vuC_qYp7jT2fiq5M-lVWub_5elmSADRfBoDHmLQnbD6xb7sIfDR3oiVSMWzXBuWC0uOQasu4dc4ozuUlbiigTsTXlrHMmOtMmcnpy2-nmVqNDittH_ZH-f_ugN2gyR_XG9aPcUplJ0mTTzHOqYdphyavwuLnLvHmdJCKEMU6MvfpysjKRfXgs')",
                          }}
                        ></div>
                        <div
                          className="w-12 h-12 rounded-full bg-cover bg-center shadow-md ring-2 ring-surface"
                          data-alt="Portrait of female worship leader and speaker with graceful radiant expression."
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9jJaagH-tZ8zqYX5pzu9JR2XpuOclgPwYdqCgbHpLvXzb-aXR3c3uneKF1iJC1SDW1XxhEmhOB9O64oWEUNF_sFguAD_juo0yBO_vfXygQXVuYXTplTnVRyLur7jdOiQTA4evX1bt0fraDeDN413xZMqf3TVFnnnvcZ27dMe4l_JS_38DR7K5Co4iOWtIPTQpf51A4vKvcXcZAjDeaX3BKOGRMZTPRA0n3C2cutc')",
                          }}
                        ></div>
                        <div
                          className="w-12 h-12 rounded-full bg-cover bg-center shadow-md ring-2 ring-surface"
                          data-alt="Portrait of guest international charismatic revivalist speaker with warm friendly smile."
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh1JvpcRDhp3lVgZb_bpglHCTUFs0rT0HHlw4Bbv5-adZbQ1gAvcL79-D60RaaVzIn2ME3NpB3SUCHZQihAZuUl7KOq4B42Xl-SiEZgz6ZUzPmYjrRDnBfF91CgTYYBkc2ZRycBctEAtELWzV94amme0NynvpvRcsm5L3IZtgJIoD6aJf1hwxCtrgmjCo4LV6qnwWqDtYK7KmceMOm9yOnq3GTaswtQ-fqp_h78a8')",
                          }}
                        ></div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-semibold text-on-surface">
                          Ps. David &amp; Sarah Miller
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          + International Guest Ministers &amp; Kingdom Worship Team
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 3: WORSHIP NIGHTS & ENCOUNTERS (Dark Section)  */}
          <section className="relative w-full py-28 md:py-32 bg-[#0d0914] text-white overflow-hidden">
            <div
              className="absolute top-16 -right-12 text-[10rem] md:text-[18rem] font-display-hero font-extrabold text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap will-change-transform"
              id="watermark-encounter"
            >
              ENCOUNTER
            </div>
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#673ab7]/20 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="relative max-w-[1240px] mx-auto px-6 lg:px-margin z-10">
              <div className="flex flex-col max-w-2xl mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-[#ffba38]"></span>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-[#ffba38]">
                    Perjumpaan Bulanan
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-white tracking-tight mb-4">
                  Worship Nights &amp; Menara Doa.
                </h2>
                <p className="font-body-lg text-body-lg text-white/70">
                  Penyembahan tanpa batas waktu di mana kita berhenti mengejar agenda manusia dan membiarkan Roh Kudus
                  memimpin seutuhnya. Terbuka gratis untuk umum.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-[#ff5722]/20 text-[#ffb5a0] font-label-sm text-label-sm uppercase tracking-wider font-semibold border border-[#ff5722]/30">
                      Gratis · Terbuka Umum
                    </span>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-[#ffb5a0] transition-colors">
                      arrow_back_ios_new
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#ffba38] mb-2">
                    Jumat Terakhir Setiap Bulan
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-white mb-3">Holy Spirit Miracle Night</h3>
                  <p className="font-body-md text-body-md text-white/70 mb-8 flex-1 leading-relaxed">
                    Malam penyembahan profetik yang diiringi doa kesembuhan Ilahi, pelepasan, dan penumpangan tangan
                    bagi jemaat yang berbeban berat.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t-0 bg-white/[0.02] -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-white/60">Pukul</span>
                      <span className="font-title-md text-title-md text-white font-bold">19:00 WIB</span>
                    </div>
                    <a
                      className="px-5 py-2.5 rounded-full bg-white text-[#1d192a] font-label-md text-label-md hover:bg-[#d3bbff] transition-colors font-semibold shadow-md"
                      href="#"
                    >
                      RSVP Tempat
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-[#673ab7]/30 text-[#d3bbff] font-label-sm text-label-sm uppercase tracking-wider font-semibold border border-[#673ab7]/40">
                      Mingguan
                    </span>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-[#d3bbff] transition-colors">
                      wb_twilight
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#ffba38] mb-2">
                    Setiap Sabtu Pagi
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-white mb-3">
                    Dawn Intercession (Doa Fajar)
                  </h3>
                  <p className="font-body-md text-body-md text-white/70 mb-8 flex-1 leading-relaxed">
                    Membangun mezbah doa kota sebelum matahari terbit. Mengangkat bangsa kita, gereja Tuhan, dan
                    keluarga dalam syafaat bersama para pendoa.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t-0 bg-white/[0.02] -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-white/60">Pukul</span>
                      <span className="font-title-md text-title-md text-white font-bold">05:30 WIB</span>
                    </div>
                    <a
                      className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 font-label-md text-label-md transition-colors font-semibold"
                      href="#"
                    >
                      Join Hybrid
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-[#744f00]/60 text-[#ffdeac] font-label-sm text-label-sm uppercase tracking-wider font-semibold border border-[#ffba38]/30">
                      Creative Guild
                    </span>
                    <span className="material-symbols-outlined text-white/40 group-hover:text-[#ffdeac] transition-colors">
                      palette
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#ffba38] mb-2">
                    Rabu Minggu Ke-2
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-white mb-3">
                    Arts, Music &amp; Media Guild
                  </h3>
                  <p className="font-body-md text-body-md text-white/70 mb-8 flex-1 leading-relaxed">
                    Komunitas musisi, desainer visual, sound engineer, dan penari berkumpul untuk jamming profetik,
                    sharing visi artistik, dan pembaruan hati.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t-0 bg-white/[0.02] -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-white/60">Pukul</span>
                      <span className="font-title-md text-title-md text-white font-bold">19:30 WIB</span>
                    </div>
                    <a
                      className="px-5 py-2.5 rounded-full bg-white text-[#1d192a] font-label-md text-label-md hover:bg-[#d3bbff] transition-colors font-semibold shadow-md"
                      href="#"
                    >
                      Gabung Studio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 4: ANNUAL CALENDAR & TIMELINE (Light Section)  */}
          <section className="relative w-full py-32 bg-surface text-on-surface overflow-hidden">
            {/*  Huge Watermark  */}
            <div
              className="absolute top-20 -left-16 text-[10rem] md:text-[18rem] font-display-hero font-extrabold text-primary/[0.03] select-none pointer-events-none uppercase whitespace-nowrap will-change-transform"
              id="watermark-calendar"
            >
              CALENDAR
            </div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                    Rencana Tahunan 2025
                  </span>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-extrabold text-on-surface tracking-tight mt-2">
                    Timeline Musim Pelayanan
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Rencanakan kalender cuti dan agenda rohani keluarga Anda bersama agenda momentum gereja lokal.
                </p>
              </div>
              {/*  Clean Borderless Timeline (Alternating Quarters)  */}
              <div className="flex flex-col gap-10">
                {/*  Q1  */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 md:p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex flex-col min-w-[160px]">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest">
                      Kuartal 1 (Jan - Mar)
                    </span>
                    <span className="font-headline-md text-headline-sm font-extrabold text-on-surface">
                      Paskah &amp; Puasa
                    </span>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        21 Hari Doa &amp; Puasa Daniel
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        6–26 Januari 2025 · Membuka tahun baru dengan disiplin rohani dan penyelarasan hati seluruh
                        jemaat.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Easter Celebration: Risen King
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        18–20 April 2025 · 4 Ibadah Raya Paskah, baptisan air akbar, dan drama teatrikal kebangkitan.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                      Telah Berlangsung
                    </span>
                  </div>
                </div>
                {/*  Q2  */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 md:p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex flex-col min-w-[160px]">
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                      Kuartal 2 (Apr - Jun)
                    </span>
                    <span className="font-headline-md text-headline-sm font-extrabold text-on-surface">
                      Generasi Muda
                    </span>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        RISE UP: National Youth Camp
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        26–28 Juni 2025 · Villa Bukit Danau Bogor. 500 pemuda berkumpul untuk perjumpaan radikal.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Kingdom Kids Vacation Bible School
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        3–5 Juli 2025 · Liburan berfaedah mendalami karakter Alkitab untuk anak usia 4–12 tahun.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a
                      className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors"
                      href="#"
                    >
                      Buku Panduan Camp
                    </a>
                  </div>
                </div>
                {/*  Q3  */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 md:p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex flex-col min-w-[160px]">
                    <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-widest">
                      Kuartal 3 (Jul - Sep)
                    </span>
                    <span className="font-headline-md text-headline-sm font-extrabold text-on-surface">
                      Misi &amp; Komunitas
                    </span>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        City Impact &amp; Global Missions Month
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Agustus 2025 · Aksi sosial serentak 5 wilayah Jakarta, pengobatan gratis, dan penjangkauan pulau
                        terluar.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Connect Groups Leaders Summit
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        19–20 September 2025 · Pelatihan kapasitas kepemimpinan penggembalaan kelompok sel.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a
                      className="px-5 py-2.5 rounded-full bg-surface-container-highest text-primary font-label-md text-label-md hover:bg-primary-fixed transition-colors"
                      href="#"
                    >
                      Pendaftaran Misi
                    </a>
                  </div>
                </div>
                {/*  Q4  */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 md:p-10 rounded-3xl bg-surface-container-high shadow-md">
                  <div className="flex flex-col min-w-[160px]">
                    <span className="font-label-sm text-label-sm text-secondary-container uppercase font-bold tracking-widest">
                      Kuartal 4 (Okt - Des)
                    </span>
                    <span className="font-headline-md text-headline-sm font-extrabold text-primary">
                      Revival &amp; Natal
                    </span>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Awakening Conference: IGNITE
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        14–15 November 2025 · Puncak perayaan rohani tahunan di The Grand Hall Sanctuary.
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Christmas Musical: Light of the World
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        24–25 Desember 2025 · Pagelaran orkestra megah, lilin Natal, dan refleksi kelahiran Juruselamat.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="px-5 py-2.5 rounded-full bg-secondary-container text-white font-label-md text-label-md shadow-md animate-pulse">
                      Highlight Utama
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 5: HOST OR VOLUNTEER (Dark Section)  */}
          <section className="relative w-full py-28 md:py-32 bg-[#110c1c] text-white overflow-hidden">
            <div
              className="absolute top-1/3 -right-20 text-[10rem] md:text-[18rem] font-display-hero font-extrabold text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap will-change-transform"
              id="watermark-revival"
            >
              REVIVAL
            </div>
            <div className="relative max-w-[1240px] mx-auto px-6 lg:px-margin z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 relative">
                  <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-highest border border-white/10">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-alt="Modern church broadcast media control room and backstage production volunteers operating digital sound mixing consoles and multi-camera broadcast switchers in atmospheric studio lighting."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAn2sG_189XnageO_eHP0anhYgmnUsCl4cXL3vBomaDQaZvuEJzOtvao1QZdMko9bBpR0nu3kHmQ01L0o3ycwWIUh9seoGDFpJzJ0JRSWX1YNmBiPAvjxzT6Od8W5WUqrSO9huvwbMP1a-15Q9hvsTP16m4MfBz4l8cbqavPahXbOcITEtCAHW5VPaQytyoKy7_oSMI9FQFNzETZcfUPGItMg-m7lZbi-YxS0l8Fhs')",
                      }}
                    ></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#673ab7] text-white shadow-xl hidden sm:flex flex-col max-w-xs border border-white/10">
                    <span className="font-title-md text-title-md font-bold mb-1">1 Korintus 12:27</span>
                    <p className="font-body-sm text-body-sm text-[#d3bbff]">
                      “Kamu semua adalah tubuh Kristus dan kamu masing-masing adalah anggotanya.”
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col items-start lg:pl-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-[#ff5722]"></span>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-[#ff5722] font-bold">
                      Menjadi Bagian dari Mujizat
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-white tracking-tight mb-6">
                    Melayani di Balik Layar Acara.
                  </h2>
                  <p className="font-body-lg text-body-lg text-white/70 leading-relaxed mb-10">
                    Setiap puji-pujian yang terdengar dan setiap jiwa yang terjamah didukung oleh tangan-tangan setia
                    tim relawan. Kami percaya pelayanan bukan sekadar tugas teknis, melainkan penyembahan yang nyata
                    bagi Raja di atas segala raja.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-3.5">
                      <span className="material-symbols-outlined text-[#ffb5a0] text-[24px]">front_hand</span>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-bold text-white">
                          Usher &amp; Hospitality
                        </span>
                        <span className="font-body-sm text-body-sm text-white/60">
                          Menyambut jemaat dengan senyum hangat Kristus
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-3.5">
                      <span className="material-symbols-outlined text-[#d3bbff] text-[24px]">videocam</span>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-bold text-white">
                          Live Broadcast &amp; Sound
                        </span>
                        <span className="font-body-sm text-body-sm text-white/60">
                          Operasional kamera, mixer audio &amp; LED wall
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-3.5">
                      <span className="material-symbols-outlined text-[#ffdeac] text-[24px]">child_care</span>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-bold text-white">
                          Kids Care &amp; Security
                        </span>
                        <span className="font-body-sm text-body-sm text-white/60">
                          Menjaga keamanan dan mendampingi kelas anak
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-3.5">
                      <span className="material-symbols-outlined text-[#ffb5a0] text-[24px]">health_and_safety</span>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-bold text-white">Prayer Intercessors</span>
                        <span className="font-body-sm text-body-sm text-white/60">
                          Mendoakan jalannya acara dan jemaat di bilik doa
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#673ab7] to-[#ff5722] text-white font-label-lg text-label-lg shadow-[0_10px_30px_rgba(103,58,183,0.4)] hover:scale-[1.02] transition-transform font-semibold"
                    href="#"
                  >
                    <span className="">Bergabung dengan Tim Volunteer</span>
                    <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 6: VENUE INFO & FAQ (Light Section)  */}
          <section className="relative w-full py-32 bg-surface text-on-surface">
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/*  Venue & Logistics  */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-primary"></span>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                      Informasi Lokasi
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-6">
                    Sanctuary &amp; Akses Kedatangan
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                    Semua flagship conference dan ibadah raya dipusatkan di Central Sanctuary dengan akses transportasi
                    umum terpadu dan fasilitas ramah keluarga.
                  </p>
                  {/*  Interactive Static Map Placeholder  */}
                  <div
                    className="w-full h-56 rounded-3xl bg-cover bg-center shadow-inner mb-6 relative overflow-hidden"
                    data-location="Senayan City, Jl. Asia Afrika No.19, Jakarta Pusat"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvoWp9gVi0tosbjc2J70lqb133m7pe4Q9r_QuKAXRdx1rxwDvIH2zA7_Hnj__ciknxkTixK3Atu47nV-sAtUmcwZkqL66ZkPJdcKx7dP5AlmHJLjk0_Fbb5jZ985kaBny_NWWxOEmweBB24vxzJyW5O6Wm-clE1KH85e6cA0PDF1eVmYkCe5SBnpoySvzlmSqA8y9IAiQNPXxXns46BVt1Fi4HK_Y_Tgot1Dr0ZHE')",
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md shadow-md flex items-center gap-2 text-on-surface font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-secondary-container text-[18px]">
                          location_on
                        </span>
                        The Grand Hall, Lt. 5 Senayan
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                        directions_subway
                      </span>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-semibold text-on-surface">
                          MRT &amp; TransJakarta
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Stasiun MRT Senayan (Pintu B) berjarak 400 meter. Shuttle gratis gereja beroperasi setiap 15
                          menit.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low">
                      <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">local_parking</span>
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md font-semibold text-on-surface">
                          Fasilitas Parkir Gedung
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Tersedia 1.200 slot parkir mobil di B1–B3 dengan validasi khusus jemaat gereja pada akhir
                          pekan.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  FAQ Accordion  */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-secondary-container"></span>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container font-bold">
                      Tanya Jawab Jemaat
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-8">
                    Pertanyaan Umum Seputar Acara
                  </h2>
                  <div className="flex flex-col gap-4" id="faq-container">
                    {/*  FAQ 1  */}
                    <div className="faq-item rounded-2xl bg-surface-container-low transition-colors">
                      <button
                        className="faq-toggle w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                        type="button"
                      >
                        <span className="font-title-md text-title-md font-bold text-on-surface">
                          Apakah ada biaya untuk menghadiri Worship Night bulanan?
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant faq-icon transition-transform">
                          expand_more
                        </span>
                      </button>
                      <div className="faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                        Tidak ada biaya sama sekali. Worship Night dan Doa Fajar terbuka cuma-cuma untuk seluruh jemaat
                        dan masyarakat umum. Registrasi online hanya bertujuan untuk mengestimasi kuota kursi
                        auditorium.
                      </div>
                    </div>
                    {/*  FAQ 2  */}
                    <div className="faq-item rounded-2xl bg-surface-container-low transition-colors">
                      <button
                        className="faq-toggle w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                        type="button"
                      >
                        <span className="font-title-md text-title-md font-bold text-on-surface">
                          Bagaimana penitipan anak saat Awakening Conference berlangsung?
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant faq-icon transition-transform">
                          expand_more
                        </span>
                      </button>
                      <div className="faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                        Tersedia Kingdom Kids Daycare and Ministry di Hall B untuk anak usia 2–11 tahun yang dipimpin
                        oleh tim guru sekolah minggu berpengalaman, lengkap dengan kurikulum belajar firman dan games
                        rohani.
                      </div>
                    </div>
                    {/*  FAQ 3  */}
                    <div className="faq-item rounded-2xl bg-surface-container-low transition-colors">
                      <button
                        className="faq-toggle w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                        type="button"
                      >
                        <span className="font-title-md text-title-md font-bold text-on-surface">
                          Apakah sesi konferensi disiarkan secara live streaming?
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant faq-icon transition-transform">
                          expand_more
                        </span>
                      </button>
                      <div className="faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                        Sesi pleno utama malam hari disiarkan gratis melalui channel Kingdom Life TV. Namun, sesi
                        Masterclass siang dan impartasi doa pribadi khusus diadakan secara on-site dan memerlukan tiket
                        peserta.
                      </div>
                    </div>
                    {/*  FAQ 4  */}
                    <div className="faq-item rounded-2xl bg-surface-container-low transition-colors">
                      <button
                        className="faq-toggle w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                        type="button"
                      >
                        <span className="font-title-md text-title-md font-bold text-on-surface">
                          Bagaimana jika saya memerlukan penerjemah bahasa (Translation)?
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant faq-icon transition-transform">
                          expand_more
                        </span>
                      </button>
                      <div className="faq-content hidden px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                        Tersedia perangkat penerima audio terjemahan simultan (Bahasa Indonesia &lt;&gt; English) di
                        meja Hospitality lantai 5 tanpa dipungut biaya dengan menunjukkan identitas kartu tanda penduduk
                        (KTP/Paspor).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  Interactive Client Behavior for Parallax & Interactions  */}
        </div>
      </main>
      <KingdomFooter />
    </div>
  );
}
