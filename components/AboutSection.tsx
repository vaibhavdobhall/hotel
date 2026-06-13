export default function AboutSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 bg-[#090909] py-20" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-gold">Our story</p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl font-serif">
              Timeless hospitality meets contemporary design.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Contempo Hotel blends elegant comfort with warm service, delivering an experience shaped by refined interiors, locally inspired dining and thoughtful amenities. Every stay is designed around your rhythm, with bespoke touches and memorable details.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-soft">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" alt="Luxurious hotel interior" className="h-80 w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80" alt="Hotel lounge" className="h-40 w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <img src="https://images.unsplash.com/photo-1501117716987-c8e1ec3cf1f7?auto=format&fit=crop&w=900&q=80" alt="Artistic lobby" className="h-40 w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
