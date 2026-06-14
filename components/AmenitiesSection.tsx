const amenities = [
  { label: 'Complimentary ultra-high-speed fiber internet accessible seamlessly across the entire property', icon: '🌐' },
  { label: 'Gourmet in-room dining curated by our executive chefs, delivered straight to your door at any hour', icon: '🛎️' },
  { label: 'Indulge in a lavish daily breakfast spread featuring artisanal pastries, farm-fresh eggs, and signature house-made dishes, all included with your stay.', icon: '🥐' },
  { label: 'Complimentary, secure white-glove valet service tracking your vehicle with absolute care', icon: '🚗' },
  { label: 'Laundry Service', icon: '🧺' },
  { label: 'Spa & Wellness', icon: '💆‍♀️' }
];

export default function AmenitiesSection() {
  return (
    <section className="scroll-mt-24 border-t border-white/10 bg-[#090909] py-12 sm:py-20" id="amenities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.36em] text-gold">Amenities</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white font-serif">
            Exceptional service, effortless comfort.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-white/75">
            From curated wellness offerings to premium concierge services, our hotel is designed to provide an elevated stay for every guest.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <div key={item.label} className="rounded-2xl sm:rounded-[28px] border border-white/10 bg-[#111111]/80 p-6 sm:p-8 text-center shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
              <div className="mx-auto flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-white/5 text-2xl sm:text-3xl text-gold">
                {item.icon}
              </div>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">{item.label}</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-white/65">Stay connected with our complimentary high-speed wireless internet, available throughout the hotel for seamless browsing and productivity. Indulge in culinary delights at any hour with our extensive 24/7 room service menu, delivered fresh to your door. Start your day right with a delicious complimentary breakfast, featuring a wide selection of fresh and healthy options. Enjoy the convenience of our professional valet parking service, ensuring a hassle-free arrival and departure experience. Keep your wardrobe fresh and crisp with our efficient laundry service, available for all your garment care needs. Rejuvenate your mind and body at our luxurious spa and wellness center, offering a range of treatments and fitness facilities.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
