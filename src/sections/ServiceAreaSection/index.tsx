const serviceHighlights = [
  "Greater Boston and nearby suburbs",
  "North Shore, South Shore, and MetroWest",
  "Southern New Hampshire and central Massachusetts",
];

export const ServiceAreaSection = () => {
  return (
    <section className="bg-[#A9D1F8] py-[75px] md:py-[100px]">
      <div className="mx-auto grid w-[88%] max-w-[1200px] gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:items-center">
        <div>
          <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-blue-900 md:text-[17.6px]">
            Service Area
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-[40px] text-blue-900 md:text-[48px] md:leading-[56px]">
            Heat pump service across Massachusetts and New Hampshire.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-950 md:text-lg">
            Comfort Pros provides heat pump installation, repair, and
            maintenance throughout the communities shown on our service map.
            From Boston and the surrounding suburbs to Worcester, Plymouth,
            Lowell, Portsmouth, Manchester, and Concord, our team helps
            homeowners plan efficient comfort with clear, focused service.
          </p>
          <ul className="mt-7 grid gap-3">
            {serviceHighlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l-4 border-red-600 bg-white/65 px-4 py-3 text-base font-bold leading-6 text-blue-900"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src="/images/map.png"
            alt="Comfort Pros heat pump service area map"
            className="w-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
