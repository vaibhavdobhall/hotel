import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const rooms = [
  {
    title: 'Premium Suite',
    subtitle: 'Spacious suite with city views',
    price: '$420/night',
    occupancy: '2 Guests',
    description: 'Elegant suite with plush seating, marble bath, and panoramic windows.',
    amenities: ['King Bed', 'Wi-Fi', 'Breakfast', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Deluxe Room',
    subtitle: 'Modern comfort in a serene setting',
    price: '$280/night',
    occupancy: '2 Guests',
    description: 'Contemporary room with refined finishes, workspace, and premium amenities.',
    amenities: ['Queen Bed', 'Wi-Fi', 'In-Room Dining', 'Smart TV'],
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Comfort Room',
    subtitle: 'Warm and intimate accommodations',
    price: '$190/night',
    occupancy: '2 Guests',
    description: 'Inviting room with soft textures, elegant lighting, and a calm palette.',
    amenities: ['King Bed', 'Wi-Fi', 'Rain Shower', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'
  }
];

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7ede2] text-[#1f1a12] antialiased">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#fff9f2] via-[#f7ede2]/80 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.36em] text-[#b48a57]">Rooms & Suites</p>
              <h1 className="text-5xl font-semibold tracking-tight">Explore our signature accommodations.</h1>
              <p className="text-base leading-8 text-[#5c5245]">
                Discover premium suites, deluxe rooms, and comfort retreats designed to deliver modern luxury, polished details, and a restful atmosphere.
              </p>
            </div>

            <div className="grid gap-8">
              {rooms.map((room) => (
                <article key={room.title} className="overflow-hidden rounded-[36px] border border-[#d9c6b0] bg-white/95 shadow-soft shadow-[#dabf9a]/20 transition hover:-translate-y-1">
                  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative h-72 overflow-hidden lg:h-auto">
                      <img src={room.image} alt={room.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute left-6 bottom-6 text-white">
                        <p className="text-sm uppercase tracking-[0.28em] text-gold">{room.occupancy}</p>
                        <h2 className="mt-2 text-3xl font-semibold">{room.title}</h2>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between gap-6">
                        <p className="text-sm text-[#5c5245]">{room.subtitle}</p>
                        <p className="text-lg font-semibold text-[#b48a57]">{room.price}</p>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-[#5c5245]">{room.description}</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-[#5c5245]">
                        {room.amenities.map((amenity) => (
                          <span key={amenity} className="inline-flex items-center gap-2 rounded-full border border-[#d9c6b0] bg-[#f3e9d9] px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#b48a57]" />
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-[#b48a57] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#1f1a12] transition hover:bg-[#a57c4b]">
                          Book Now
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#d9c6b0] px-6 py-3 text-sm uppercase tracking-[0.24em] text-[#5c5245] transition hover:border-[#b48a57] hover:text-[#1f1a12]">
                          Request details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
