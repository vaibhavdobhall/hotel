const venues = [
  { name: 'Grand Ballroom', capacity: 'Up to 800 guests', description: 'A grand event space for gala dinners, weddings and large conferences.' },
  { name: 'Crystal Hall', capacity: 'Up to 250 guests', description: 'Elegant banquets with premium AV support and custom catering options.' },
  { name: 'Garden Salon', capacity: 'Up to 80 guests', description: 'Intimate receptions and private celebrations in a polished setting.' }
];

import Link from 'next/link';

export default function VenuesSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 bg-[#090909] py-20" id="venues">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.36em] text-gold">Venues</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white font-serif sm:text-5xl">
            Host unforgettable moments.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
            From intimate gatherings to grand celebrations, our event venues are designed for seamless planning and timeless luxury.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {venues.map((venue) => (
            <article key={venue.name} className="rounded-[32px] border border-white/10 bg-[#111111]/80 p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
              <h3 className="text-2xl font-semibold text-white">{venue.name}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-gold">{venue.capacity}</p>
              <p className="mt-4 text-sm leading-7 text-white/70">{venue.description}</p>
              <Link href="/contact" className="mt-8 inline-flex rounded-full border border-gold/40 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-gold transition hover:bg-gold hover:text-ebony">
                Inquire Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
