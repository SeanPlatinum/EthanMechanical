export const AboutMedia = () => {
  return (
    <div className="relative text-sm content-start items-start box-border caret-transparent flex basis-full flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[1] md:text-base md:basis-6/12 md:leading-[25.6px]">
      <div className="relative h-[420px] w-full overflow-hidden bg-blue-900">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-x-6 bottom-6 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
          <p className="font-roboto_condensed text-sm font-bold uppercase tracking-[0.18em] text-blue-900">
            Focused Mechanical Comfort
          </p>
          <p className="mt-2 text-2xl font-bold leading-8 text-red-600">
            Heat pump work, handled with care from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};
