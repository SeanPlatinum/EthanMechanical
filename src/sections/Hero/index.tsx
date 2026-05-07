export const Hero = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto flex w-[88%] max-w-[1200px] flex-col items-start gap-6">
        <p className="font-roboto_condensed text-sm font-bold uppercase tracking-[0.36px] text-red-400 md:text-base">
          Heart Heating, Cooling, Plumbing, Electric
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Full Service Home Comfort For Every Season
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
          Fast, professional home services with clear communication and reliable
          workmanship.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://servicebyheart.com/contact-us/"
            className="inline-flex items-center justify-center rounded bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.36px] text-white hover:bg-red-700 md:text-base"
          >
            Schedule Now
          </a>
          <a
            href="tel://(978) 847-4141"
            className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.36px] text-white hover:bg-white/10 md:text-base"
          >
            (978) 847-4141
          </a>
        </div>
      </div>
    </section>
  );
};
