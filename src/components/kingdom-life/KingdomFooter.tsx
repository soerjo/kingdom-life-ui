'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function KingdomFooter() {
  return (
    <footer className="w-full bg-[#08090c] text-white/70 py-16 px-6 lg:px-12 text-xs border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Office Address */}
          <div className="space-y-4">
            <Link className="flex items-center gap-3 group" href="/">
              <Image
                alt="GKKD-C Church Logo"
                className="w-7 h-7 object-contain rounded-md"
                height={28}
                src="/images/logo.png"
                width={28}
              />
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-base tracking-tight uppercase leading-none font-heading">
                  GKKD-C
                </span>
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-medium mt-1">
                  Satelit Ciledug
                </span>
              </div>
            </Link>
            <p className="leading-relaxed text-white/70 text-xs">
              Grand Indonesia Menara BCA 39th Floor
              <br />
              Jl. M.H. Thamrin No. 1, Jakarta Pusat 10310
              <br />
              Indonesia
              <br />
              <span className="font-mono text-white/90 block mt-2">(021) 2358 7000</span>
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-white block">NAVIGASI</span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link className="hover:text-white transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/profil">
                  About Us &amp; Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/komunitas">
                  Community &amp; Connect Groups
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/renungan">
                  Renungan Harian &amp; Manna Firman
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/events">
                  Events &amp; Konferensi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Church Resources */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-white block">
              PELAYANAN &amp; DOA
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link className="hover:text-white transition-colors" href="/#jadwal-ibadah">
                  Jadwal Ibadah Minggu
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/#pemuridan">
                  Discipleship Pathway
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/#prayer-support">
                  Permohonan Doa &amp; Konseling
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold"
                  href="https://wa.me/6282311434969?text=Halo%20Pastoral%20Kingdom%20Life,%20saya%20membutuhkan%20pokok%20doa."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Pastoral Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Privacy & Legal */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-white block">
              LEGAL &amp; PRIVASI
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-white/60 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white transition-colors cursor-pointer">Terms of Use</span>
              </li>
              <li>
                <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                  Child Safety &amp; Protection
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© 2026 GKKD-C Satelit Ciledug. All rights reserved. In the House of GOD, We Flourish.</p>
          <p className="font-mono text-[10px]">KLIFE.CONTEMPORARY.CHURCH</p>
        </div>
      </div>
    </footer>
  );
}
