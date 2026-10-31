import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LandingPage, { generateMetadata } from '@/app/(marketing)/page';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('LandingPage Stitch Parallax', () => {
  it('generates dynamic SSR metadata based on searchParams', async () => {
    const defaultMeta = await generateMetadata({ searchParams: Promise.resolve({}) });
    expect(defaultMeta.title).toContain('Kingdom Life Church');

    const sesiMeta = await generateMetadata({ searchParams: Promise.resolve({ sesi: 'pagi' }) });
    expect(sesiMeta.title).toContain('Jadwal Ibadah Pagi');

    const cgMeta = await generateMetadata({ searchParams: Promise.resolve({ komunitas: 'youth' }) });
    expect(cgMeta.title).toContain('Connect Group Youth');
  });

  it('renders original Stitch Clean Parallax DOM elements', async () => {
    const Component = await LandingPage();
    render(Component);
    expect(screen.getAllByText(/Kingdom Life/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/flourish/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Jadwal Ibadah/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/About Us/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Community/i).length).toBeGreaterThan(0);
  });
});
