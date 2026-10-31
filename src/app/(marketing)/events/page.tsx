import React from 'react';
import type { Metadata } from 'next';
import { StitchEventsPage } from '@/components/kingdom-life/StitchEventsPage';

export const metadata: Metadata = {
  title: 'Events & Konferensi | Kingdom Life Church',
  description: 'Momen pertemuan dengan hadirat-Nya. Jadwal konferensi, worship night, dan retreat generasi.',
};

export default function EventsPage() {
  return <StitchEventsPage />;
}
