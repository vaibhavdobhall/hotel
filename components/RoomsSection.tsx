import Link from 'next/link';

const rooms = [
  {
    title: 'Premium Suite',
    subtitle: 'Spacious suite with city views',
    price: '₹15000/night',
    occupancy: '2 Guests',
    description: 'Elegant suite with plush seating, marble bath, and panoramic windows.',
    amenities: ['King Bed', 'Wi-Fi', 'Breakfast', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Deluxe Room',
    subtitle: 'Modern comfort in a serene setting',
    price: '₹10000/night',
    occupancy: '2 Guests',
    description: 'Contemporary room with refined finishes, workspace, and premium amenities.',
    amenities: ['Queen Bed', 'Wi-Fi', 'In-Room Dining', 'Smart TV'],
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Comfort Room',
    subtitle: 'Warm and intimate accommodations',
    price: '₹5000/night',
    occupancy: '2 Guests',
    description: 'Inviting room with soft textures, elegant lighting, and a calm palette.',
    amenities: ['King Bed', 'Wi-Fi', 'Rain Shower', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'
  }
];

export default function RoomsSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 py-12 sm:py-20" id="rooms">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.36em] text-gold">Rooms & Suites</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black font-serif">
            Curated stays for every traveler.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-black/75">
            Select from premium suites, deluxe rooms, and intimate comfort accommodations — each thoughtfully designed to deliver a serene, polished experience.
          </p>
          
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.title} className="group overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-[#111111]/80 shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
              <div className="relative h-48 sm:h-72 overflow-hidden">
                <img src={room.image} alt={room.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-gold">{room.occupancy}</p>
                  <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-semibold">{room.title}</h3>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                  <p className="text-xs sm:text-sm text-white/70">{room.subtitle}</p>
                  <p className="text-base sm:text-lg font-semibold text-gold whitespace-nowrap">{room.price}</p>
                </div>
                <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-white/70">{room.description}</p>
                <div className="grid gap-2 text-xs sm:text-sm text-white/70 grid-cols-1 sm:grid-cols-2">
                  {room.amenities.map((amenity) => (
                    <span key={amenity} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2 sm:px-3 py-1 sm:py-2">
                      <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-gold" />
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 pt-2">
                  <Link href="/book" className="flex-1 sm:flex-auto text-center rounded-lg sm:rounded-full bg-gold px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-ebony transition hover:bg-[#f1d09e]">
                    Book Now
                  </Link>
                  <Link href="/rooms" className="flex-1 sm:flex-auto text-center rounded-lg sm:rounded-full border border-white/10 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-[0.24em] text-white transition hover:border-gold hover:text-gold">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
