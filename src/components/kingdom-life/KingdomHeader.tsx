'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function KingdomHeader() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/profil', label: 'About Us' },
    { href: '/komunitas', label: 'Community' },
    { href: '/renungan', label: 'Renungan' },
    { href: '/events', label: 'Events' },
    { href: '/#jadwal-ibadah', label: 'Jadwal Ibadah' },
    { href: '/#prayer-support', label: 'Doa & Konseling' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center gap-3 group" href="/">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center text-white shadow-md">
            <span className="material-symbols-outlined text-[18px]">flare</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base md:text-lg tracking-tight uppercase leading-none">
              Kingdom Life
            </span>
            <span className="text-[9px] uppercase tracking-widest text-white/50 font-medium mt-0.5">
              Contemporary Church
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar py-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`text-[12px] uppercase font-bold tracking-wider transition-colors whitespace-nowrap ${
                  isActive ? 'text-amber-400 font-extrabold' : 'text-white/70 hover:text-white'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
