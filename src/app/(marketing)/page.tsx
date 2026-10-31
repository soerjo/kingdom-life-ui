import React from 'react';
import type { Metadata } from 'next';
import { StitchCleanParallax } from '@/components/kingdom-life/StitchCleanParallax';

interface LandingPageProps {
  searchParams: Promise<{
    sesi?: string;
    komunitas?: string;
    topic?: string;
  }>;
}

export async function generateMetadata({ searchParams }: LandingPageProps): Promise<Metadata> {
  const params = await searchParams;
  const sesi = params?.sesi;
  const komunitas = params?.komunitas;

  let title = 'GKKD-C Satelit Ciledug — In the House of GOD, We Flourish';
  let description =
    'In the house of GOD, we flourish. Gereja lokal yang relevan dengan dampak global. Membangun generasi-generasi bintang yang berkenan kepada Allah dan dihormati manusia.';

  if (sesi) {
    const formattedSesi = sesi.charAt(0).toUpperCase() + sesi.slice(1);
    title = `Jadwal Ibadah ${formattedSesi} | GKKD-C Satelit Ciledug`;
    description = `Informasi jadwal ibadah hari Minggu sesi ${formattedSesi} di GKKD-C Satelit Ciledug. Gabung onsite maupun online streaming.`;
  } else if (komunitas) {
    const formattedKomunitas = komunitas.charAt(0).toUpperCase() + komunitas.slice(1);
    title = `Connect Group ${formattedKomunitas} | Komunitas GKKD-C`;
    description = `Temukan komunitas Connect Group ${formattedKomunitas} untuk bertumbuh bersama dalam iman, doa, dan persahabatan sejati.`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'GKKD-C Satelit Ciledug',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LandingPage() {
  return <StitchCleanParallax />;
}
