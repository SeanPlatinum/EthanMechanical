import { ServiceAreaList } from "@/sections/ServiceAreasSection/components/ServiceAreaList";
import { ServiceAreasCta } from "@/sections/ServiceAreasSection/components/ServiceAreasCta";

export const ServiceAreasContent = () => {
  return (
    <div className="relative text-sm content-start items-start bg-white box-border caret-transparent flex basis-[calc(100%_-_40px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[2] m-5 p-[30px] rounded-br-[30px] md:text-base md:basis-[calc(50%_-_75px)] md:leading-[25.6px] md:mx-[37.5px]">
      <div className="text-blue-900 text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center uppercase font-roboto_condensed md:text-[17.6px] md:leading-[25.6px]">
        Areas We Service
      </div>
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
          <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
            <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
              <h2 className="text-red-600 text-[28px] font-bold box-border caret-transparent leading-[33.6px] outline-[3px] md:text-[40px] md:leading-[48px]">
                Serving Metro Denver and the Colorado Front Range
              </h2>
              <span className="text-sm box-border caret-transparent block leading-[25.2px] outline-[3px] mt-3.5 md:text-base md:leading-[28.8px] md:mt-4">
                At Heart Heating, Cooling, Plumbing &amp; Electric, we proudly
                serve the entire Denver, CO area and its surrounding
                communities.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-sm content-start items-start box-border caret-transparent gap-x-[15px] flex flex-col flex-wrap justify-start leading-[22.4px] outline-[3px] gap-y-[15px] w-full my-[30px] md:text-base md:leading-[25.6px]">
        <ServiceAreaList />
      </div>
      <ServiceAreasCta />
    </div>
  );
};
