import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { FloatingIframes } from "@/components/FloatingIframes";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Cody Ades",
    time: "2 days ago",
    text: "Joel was super thorough, a wealth of knowledge, kind, and efficient for our furnace and HVAC system.",
  },
  {
    name: "Amy Erhard",
    time: "3 days ago",
    text: "Joel Ramirez was so friendly and helpful — great experience from start to finish.",
  },
  {
    name: "Chris Ness",
    time: "4 days ago",
    text: "Ben Miller was great, checked everything, explained clearly, and identified all the fixes and improvements we needed.",
  },
  {
    name: "Michael Burke",
    time: "5 days ago",
    text: "Joel Ramirez was very thorough, educational, and professional. Highly recommend!",
  },
  {
    name: "Diane Taylor",
    time: "4 days ago",
    text: "Gerardo did a great job. I really appreciate Heart and all its techs.",
  },
  {
    name: "C",
    time: "6 days ago",
    text: "Ben showed up early, gave detailed explanations of our HVAC status — recommends 10/10.",
  },
];

const faqs = [
  {
    q: "What factors affect the cost of heating installation?",
    a: "Costs vary based on the type of system, the size of your home, existing ductwork condition, and the complexity of the installation. We provide upfront pricing so there are no surprises.",
  },
  {
    q: "When should I call for heating repair?",
    a: "Call us if you notice uneven heating, strange noises, rising energy bills, short cycling, or if your system simply won&#39;t turn on. Early service prevents costlier repairs down the road.",
  },
  {
    q: "Can you service my heating system even if it wasn&#39;t installed by your company?",
    a: "Absolutely. Our technicians are trained across all major brands and system types, regardless of who installed the original equipment.",
  },
];

export const HeatingPage = () => (
  <body className="text-neutral-700 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-[25.6px]">
    <FloatingWidget />
    <div className="text-sm box-border caret-transparent flex leading-[22.4px] min-h-[1000px] outline-[3px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent grow leading-[22.4px] min-h-[auto] min-w-px outline-[3px] w-full md:text-base md:leading-[25.6px]">
        <Header />

        {/* HERO */}
        <div className="relative bg-blue-900 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://c.animaapp.com/moump05judxXNB/assets/heat-video-cover-comp.webp')",
            }}
          />
          <div className="relative max-w-[1200px] w-[88%] mx-auto py-16 md:py-24 text-center md:text-left">
            <p className="text-red-400 uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
              Heating Services
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Heating Installation and
              <br className="hidden md:block" /> Repair in the Metro Denver Area
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8">
              A dependable heating system keeps your home safe and comfortable
              all winter. Heart Heating, Cooling, Plumbing &amp; Electric is
              here to quickly identify problems and provide practical solutions
              — scheduled online or by phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://servicebyheart.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-red-700 transition-colors"
              >
                <img
                  src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                  alt=""
                  className="w-4 h-4"
                />
                Schedule Now
              </a>
              <a
                href="tel:+17203722211"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-white hover:text-blue-900 transition-colors"
              >
                Call (720) 372-2211
              </a>
            </div>
          </div>
        </div>

        {/* AWARD BANNER */}
        <div className="bg-red-600 text-white py-4 px-6 text-center">
          <a
            href="https://servicebyheart.com/community/feel-the-love/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm md:text-base hover:underline"
          >
            <span>🏆</span> View Our 2025 Lennox Feel the Love™ Program Award
            Winner <span className="text-yellow-300">→</span>
          </a>
        </div>

        {/* COUPON */}
        <div className="bg-blue-50 border-b border-blue-100 py-8">
          <div className="max-w-[1200px] w-[88%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-blue-900 font-bold text-xl md:text-2xl">
                $39 HVAC Precision Tune-Up
              </p>
              <p className="text-neutral-600 text-sm mt-1">
                Full system inspection, safety check, and efficiency review.
                Expires May 31, 2026.
              </p>
            </div>
            <a
              href="https://servicebyheart.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-red-700 transition-colors"
            >
              Claim Offer
            </a>
          </div>
        </div>

        {/* COMPLETE RESIDENTIAL HEATING SERVICE */}
        <section className="py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                  What We Do
                </p>
                <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Complete Residential Heating Service
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4 text-sm md:text-base">
                  Keeping your home warm involves proper setup, regular
                  inspection, and timely service. Our technicians perform a
                  thorough evaluation of your system — identifying worn parts,
                  airflow restrictions, electrical issues, or thermostat
                  problems — then complete necessary repairs or recommend and
                  install replacement equipment when needed.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6 text-sm md:text-base">
                  The goal is safe operation, correct thermostat response, and
                  consistent warmth throughout your home.
                </p>
                <h3 className="text-blue-900 text-xl font-bold mb-3">
                  Heating Systems We Service
                </h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Gas furnaces",
                    "Electric furnaces",
                    "Heat pump systems",
                    "Central heating equipment",
                    "Thermostats and system controls",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-neutral-700 text-sm md:text-base"
                    >
                      <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://servicebyheart.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-red-700 transition-colors"
                >
                  <img
                    src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  Schedule Now
                </a>
              </div>
              <div className="flex-1 bg-neutral-100 rounded-2xl p-8">
                <h3 className="text-blue-900 text-xl font-bold mb-4">
                  Professional Solutions That Put You First
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
                  We deliver people-first service with consistent results, clear
                  communication, and dependable support. Quality and
                  responsiveness aren&#39;t extras — they&#39;re the standard.
                </p>
                <h3 className="text-blue-900 text-xl font-bold mb-4 mt-6">
                  Reliable Heating Starts With Experienced Service
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                  Dependable heating comes from thoughtful installation, careful
                  maintenance, and prompt repairs. Contact Heart today to
                  schedule professional heating service for your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="bg-neutral-100 py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto">
            <div className="text-center mb-10">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-2">
                What People Are Saying
              </p>
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-2">
                Quality Service Backed by Real Reviews
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
                <span className="text-blue-900 font-bold">
                  Rated 4.8 on Google
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="bg-white rounded-2xl p-6 shadow border border-neutral-100"
                >
                  <div className="text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <p className="text-blue-900 font-bold text-sm">{r.name}</p>
                  <p className="text-neutral-400 text-xs">{r.time}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="https://servicebyheart.com/reviews/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-blue-800 transition-colors"
              >
                View More Reviews
              </a>
              <a
                href="https://g.page/r/CdHQa_JXIVQBEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-900 text-blue-900 font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-blue-900 hover:text-white transition-colors"
              >
                Leave A Review
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto">
            <div className="text-center mb-10">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                FAQs
              </p>
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold">
                Reliable, High-Quality Service You Deserve
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl p-6"
                >
                  <h3 className="text-blue-900 font-bold text-base md:text-lg mb-2">
                    {faq.q}
                  </h3>
                  <p
                    className="text-neutral-700 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-blue-900 py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto text-center">
            <p className="text-red-400 uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
              Get In Touch
            </p>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Get In Touch With Heart Heating, Cooling, Plumbing, Electric
            </h2>
            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto mb-4 text-sm md:text-base">
              Full-service home comfort — heating, cooling, plumbing, and
              electrical. Routine care, repairs, and system upgrades all backed
              by experienced professionals.
            </p>
            <p className="text-blue-200 font-bold mb-8 text-sm">
              Emergency Services Available. 24/7 Live Answering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://servicebyheart.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
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
                href="tel:+17203722211"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white hover:text-blue-900 transition-colors"
              >
                Call Denver (720) 372-2211
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
