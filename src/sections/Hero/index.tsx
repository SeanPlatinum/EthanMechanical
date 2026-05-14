import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Fan,
  Gauge,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wrench,
} from "lucide-react";

const heatPumpServices = [
  {
    title: "Heat Pump Installation",
    description:
      "Right-sized, efficient heat pump systems designed for steady comfort through every season.",
    Icon: ThermometerSun,
  },
  {
    title: "Heat Pump Repair",
    description:
      "Troubleshooting for airflow, refrigerant, defrost, thermostat, and performance issues.",
    Icon: Wrench,
  },
  {
    title: "Heat Pump Maintenance",
    description:
      "Seasonal tune-ups that help protect efficiency, reliability, and equipment life.",
    Icon: Gauge,
  },
];

const benefits = [
  "Heating and cooling from one efficient system",
  "Cleaner, quieter comfort without fossil fuel combustion indoors",
  "Replacement guidance for older comfort systems",
];

export const Hero = () => {
  return (
    <main
      id="heat-pumps"
      className="text-neutral-700 text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
    >
      <section className="relative isolate overflow-hidden bg-blue-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6f5f6a14?w=1600&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <img
          src="/images/header.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto grid w-[88%] max-w-[1200px] gap-10 py-20 md:grid-cols-[minmax(0,1fr)_390px] md:items-center md:py-28">
          <div className="max-w-[720px]">
            <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-[#A9D1F8] md:text-[17.6px]">
              Heat Pump Specialists
            </p>
            <h1 className="mt-4 text-[40px] font-bold leading-[48px] text-white md:text-[68px] md:leading-[76px]">
              Heat Pump Installation, Repair, and Maintenance
            </h1>
            <p className="mt-6 max-w-[640px] text-lg font-medium leading-8 text-blue-50 md:text-2xl md:leading-9">
              Comfort Pros now focuses on efficient heat pump systems for
              all-season home comfort.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#scheduler"
                className="inline-flex items-center justify-center gap-2 bg-red-600 px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-red-700"
              >
                Schedule Heat Pump Service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+19788474141"
                className="inline-flex items-center justify-center border-2 border-white/70 px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-blue-950"
              >
                Call (978) 847-4141
              </a>
            </div>
          </div>
          <div className="bg-white/95 p-6 text-blue-950 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <Fan className="h-12 w-12 text-sky-500" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold leading-8">
              One System. Year-Round Comfort.
            </h2>
            <ul className="mt-5 grid gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-base leading-6">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-[75px] md:py-[100px]">
        <div className="mx-auto w-[88%] max-w-[1200px]">
          <div className="max-w-[760px]">
            <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-blue-900 md:text-[17.6px]">
              Heat Pump Services
            </p>
            <h2 className="mt-3 text-[32px] font-bold leading-[40px] text-red-600 md:text-[48px] md:leading-[56px]">
              Everything we do is centered on heat pumps.
            </h2>
            <p className="mt-5 text-base leading-8 md:text-lg">
              From first-time system selection to emergency diagnostics and
              annual care, our work is built around helping homeowners get
              dependable performance from modern heat pump technology.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {heatPumpServices.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="border border-neutral-200 bg-neutral-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <Icon className="h-10 w-10 text-sky-500" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold leading-8 text-blue-900">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#A9D1F8] py-[75px] md:py-[100px]">
        <div className="mx-auto grid w-[88%] max-w-[1200px] gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-blue-900 md:text-[17.6px]">
              Built for the Home You Have
            </p>
            <h2 className="mt-3 text-[32px] font-bold leading-[40px] text-blue-900 md:text-[44px] md:leading-[52px]">
              Upgrade comfort without carrying old service clutter forward.
            </h2>
            <p className="mt-5 text-base leading-8 md:text-lg">
              We help homeowners choose practical heat pump solutions for
              Massachusetts weather, including cold-climate equipment,
              ducted systems, ductless mini-splits, and hybrid replacement
              planning.
            </p>
            <Link
              to="/about-us"
              className="mt-7 inline-flex items-center justify-center gap-2 bg-blue-900 px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-800"
            >
              About Our Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 bg-white p-5">
              <Snowflake
                className="mt-1 h-8 w-8 shrink-0 text-sky-500"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Efficient Cooling
                </h3>
                <p className="mt-2 leading-7">
                  Heat pumps handle summer comfort while reducing the need for a
                  separate cooling-first service plan.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-5">
              <ThermometerSun
                className="mt-1 h-8 w-8 shrink-0 text-red-600"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Reliable Heating
                </h3>
                <p className="mt-2 leading-7">
                  Cold-climate heat pump options are designed to keep warmth
                  steady through winter demand.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-5">
              <ShieldCheck
                className="mt-1 h-8 w-8 shrink-0 text-blue-900"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Focused Expertise
                </h3>
                <p className="mt-2 leading-7">
                  Heat pump comfort from a focused mechanical team, with every
                  visit centered on efficient home performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
