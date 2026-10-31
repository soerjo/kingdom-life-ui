'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AppLink } from '@/components/ui/app-link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SpotlightCard, SplitText, CountUp, ShinyText } from '@/components/react-bits';
import { cn } from '@/utils';
import { Menu as MenuIcon } from 'lucide-react';
import { useParallax } from '@/hooks';
// Inline utility for Framer Motion wrapped div
const MotionDiv = motion.div;
const MotionSpan = motion.span;

// Data for navigation and sections
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
        'absolute px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-lg whitespace-nowrap',
        className,
      )}
    >
      {text}
    </MotionDiv>
  );
};

export default function LandingPage() {
  // Parallax refs for different sections
  const heroBgRef = useRef<HTMLDivElement>(null);
  const { y: heroBgY } = useParallax({ ref: heroBgRef, speed: 0.1 });
  const heroTextRef = useRef<HTMLSpanElement>(null);
  const { y: heroTextY } = useParallax({ ref: heroTextRef, speed: 0.2 });
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ========================================================
          TOP NAVIGATION BAR
          ======================================================== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg transition-all duration-300 shadow-sm">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <AppLink href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Kingdom Life Church Logo" width={40} height={40} />
            <span className="text-xl font-bold text-primary font-heading">Kingdom Life</span>
          </AppLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </AppLink>
            ))}
            <Button asChild size="sm" className="ml-4">
              <AppLink href="#join-online">Join Online</AppLink>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <AppLink href="#sign-up">Sign Up</AppLink>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 pt-6">
                  {navLinks.map((link) => (
                    <AppLink
                      key={link.href}
                      href={link.href}
                      className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </AppLink>
                  ))}
                  <Button asChild className="mt-4">
                    <AppLink href="#join-online">Join Online</AppLink>
                  </Button>
                  <Button asChild variant="secondary" className="mt-2">
                    <AppLink href="#sign-up">Sign Up</AppLink>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main>
        {/* ========================================================
            SEGMENT 1: HERO SECTION
            ======================================================== */}
        <section
          className="relative min-h-[96vh] flex items-center justify-center bg-background overflow-hidden pt-24 pb-16 px-6"
          id="hero"
        >
          <MotionDiv ref={heroBgRef} style={{ y: heroBgY }} className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero-bg.jpg" // Placeholder, replace with actual image path
              alt="Kingdom Life Church Hero Background"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="z-0 opacity-80"
            />
          </MotionDiv>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <MotionSpan style={{ y: heroTextY }} ref={heroTextRef as React.RefObject<HTMLSpanElement>}>
              <ShinyText className="text-6xl md:text-7xl lg:text-8xl font-heading text-white drop-shadow-lg leading-tight">
                <SplitText text="In the House of GOD, We Flourish" by="word" />
              </ShinyText>
            </MotionSpan>
            <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
              Gereja Kontemporer yang Berpusat pada Kristus. Datang dan rasakan kasih-Nya bersama kami.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <AppLink href="#jadwal-ibadah">Lihat Jadwal Ibadah</AppLink>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <AppLink href="#about">Pelajari Lebih Lanjut</AppLink>
              </Button>
            </div>

            {/* Floating Parallax Badges */}
            <FloatingBadge text="Kasih Tanpa Syarat" speed={0.05} className="top-[15%] left-[5%] rotate-[-10deg]" />
            <FloatingBadge text="Komunitas Nyata" speed={0.1} className="top-[30%] right-[10%] rotate-[5deg]" />
            <FloatingBadge
              text="Bertumbuh Menjadi Murid"
              speed={0.07}
              className="bottom-[20%] left-[15%] rotate-[8deg]"
            />
          </div>
        </section>

        {/* ========================================================
            SEGMENT 2: OUR STORY & LEADERSHIP SPOTLIGHT
            ======================================================== */}
        <section className="bg-card text-foreground py-28 px-6 lg:px-12 relative overflow-hidden" id="about">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl md:text-6xl font-heading text-center mb-16 text-primary-dark-variant italic">
              Our Story & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Kingdom Life Church adalah tempat di mana setiap individu menemukan kasih tanpa syarat, komunitas yang
                  nyata, dan kesempatan untuk bertumbuh menjadi murid Kristus yang berdaya.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Visi kami adalah melihat setiap orang mengalami transformasi hidup melalui perjumpaan pribadi dengan
                  Tuhan, dan menjadi agen perubahan positif di tengah masyarakat.
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                  <li>Kasih Tanpa Syarat: Menerima setiap orang apa adanya.</li>
                  <li>Komunitas Nyata: Membangun hubungan yang mendukung dan menguatkan.</li>
                  <li>Bertumbuh Menjadi Murid: Menjadi pribadi yang terus belajar dan mengikuti teladan Kristus.</li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/about-story.jpg" // Placeholder
                  alt="Our Story"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-4xl font-heading text-primary-dark-variant mb-8">Our Values in Action</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SpotlightCard className="p-8 text-center">
                  <h4 className="text-2xl font-semibold mb-4 text-primary-dark-variant">Love Unconditionally</h4>
                  <p className="text-muted-foreground">
                    We believe in extending God&apos;s unconditional love to everyone, regardless of background or past.
                  </p>
                </SpotlightCard>
                <SpotlightCard className="p-8 text-center">
                  <h4 className="text-2xl font-semibold mb-4 text-primary-dark-variant">Authentic Community</h4>
                  <p className="text-muted-foreground">
                    Building genuine relationships is at the heart of our church, fostering an environment of support.
                  </p>
                </SpotlightCard>
                <SpotlightCard className="p-8 text-center">
                  <h4 className="text-2xl font-semibold mb-4 text-primary-dark-variant">Grow as Disciples</h4>
                  <p className="text-muted-foreground">
                    We are committed to helping individuals grow in their faith and become true followers of Christ.
                  </p>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEGMENT 3: CAMPUSES & SUNDAY SERVICE SCHEDULE
            ======================================================== */}
        <section
          className="bg-background-dark text-white py-28 px-6 lg:px-12 relative overflow-hidden"
          id="jadwal-ibadah"
        >
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-5xl md:text-6xl font-heading italic mb-16 text-primary-light-variant">
              Jadwal Ibadah Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpotlightCard className="bg-background-dark-card p-8 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-primary-light-variant">Sunday Service</h3>
                <p className="text-xl font-bold mb-2">09:00 WIB</p>
                <p className="text-white/80">Ibadah Raya 1</p>
                <CountUp end={1200} suffix="+" className="text-4xl font-bold mt-4 text-lime" />
                <p className="text-white/70">Jemaat Hadir</p>
              </SpotlightCard>
              <SpotlightCard className="bg-background-dark-card p-8 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-primary-light-variant">Sunday Service</h3>
                <p className="text-xl font-bold mb-2">11:30 WIB</p>
                <p className="text-white/80">Ibadah Raya 2</p>
                <CountUp end={1500} suffix="+" className="text-4xl font-bold mt-4 text-lime" />
                <p className="text-white/70">Jemaat Hadir</p>
              </SpotlightCard>
              <SpotlightCard className="bg-background-dark-card p-8 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-primary-light-variant">Youth & Teens</h3>
                <p className="text-xl font-bold mb-2">Setiap Sabtu</p>
                <p className="text-white/80">16:00 WIB</p>
                <CountUp end={350} suffix="+" className="text-4xl font-bold mt-4 text-lime" />
                <p className="text-white/70">Anak Muda</p>
              </SpotlightCard>
              <SpotlightCard className="bg-background-dark-card p-8 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-primary-light-variant">Kids Church</h3>
                <p className="text-xl font-bold mb-2">Setiap Minggu</p>
                <p className="text-white/80">Sesuai Jadwal Raya</p>
                <CountUp end={500} suffix="+" className="text-4xl font-bold mt-4 text-lime" />
                <p className="text-white/70">Anak-anak</p>
              </SpotlightCard>
            </div>

            <div className="mt-16">
              <p className="text-xl text-white/90 mb-4">
                Lokasi: Gedung Kingdom Life Church, Jl. Contoh No. 123, Jakarta
              </p>
              <Button asChild size="lg" className="text-lg">
                <AppLink href="#join-online">Gabung Ibadah Online</AppLink>
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEGMENT 4: "COMMUNITY" Connect Groups
            ======================================================== */}
        <section className="bg-card text-foreground py-28 px-6 lg:px-12 relative overflow-hidden" id="community">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-5xl md:text-6xl font-heading italic mb-16 text-primary-dark-variant">
              Lebih Dari Sekadar Hari Minggu
            </h2>
            <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Temukan komunitas yang mendukung dan bertumbuh bersama dalam Connect Groups kami. Ada kelompok untuk
              setiap usia dan minat!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SpotlightCard className="p-8 text-center">
                <Image
                  src="/images/community-youth.jpg"
                  alt="Youth Community"
                  width={200}
                  height={150}
                  className="mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark-variant">Youth Connect</h3>
                <p className="text-muted-foreground">
                  Kelompok khusus untuk remaja dan pemuda, tempat bertumbuh dan bersenang-senang.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-8 text-center">
                <Image
                  src="/images/community-men.jpg"
                  alt="Men's Community"
                  width={200}
                  height={150}
                  className="mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark-variant">Men&apos;s Fellowship</h3>
                <p className="text-muted-foreground">Membangun pria-pria berintegritas dalam persekutuan yang kuat.</p>
              </SpotlightCard>
              <SpotlightCard className="p-8 text-center">
                <Image
                  src="/images/community-women.jpg"
                  alt="Women's Community"
                  width={200}
                  height={150}
                  className="mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark-variant">Women&apos;s Gathering</h3>
                <p className="text-muted-foreground">Persekutuan wanita untuk saling menguatkan dan mendukung.</p>
              </SpotlightCard>
            </div>
            <Button asChild size="lg" className="mt-12 text-lg">
              <AppLink href="#connect-groups">Gabung Connect Group</AppLink>
            </Button>
          </div>
        </section>

        {/* ========================================================
            SEGMENT 5: PEMURIDAN / DISCIPLESHIP JOURNEY
            ======================================================== */}
        <section className="relative bg-background-dark text-white px-6 lg:px-12 overflow-hidden py-28" id="pemuridan">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl font-heading italic mb-16 text-primary-light-variant">
              Perjalanan Pemuridan
            </h2>
            <p className="text-xl leading-relaxed mb-12 text-white/90">
              Kami percaya setiap orang dipanggil untuk menjadi murid Kristus. Ikuti perjalanan pemuridan kami yang
              terstruktur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-background-dark-card p-8 rounded-xl shadow-elevation-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-light-variant">1. Foundation</h3>
                <p className="text-white/80">Memahami dasar-dasar iman Kristen dan identitas Anda di dalam Kristus.</p>
              </div>
              <div className="bg-background-dark-card p-8 rounded-xl shadow-elevation-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-light-variant">2. Growth</h3>
                <p className="text-white/80">
                  Membangun kebiasaan rohani yang sehat dan bertumbuh dalam karakter Kristus.
                </p>
              </div>
              <div className="bg-background-dark-card p-8 rounded-xl shadow-elevation-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-light-variant">3. Ministry</h3>
                <p className="text-white/80">
                  Menemukan dan mengaktifkan karunia rohani Anda untuk melayani Tuhan dan sesama.
                </p>
              </div>
              <div className="bg-background-dark-card p-8 rounded-xl shadow-elevation-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary-light-variant">4. Leadership</h3>
                <p className="text-white/80">Mempersiapkan Anda untuk memimpin dan memuridkan orang lain.</p>
              </div>
            </div>
            <Button asChild size="lg" className="mt-12 text-lg">
              <AppLink href="#discipleship-track">Daftar Pemuridan</AppLink>
            </Button>
          </div>
        </section>

        {/* ========================================================
            SEGMENT 6: EVENTS & CONFERENCES
            ======================================================== */}
        <section className="bg-card py-28 px-6 lg:px-12 relative overflow-hidden" id="events">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-5xl md:text-6xl font-heading italic mb-16 text-primary-dark-variant">
              Events & Konferensi Mendatang
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <SpotlightCard className="p-8 text-left">
                <h3 className="text-3xl font-semibold mb-4 text-primary-dark-variant">Youth Camp 2026</h3>
                <p className="text-muted-foreground mb-4">20-22 Juli 2026 | Puncak, Bogor</p>
                <p className="text-lg leading-relaxed mb-6">
                  Pengalaman rohani yang mendalam untuk remaja dan pemuda dengan pembicara inspiratif dan aktivitas
                  seru.
                </p>
                <Button asChild size="sm">
                  <AppLink href="#event-youth-camp">Daftar Sekarang</AppLink>
                </Button>
              </SpotlightCard>
              <SpotlightCard className="p-8 text-left">
                Perjalanan Pemuridan
                <p className="text-muted-foreground mb-4">15 Agustus 2026 | Jakarta Convention Center</p>
                <p className="text-lg leading-relaxed mb-6">
                  Malam penyembahan akbar bersama worship leaders terkemuka untuk memuliakan Tuhan.
                </p>
                <Button asChild size="sm">
                  <AppLink href="#event-worship-night">Informasi Lebih Lanjut</AppLink>
                </Button>
              </SpotlightCard>
              <SpotlightCard className="p-8 text-left">
                <h3 className="text-3xl font-semibold mb-4 text-primary-dark-variant">Leadership Summit</h3>
                <p className="text-muted-foreground mb-4">10-12 September 2026 | Online & Onsite</p>
                <p className="text-lg leading-relaxed mb-6">
                  Mempersiapkan pemimpin masa depan dengan sesi kepemimpinan praktis dan mentoring eksklusif.
                </p>
                <Button asChild size="sm">
                  <AppLink href="#event-leadership-summit">Daftar Sekarang</AppLink>
                </Button>
              </SpotlightCard>
            </div>
            <Button asChild size="lg" className="mt-12 text-lg">
              <AppLink href="#all-events">Lihat Semua Events</AppLink>
            </Button>
          </div>
        </section>

        {/* ========================================================
            SEGMENT 7: DEVOTIONAL / RENUNGAN HARIAN
            ======================================================== */}
        <section className="bg-background-dark text-white py-28 px-6 lg:px-12 relative overflow-hidden" id="devotional">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl font-heading italic mb-16 text-primary-light-variant">
              Renungan Harian
            </h2>
            <div className="bg-background-dark-card p-10 rounded-xl shadow-elevation-1 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-medium text-white/90 italic mb-6">
                &quot;Sebab di mana ada dua atau tiga orang berkumpul dalam nama-Ku, di situ Aku ada di tengah-tengah
                mereka.&quot;
              </p>
              <p className="text-white/70 mb-8">Matius 18:20</p>
              <Button asChild size="lg" className="text-lg">
                <AppLink href="#read-devotional">Baca Renungan Hari Ini</AppLink>
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEGMENT 8: PASTORAL CARE & PRAYER REQUEST
            ======================================================== */}
        <section className="bg-card text-foreground py-28 px-6 lg:px-12 relative overflow-hidden" id="prayer-support">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-5xl md:text-6xl font-heading italic mb-16 text-primary-dark-variant">
              Doa & Konseling Pastoral
            </h2>
            <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Kami ada untuk Anda. Ajukan permohonan doa atau dapatkan dukungan konseling pastoral.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-primary-dark-variant">Permohonan Doa</h3>
                <p className="text-muted-foreground mb-6">Tim pastoral kami siap mendoakan setiap permohonan Anda.</p>
                <Button asChild size="lg" className="text-lg">
                  <AppLink href="#prayer-form">Ajukan Permohonan Doa</AppLink>
                </Button>
              </div>
              <div>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    WhatsApp Kami
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          FOOTER
          ======================================================== */}
      <footer className="bg-background-dark text-white/70 py-16 px-6 lg:px-12 text-xs">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <AppLink href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/images/logo.png" alt="Kingdom Life Church Logo" width={30} height={30} />
              <span className="text-xl font-bold text-primary font-heading">Kingdom Life</span>
            </AppLink>
            <p className="mb-2">Gedung Kingdom Life Church</p>
            <p className="mb-2">Jl. Contoh No. 123, Jakarta</p>
            <p className="mb-4">(021) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Jadwal Ibadah</h4>
            <p className="mb-2">Minggu: 09:00 WIB & 11:30 WIB</p>
            <p className="mb-2">Youth &amp; Teens: Sabtu 16:00 WIB</p>
            <p>Kids Church: Sesuai Jadwal Raya</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <AppLink href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <AppLink href="#" className="hover:text-primary transition-colors">
                Facebook
              </AppLink>
              <AppLink href="#" className="hover:text-primary transition-colors">
                Instagram
              </AppLink>
              <AppLink href="#" className="hover:text-primary transition-colors">
                YouTube
              </AppLink>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© 2026 Kingdom Life Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
