import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LandingPage from '@/app/(marketing)/page';

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

describe('LandingPage', () => {
  it('renders the Header/Navbar with logo and navigation links', () => {
    render(<LandingPage />);
    expect(screen.getAllByText(/Kingdom Life/i).length).toBeGreaterThan(0);
  });

  it('renders the Hero Section with SplitText or title', () => {
    render(<LandingPage />);
    expect(screen.getByText('Flourish')).toBeInTheDocument();
  });

  it('renders the Jadwal Ibadah section with SpotlightCard', () => {
    render(<LandingPage />);
    expect(screen.getAllByText(/Jadwal Ibadah/i).length).toBeGreaterThan(0);
  });
});
