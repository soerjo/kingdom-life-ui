'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { KingdomHeader } from './KingdomHeader';
import { KingdomFooter } from './KingdomFooter';

export function StitchProfilePage() {
  useParallax();

  return (
    <div className="w-full min-h-screen text-jpcc-black font-sans antialiased overflow-x-hidden selection:bg-purple-100 selection:text-purple-900 pt-20">
      <KingdomHeader />
      <main className="w-full pt-0 bg-[#0a0710] min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/*  1. HERO SECTION (Dark Editorial Parallax)  */}
          <section className="relative w-full pb-24 md:pb-36 bg-[#0a0710] overflow-hidden text-white border-b border-white/5 pt-16">
            {/*  Parallax Ethereal Watermark  */}
            <div
              className="parallax-layer absolute inset-0 pointer-events-none flex items-center justify-center select-none overflow-hidden opacity-10"
              data-speed="0.25"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <span className="font-display-hero text-[10rem] md:text-[18rem] font-black tracking-tighter text-surface uppercase leading-none whitespace-nowrap">
                HERITAGE
              </span>
            </div>
            {/*  Soft Halo Glow Elements  */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary-container/20 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/15 blur-[140px] pointer-events-none"></div>
            <div className="relative max-w-[1320px] mx-auto px-6 lg:px-margin z-10 flex flex-col gap-12">
              {/*  Breadcrumb & Micro Label  */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                  Profil &amp; Kisah Kerajaan Allah
                </span>
                <span className="text-outline-variant font-label-md text-label-md">•</span>
                <span className="text-outline-variant font-label-md text-label-md">Sejak 2012</span>
              </div>
              {/*  Main Editorial Title & Subtitle  */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h1 className="font-display-hero text-headline-lg md:text-display-hero font-extrabold tracking-tight text-white leading-none">
                    Gereja Lokal yang <span className="italic font-normal text-secondary-fixed">Relevan.</span>
                    <br />
                    Dampak yang{' '}
                    <span className="bg-gradient-to-r from-primary-fixed-dim via-secondary-fixed to-on-tertiary-container bg-clip-text text-transparent">
                      Mengubahkan
                    </span>{' '}
                    Dunia.
                  </h1>
                  <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl leading-relaxed">
                    Sebuah keluarga apostolik yang dibangun di atas kasih karunia Kristus, dipenuhi Roh Kudus, dan
                    diutus menyatakan kemuliaan Allah di setiap bidang kehidupan masyarakat perkotaan.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="p-6 rounded-lg bg-surface-container-lowest/5 backdrop-blur-xl flex flex-col gap-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-container">auto_awesome</span>
                      <span className="font-title-md text-title-md font-bold text-white">DNA Kerajaan</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-surface-container-highest/80">
                      Bukan sekadar perhimpunan mingguan, melainkan inkubator kemuridan bagi setiap generasi untuk
                      berdiri kokoh sebagai garam dan terang dunia.
                    </p>
                  </div>
                </div>
              </div>
              {/*  Atmospheric Parallax Photo Strip  */}
              <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 relative h-[360px] md:h-[480px] rounded-lg overflow-hidden shadow-2xl group">
                  <div
                    className="parallax-photo absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    data-alt="A modern worship sanctuary filled with thousands of energetic believers worshipping passionately. Stage is aglow with warm ambient sunset amber and deep violet lighting, contemporary praise band leading with lifted hands and joyful expressions."
                    data-speed="0.12"
                    style={{ transform: 'scale(1.05) translate3d(0px, 0px, 0px)' }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                        Kebersamaan Ibadah
                      </span>
                      <p className="font-title-lg text-title-lg font-bold">
                        Hadirat yang Menyelamatkan &amp; Menyembuhkan
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 relative h-[360px] md:h-[480px] rounded-lg overflow-hidden shadow-2xl group">
                  <div
                    className="parallax-photo absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    data-alt="Joyful baptism celebration in a clear outdoor pool, surrounded by cheering smiling community members clapping hands. Sunlight filtering gently through leafy green trees, beaming with warm radiance and hope."
                    data-speed="0.16"
                    style={{ transform: 'scale(1.05) translate3d(0px, 0px, 0px)' }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 flex flex-col text-white">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">
                      Transformasi Hidup
                    </span>
                    <p className="font-title-lg text-title-lg font-bold">Lahir Baru Dalam Kristus</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  2. OUR STORY (Light Section - Warm Ivory)  */}
          <section className="relative w-full py-28 md:py-36 bg-surface overflow-hidden">
            {/*  Huge Watermark Parallax Background  */}
            <div
              className="parallax-layer absolute top-10 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]"
              data-speed="0.18"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <span className="font-display-hero text-[12rem] md:text-[22rem] font-extrabold text-on-surface tracking-tighter uppercase whitespace-nowrap">
                OUR STORY
              </span>
            </div>
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin relative z-10 flex flex-col gap-20">
              {/*  Section Header with Asymmetric Layout  */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    01 / Perjalanan Kami
                  </span>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
                    Dari Ruang Tamu Menuju Gerakan Multikampus.
                  </h2>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                  <p className="">
                    Berawal pada musim gugur tahun 2012, sepuluh orang berkumpul di sebuah ruang tamu sederhana di
                    Jakarta Selatan dengan kerinduan mendalam: melihat generasi muda mengalami perjumpaan nyata dengan
                    Yesus Kristus tanpa sekat religiusitas yang kaku.
                  </p>
                  <p className="">
                    Tuhan menghembuskan nafas kehidupan di atas benih doa tersebut. Apa yang dimulai sebagai jam-jam
                    perendaman doa (soaking prayer) berkembang menjadi wadah komunitas yang merestorasi keluarga yang
                    hancur, melatih para profesional muda, dan melepaskan lagu-lagu penyembahan yang menyuarakan
                    kerinduan bangsa.
                  </p>
                </div>
              </div>
              {/*  Milestones Timeline Without Borders  */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/*  Milestone 1  */}
                <div className="p-8 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-hero text-headline-lg font-extrabold text-primary group-hover:text-secondary-container transition-colors">
                      2012
                    </span>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">Benih Pertama</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Dimulai dari 12 orang pendoa syafaat. Pelayanan doa mingguan membakar hati pemuda di kawasan
                      metropolitan Jakarta.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-primary font-label-md text-label-md">
                    <span className="">Persekutuan Awal</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
                {/*  Milestone 2  */}
                <div className="p-8 rounded-lg bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-hero text-headline-lg font-extrabold text-primary group-hover:text-secondary-container transition-colors">
                      2016
                    </span>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">Kingdom Worship</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Peluncuran album penyembahan perdana &apos;Hadirat-Mu Surga Bagiku&apos; yang mengalir ke ratusan
                      gereja di seluruh pelosok nusantara.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-primary font-label-md text-label-md">
                    <span className="">Kolektif Musik</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
                {/*  Milestone 3  */}
                <div className="p-8 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-hero text-headline-lg font-extrabold text-primary group-hover:text-secondary-container transition-colors">
                      2020
                    </span>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">Konektivitas Global</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Membuka kampus digital dan satelit regional. Pelayanan meluas ke komunitas Indonesia di Australia,
                      Singapura, dan Amerika.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-primary font-label-md text-label-md">
                    <span className="">Online Sanctuary</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
                {/*  Milestone 4  */}
                <div className="p-8 rounded-lg bg-surface-container-high shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-hero text-headline-lg font-extrabold text-secondary-container transition-colors">
                      2025
                    </span>
                    <span className="font-title-lg text-title-lg font-bold text-on-surface">Pemuridan Mandiri</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Mendirikan Kingdom Leadership Academy dengan visi mencetak 10.000 pemimpin muda berakar firman di
                      berbagai industri kerja.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-secondary-container font-label-md text-label-md font-bold">
                    <span className="">Akselerasi Misi</span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  3. VISI & MISI KAMI (Dark Section)  */}
          <section className="relative w-full py-28 md:py-36 bg-[#0c0816] overflow-hidden text-white border-y border-white/5">
            {/*  Parallax Watermark  */}
            <div
              className="parallax-layer absolute top-20 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden opacity-10"
              data-speed="0.2"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <span className="font-display-hero text-[14rem] md:text-[24rem] font-black text-surface tracking-tighter uppercase whitespace-nowrap">
                VISION
              </span>
            </div>
            {/*  Soft Ambient Light  */}
            <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-primary-container/20 blur-[130px] pointer-events-none"></div>
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin relative z-10 flex flex-col gap-20">
              {/*  Section Label & Vision Statement  */}
              <div className="flex flex-col gap-6 max-w-4xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                  02 / Arah &amp; Panduan Rohani
                </span>
                <h2 className="font-title-lg text-headline-sm md:text-headline-md font-medium text-surface-container-high leading-relaxed">
                  Visi Utama Kami:
                </h2>
                <p className="font-display-hero text-headline-md md:text-headline-lg font-extrabold text-white leading-tight tracking-tight">
                  &ldquo;Gereja lokal yang relevan dengan dampak global — membawa otoritas hidup Yesus Kristus ke dalam
                  setiap bidang budaya dan denyut nadi masyarakat.&rdquo;
                </p>
              </div>
              {/*  4 Pillars of Mission Bento Grid  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/*  Pillar 01  */}
                <div className="p-8 md:p-10 rounded-lg bg-surface-container-lowest/5 backdrop-blur-xl hover:bg-surface-container-lowest/10 transition-all duration-300 flex flex-col gap-6 group">
                  <div className="flex items-center justify-between">
                    <span className="font-display-hero text-headline-sm font-bold text-primary-fixed-dim">01</span>
                    <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center text-primary-fixed-dim">
                      <span className="material-symbols-outlined">stars</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                      Membangun Generasi Bintang
                    </h3>
                    <p className="font-body-md text-body-md text-surface-container-highest/80 leading-relaxed">
                      Memperlengkapi putra-putri rohani dengan doktrin firman yang sehat, integritas tanpa kompromi, dan
                      kekudusan hidup yang bersinar di tengah kegelapan moral zaman ini.
                    </p>
                  </div>
                </div>
                {/*  Pillar 02  */}
                <div className="p-8 md:p-10 rounded-lg bg-surface-container-lowest/5 backdrop-blur-xl hover:bg-surface-container-lowest/10 transition-all duration-300 flex flex-col gap-6 group">
                  <div className="flex items-center justify-between">
                    <span className="font-display-hero text-headline-sm font-bold text-secondary-fixed">02</span>
                    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined">local_fire_department</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                      Hadirat &amp; Kuasa Supranatural
                    </h3>
                    <p className="font-body-md text-body-md text-surface-container-highest/80 leading-relaxed">
                      Hidup dalam kepekaan akan Roh Kudus, kesembuhan ilahi, dan tanda-tanda heran yang membuktikan
                      bahwa Injil Kerajaan Allah adalah kekuatan yang memerdekakan nyata hari ini.
                    </p>
                  </div>
                </div>
                {/*  Pillar 03  */}
                <div className="p-8 md:p-10 rounded-lg bg-surface-container-lowest/5 backdrop-blur-xl hover:bg-surface-container-lowest/10 transition-all duration-300 flex flex-col gap-6 group">
                  <div className="flex items-center justify-between">
                    <span className="font-display-hero text-headline-sm font-bold text-tertiary-fixed-dim">03</span>
                    <div className="w-12 h-12 rounded-full bg-tertiary-container/40 flex items-center justify-center text-tertiary-fixed-dim">
                      <span className="material-symbols-outlined">favorite</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white">Komunitas Autentik</h3>
                    <p className="font-body-md text-body-md text-surface-container-highest/80 leading-relaxed">
                      Menciptakan ruang keluarga rohani yang terbuka, menyembuhkan luka batin, menerima tanpa syarat,
                      dan saling menopang dalam kasih persaudaraan sejati.
                    </p>
                  </div>
                </div>
                {/*  Pillar 04  */}
                <div className="p-8 md:p-10 rounded-lg bg-surface-container-lowest/5 backdrop-blur-xl hover:bg-surface-container-lowest/10 transition-all duration-300 flex flex-col gap-6 group">
                  <div className="flex items-center justify-between">
                    <span className="font-display-hero text-headline-sm font-bold text-primary-fixed">04</span>
                    <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-primary-fixed">
                      <span className="material-symbols-outlined">domain</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-white">Transformasi Marketplace</h3>
                    <p className="font-body-md text-body-md text-surface-container-highest/80 leading-relaxed">
                      Mengutus para profesional, pengusaha, pendidik, dan seniman untuk memerintah dalam kebenaran serta
                      membawa dampak positif bagi kemakmuran kota.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  4. SENIOR PASTORS & LEADERSHIP (Light Section)  */}
          <section className="relative w-full py-28 md:py-36 bg-surface overflow-hidden">
            {/*  Parallax Watermark  */}
            <div
              className="parallax-layer absolute top-12 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]"
              data-speed="0.22"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <span className="font-display-hero text-[10rem] md:text-[20rem] font-black text-on-surface tracking-tighter uppercase whitespace-nowrap">
                LEADERSHIP
              </span>
            </div>
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin relative z-10 flex flex-col gap-20">
              {/*  Section Intro  */}
              <div className="flex flex-col gap-4 max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  03 / Kepemimpinan Penggembalaan
                </span>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
                  Hati Gembala untuk Seluruh Jemaat.
                </h2>
              </div>
              {/*  Senior Pastors Editorial Profile Card  */}
              <div className="p-8 md:p-14 rounded-xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row gap-12 items-center">
                {/*  Portrait Image  */}
                <div className="w-full lg:w-5/12 h-[420px] md:h-[500px] rounded-lg overflow-hidden relative shadow-lg group">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    data-alt="A warm, engaging portrait of Senior Pastor David Miller and Sarah Miller smiling joyfully together outdoors in soft afternoon golden hour light. Contemporary, approachable, dressed in modern smart casual, exuding fatherly and motherly warmth."
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsiPxZmlEc_9KYq0MZQvfqCAgg0Ccy5yxpyzGaPWyvdnbytkeoaJmshslGeT0eBA7ArPclcTvhiFDkqTBHxzBiRr7nPCPbUe1tVbdO6aaFctP0f9qTVBwZmOxbr1k2vxZdd1D3UvjCp2g7Db9UeNKuSaj9bZfllhGLArC9eMPdxuFLiue6_bRyk4_jo9gxbXpjvlEy4xGRa_IRbBRU2PzWpP0AEAM2491M9HglwHA')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col">
                    <span className="font-title-lg text-title-lg font-bold">Ps. David &amp; Sarah Miller</span>
                    <span className="font-label-md text-label-md text-secondary-fixed">
                      Senior Pastors &amp; Founders
                    </span>
                  </div>
                </div>
                {/*  Pastoral Message & Bio  */}
                <div className="w-full lg:w-7/12 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">format_quote</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface leading-snug">
                    &ldquo;Kami percaya setiap orang yang melangkahkan kaki ke Kingdom Life memiliki panggilan ilahi
                    yang tak tergantikan. Rumah ini adalah tempat Anda bertumbuh, dipulihkan, dan diutus.&rdquo;
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Sejak mendirikan Kingdom Life Church pada tahun 2012, Ps. David Miller telah mendedikasikan hidupnya
                    untuk mengobarkan pesan kasih karunia Kristus yang radikal dan kuasa Roh Kudus bagi generasi masa
                    kini. Didampingi oleh Ps. Sarah Miller yang memimpin divisi pemuridan keluarga dan anak muda,
                    keduanya melayani jemaat dengan kerendahan hati dan visi apostolik yang teguh.
                  </p>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">14+ Tahun</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Pelayanan Penuh Waktu</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">12 Satelit</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Komunitas &amp; Kampus</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Ministry Directors & Leadership Council Grid  */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                    Dewan Pelayanan &amp; Direktur Departemen
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-semibold">Struktur Kolektif</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/*  Member 1  */}
                  <div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center shadow-md"
                      data-alt="Portrait photo of Pastor Michael Santoso, Executive Pastor with a friendly and confident expression, professional modern creative church attire."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgUwsLgFWrC9yGiMgJoLVaqDhI9ZZ9Lkux6fu0aeOllMIH_J04_IktFnKF1mopyycsN88uBj85Ig0Kberevq4L-0dve2sCVsN-zldLMkucJ42uNRoafdpfPfsKz2QhZ_WD94I-5S7y_RkHTzFa9mgvgS6vFW_fXatfOLndLlx6PSgNVO9Sf4yKnpX4m2X1e4hd8vw5hcaOPPO-VbagcgdYpwTNbNgK8GtaHx5c5lg')",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">Ps. Michael Santoso</span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">Executive Pastor</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Memimpin integrasi operasional dan keselarasan strategi seluruh kampus ibadah.
                    </p>
                  </div>
                  {/*  Member 2  */}
                  <div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center shadow-md"
                      data-alt="Portrait photo of Grace Wijaya, Creative and Worship Director holding acoustic guitar notebook, smiling radiant natural lighting."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRKf2ZwVJUeJaqh-pHWemdZnAKmNM_sjhQ01c65vHPD7HOUXBioNvOsVvOPdgDIs2djbzcNwXoCKSAhxoa3Q5G3RxfB5FVMG8hu8RD_4h3dOKd4idM-WkC2ewSD459DSHlg4eOio9azSiC-4GAKtbGlYh5UKr-pEdJ9j07g95BfoGsr8VRrmrKNQlRuBdtvE52hy7h4E0g1DRIyg4Cx3iRdbC1Ox5LZ5SucyIZ6L0')",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">Grace Wijaya</span>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">
                        Kingdom Worship Director
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mengarahkan pujian, penulisan lagu rohani, dan produksi ibadah kreatif mingguan.
                    </p>
                  </div>
                  {/*  Member 3  */}
                  <div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center shadow-md"
                      data-alt="Portrait photo of Jonathan Hartono, Youth and Next Gen Pastor energetic warm smile vibrant aesthetic."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2wUc1b2l2pAg1tAUgDzMsdHMczweshv7UFxsEzJNDRBZ6X9xz44zEJlk8VhYdap8SqzxWXuX92iD2-7EwJIgu7IoHIbDmMGmm5OYrktQ-FjgFxK47b7ZyHPi2J2YDu_K1lbebORNdiZKYGghZKGDH8H3jVN2oe9a-7LEgeQIlDJ8M2O9_fAprygPXw94bs4CpMEVlOqoHchZUR1lkagTVhkaGr7e1yqS6JKH-wfg')",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">Jonathan Hartono</span>
                      <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">
                        Next Gen Pastor
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Membina generasi remaja dan mahasiswa dalam komunitas Kingdom Youth &amp; Campus.
                    </p>
                  </div>
                  {/*  Member 4  */}
                  <div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center shadow-md"
                      data-alt="Portrait photo of Deborah Tedja, Head of Care and Counseling smiling compassionately soft natural studio lighting."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNZeOhKq-dMLNTzfrJOV9MjLab5-AxK74-bWWQyp-Hs53qm8zKXDfroFoJCukfgQGD_r7uXSbwGdvAPXobVPEJ4mjnVDV7nbaYKzClmLnWTnmHNwKcRMDNNBZvvtcgA6qdUqmJDsCzbduJfT75fdgLO4lHOeQ_lsDI4HlriB-wPNtz4iti_dwdMGLKQQd1ClBGcNLkkSBq4DZ-30JnYPditnycaYRBVQW5IovqLFM')",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">
                        Deborah Tedja, M.Psi
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        Pastoral Care &amp; Counseling
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Memfasilitasi pemulihan emosional jemaat, bimbingan pranikah, dan pelayanan doa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  5. NILAI-NILAI INTI / CORE VALUES (Dark Section)  */}
          <section className="relative w-full py-28 md:py-36 bg-[#0a0710] overflow-hidden text-white border-t border-white/5 pt-16">
            {/*  Parallax Watermark  */}
            <div
              className="parallax-layer absolute top-16 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden opacity-10"
              data-speed="0.25"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <span className="font-display-hero text-[12rem] md:text-[22rem] font-black text-surface tracking-tighter uppercase whitespace-nowrap">
                VALUES
              </span>
            </div>
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin relative z-10 flex flex-col gap-16">
              <div className="flex flex-col gap-4 max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                  04 / Fondasi Karakter
                </span>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-white tracking-tight leading-tight">
                  Empat Pilar Nilai Kehidupan Kami.
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-high/80">
                  Nilai-nilai yang mengakar dalam keputusan harian, pelayanan altar, dan interaksi kami dengan dunia
                  luar.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/*  Value 1  */}
                <div className="p-8 rounded-lg bg-surface-container-lowest/5 backdrop-blur-md flex flex-col justify-between h-full group hover:bg-surface-container-lowest/10 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center text-primary-fixed-dim">
                      <span className="material-symbols-outlined">all_inclusive</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-white">Kasih Karunia Tanpa Syarat</h3>
                    <p className="font-body-sm text-body-sm text-surface-container-highest/80 leading-relaxed">
                      Kami tidak memandang masa lalu siapa pun. Karya salib Kristus adalah satu-satunya landasan
                      penerimaan dan keselamatan kita.
                    </p>
                  </div>
                  <span className="pt-6 font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">
                    Unconditional Grace
                  </span>
                </div>
                {/*  Value 2  */}
                <div className="p-8 rounded-lg bg-surface-container-lowest/5 backdrop-blur-md flex flex-col justify-between h-full group hover:bg-surface-container-lowest/10 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined">workspace_premium</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-white">Keunggulan Sebagai Penyembahan</h3>
                    <p className="font-body-sm text-body-sm text-surface-container-highest/80 leading-relaxed">
                      Excellence as Worship. Kami mempersembahkan yang terbaik dalam estetika, pengelolaan waktu, dan
                      integritas di hadapan Tuhan.
                    </p>
                  </div>
                  <span className="pt-6 font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                    Excellence in Action
                  </span>
                </div>
                {/*  Value 3  */}
                <div className="p-8 rounded-lg bg-surface-container-lowest/5 backdrop-blur-md flex flex-col justify-between h-full group hover:bg-surface-container-lowest/10 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary-fixed-dim">
                      <span className="material-symbols-outlined">handshake</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-white">
                      Kerendahan Hati &amp; Servant Heart
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-container-highest/80 leading-relaxed">
                      Semakin tinggi otoritas yang dipercayakan, semakin rendah hati sikap pelayanan kita kepada yang
                      terkecil dan terpinggirkan.
                    </p>
                  </div>
                  <span className="pt-6 font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed-dim">
                    Humility &amp; Service
                  </span>
                </div>
                {/*  Value 4  */}
                <div className="p-8 rounded-lg bg-surface-container-lowest/5 backdrop-blur-md flex flex-col justify-between h-full group hover:bg-surface-container-lowest/10 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center text-primary-fixed">
                      <span className="material-symbols-outlined">diversity_3</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg font-bold text-white">Semangat Lintas Generasi</h3>
                    <p className="font-body-sm text-body-sm text-surface-container-highest/80 leading-relaxed">
                      Kami merangkul kebijaksanaan generasi tua seraya mengobarkan keberanian inovasi anak-anak muda
                      demi kesinambungan iman.
                    </p>
                  </div>
                  <span className="pt-6 font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                    Generational Legacy
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/*  6. INVITATION TO VISIT (Light Section)  */}
          <section className="relative w-full py-28 md:py-36 bg-surface overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-6 lg:px-margin relative z-10 flex flex-col gap-16">
              {/*  Main Invitation Split Card  */}
              <div className="p-8 md:p-14 rounded-xl bg-surface-container-lowest shadow-xl flex flex-col lg:flex-row gap-12 items-center justify-between">
                <div className="flex flex-col gap-6 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                      Pintu Kami Terbuka Lebar
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-extrabold text-on-surface tracking-tight leading-tight">
                    Mari Beribadah Bersama Minggu Ini.
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Jika ini adalah kunjungan pertama Anda, tim Hospitality Concierge kami siap menyambut Anda dengan
                    secangkir kopi hangat, panduan parkir khusus, dan tempat duduk yang nyaman untuk keluarga Anda.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-white font-label-lg text-label-lg font-bold shadow-lg hover:opacity-95 transition-all"
                      data-path="jadwal-ibadah"
                      href="#"
                    >
                      Rencanakan Kunjungan Anda
                    </a>
                    <a
                      className="px-6 py-3.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-highest transition-all flex items-center gap-2"
                      data-path="doa-dan-konseling"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[20px]">contact_support</span>
                      Hubungi Tim Pastoral
                    </a>
                  </div>
                </div>
                {/*  Campus Location Quick Sheet  */}
                <div className="w-full lg:w-96 p-6 rounded-lg bg-surface-container-low flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md font-bold text-on-surface">Central Sanctuary</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">The Grand Hall, Lt. 5</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center justify-between p-3 rounded-md bg-surface-container-lowest">
                      <span className="font-bold text-on-surface">Ibadah Sesi 1</span>
                      <span className="text-primary font-semibold">09:00 WIB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-md bg-surface-container-lowest">
                      <span className="font-bold text-on-surface">Ibadah Sesi 2</span>
                      <span className="text-primary font-semibold">11:15 WIB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-md bg-surface-container-lowest">
                      <span className="font-bold text-on-surface">Youth &amp; Evening</span>
                      <span className="text-primary font-semibold">17:00 WIB</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-md bg-surface-container flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-secondary">family_restroom</span>
                    <span className="">Kingdom Kids &amp; Nursery tersedia di setiap sesi</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*  Inline Parallax & Interaction Script  */}
      </main>
      <KingdomFooter />
    </div>
  );
}
