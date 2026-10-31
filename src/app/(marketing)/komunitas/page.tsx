import React from 'react';
import type { Metadata } from 'next';
import { StitchCommunityPage } from '@/components/kingdom-life/StitchCommunityPage';

export const metadata: Metadata = {
  title: 'Komunitas & Connect Groups | Kingdom Life Church',
  description:
    'Tumbuh bersama dalam komunitas yang autentik. Gereja bukan sekadar mimbar raya Minggu, tetapi meja makan di hari biasa.',
};

export default function KomunitasPage() {
  return <StitchCommunityPage />;
}
