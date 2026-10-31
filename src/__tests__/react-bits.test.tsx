import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CountUp, SplitText, SpotlightCard, ShinyText } from '@/components/react-bits';
import { useParallax } from '@/hooks/useParallax';

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

describe('React Bits - CountUp', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders with start and animates to end', () => {
    render(<CountUp end={100} start={0} duration={1} delay={0} prefix="$" suffix="+" decimals={0} />);
    expect(screen.getByText(/\$0\+/)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(screen.getByText(/\$100\+/)).toBeInTheDocument();
  });

  it('handles delay and cleanup', () => {
    const { unmount } = render(<CountUp end={50} delay={1} duration={0.5} />);
    unmount();
  });

  it('handles custom duration <= 0 fallback', () => {
    render(<CountUp end={10} duration={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

describe('React Bits - SplitText', () => {
  it('renders words by default', () => {
    render(<SplitText text="Hello Kingdom Life" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Kingdom')).toBeInTheDocument();
    expect(screen.getByText('Life')).toBeInTheDocument();
  });

  it('renders by character with custom wrappers', () => {
    render(
      <SplitText
        text="A B"
        by="character"
        wordWrapper={(word, idx) => <span data-testid={`word-${idx}`}>{word}</span>}
        charWrapper={(char, idx) => <span data-testid={`char-${idx}`}>{char}</span>}
      />,
    );
    expect(screen.getByTestId('word-0')).toBeInTheDocument();
    expect(screen.getByTestId('word-1')).toBeInTheDocument();
  });

  it('renders character without charWrapper', () => {
    render(<SplitText text="Hi" by="character" />);
    expect(screen.getByText('H')).toBeInTheDocument();
    expect(screen.getByText('i')).toBeInTheDocument();
  });
});

describe('React Bits - SpotlightCard', () => {
  it('handles mouse enter, move, and leave', () => {
    const { container } = render(
      <SpotlightCard className="custom-card" spotlightColor="from-amber-500">
        <div>Card Content</div>
      </SpotlightCard>,
    );

    const card = container.firstChild as HTMLDivElement;
    expect(card).toBeInTheDocument();

    card.getBoundingClientRect = vi.fn(() => ({
      left: 10,
      top: 20,
      width: 200,
      height: 100,
      bottom: 120,
      right: 210,
      x: 10,
      y: 20,
      toJSON: () => {},
    }));

    fireEvent.mouseEnter(card);
    fireEvent.mouseMove(card, { clientX: 60, clientY: 70 });
    fireEvent.mouseLeave(card);
  });
});

describe('React Bits - ShinyText', () => {
  it('renders text with shimmer styling', () => {
    render(<ShinyText className="custom-shine">Glow Text</ShinyText>);
    expect(screen.getByText('Glow Text')).toBeInTheDocument();
  });
});

describe('Hooks - useParallax', () => {
  function TestParallaxComponent() {
    useParallax();
    return <div data-parallax-speed="0.1">Parallax Target</div>;
  }

  it('executes parallax scroll calculations safely', () => {
    render(<TestParallaxComponent />);
    expect(screen.getByText('Parallax Target')).toBeInTheDocument();
    fireEvent.scroll(window);
    fireEvent.resize(window);
  });
});
