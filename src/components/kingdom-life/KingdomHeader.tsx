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
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`text-[12px] uppercase font-bold tracking-wider transition-colors ${
                  isActive ? 'text-amber-400 font-extrabold' : 'text-white/70 hover:text-white'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-4">
          <Link
            className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-widest text-white/80 hover:text-white px-3 py-1.5 transition-colors"
            href="/#prayer-support"
          >
            Sign Up
          </Link>
          <Link
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white font-bold text-[11px] uppercase tracking-widest transition-all duration-300"
            href="/#jadwal-ibadah"
          >
            Join Online
          </Link>
        </div>
      </div>
    </header>
  );
}
