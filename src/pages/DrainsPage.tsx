import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { FloatingIframes } from "@/components/FloatingIframes";

const services = [
  {
    icon: "🚰",
    title: "Drain Cleaning And Blockage Removal",
    desc: "Addresses slow sinks, standing water, and backed-up tubs caused by buildup. Professional cleaning restores proper flow throughout your home.",
  },
  {
    icon: "🔄",
    title: "Stubborn And Recurring Clogs",
    desc: "Deeper blockages in branch or main sewer lines require advanced tools like rooter equipment to clear thoroughly and prevent repeat problems.",
  },
  {
    icon: "🏠",
    title: "Multiple Drains Backing Up At Once",
    desc: "When multiple fixtures are backing up simultaneously, it suggests a main drain or sewer line restriction that requires a thorough evaluation.",
  },
  {
    icon: "🛠️",
    title: "Sewer Line And Main Drain Repairs",
    desc: "Foul odors, gurgling pipes, soggy yard patches, or wastewater backup all point to main line issues. We locate and repair the exact source of the problem.",
  },
];

const reviews = [
  {
    name: "Mackenzie Gault",
    time: "5 days ago",
    text: "Chris and Daniel were knowledgeable, fast, kind, and had great communication for our kitchen drain clog. Excellent service!",
  },
  {
    name: "Donna Matela",
    time: "6 days ago",
    text: "Davion was amazing, explained everything perfectly, showed me the instructions, kind, friendly, and professional.",
  },
  {
    name: "Leigh Lutz",
    time: "6 days ago",
    text: "Daniel C recognized and completely replumbed a faulty kitchen sink drain design. Super impressed with his problem-solving.",
  },
  {
    name: "Eddie Quinn",
    time: "6 days ago",
    text: "Aaron is a sharp, friendly professional. Knew exactly what the issue was and handled it quickly.",
  },
  {
    name: "Alan Wickman",
    time: "6 days ago",
    text: "Seneca arrived promptly, figured out our puzzling situation quickly. Pleased with the visit and the inexpensive work.",
  },
  {
    name: "Cathy Holmes",
    time: "7 days ago",
    text: "Nick did a great job — prompt, thorough, and clearly knew what he was doing.",
  },
];

const faqs = [
  {
    q: "Why do drain issues sometimes move from one fixture to another?",
    a: "Drain systems are interconnected. A partial clog in a shared branch line can cause backups to appear at different fixtures depending on water usage patterns and pressure.",
  },
  {
    q: "Can drain problems be related to home renovations from years ago?",
    a: "Yes. Improperly cut or reattached drain lines, incorrect slope, and non-standard fittings from past work can cause ongoing issues that only worsen with time.",
  },
  {
    q: "Is it possible for drain issues to come from outside the home?",
    a: "Absolutely. Tree roots infiltrating the main sewer line, ground shifting, and municipal line backups can all cause symptoms that appear to originate inside the home.",
  },
  {
    q: "Why does a drain seem fine most of the time but back up during heavy use?",
    a: "Partial blockages may allow normal flow but can&#39;t handle high volume. During showers, laundry, and dishwasher cycles, the extra demand reveals the restriction.",
  },
  {
    q: "Should drains be serviced even if they are draining normally right now?",
    a: "Preventive drain cleaning helps remove buildup before it becomes a blockage. Most homeowners benefit from professional service every 1–2 years depending on usage and pipe age.",
  },
];

export const DrainsPage = () => (
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
              Drain &amp; Sewer Services
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Drain and Sewer Services In
              <br className="hidden md:block" /> The Metro Denver Area
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8">
              Drain and sewer problems are messy and disruptive. Heart provides
              complete drain and sewer services — from clogs to damaged lines —
              clearing blockages and inspecting for root causes like tree roots,
              corrosion, or misalignment.
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
                $93 Drain Clearing Special
              </p>
              <p className="text-neutral-600 text-sm mt-1">
                Includes basic drain clearing and free camera inspection.
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

        {/* COMMON SERVICES */}
        <section className="py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                What We Do
              </p>
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4 leading-tight">
                The Most Common Drain And Sewer Services Our Clients Need
              </h2>
              <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                Drain and sewer problems vary, but these are the issues we see
                most frequently — and the ones we solve best.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* WHY TRUST US */}
        <section className="bg-neutral-100 py-[75px] md:py-[100px]">
          <div className="max-w-[1200px] w-[88%] mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Professional Solutions That Put You First
              </h2>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                We deliver reliable, people-first service with a commitment to
                consistent results, clear communication, and dependable support.
                Quality and responsiveness aren&#39;t extras — they&#39;re the
                standard.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-blue-900 text-2xl md:text-3xl font-bold mb-5">
                Why You Should Trust Us With Your Drains
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "We know when not to overdo the solution — matching fix to problem.",
                  "We factor in your home&#39;s age and layout for a complete diagnosis.",
                  "We work cleanly and respect your home throughout the job.",
                  "We help you avoid repeat disruptions with lasting solutions.",
                  "We build trust for repeat visits by always doing right by you.",
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
              Stop Drain Problems From Stealing Your Time
            </h2>
            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Drain issues interrupt daily life. Heart helps Metro Denver
              homeowners handle them efficiently. Schedule service today and get
              back to normal.
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
