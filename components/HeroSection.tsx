import Link from 'next/link';
import Navbar from './Navbar';

const roomOptions = [
  { label: 'Check-in', type: 'date', name: 'checkin' },
  { label: 'Check-out', type: 'date', name: 'checkout' }
];

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="https://images.unsplash.com/video-1519817651461-411020c4610a?auto=format&fit=crop&w=1600&q=80" type="video/mp4" />
        </video>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-end px-6 py-10 lg:px-8">
        <div className="max-w-3xl space-y-6 pb-20 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Luxury hotel stays</p>
          <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Your refined escape to modern comfort and timeless hospitality.
          </h1>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            Discover elegant suites, curated dining, and exceptional event venues in the heart of the city. Book with confidence for a stay that feels bespoke.
          </p>
        </div>

        <div className="mb-12 rounded-[32px] border border-white/10 bg-black/80 p-6 shadow-soft backdrop-blur-xl md:max-w-2xl">
          <div className="flex items-center justify-between gap-3 pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">Check Availability</p>
              <h2 className="text-2xl font-semibold text-white">Reserve your stay</h2>
            </div>
            <Link href="/book" className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-gold transition hover:bg-gold hover:text-ebony">
              Book Now
            </Link>
          </div>

          <form className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roomOptions.map((field) => (
              <label key={field.name} className="space-y-2 text-sm text-white/80">
                <span>{field.label}</span>
                <input className="w-full rounded-2xl border border-white/10 bg-[#111111]/85 px-4 py-3 text-white outline-none transition focus:border-gold" type={field.type} name={field.name} />
              </label>
            ))}
            <label className="space-y-2 text-sm text-white/80">
              <span>Guests</span>
              <select className="w-full rounded-2xl border border-white/10 bg-[#111111]/85 px-4 py-3 text-white outline-none focus:border-gold">
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span>Rooms</span>
              <select className="w-full rounded-2xl border border-white/10 bg-[#111111]/85 px-4 py-3 text-white outline-none focus:border-gold">
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
