'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AppLink } from '@/components/ui/app-link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SpotlightCard, SplitText, CountUp, ShinyText } from '@/components/react-bits';
import { useParallax } from '@/hooks';
import { cn } from '@/utils';
import { Menu as MenuIcon, Clock, MapPin, Heart, Users, BookOpen, Sparkles, MessageCircle } from 'lucide-react';

const MotionDiv = motion.div;

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#jadwal-ibadah', label: 'Jadwal Ibadah' },
  { href: '#community', label: 'Community' },
  { href: '#pemuridan', label: 'Pemuridan' },
  { href: '#devotional', label: 'Renungan' },
  { href: '#events', label: 'Events' },
  { href: '#prayer-support', label: 'Doa & Konseling' },
];

const FloatingBadge = ({ text, speed, className }: { text: string; speed: number; className?: string }) => {
  const { ref, y } = useParallax<HTMLDivElement>({ speed });
  return (
    <MotionDiv
      ref={ref}
      style={{ y }}
      className={cn(
        'absolute px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-lg whitespace-nowrap backdrop-blur-md border border-white/20',
        className,
      )}
    >
      {text}
    </MotionDiv>
  );
};

export interface KingdomLifeClientProps {
  initialServiceFilter?: string;
  initialConnectCategory?: string;
  initialTopic?: string;
}

