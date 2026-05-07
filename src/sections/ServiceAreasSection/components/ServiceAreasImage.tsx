export const ServiceAreasImage = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-[calc(100%_-_40px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[1] m-5 md:text-base md:basis-[calc(50%_-_75px)] md:leading-[25.6px] md:mx-[37.5px]">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] mr-5 md:text-base md:leading-[25.6px]">
        <span className="text-sm box-border caret-transparent inline-block leading-[14px] max-w-full outline-[3px] align-middle md:text-base md:leading-4">
          <img
            src="/images/map.png"
            alt="Service area map"
            className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-[409px] md:text-base md:leading-4"
          />
        </span>
      </div>
    </div>
  );
};
