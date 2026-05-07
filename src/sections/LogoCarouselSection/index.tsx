import { LogoCarousel } from "@/components/LogoCarousel";

export const LogoCarouselSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] w-full z-[1] md:text-base md:leading-[25.6px]">
        <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
          <div className="absolute text-sm bg-[url('https://c.animaapp.com/moump05judxXNB/assets/Mask-group-7.png')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center left-0 top-0 md:text-base md:leading-[25.6px]"></div>
        </div>
        <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <LogoCarousel />
        </div>
      </div>
    </div>
  );
};