export function KingdomLifeClient({
  initialServiceFilter,
  initialConnectCategory,
  initialTopic: _initialTopic,
}: KingdomLifeClientProps) {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const { y: heroBgY } = useParallax({ ref: heroBgRef, speed: 0.1 });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* ========================================================
          TOP NAVIGATION BAR
          ======================================================== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg transition-all duration-300 border-b border-border/40">
        <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
          <AppLink href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-foreground tracking-tight uppercase leading-none font-heading">
                Kingdom Life
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">
                Contemporary Church
              </span>
            </div>
          </AppLink>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                className="text-xs uppercase font-bold tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </AppLink>
            ))}
            <Button asChild size="sm" className="rounded-full px-5 text-xs font-bold uppercase tracking-wider">
              <AppLink href="#jadwal-ibadah">Join Online</AppLink>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full px-5 text-xs font-bold uppercase tracking-wider"
            >
              <AppLink href="#prayer-support">Doa & Konseling</AppLink>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <span className="text-lg font-bold text-primary">Kingdom Life Church</span>
                  {navLinks.map((link) => (
                    <AppLink
                      key={link.href}
                      href={link.href}
                      className="text-sm font-semibold text-foreground/80 hover:text-primary py-2 border-b border-border/40"
                    >
                      {link.label}
                    </AppLink>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button asChild className="w-full">
                      <AppLink href="#jadwal-ibadah">Join Online</AppLink>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <AppLink href="#prayer-support">Doa & Konseling</AppLink>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* ========================================================
          HERO SECTION (Parallax + SplitText + Floating Badges)
          ======================================================== */}
      <section
        id="hero"
        className="relative min-h-[96vh] flex items-center justify-center pt-24 overflow-hidden bg-jpcc-dark text-white"
      >
        <MotionDiv
          ref={heroBgRef}
          style={{ y: heroBgY }}
          className="absolute inset-0 z-0 scale-105 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-10" />
          <Image
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2560&q=80"
            alt="Worship stage and gathering"
            fill
            priority
            className="object-cover object-center opacity-45"
          />
        </MotionDiv>

        {/* Floating Parallax Depth Elements */}
        <FloatingBadge
          text="✨ Generasi Bertumbuh"
          speed={-0.25}
          className="top-1/4 left-8 lg:left-24 hidden md:block"
        />
        <FloatingBadge
          text="🕊️ Kasih Kristus yang Memulihkan"
          speed={0.18}
          className="bottom-1/3 right-8 lg:right-28 hidden md:block bg-amber-500/90 text-black font-semibold"
        />
        <FloatingBadge text="🙌 Berakar Kuat & Berbuah" speed={-0.12} className="top-1/3 right-12 hidden lg:block" />

        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Contemporary & Christ-Centered Church
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-serif mb-6 leading-tight text-white">
            <SplitText text="In the House of GOD, We Flourish" by="word" />
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Membangun generasi murid Kristus yang hidup dalam kuasa kasih karunia, bertumbuh dalam komunitas nyata, dan
            membawa terang bagi kota.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white shadow-xl shadow-purple-900/30"
            >
              <AppLink href="#jadwal-ibadah">Lihat Jadwal Ibadah</AppLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <AppLink href="#community">Temukan Komunitas</AppLink>
            </Button>
          </div>

          {/* Quick Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                <CountUp end={3} suffix=" Sesi" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Ibadah Minggu</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                <CountUp end={45} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Connect Groups</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                <CountUp end={1200} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Jemaat Bertumbuh</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-purple-400">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Berpusat pada Firman</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT / OUR STORY SECTION
          ======================================================== */}
      <section id="about" className="py-28 px-4 lg:px-8 bg-[#faf8f5] dark:bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ShinyText className="text-xs font-bold uppercase tracking-widest text-primary">Visi & Identitas</ShinyText>
            <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mt-3 mb-6">
              Gereja Adalah Keluarga, Bukan Hanya Acara Minggu
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Kami percaya gereja sejati adalah tempat di mana setiap orang diterima apa adanya, dipulihkan oleh kasih
              karunia Tuhan, dan diberdayakan untuk menjadi dampak bagi lingkungannya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Kasih Tanpa Syarat</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Menyambut setiap jiwa dengan keramahtamahan sejati, tanpa penghakiman, berakar pada anugerah keselamatan
                cuma-cuma dalam Yesus Kristus.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Komunitas Otentik</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hidup saling mendukung melalui Connect Groups tempat kita dapat saling mendoakan, berbagi pergumulan,
                dan merayakan kemenangan hidup bersama.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 text-purple-600 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Pemuridan yang Membekali</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pengajaran firman Tuhan yang praktis, kontekstual, dan membangun karakter murid Kristus yang
                berintegritas di dunia kerja dan keluarga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          JADWAL IBADAH (SpotlightCard + SSR Filter Indicator)
          ======================================================== */}
      <section id="jadwal-ibadah" className="py-28 px-4 lg:px-8 bg-jpcc-dark text-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Jadwal & Lokasi</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mt-3 text-white">
                Ibadah Hari Minggu
              </h2>
              {initialServiceFilter && (
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-primary/40 border border-primary text-xs text-white">
                  Filter Sesi Aktif: <strong className="uppercase">{initialServiceFilter}</strong>
                </div>
              )}
            </div>
            <p className="text-white/70 max-w-md text-sm leading-relaxed">
              Bergabunglah secara langsung (onsite) di Main Hall atau melalui siaran live streaming YouTube bagi Anda
              yang berada di luar kota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/40 text-primary-fixed-dim text-xs font-bold uppercase tracking-wider">
                  Sesi 1
                </span>
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">Pagi - 09:00 WIB</h3>
              <p className="text-white/70 text-sm mb-6">
                Sunday Morning Celebration. Pelayanan lengkap dengan Kids Church (usia 3-12 tahun).
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
                <MapPin className="w-4 h-4 text-amber-400" /> Main Auditorium Lt. 3
              </div>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Join Live Stream
                </a>
              </Button>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Sesi 2
                </span>
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">Siang - 11:30 WIB</h3>
              <p className="text-white/70 text-sm mb-6">
                Sunday Noon Service. Ibadah kontemporer & Teens Ministry untuk remaja dan keluarga muda.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
                <MapPin className="w-4 h-4 text-amber-400" /> Main Auditorium Lt. 3
              </div>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Join Live Stream
                </a>
              </Button>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/40 text-purple-200 text-xs font-bold uppercase tracking-wider">
                  Sesi 3
                </span>
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">Sore - 17:00 WIB</h3>
              <p className="text-white/70 text-sm mb-6">
                Kingdom Youth & Young Adults. Praise & Worship enerjik, atmosfer kreatif untuk profesional muda.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
                <MapPin className="w-4 h-4 text-amber-400" /> Youth Chapel Lt. 2
              </div>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Join Live Stream
                </a>
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ========================================================
          COMMUNITY & CONNECT GROUPS
          ======================================================== */}
      <section id="community" className="py-28 px-4 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Komunitas Hidup</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mt-3 mb-6">
              Connect Groups: Bertumbuh Lebih Dekat
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Bertemu setiap minggu dalam kelompok kecil di berbagai area kota untuk belajar firman, saling menopang,
              dan makan bersama.
            </p>
            {initialConnectCategory && (
              <p className="mt-2 text-sm text-primary font-semibold">Kategori pilihan: {initialConnectCategory}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border rounded-2xl p-6 bg-card hover:border-primary/50 transition-colors">
              <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Young Professionals</div>
              <h4 className="text-xl font-bold mb-2 font-serif">Kingdom Marketplace</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Membahas integritas karier, kepemimpinan Kristen di dunia kerja, dan networking profesional.
              </p>
              <div className="text-xs text-muted-foreground">Jadwal: Setiap Rabu Malam (Hybrid)</div>
            </div>

            <div className="border border-border rounded-2xl p-6 bg-card hover:border-primary/50 transition-colors">
              <div className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">Family & Couples</div>
              <h4 className="text-xl font-bold mb-2 font-serif">Covenant Home</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Fondasi pernikahan kudus, mendidik anak di era digital, dan mezbah doa keluarga.
              </p>
              <div className="text-xs text-muted-foreground">Jadwal: Setiap Jumat Malam (Area Barat & Selatan)</div>
            </div>

            <div className="border border-border rounded-2xl p-6 bg-card hover:border-primary/50 transition-colors">
              <div className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">Campus & Youth</div>
              <h4 className="text-xl font-bold mb-2 font-serif">Ignite Generation</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Diskusi gaya hidup anak muda, pertemanan sehat, kesehatan mental, dan panggilan masa depan.
              </p>
              <div className="text-xs text-muted-foreground">Jadwal: Setiap Sabtu Siang (Cafe / Onsite)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PEMURIDAN (Discipleship Track)
          ======================================================== */}
      <section id="pemuridan" className="py-28 px-4 lg:px-8 bg-jpcc-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Jejak Pertumbuhan</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mt-3 text-white mb-6">
              Discipleship Pathway
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Empat langkah terarah untuk membawa Anda dari perjumpaan awal dengan Kristus hingga menjadi pemimpin yang
              melayani sesama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl font-extrabold text-amber-400 font-serif">01</span>
              <h4 className="text-lg font-bold text-white mt-4 mb-2">Foundation</h4>
              <p className="text-white/70 text-sm">
                Memahami dasar iman Kristen, kepastian keselamatan, dan karya salib Kristus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl font-extrabold text-primary-fixed-dim font-serif">02</span>
              <h4 className="text-lg font-bold text-white mt-4 mb-2">Growth</h4>
              <p className="text-white/70 text-sm">
                Disiplin rohani pribadi, membaca Alkitab, doa yang berkuasa, dan komunitas berakar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl font-extrabold text-purple-400 font-serif">03</span>
              <h4 className="text-lg font-bold text-white mt-4 mb-2">Ministry</h4>
              <p className="text-white/70 text-sm">
                Menemukan karunia rohani pribadi dan mulai melayani dalam tim pelayanan gereja.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-3xl font-extrabold text-emerald-400 font-serif">04</span>
              <h4 className="text-lg font-bold text-white mt-4 mb-2">Leadership</h4>
              <p className="text-white/70 text-sm">Memimpin kelompok Connect Group dan memuridkan generasi penerus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          EVENTS & DEVOTIONAL SECTION
          ======================================================== */}
      <section id="events" className="py-28 px-4 lg:px-8 bg-[#f8f6f2] dark:bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Agenda Gereja</span>
              <h3 className="text-3xl font-bold font-serif tracking-tight mt-2 mb-6">Events Terdekat</h3>
              <div className="space-y-4">
                <div className="p-5 bg-background rounded-xl border border-border flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex flex-col items-center justify-center font-bold">
                    <span className="text-xs uppercase">NOV</span>
                    <span className="text-lg">14</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-base">Night of Worship & Healing</h5>
                    <p className="text-xs text-muted-foreground mt-1">19:00 WIB • Main Auditorium</p>
                    <p className="text-sm text-foreground/80 mt-2">
                      Malam puji-pujian intim dan doa pemulihan bersama seluruh jemaat.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-background rounded-xl border border-border flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-amber-500/10 text-amber-600 flex flex-col items-center justify-center font-bold">
                    <span className="text-xs uppercase">DEC</span>
                    <span className="text-lg">05</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-base">Kingdom Leadership Summit 2026</h5>
                    <p className="text-xs text-muted-foreground mt-1">09:00 - 16:00 WIB • Grand Ballroom</p>
                    <p className="text-sm text-foreground/80 mt-2">
                      Membekali para pemimpin marketplace dan relawan pelayanan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="devotional">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Renungan Firman</span>
              <h3 className="text-3xl font-bold font-serif tracking-tight mt-2 mb-6">Manna Hari Ini</h3>
              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                <div className="text-xs uppercase font-bold tracking-widest text-muted-foreground mb-3">
                  Mazmur 92:13-14
                </div>
                <blockquote className="text-lg italic font-serif text-foreground/90 border-l-4 border-amber-500 pl-4 my-4">
                  &ldquo;Orang benar akan bertunas seperti pohon korma, akan tumbuh subur seperti pohon aras di Libanon;
                  mereka yang ditanam di bait TUHAN akan bertunas di pelataran Allah kita.&rdquo;
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  Ketika hidup kita berakar dalam hadirat-Nya dan tertanam di dalam rumah Tuhan, musim kekeringan
                  sekalipun tidak akan menghentikan kita untuk berbuah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DOA & KONSELING (Pastoral Care & WhatsApp Hotline)
          ======================================================== */}
      <section id="prayer-support" className="py-28 px-4 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Pastoral Care</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mt-3 mb-4">
            Apakah Anda Membutuhkan Doa atau Bimbingan?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">
            Tim pastoral dan pendoa syafaat kami siap berdiri bersama Anda. Setiap permohonan doa dan konseling dijaga
            kerahasiaannya dengan penuh kasih.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg"
            >
              <a
                href="https://wa.me/6282311434969?text=Halo%20Pastoral%20Kingdom%20Life,%20saya%20membutuhkan%20pokok%20doa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Pastoral Care
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-sm font-bold">
              <AppLink href="mailto:pastoral@kingdomlife.church">Kirim Permohonan Doa</AppLink>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          FOOTER
          ======================================================== */}
      <footer className="bg-jpcc-dark text-white/70 py-16 px-4 lg:px-8 border-t border-white/10 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="text-xl font-extrabold text-white font-serif tracking-tight uppercase">
                Kingdom Life
              </span>
              <p className="text-xs text-white/60 mt-3 leading-relaxed">
                In the House of GOD, We Flourish. Gereja kontemporer yang berpusat pada Kristus dan memberkati kota.
              </p>
            </div>
            <div>
              <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Navigasi</h6>
              <ul className="space-y-2 text-xs">
                <li>
                  <AppLink href="#about" className="hover:text-white transition-colors">
                    About Us
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#jadwal-ibadah" className="hover:text-white transition-colors">
                    Jadwal Ibadah
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#community" className="hover:text-white transition-colors">
                    Community
                  </AppLink>
                </li>
                <li>
                  <AppLink href="#pemuridan" className="hover:text-white transition-colors">
                    Discipleship
                  </AppLink>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Lokasi Ibadah</h6>
              <p className="text-xs text-white/60 leading-relaxed">
                Kingdom Hall Auditorium
                <br />
                Jl. Metro Boulevard Kav. 18, Jakarta Selatan
                <br />
                DKI Jakarta 12310
              </p>
            </div>
            <div>
              <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Kontak</h6>
              <p className="text-xs text-white/60 leading-relaxed">
                Email: info@kingdomlife.church
                <br />
                Hotline: +62 823-1143-4969
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-xs text-white/40">
            © 2026 Kingdom Life Church. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
