'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Events', href: '#venues' },
  { label: 'Contact', href: '#footer' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#top" className="font-serif text-2xl font-semibold tracking-tight text-[#f8f7f4]">
          Contempo Hotel
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm uppercase tracking-[0.24em] text-white/70 transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Explore Button */}
        <Link href="/rooms" className="hidden md:inline-block rounded-full border border-white/10 bg-[#111111]/90 px-5 py-2 text-sm uppercase tracking-[0.24em] text-white transition hover:bg-gold hover:text-ebony">
          Explore
        </Link>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center hover:text-gold transition"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm uppercase tracking-[0.24em] text-white/70 transition hover:text-gold py-2"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rooms"
              className="block rounded-full border border-white/10 bg-[#111111]/90 px-5 py-2 text-center text-sm uppercase tracking-[0.24em] text-white transition hover:bg-gold hover:text-ebony mt-4"
              onClick={closeMobileMenu}
            >
              Explore
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
