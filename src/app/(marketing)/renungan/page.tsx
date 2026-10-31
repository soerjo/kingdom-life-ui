import React from 'react';
import type { Metadata } from 'next';
import { StitchDailyPage } from '@/components/kingdom-life/StitchDailyPage';

export const metadata: Metadata = {
  title: 'Renungan Harian & Manna Firman | Kingdom Life Church',
  description:
    'Berakar kuat setiap hari melalui renungan firman Tuhan yang praktis, kontekstual, dan menumbuhkan iman.',
};

export default function RenunganPage() {
  return <StitchDailyPage />;
}
