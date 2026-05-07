import { HeroActions } from "@/sections/Hero/components/HeroActions";

export const HeroContent = () => {
  return (
    <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mx-auto p-px md:text-base md:leading-[25.6px]">
      <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] ml-[-11px] mr-[-11px] outline-[3px] -my-9 md:text-base md:leading-[25.6px]">
        <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] mx-2.5 my-[35px] py-[100px] md:text-base md:content-start md:items-start md:basis-[calc(60%_-_20px)] md:leading-[25.6px]">
          <div className="text-neutral-100 text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center uppercase -mb-5 font-roboto_condensed md:text-[17.6px] md:leading-[25.6px] md:text-start">
            It Starts With Heart
          </div>
          <div className="relative text-sm box-border caret-transparent leading-[22.4px] max-w-[600px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
            <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
              <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                <h1 className="text-white text-[38.5px] font-bold box-border caret-transparent leading-[46.2px] outline-[3px] text-center md:text-[64px] md:leading-[76.8px] md:text-start">
                  Premium-Quality Home Services
                </h1>
                <span className="text-white text-[17.5px] font-medium box-border caret-transparent block leading-[24.5px] outline-[3px] text-center mt-[6.125px] md:text-2xl md:leading-[33.6px] md:text-start md:mt-[8.4px]">
                  Delivered by Trained Professionals Located in Metro
                  Massachusetts and the Surrounding Area
                </span>
              </div>
            </div>
          </div>
          <HeroActions />
        </div>
        <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[1] mx-2.5 my-[35px] md:text-base md:basis-[calc(40%_-_20px)] md:leading-[25.6px]">
          <span className="text-sm box-border caret-transparent block leading-[14px] max-w-[90%] min-h-[auto] min-w-[auto] outline-[3px] align-middle z-[2] md:text-base md:leading-4 md:max-w-none">
            <img
              src="https://c.animaapp.com/moump05judxXNB/assets/Heart-HCPE-Truck-comp.webp"
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
      </div>
    </div>
  );
};
