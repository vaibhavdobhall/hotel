const testimonials = [
  {
    quote: 'A flawless stay with impeccable service. Every detail felt thoughtfully curated.',
    name: 'Sophia Martin',
    role: 'Travel Writer'
  },
  {
    quote: 'The rooms were stunning, the dining experience unforgettable, and the staff exceptional.',
    name: 'Ethan Parker',
    role: 'Business Traveler'
  },
  {
    quote: 'Perfect venue for our wedding reception — the ballroom was breathtaking and seamless.',
    name: 'Priya Singh',
    role: 'Event Host'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.36em] text-gold">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white font-serif sm:text-5xl">
            Guest stories that capture our signature hospitality.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[32px] border border-white/10 bg-[#111111]/80 p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
              <p className="text-lg leading-8 text-white/75">“{item.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/60">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
