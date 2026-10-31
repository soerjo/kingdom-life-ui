'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { KingdomHeader } from './KingdomHeader';
import { KingdomFooter } from './KingdomFooter';

export function StitchDailyPage() {
  useParallax();

  return (
    <div className="w-full min-h-screen text-jpcc-black font-sans antialiased overflow-x-hidden selection:bg-purple-100 selection:text-purple-900 pt-20">
      <KingdomHeader />
      <main className="w-full bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/*  SECTION 1: HERO & TODAY'S DEVOTIONAL (Dark Editorial Parallax)  */}
          <section className="relative w-full overflow-hidden bg-[#0a0710] text-inverse-on-surface pb-24 md:pb-32 pt-16 md:pt-24">
            <div
              aria-hidden={true}
              className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-5"
            >
              <span
                className="parallax-layer absolute -top-16 -left-12 font-display-hero text-[14rem] md:text-[22rem] font-extrabold uppercase tracking-tighter leading-none text-white block"
                data-parallax="-0.22"
              >
                TRUTH
              </span>
            </div>
            <div
              aria-hidden={true}
              className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] rounded-full bg-primary-container/20 blur-[130px]"
            ></div>
            <div
              aria-hidden={true}
              className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary-container/15 blur-[120px]"
            ></div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin flex flex-col gap-16">
              <div className="flex flex-col max-w-3xl">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md w-fit mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                    Santapan Rohani Harian
                  </span>
                </div>
                <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero font-extrabold tracking-tight text-white leading-tight">
                  Berakar Kuat{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-secondary-fixed">
                    Setiap Hari.
                  </span>
                </h1>
                <p className="mt-4 font-body-lg text-body-lg text-inverse-on-surface/80 max-w-2xl">
                  Mulai harimu dengan kebenaran firman yang menghidupkan, mengarahkan tujuan ilahi, dan meneguhkan
                  setiap langkah hidupmu di tengah hiruk-pikuk dunia.
                </p>
              </div>
              <div className="w-full rounded-lg bg-white/[0.04] backdrop-blur-2xl p-8 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-7 flex flex-col gap-8">
                    <div className="flex items-center gap-4 text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                      <span className="font-label-md text-label-md tracking-wider uppercase">
                        Hari Ini • Jumat, 31 Oktober 2025
                      </span>
                    </div>
                    <div className="p-6 md:p-8 rounded-DEFAULT bg-white/[0.03] shadow-inner border border-white/5">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold mb-2 block">
                        Ayat Emas
                      </span>
                      <blockquote className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-white font-normal italic leading-snug">
                        “Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali
                        yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka
                        berjalan dan tidak menjadi lelah.”
                      </blockquote>
                      <cite className="mt-4 block font-title-md text-title-md font-semibold text-tertiary-fixed-dim not-italic">
                        — Yesaya 40:31 (TB)
                      </cite>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="font-headline-md text-headline-md font-bold text-white tracking-tight">
                        Menemukan Kekuatan di Tengah Keheningan
                      </h2>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold font-title-md">
                          DM
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md font-semibold text-white">Ps. David Miller</span>
                          <span className="font-body-sm text-body-sm text-inverse-on-surface/70">
                            Lead Pastor, Kingdom Life Jakarta
                          </span>
                        </div>
                      </div>
                      <p className="font-body-md text-body-md text-inverse-on-surface/85 leading-relaxed pt-2">
                        Di zaman yang mengagungkan produktivitas tanpa henti dan kecepatan tanpa jeda, menanti sering
                        kali dianggap sebagai sebuah kelemahan. Namun, di dalam Kerajaan Allah, penantian bukanlah
                        kepasifan. Menanti-nantikan Tuhan adalah tindakan iman yang paling berani; sebuah deklarasi
                        penyerahan diri di mana kita membiarkan kuasa Roh Kudus memulihkan ruang batin yang lelah
                        sebelum kita melangkah menaklukkan hari...
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-white font-label-lg text-label-lg shadow-xl hover:opacity-95 transition-all"
                        type="button"
                      >
                        Baca Renungan Lengkap
                      </button>
                      <button
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                        onClick={() => {}}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">bookmark</span>
                        <span className="">Simpan Ayat</span>
                      </button>
                      <button
                        className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all border border-white/10"
                        title="Bagikan ke WhatsApp"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">share</span>
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                    <div className="relative w-full aspect-[4/3] rounded-DEFAULT overflow-hidden shadow-2xl">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="A peaceful dawn landscape with warm golden sun rays piercing through serene morning fog, casting a gentle radiant purple and amber ambient glow over quiet mountains, symbolizing holy silence and renewed spiritual hope."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0CXkKYUMMG95QEGsOBc0PAq2U6t6DkdRj_sNbCYxveEBjoxizdMt-8kD4FVRyM3ZV12TwVoTbPCaZWIrCCSfzH08KXvB2Qu8QjxvDRz7Ji7gcnWxvjjtfLbTImiLYNn-zldywnPD1Mo82bwciTcaWU3Mam-78pi-k0IyRiYH6EdKifibdzD6JVVJCoW0_VnUMzZaHRCAcnj5Vpav8CXock_MIg2JEviD6oL2aq94"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0710] via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                          Edisi #1,204
                        </span>
                        <span className="font-label-sm text-label-sm bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                          Waktu Baca: 4 Menit
                        </span>
                      </div>
                    </div>
                    <div className="p-6 rounded-DEFAULT bg-white/[0.06] backdrop-blur-xl shadow-lg flex flex-col gap-4 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-secondary-fixed text-[26px]">podcasts</span>
                          <div>
                            <h3 className="font-title-md text-title-md font-semibold text-white">
                              Dengarkan Audio Renungan
                            </h3>
                            <p className="font-body-sm text-body-sm text-inverse-on-surface/70">
                              Narasi oleh Ps. Angela Stephanie • 06:45
                            </p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-primary/40 text-primary-fixed font-label-sm text-label-sm font-bold">
                          HD AUDIO
                        </span>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <button
                          className="w-12 h-12 rounded-full bg-white text-on-surface flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                          id="podcast-play-btn"
                          type="button"
                        >
                          <span
                            className="material-symbols-outlined text-[26px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            play_arrow
                          </span>
                        </button>
                        <div className="flex-1 flex items-center gap-1.5 h-8 px-2 overflow-hidden">
                          <span className="w-1 bg-secondary-fixed h-3 rounded-full animate-pulse"></span>
                          <span className="w-1 bg-secondary-fixed h-5 rounded-full"></span>
                          <span className="w-1 bg-white h-7 rounded-full"></span>
                          <span className="w-1 bg-white h-4 rounded-full"></span>
                          <span className="w-1 bg-white/60 h-6 rounded-full"></span>
                          <span className="w-1 bg-white/40 h-8 rounded-full"></span>
                          <span className="w-1 bg-white/30 h-3 rounded-full"></span>
                          <span className="w-1 bg-white/60 h-5 rounded-full"></span>
                          <span className="w-1 bg-white h-7 rounded-full"></span>
                          <span className="w-1 bg-secondary-fixed h-4 rounded-full"></span>
                          <span className="w-1 bg-white/80 h-6 rounded-full"></span>
                          <span className="w-1 bg-white/50 h-3 rounded-full"></span>
                          <span className="w-1 bg-white/40 h-5 rounded-full"></span>
                          <span className="w-1 bg-white/60 h-7 rounded-full"></span>
                          <span className="w-1 bg-white/30 h-4 rounded-full"></span>
                          <span className="w-1 bg-white/20 h-2 rounded-full"></span>
                          <span className="w-1 bg-white/40 h-5 rounded-full"></span>
                          <span className="w-1 bg-white/30 h-3 rounded-full"></span>
                        </div>
                        <span className="font-label-md text-label-md text-inverse-on-surface/80">02:18 / 06:45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 2: MORNING MANNA SUBSCRIPTION (Light Section - Warm Ivory)  */}
          <section className="relative w-full overflow-hidden bg-surface py-28 md:py-36">
            {/*  Huge Editorial Parallax Background Watermark  */}
            <div
              aria-hidden={true}
              className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-5"
            >
              <span
                className="parallax-layer absolute top-6 -right-16 font-display-hero text-[15rem] md:text-[24rem] font-black uppercase tracking-tight text-primary leading-none block"
                data-parallax="0.25"
              >
                MANNA
              </span>
            </div>
            {/*  Ambient Glow  */}
            <div
              aria-hidden={true}
              className="pointer-events-none absolute top-1/2 left-10 w-[450px] h-[450px] rounded-full bg-secondary-container/10 blur-[140px]"
            ></div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/*  Left: Subscription Pitch & Clean Form  */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed w-fit">
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                      Morning Manna Dispatch
                    </span>
                  </div>
                  <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight text-on-surface leading-tight">
                    Terima Firman Tuhan Langsung di WhatsApp Setiap 06:00 WIB.
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Bangun dengan kepastian janji Tuhan sebelum membuka media sosial. Renungan ringkas, audio berdurasi
                    3 menit, dan doa deklarasi harian terkirim rapi ke ponsel Anda setiap subuh.
                  </p>
                  {/*  Ultra-clean Form Block  */}
                  <div className="mt-4 p-8 rounded-lg bg-surface-container-lowest shadow-xl flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="manna-name"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          className="w-full px-5 py-3.5 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          id="manna-name"
                          placeholder="mis. Jonathan Christian"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="manna-wa">
                          Nomor WhatsApp Aktif
                        </label>
                        <div className="flex items-center rounded-full bg-surface-container-low px-4 shadow-sm focus-within:ring-2 focus-within:ring-primary">
                          <span className="font-label-md text-label-md font-bold text-on-surface-variant pr-2">
                            +62
                          </span>
                          <input
                            className="w-full py-3.5 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none"
                            id="manna-wa"
                            placeholder="812-3456-7890"
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-primary">verified_user</span>
                        <span className="font-body-sm text-body-sm">
                          100% Gratis. Tanpa spam, unsubscribe kapan saja.
                        </span>
                      </div>
                      <button
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-white font-label-lg text-label-lg shadow-lg hover:opacity-95 transition-all"
                        id="manna-submit-btn"
                        type="button"
                      >
                        Langganan Gratis
                      </button>
                    </div>
                    <div
                      className="hidden p-4 rounded-DEFAULT bg-surface-container-high text-primary font-body-sm text-body-sm"
                      id="manna-success-msg"
                    >
                      Pendaftaran berhasil! Renungan perdana akan tiba di WhatsApp Anda besok pukul 06:00 WIB. Selamat
                      bertumbuh!
                    </div>
                  </div>
                </div>
                {/*  Right: Testimonials Mosaic  */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/*  Testimonial 1  */}
                  <div className="p-8 rounded-lg bg-surface-container-low shadow-md flex flex-col gap-4">
                    <div className="flex items-center gap-1 text-tertiary-container">
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface italic">
                      “Setiap pagi sebelum berangkat menembus macetnya Jakarta, pesan renungan WhatsApp ini memberi
                      jangkar ketenangan yang luar biasa bagi jiwa saya.”
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">
                        SL
                      </div>
                      <div>
                        <span className="font-title-md text-title-md font-semibold text-on-surface block">
                          Stephanie Lim
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Marketing Executive • Jemaat Senayan
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  Testimonial 2  */}
                  <div className="p-8 rounded-lg bg-surface-container-lowest shadow-md flex flex-col gap-4 -mt-2">
                    <p className="font-body-md text-body-md text-on-surface italic">
                      “Audio renungannya sangat ringkas tapi sarat hikmat firman. Anak-anak saya bahkan ikut
                      mendengarkan saat kami sarapan pagi bersama.”
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">
                        RW
                      </div>
                      <div>
                        <span className="font-title-md text-title-md font-semibold text-on-surface block">
                          Robert Widjaja
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Ayah 2 Anak • Komunitas Sel Famili
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 3: KATEGORI & ARSIP TOPIK (Dark Section)  */}
          <section className="relative w-full overflow-hidden bg-[#0d0914] text-white py-28 md:py-36 border-y border-white/5">
            <div
              aria-hidden={true}
              className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-5"
            >
              <span
                className="parallax-layer absolute top-20 -left-10 font-display-hero text-[15rem] md:text-[23rem] font-black uppercase tracking-tight text-white leading-none block"
                data-parallax="-0.3"
              >
                ARCHIVE
              </span>
            </div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin flex flex-col gap-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed block mb-2">
                    Arsip &amp; Kategori Renungan
                  </span>
                  <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-white tracking-tight">
                    Jelajahi Berdasarkan Kebutuhan Jiwa
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-white/70 max-w-md">
                  Temukan tuntunan alkitabiah yang relevan untuk setiap musim kehidupan, pergumulan karier, dan
                  penguatan iman pribadi.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white text-on-surface font-label-lg text-label-lg shadow-md transition-all"
                  type="button"
                >
                  Semua Topik
                </button>
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                  type="button"
                >
                  Iman &amp; Mukjizat
                </button>
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                  type="button"
                >
                  Kedamaian Mental
                </button>
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                  type="button"
                >
                  Pernikahan &amp; Keluarga
                </button>
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                  type="button"
                >
                  Marketplace &amp; Karier
                </button>
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                  type="button"
                >
                  Kepemimpinan
                </button>
                <button
                  className="topic-pill px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all border border-white/10"
                  type="button"
                >
                  Karunia Roh Kudus
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="p-8 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all shadow-xl group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary/30 text-primary-fixed font-label-sm text-label-sm border border-primary-fixed/20">
                        Kedamaian Mental
                      </span>
                      <span className="font-body-sm text-body-sm text-white/50">30 Okt 2025</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white group-hover:text-primary-fixed transition-colors">
                      Melampaui Kecemasan: Memilih Bersyukur di Titik Terendah
                    </h3>
                    <p className="font-body-md text-body-md text-white/70 line-clamp-3">
                      Kecemasan berbicara tentang masa depan yang belum tentu terjadi, namun damai sejahtera Allah
                      berbicara tentang kehadiran-Nya yang kekal di saat ini.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-white/70">
                    <span className="font-label-md text-label-md font-semibold text-secondary-fixed">Filipi 4:6-7</span>
                    <span className="font-body-sm text-body-sm">Ps. Michelle Harris • 4 mnt</span>
                  </div>
                </article>
                <article className="p-8 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all shadow-xl group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-fixed font-label-sm text-label-sm border border-secondary-fixed/20">
                        Marketplace &amp; Karier
                      </span>
                      <span className="font-body-sm text-body-sm text-white/50">29 Okt 2025</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white group-hover:text-primary-fixed transition-colors">
                      Integritas yang Tak Tergoyahkan di Dunia Kerja
                    </h3>
                    <p className="font-body-md text-body-md text-white/70 line-clamp-3">
                      Keberhasilan sejati bukanlah kompromi demi kenaikan pangkat cepat, melainkan kesetiaan menjaga
                      standar ilahi ketika tiada orang yang melihat.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-white/70">
                    <span className="font-label-md text-label-md font-semibold text-secondary-fixed">Daniel 6:4</span>
                    <span className="font-body-sm text-body-sm">Ev. Daniel Setiawan • 5 mnt</span>
                  </div>
                </article>
                <article className="p-8 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all shadow-xl group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary/30 text-primary-fixed font-label-sm text-label-sm border border-primary-fixed/20">
                        Iman &amp; Mukjizat
                      </span>
                      <span className="font-body-sm text-body-sm text-white/50">28 Okt 2025</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white group-hover:text-primary-fixed transition-colors">
                      Melangkah ke Luar Perahu: Ketika Iman Menuntut Ketaatan
                    </h3>
                    <p className="font-body-md text-body-md text-white/70 line-clamp-3">
                      Anda tidak akan pernah mengalami mukjizat berjalan di atas gelombang badai selama kedua kaki Anda
                      masih terkunci nyaman di dalam perahu logika.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-white/70">
                    <span className="font-label-md text-label-md font-semibold text-secondary-fixed">Matius 14:29</span>
                    <span className="font-body-sm text-body-sm">Ps. David Miller • 4 mnt</span>
                  </div>
                </article>
                <article className="p-8 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all shadow-xl group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary/30 text-primary-fixed font-label-sm text-label-sm border border-primary-fixed/20">
                        Pernikahan &amp; Keluarga
                      </span>
                      <span className="font-body-sm text-body-sm text-white/50">27 Okt 2025</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white group-hover:text-primary-fixed transition-colors">
                      Membangun Mezbah Doa di Tengah Ruang Keluarga
                    </h3>
                    <p className="font-body-md text-body-md text-white/70 line-clamp-3">
                      Warisan teragung yang dapat diberikan oleh orang tua kepada anak-anaknya bukanlah akumulasi
                      kekayaan fana, melainkan perjumpaan otentik dengan Allah.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-white/70">
                    <span className="font-label-md text-label-md font-semibold text-secondary-fixed">Yosua 24:15</span>
                    <span className="font-body-sm text-body-sm">Ps. Ruth Santoso • 6 mnt</span>
                  </div>
                </article>
                <article className="p-8 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all shadow-xl group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-fixed font-label-sm text-label-sm border border-secondary-fixed/20">
                        Kepemimpinan
                      </span>
                      <span className="font-body-sm text-body-sm text-white/50">26 Okt 2025</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white group-hover:text-primary-fixed transition-colors">
                      Hati yang Melayani: Teladan Basuh Kaki Kristus
                    </h3>
                    <p className="font-body-md text-body-md text-white/70 line-clamp-3">
                      Otoritas sejati di hadapan Bapa lahir dari kerelaan merendahkan diri dan melayani mereka yang
                      bahkan tidak memiliki kemampuan membalas budi kita.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-white/70">
                    <span className="font-label-md text-label-md font-semibold text-secondary-fixed">
                      Yohanes 13:14
                    </span>
                    <span className="font-body-sm text-body-sm">Ps. David Miller • 5 mnt</span>
                  </div>
                </article>
                <article className="p-8 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all shadow-xl group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary/30 text-primary-fixed font-label-sm text-label-sm border border-primary-fixed/20">
                        Karunia Roh Kudus
                      </span>
                      <span className="font-body-sm text-body-sm text-white/50">25 Okt 2025</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white group-hover:text-primary-fixed transition-colors">
                      Peka Terhadap Bisikan Lembut Roh Kudus
                    </h3>
                    <p className="font-body-md text-body-md text-white/70 line-clamp-3">
                      Sering kali Tuhan tidak berbicara melalui guntur atau angin topan, melainkan lewat ketenangan
                      batin yang memanggil kita untuk diam dan menyadari hadirat-Nya.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-white/70">
                    <span className="font-label-md text-label-md font-semibold text-secondary-fixed">
                      1 Raja-raja 19:12
                    </span>
                    <span className="font-body-sm text-body-sm">Ev. Jonathan Tedja • 4 mnt</span>
                  </div>
                </article>
              </div>
              <div className="flex justify-center pt-8">
                <button
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-all inline-flex items-center gap-2 border border-white/10"
                  type="button"
                >
                  <span className="">Buka Arsip Lengkap (300+ Renungan)</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
          {/*  SECTION 4: BIBLE READING PLAN / RENCANA BACA 1 TAHUN (Light Section)  */}
          <section className="relative w-full overflow-hidden bg-surface py-28 md:py-36">
            {/*  Huge Editorial Parallax Background Watermark  */}
            <div
              aria-hidden={true}
              className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-5"
            >
              <span
                className="parallax-layer absolute top-12 -left-12 font-display-hero text-[14rem] md:text-[22rem] font-black uppercase tracking-tight text-secondary-container leading-none block"
                data-parallax="0.22"
              >
                SCRIPTURE
              </span>
            </div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/*  Left: Plan Overview & Download CTA  */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed w-fit">
                    <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                      One Year Journey
                    </span>
                  </div>
                  <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight text-on-surface leading-tight">
                    Rencana Baca Alkitab 1 Tahun: Menuntaskan Firman Bersama.
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Bergabunglah dengan ribuan jemaat Kingdom Life membaca Perjanjian Lama dan Perjanjian Baru secara
                    terstruktur. Lengkap dengan panduan konteks sejarah, refleksi harian, dan ringkasan mingguan.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-primary-container transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      <span className="">Unduh Panduan PDF (Gratis)</span>
                    </button>
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">sync</span>
                      <span className="">Buka di YouVersion Bible</span>
                    </button>
                  </div>
                </div>
                {/*  Right: Progress Widget & Chapter of the Day  */}
                <div className="lg:col-span-6">
                  <div className="p-8 md:p-10 rounded-lg bg-surface-container-lowest shadow-xl flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                          Progres Komunitas Hari Ini
                        </span>
                        <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Hari ke-304 dari 365</h3>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                        83% Tuntas
                      </span>
                    </div>
                    {/*  Custom Clean Progress Bar  */}
                    <div className="w-full bg-surface-container-high rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary-container h-full rounded-full w-[83%] transition-all duration-700"></div>
                    </div>
                    {/*  Today's Readings Block  */}
                    <div className="flex flex-col gap-4">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
                        Bacaan Hari Ini (31 Okt)
                      </span>
                      <div className="p-5 rounded-DEFAULT bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-title-md text-title-md font-bold text-on-surface">Mazmur 91</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Tempat Perlindungan yang Mahatinggi
                            </p>
                          </div>
                        </div>
                        <button
                          className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm hover:scale-105 transition-transform"
                          title="Tandai Selesai"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[20px]">check</span>
                        </button>
                      </div>
                      <div className="p-5 rounded-DEFAULT bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-title-md text-title-md font-bold text-on-surface">
                              Kisah Para Rasul 4
                            </h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Keberanian Para Rasul di Bawah Kuasa Roh
                            </p>
                          </div>
                        </div>
                        <button
                          className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm hover:scale-105 transition-transform"
                          title="Tandai Selesai"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[20px]">check</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="">Rata-rata waktu baca: 12 menit</span>
                      <a className="font-label-md text-label-md text-primary font-semibold hover:underline" href="#">
                        Lihat Rencana Besok →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  SECTION 5: DOA HARIAN & KIRIM POKOK DOA (Dark Section)  */}
          <section className="relative w-full overflow-hidden bg-[#0a0710] text-white py-28 md:py-36">
            <div
              aria-hidden={true}
              className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-5"
            >
              <span
                className="parallax-layer absolute -bottom-10 right-0 font-display-hero text-[14rem] md:text-[22rem] font-black uppercase tracking-tight text-white leading-none block"
                data-parallax="-0.2"
              >
                PRAYER
              </span>
            </div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin flex flex-col gap-14">
              <div className="max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block mb-2 font-bold">
                  Koneksi Rohani &amp; Syafaat
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-white tracking-tight leading-tight">
                  Doa Deklarasi Hari Ini &amp; Ruang Doa Pastoral.
                </h2>
                <p className="mt-4 font-body-lg text-body-lg text-white/80">
                  Ucapkan deklarasi iman ini bersama keluarga, dan bagikan beban pergumulan Anda agar tim pastoral kami
                  dapat berdiri bersama Anda dalam doa.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                <div className="lg:col-span-7 p-8 md:p-12 rounded-lg bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed text-[24px]">front_hand</span>
                      <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
                        Deklarasi Iman Harian (Didoakan Bersama)
                      </span>
                    </div>
                    <blockquote className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-white font-normal italic leading-relaxed">
                      “Bapa di dalam nama Yesus, hari ini aku memilih untuk tidak bergantung pada kekuatanku yang
                      terbatas. Di tengah keheningan, aku menantikan pimpinan Roh Kudus. Segala letih jiwa dan
                      kekhawatiran kuserahkan ke dalam tangan-Mu. Sayap imanku dibarukan, langkahku diteguhkan, dan
                      hariku penuh dengan kemenangan salib-Mu. Amin.”
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md transition-all inline-flex items-center gap-2 border border-white/10"
                      onClick={() => {}}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      <span className="">Salin Doa Hari Ini</span>
                    </button>
                    <span className="font-body-sm text-body-sm text-white/50">Dibaca oleh 4,820 jemaat hari ini</span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 rounded-lg bg-gradient-to-br from-primary-container/80 to-[#110c1c] backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                      <span className="material-symbols-outlined text-[24px]">favorite</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                      Punya Pergumulan yang Ingin Didoakan?
                    </h3>
                    <p className="font-body-md text-body-md text-white/80 leading-relaxed">
                      Tim Pendoa Syafaat &amp; Pastoral Kingdom Life berdoa 24/7 untuk setiap pokok doa jemaat secara
                      konfidensial dan penuh kasih. Anda tidak pernah berjuang sendirian.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 pt-4">
                    <a
                      className="w-full text-center px-8 py-3.5 rounded-full bg-white text-on-surface font-label-lg text-label-lg shadow-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
                      data-path="doa-dan-konseling"
                      href="#"
                    >
                      Kirim Pokok Doa Sekarang
                    </a>
                    <span className="font-body-sm text-body-sm text-center text-white/50">
                      Kerahasiaan nama dan isi doa dijamin sepenuhnya.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  Parallax Micro-script  */}
        </div>
      </main>
      <KingdomFooter />
    </div>
  );
}
