export const HeroImage = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[1] mx-2.5 my-[35px] md:text-base md:basis-[calc(40%_-_20px)] md:leading-[25.6px]">
      <span className="text-sm box-border caret-transparent block leading-[14px] max-w-[90%] min-h-[auto] min-w-[auto] outline-[3px] align-middle z-[2] md:text-base md:leading-4 md:max-w-none">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=998&q=80"
          alt=""
          className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-[998px] md:text-base md:leading-4"
        />
      </span>
      <span className="absolute text-sm box-border caret-transparent hidden h-full leading-[14px] outline-[3px] align-middle w-full md:text-base md:block md:leading-4">
        <img
          src="https://c.animaapp.com/moump05judxXNB/assets/Vector-27.svg"
          alt=""
          className="text-sm box-border caret-transparent h-full leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
        />
      </span>
    </div>
  );
};
