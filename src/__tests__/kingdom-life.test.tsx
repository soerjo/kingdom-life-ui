import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LandingPage, { generateMetadata } from '@/app/(marketing)/page';

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ alt = '', ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...rest} />
  ),
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  useScroll: vi.fn(() => ({ scrollYProgress: { get: () => 0.5 } })),
  useTransform: vi.fn(() => ({ get: () => '0vh' })),
  useInView: vi.fn(() => true),
  motion: {
    div: ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => <div {...rest}>{children}</div>,
    span: ({ children, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => <span {...rest}>{children}</span>,
  },
}));

describe('LandingPage SSR & Client Component', () => {
  it('generates dynamic SSR metadata based on searchParams', async () => {
    const defaultMeta = await generateMetadata({ searchParams: Promise.resolve({}) });
    expect(defaultMeta.title).toContain('Kingdom Life Church');

    const sesiMeta = await generateMetadata({ searchParams: Promise.resolve({ sesi: 'pagi' }) });
    expect(sesiMeta.title).toContain('Jadwal Ibadah Pagi');

    const cgMeta = await generateMetadata({ searchParams: Promise.resolve({ komunitas: 'youth' }) });
    expect(cgMeta.title).toContain('Connect Group Youth');
  });

  it('renders Server Component with SSR searchParams', async () => {
    const Component = await LandingPage({ searchParams: Promise.resolve({ sesi: 'pagi' }) });
    render(Component);
    expect(screen.getAllByText(/Kingdom Life/i).length).toBeGreaterThan(0);
    expect(screen.getByText('Flourish')).toBeInTheDocument();
    expect(screen.getAllByText(/Jadwal Ibadah/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Filter Sesi Aktif:/i)).toBeInTheDocument();
  });
});

it('renders initialConnectCategory when provided via searchParams', async () => {
  const Component = await LandingPage({ searchParams: Promise.resolve({ komunitas: 'professional' }) });
  render(Component);
  expect(screen.getByText(/Kategori pilihan: professional/i)).toBeInTheDocument();
});
