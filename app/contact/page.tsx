import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7ede2] text-[#1f1a12] antialiased">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#fff9f2] via-[#f7ede2]/80 to-transparent" />
          <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.36em] text-[#b48a57]">Contact us</p>
              <h1 className="text-5xl font-semibold tracking-tight">We’re ready to help with your stay or event.</h1>
              <p className="text-base leading-8 text-[#5c5245]">
                Reach out for reservations, venue planning, or special requests, and we’ll respond with a polished, personalized experience.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[36px] border border-[#d9c6b0] bg-white/95 p-10 shadow-soft shadow-[#dabf9a]/20 backdrop-blur-xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Your name</span>
                    <input className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]" type="text" placeholder="Full name" />
                  </label>
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Email</span>
                    <input className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]" type="email" placeholder="you@example.com" />
                  </label>
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Phone</span>
                    <input className="w-full rounded-2xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]" type="tel" placeholder="+91 98765 43210" />
                  </label>
                  <label className="space-y-3 text-sm text-[#5c5245]">
                    <span className="block uppercase tracking-[0.24em] text-[#b48a57]">Request</span>
                    <textarea className="h-full min-h-[140px] w-full rounded-3xl border border-[#d9c6b0] bg-[#f7ede2] px-4 py-3 text-[#1f1a12] outline-none transition focus:border-[#b48a57]" placeholder="Tell us how we can assist" />
                  </label>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button className="rounded-full bg-[#b48a57] px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#1f1a12] transition hover:bg-[#a57c4b]">
                    Send inquiry
                  </button>
                  <Link href="/" className="text-sm text-[#5c5245] underline underline-offset-2 transition hover:text-[#1f1a12]">
                    Back to home
                  </Link>
                </div>
              </div>

              <aside className="rounded-[36px] border border-[#d9c6b0] bg-[#111111]/85 p-10 text-white shadow-soft">
                <p className="text-sm uppercase tracking-[0.36em] text-gold">Get in touch</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Live support with a refined touch.</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  For reservations, venue planning, or last-minute requests, our team is available to make your stay exceptional.
                </p>

                <div className="mt-8 space-y-5 text-sm text-white/75">
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="font-semibold text-white">Email</p>
                    <p className="mt-2">hello@contempohotel.com</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="font-semibold text-white">Phone</p>
                    <p className="mt-2">+91 98765 43210</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="font-semibold text-white">Visit us</p>
                    <p className="mt-2">Plot No. 1, Sector 18, Noida, Uttar Pradesh 201301</p>
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
