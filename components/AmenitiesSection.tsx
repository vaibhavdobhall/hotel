const amenities = [
  { label: 'Free Wi-Fi', icon: '🌐' },
  { label: '24/7 Room Service', icon: '🛎️' },
  { label: 'Complimentary Breakfast', icon: '🥐' },
  { label: 'Valet Parking', icon: '🚗' },
  { label: 'Laundry Service', icon: '🧺' },
  { label: 'Spa & Wellness', icon: '💆‍♀️' }
];

export default function AmenitiesSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 bg-[#090909] py-20" id="amenities">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.36em] text-gold">Amenities</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white font-serif sm:text-5xl">
            Exceptional service, effortless comfort.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">
            From curated wellness offerings to premium concierge services, our hotel is designed to provide an elevated stay for every guest.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <div key={item.label} className="rounded-[28px] border border-white/10 bg-[#111111]/80 p-8 text-center shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-3xl text-gold">
                {item.icon}
              </div>
              <p className="mt-6 text-xl font-semibold text-white">{item.label}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">High-quality experiences designed for convenience, comfort, and luxury throughout your stay.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
