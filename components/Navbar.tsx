import Link from 'next/link';

const navLinks = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Events', href: '#venues' },
  { label: 'Contact', href: '#footer' }
];

export default function Navbar() {
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

        <Link href="/rooms" className="rounded-full border border-white/10 bg-[#111111]/90 px-5 py-2 text-sm uppercase tracking-[0.24em] text-white transition hover:bg-gold hover:text-ebony">
          Explore
        </Link>
      </div>
    </header>
  );
}
