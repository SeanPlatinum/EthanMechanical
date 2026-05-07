import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { FloatingIframes } from "@/components/FloatingIframes";

const services = [
  {
    icon: "🔩",
    title: "Pipe, Leak, And Water Line Services",
    desc: "Pipe repair, repiping, and professional leak detection to protect your home and reduce recurring issues.",
  },
  {
    icon: "🚿",
    title: "Water, Heating, And Treatment Systems",
    desc: "Service and installation of water heaters, tankless water heaters, and water softeners for hot water availability and peak plumbing performance.",
  },
  {
    icon: "⛽",
    title: "Gas And Safety-Related Plumbing",
    desc: "Gas line repair, installation, inspections, and backflow testing and prevention to protect your water supply and ensure safe operation.",
  },
  {
    icon: "🍳",
    title: "Kitchen And Home Plumbing Support",
    desc: "Kitchen plumbing services — sinks, faucets, supply lines — and general home plumbing support for your whole house.",
  },
  {
    icon: "💧",
    title: "Water Management And Protection",
    desc: "Sump pump installation and repair for groundwater control and reduced water intrusion risk.",
  },
];

const reviews = [
  {
    name: "Emilie Stienbarger",
    time: "3 days ago",
    text: "Seth gave very good service replacing our kitchen faucet and shower heads. Professional and efficient!",
  },
  {
    name: "Mackenzie Gault",
    time: "5 days ago",
    text: "Chris and Daniel were knowledgeable, fast, kind, and had great communication for our kitchen drain clog.",
  },
  {
    name: "Donna Matela",
    time: "6 days ago",
    text: "Davion was amazing, explained everything perfectly, showed me the instructions, and was kind and friendly.",
  },
  {
    name: "Alan Wickman",
    time: "6 days ago",
    text: "Seneca arrived promptly, figured out our puzzling situation quickly. Pleased with the visit and the reasonable cost.",
  },
  {
    name: "Leigh Lutz",
    time: "6 days ago",
    text: "Daniel C recognized and completely replumbed a faulty kitchen sink drain design — great problem-solving.",
  },
  {
    name: "Trevor Hughes",
    time: "5 days ago",
    text: "Very satisfied with all the work, staff, and pricing. Would absolutely use Heart again.",
  },
];

const faqs = [
  {
    q: "How do you decide which plumbing issue to address first if there are multiple problems?",
    a: "We prioritize by safety and impact — active leaks, gas-related concerns, and issues affecting multiple fixtures come first. After assessing everything, we walk you through a clear plan before any work begins.",
  },
  {
    q: "Can plumbing work be done in stages instead of all at once?",
    a: "Yes. We understand budgets have limits. We&#39;ll help you prioritize what&#39;s most urgent and plan the rest around your schedule and finances.",
  },
  {
    q: "What should homeowners do after plumbing work is completed?",
    a: "Monitor for any leaks under sinks or near connections for the first few days. Run water through all affected fixtures. Contact us immediately if anything seems off — we stand behind our work.",
  },
];

export const PlumbingPage = () => (
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
                "url('https://images.unsplash.com/photo-1612693956138-13c2f8f7d7a1?w=1200&q=80')",
            }}
          />
          <div className="relative max-w-[1200px] w-[88%] mx-auto py-16 md:py-24 text-center md:text-left">
            <p className="text-red-400 uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
              Plumbing Services
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Professional Plumbing Services
              <br className="hidden md:block" /> In Metro Denver
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8">
              Plumbing problems can be overwhelming. Heart Heating, Cooling,
              Plumbing &amp; Electric helps homeowners with repairs,
              maintenance, new installations, and system updates — focused on
              clear solutions and dependable service.
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
                $69 Water Heater Flush{" "}
                <span className="text-neutral-400 font-normal text-base">
                  ($242 Value)
                </span>
              </p>
              <p className="text-neutral-600 text-sm mt-1">
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

        {/* SERVICES WE PROVIDE */}
        <section className="py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                What We Do
              </p>
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Plumbing Services We Provide
              </h2>
              <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                Our goal is to address issues efficiently, fix them correctly,
                and provide plumbing that you don&#39;t have to worry about.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-7 shadow border border-neutral-100 flex flex-col gap-4"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="text-blue-900 font-bold text-lg">{s.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-neutral-100 py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Professional Solutions That Put You First
              </h2>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
                We deliver reliable, people-first service with a commitment to
                consistent results, clear communication, and dependable support.
                Quality and responsiveness aren&#39;t extras — they&#39;re the
                standard at Heart.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-blue-900 text-2xl md:text-3xl font-bold mb-5">
                Why We&#39;re The Best For Plumbing Problems
              </h2>
              <ul className="space-y-3">
                {[
                  "We focus on solving your problem — not upselling unnecessary services.",
                  "Clear communication throughout the entire job.",
                  "Experience across complex plumbing systems of all ages.",
                  "Work that&#39;s built to last, backed by real reviews.",
                  "A track record of satisfied homeowners across Metro Denver.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-700 text-sm md:text-base"
                  >
                    <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <a
                href="https://servicebyheart.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-4 hover:bg-red-700 transition-colors"
              >
                <img
                  src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                  alt=""
                  className="w-4 h-4"
                />
                Schedule Now
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-[75px] md:py-[100px]">
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
        <section className="bg-neutral-100 py-[75px] md:py-[100px]">
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
                  className="bg-white border border-neutral-200 rounded-xl p-6"
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
            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Get plumbing problems handled the right way. Call today or
              schedule your appointment online — our experienced team is ready
              to help.
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
