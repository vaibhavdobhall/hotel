const socialLinks = [
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'LinkedIn', href: '#', icon: 'in' }
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#090909] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gold">Contempo Hotel</p>
            <h3 className="mt-4 text-3xl font-semibold text-white font-serif">Refined stays, elevated service.</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              123 Luxury Avenue, Downtown City | Phone: +91 12345 67890 | Email: hello@contempohotel.com
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gold">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li><a href="#rooms" className="transition hover:text-gold">Rooms & Suites</a></li>
              <li><a href="#amenities" className="transition hover:text-gold">Amenities</a></li>
              <li><a href="#dining" className="transition hover:text-gold">Dining</a></li>
              <li><a href="#venues" className="transition hover:text-gold">Venues</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gold">Locate Us</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/60">
              <iframe
                className="h-64 w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509902!2d144.9537353155043!3d-37.8162791797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8195d%3A0x3ebfa1ff9e5b7251!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1617654547110!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/75">
              {socialLinks.map((network) => (
                <a key={network.label} href={network.href} className="rounded-full border border-white/10 px-4 py-3 text-sm transition hover:border-gold hover:text-gold">
                  {network.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 Contempo Hotel. Designed for discerning travelers.
        </p>
      </div>
    </footer>
  );
}
