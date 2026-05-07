import { Link } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { FloatingIframes } from "@/components/FloatingIframes";

const ValueCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="flex flex-col gap-4 bg-white rounded-2xl p-7 shadow-md border border-neutral-100 flex-1 min-w-[220px]">
    <div className="text-3xl">{icon}</div>
    <h3 className="text-blue-900 text-xl font-bold">{title}</h3>
    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
      {description}
    </p>
  </div>
);

const TeamBullet = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-neutral-700 text-sm md:text-base">
    <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-red-600 inline-block"></span>
    {text}
  </li>
);

export const AboutPage = () => {
  return (
    <body className="text-neutral-700 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-[25.6px]">
      <FloatingWidget />
      <div className="text-sm box-border caret-transparent flex leading-[22.4px] min-h-[1000px] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm box-border caret-transparent grow leading-[22.4px] min-h-[auto] min-w-px outline-[3px] w-full md:text-base md:leading-[25.6px]">
          <Header />

          {/* ── HERO BANNER ─────────────────────────────────────────── */}
          <div className="relative bg-blue-900 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/8985463/pexels-photo-8985463.jpeg?auto=compress&cs=tinysrgb&w=1200')",
              }}
            />
            <div className="relative max-w-[1200px] w-[88%] mx-auto py-16 md:py-24 text-center md:text-left">
              <p className="text-red-400 uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                About Us
              </p>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5">
                Built on Service,
                <br className="hidden md:block" /> Driven by Passion
              </h1>
              <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
                At Heart Heating, Cooling, Plumbing &amp; Electric, we&#39;re
                not just here to fix your home systems—we&#39;re here to make
                your life easier.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://servicebyheart.com/contact-us/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-red-700 transition-colors"
                >
                  <img
                    src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  Schedule Now
                </a>
                <Link
                  to="/about-us"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* ── AWARD BANNER ──────────────────────────────────────── */}
          <div className="bg-red-600 text-white py-4 px-6 text-center">
            <a
              href="https://servicebyheart.com/community/feel-the-love/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm md:text-base hover:underline"
            >
              <span>🏆</span>
              View Our 2025 Lennox Feel the Love™ Program Award Winner
              <span className="text-yellow-300">→</span>
            </a>
          </div>

          {/* ── WHO WE ARE ──────────────────────────────────────────── */}
          <section className="py-[75px] md:py-[100px]">
            <div className="max-w-[1200px] w-[88%] mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                    About Heart Heating, Cooling, Plumbing, Electric
                  </p>
                  <h2 className="text-red-600 text-3xl md:text-5xl font-bold leading-tight mb-6">
                    Built on Service,
                    <br /> Driven by Passion
                  </h2>
                  <p className="text-neutral-700 leading-relaxed mb-5 text-sm md:text-base">
                    At Heart Heating, Cooling, Plumbing &amp; Electric,
                    we&#39;re not just here to fix your home systems—we&#39;re
                    here to make your life easier. As a family-owned business,
                    we&#39;re built on values like honesty, dedication, and
                    commitment to serving our community. While we might not be
                    the biggest company around, we&#39;re big on delivering
                    top-notch HVAC, plumbing, and electrical services that you
                    can rely on.
                  </p>
                  <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                    We&#39;re not your average home service company. Founded
                    with a genuine desire to make life easier for homeowners.
                    We&#39;re proud to have grown from humble beginnings into a
                    go-to provider for heating, cooling, plumbing, and
                    electrical services. And we&#39;ve done it all by staying
                    true to our roots, putting people first, and delivering
                    results that last.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                      href="https://servicebyheart.com/contact-us/"
                      className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-red-700 transition-colors"
                    >
                      <img
                        src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                        alt=""
                        className="w-4 h-4"
                      />
                      Schedule Now
                    </a>
                    <Link
                      to="/about-us"
                      className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-blue-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <video
                      poster="https://images.pexels.com/photos/8985463/pexels-photo-8985463.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      preload="metadata"
                      playsInline
                      loop
                      muted
                      autoPlay
                      src="https://servicebyheart.com/wp-content/uploads/2026/03/Copy-of-Copy-of-Heart-HCPE-Brand.mp4"
                      className="w-full h-auto object-cover"
                    >
                      <source
                        src="https://servicebyheart.com/wp-content/uploads/2026/03/Copy-of-Copy-of-Heart-HCPE-Brand.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-widest pl-16 pr-4 py-3 rounded-l-full shadow-lg">
                    Premium-quality Home Services Done Right
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── FULL-SERVICE HOME COMFORT ────────────────────────────── */}
          <section className="bg-neutral-100 py-[75px] md:py-[100px]">
            <div className="max-w-[1200px] w-[88%] mx-auto text-center">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                Full-Service Home Comfort
              </p>
              <h2 className="text-red-600 text-3xl md:text-5xl font-bold mb-6">
                One Heart. All-in-One Home Services.
              </h2>
              <p className="text-neutral-700 leading-relaxed max-w-3xl mx-auto text-sm md:text-base mb-10">
                Your home&#39;s systems should work together seamlessly, and so
                should your service team. Heart Heating, Cooling, Plumbing &amp;
                Electric delivers full-service solutions for HVAC, plumbing,
                electrical, and emergency repairs with one trusted call. Count
                on experienced professionals who keep your home safe, efficient,
                and comfortable year-round.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  {
                    label: "Air Conditioning",
                    href: "https://servicebyheart.com/hvac/air-conditioning/",
                    emoji: "❄️",
                  },
                  {
                    label: "Heating",
                    href: "https://servicebyheart.com/hvac/heating-services/",
                    emoji: "🔥",
                  },
                  {
                    label: "Plumbing",
                    href: "https://servicebyheart.com/plumbing-services/",
                    emoji: "🔧",
                  },
                  {
                    label: "Electrical",
                    href: "https://servicebyheart.com/electrical/",
                    emoji: "⚡",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow hover:shadow-md transition-shadow border border-neutral-100 hover:border-red-200"
                  >
                    <span className="text-4xl">{s.emoji}</span>
                    <span className="text-blue-900 font-bold text-sm md:text-base">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── THE HEART DIFFERENCE ────────────────────────────────── */}
          <section className="py-[75px] md:py-[100px]">
            <div className="max-w-[1200px] w-[88%] mx-auto">
              <div className="text-center mb-12">
                <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                  The Heart Difference
                </p>
                <h2 className="text-red-600 text-3xl md:text-5xl font-bold">
                  Values You Can Trust
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <ValueCard
                  icon="💲"
                  title="Honest Pricing"
                  description="We believe in being upfront, always. That means no hidden fees, no upsells, and no confusing tech talk. Just real solutions that make sense for your home and your budget."
                />
                <ValueCard
                  icon="🛠️"
                  title="Reliable Work"
                  description="We don&#39;t just show up, fix the problem, and leave. We stand behind every job we do. If something&#39;s not right, we&#39;ll make it right because your satisfaction is everything."
                />
                <ValueCard
                  icon="📞"
                  title="Reliable Support"
                  description="With 24/7 availability and flexible appointments, we&#39;re here whenever you need a hand. Our team works around your life, not the other way around."
                />
              </div>
            </div>
          </section>

          {/* ── COMMUNITY ───────────────────────────────────────────── */}
          <section className="bg-cyan-50 py-[75px] md:py-[100px]">
            <div className="max-w-[1200px] w-[88%] mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div
                    className="h-72 md:h-full min-h-[320px] rounded-2xl shadow-xl bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                    }}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                    Community Involvement
                  </p>
                  <h2 className="text-blue-900 text-2xl md:text-4xl font-bold mb-5">
                    Local Love in Metro Denver and the Colorado Front Range
                  </h2>
                  <p className="text-neutral-700 leading-relaxed mb-4 text-sm md:text-base">
                    We&#39;re Colorado through and through. As locals, we know
                    what it&#39;s like to deal with the unpredictable weather
                    here, and we&#39;re familiar with the unique needs of
                    Colorado homes.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-4 text-sm md:text-base">
                    But more than that, we&#39;re committed to giving back to
                    the community that&#39;s supported us. From volunteering
                    with local charities to providing free services to veteran
                    families, Heart is dedicated to making Colorado a better
                    place.
                  </p>
                  <div className="bg-white rounded-xl p-5 border border-cyan-200 mb-6">
                    <p className="text-blue-900 font-bold mb-2">
                      🏆 Honors Local Hero with the Gift of Comfort
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Feel the Love™ is an annual program by Lennox that
                      partners with local dealers to provide heating or cooling
                      systems, at no cost, to deserving individuals across the
                      U.S. and Canada.
                    </p>
                    <a
                      href="https://servicebyheart.com/community/feel-the-love/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-xs px-4 py-3 hover:bg-red-700 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CAREERS ─────────────────────────────────────────────── */}
          <section className="bg-blue-900 py-[75px] md:py-[100px]">
            <div className="max-w-[1200px] w-[88%] mx-auto text-center">
              <p className="text-red-400 uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                Careers at Heart
              </p>
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                Trained Professionals Who Take Pride in Their Work
              </h2>
              <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8 text-sm md:text-base">
                Heart HVAC proudly serves the Greater Denver Metro area,
                including Longmont, Castle Rock, Boulder, and everywhere in
                between. Our mission is to deliver the best home service
                experience in the industry, and we&#39;re looking for team
                members who share our passion for excellence.
              </p>
              <ul className="flex flex-col items-start max-w-lg mx-auto gap-3 mb-10 text-left">
                <TeamBullet text="Trained technicians who take pride in their work and daily service." />
                <TeamBullet text="Ongoing training that supports quality, safety, and consistency." />
                <TeamBullet text="Respect for every home, time, and service visit." />
                <TeamBullet text="A team focused on doing the job right the first time." />
              </ul>
              <a
                href="https://servicebyheart.com/about-us/careers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-red-700 transition-colors"
              >
                View Openings
              </a>
            </div>
          </section>

          {/* ── RATING BADGE ────────────────────────────────────────── */}
          <div className="bg-neutral-50 border-b border-neutral-100 py-8">
            <div className="max-w-[1200px] w-[88%] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-3xl">★★★★★</span>
                <div>
                  <p className="text-blue-900 font-bold text-lg">
                    Rated 4.8 on Google
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Based on hundreds of verified reviews
                  </p>
                </div>
              </div>
              <a
                href="https://servicebyheart.com/reviews/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 font-bold uppercase tracking-wider text-xs px-5 py-3 hover:bg-blue-900 hover:text-white transition-colors"
              >
                View More Reviews
              </a>
            </div>
          </div>

          {/* ── CONTACT CTA ─────────────────────────────────────────── */}
          <section className="py-[75px] md:py-[100px]">
            <div className="max-w-[1200px] w-[88%] mx-auto text-center">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                Contact Us
              </p>
              <h2 className="text-red-600 text-3xl md:text-5xl font-bold mb-5">
                Reach Out To Our Knowledgeable Team
              </h2>
              <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-3 text-sm md:text-base">
                Questions about your home systems or ready to schedule service?
                Reach out to our knowledgeable team for clear answers, helpful
                guidance, and support you can trust. From the first conversation
                to the final service visit, every interaction is focused on
                making the process simple and stress free.
              </p>
              <p className="text-blue-900 font-bold mb-8 text-sm md:text-base">
                Emergency Services Available. 24/7 Live Answering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://servicebyheart.com/contact-us/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-red-700 transition-colors"
                >
                  <img
                    src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  Schedule Now
                </a>
                <a
                  href="tel:+13037555851"
                  className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-blue-800 transition-colors"
                >
                  Call (303) 755-5851
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
      <FloatingIframes />
    </body>
  );
};
