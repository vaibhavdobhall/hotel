import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7ede2] text-[#1f1a12] antialiased">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#fff9f2] via-[#f7ede2]/80 to-transparent" />
          <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.36em] text-[#b48a57]">Reserve your stay</p>
              <h1 className="text-5xl font-semibold tracking-tight">Book your premium escape with ease.</h1>
              <p className="text-base leading-8 text-[#5c5245]">
                Choose your dates, select a room, and secure a premium stay with thoughtful amenities, elevated service, and a warm welcome.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[36px] border border-[#d9c6b0] bg-white/95 p-10 shadow-soft shadow-[#dabf9a]/20 backdrop-blur-xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Check-in</span>
                    <input type="date" className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]" />
                  </label>
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Check-out</span>
                    <input type="date" className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]" />
                  </label>
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Guests</span>
                    <select className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]">
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </label>
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Room type</span>
                    <select className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]">
                      <option>Premium Suite</option>
                      <option>Deluxe Room</option>
                      <option>Comfort Room</option>
                    </select>
                  </label>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button className="rounded-full bg-[#b48a57] px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#1f1a12] transition hover:bg-[#a57c4b]">
                    Confirm booking
                  </button>
                  <Link href="/" className="text-sm text-[#5c5245] underline underline-offset-2 transition hover:text-[#1f1a12]">
                    Back to home
                  </Link>
                </div>
              </section>

              <aside className="rounded-[36px] border border-[#d9c6b0] bg-[#111111]/85 p-10 text-white shadow-soft">
                <p className="text-sm uppercase tracking-[0.36em] text-gold">Booking details</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Enjoy seamless planning</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Our booking page is designed to feel premium at every step. Confirm your stay with flexible dates, room selection, and a refined layout that matches the rest of the site.
                </p>

                <div className="mt-8 space-y-4 text-sm text-white/75">
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="font-semibold text-white">Flexible stays</p>
                    <p className="mt-2">Choose from premium suites, deluxe rooms, or comfort rooms with effortless selections.</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="font-semibold text-white">Elegant amenities</p>
                    <p className="mt-2">Breakfast, Wi-Fi, concierge service, and premium room touches are included.</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
