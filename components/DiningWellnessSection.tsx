export default function DiningWellnessSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 py-20" id="dining">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-gold">Dining & Wellness</p>
            <h2 className="text-4xl font-semibold leading-tight text-white font-serif sm:text-5xl">
              Savor the city, unwind in sanctuary.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Indulge in signature cuisine at our rooftop restaurant, then retreat to our spa lounge for body treatments and restorative rituals. Hospitality that feels as premium as it looks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 shadow-soft">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" alt="Restaurant dining" className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">Rooftop Dining</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">Panoramic views, seasonal menus, and crafted cocktails in a luminous rooftop setting.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/80 shadow-soft">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80" alt="Spa" className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">Spa & Wellness</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">Luxurious treatments, private suites and wellness rituals for complete calm.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
