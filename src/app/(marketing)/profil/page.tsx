import React from 'react';
import type { Metadata } from 'next';
import { StitchProfilePage } from '@/components/kingdom-life/StitchProfilePage';

export const metadata: Metadata = {
  title: 'Profil Gereja, Visi Misi & Our Story | Kingdom Life Church',
  description:
    'Gereja lokal yang relevan dengan dampak global. Membangun generasi-generasi bintang yang berkenan kepada Allah dan dihormati manusia.',
};

export default function ProfilPage() {
  return <StitchProfilePage />;
}
