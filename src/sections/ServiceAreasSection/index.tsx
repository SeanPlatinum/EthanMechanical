import { ServiceAreasContent } from "@/sections/ServiceAreasSection/components/ServiceAreasContent";
import { ServiceAreasImage } from "@/sections/ServiceAreasSection/components/ServiceAreasImage";

export const ServiceAreasSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm bg-cyan-100 box-border caret-transparent leading-[22.4px] outline-[3px] z-[1] pt-[50px] pb-5 md:text-base md:leading-[25.6px] md:pt-2.5 md:pb-0">
        <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] max-w-none outline-[3px] pointer-events-none transform-none w-full z-[-1] overflow-hidden mx-0 left-0 top-0 md:text-base md:leading-[25.6px] md:max-w-[1400px] md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:mx-auto md:left-2/4 md:top-2/4 before:md:accent-auto before:md:aspect-auto before:md:bg-[linear-gradient(to_right,rgb(212,242,251),rgba(0,0,0,0))] before:md:box-border before:md:caret-transparent before:md:text-neutral-700 before:md:block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-full before:md:tracking-[normal] before:md:leading-[25.6px] before:md:list-outside before:md:list-disc before:md:outline-[3px] before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-none before:md:absolute before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:w-[100px] before:md:z-[5] before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:border-separate before:md:left-0 before:md:top-0 before:md:font-roboto">
          <div className="absolute text-sm bg-[url('https://c.animaapp.com/moump05judxXNB/assets/full_map_bg_mobile-e1773691187507.png')] bg-no-repeat bg-cover box-border caret-transparent h-[581.25px] leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-[position:25%_50%] left-0 top-auto bottom-2.5 md:text-base md:bg-[url('https://c.animaapp.com/moump05judxXNB/assets/full_map_bg.png')] md:h-full md:leading-[25.6px] md:top-0 md:bottom-auto"></div>
          <div className="absolute text-sm bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0),rgb(212,242,251),rgb(212,242,251))] box-border caret-transparent hidden h-full leading-[22.4px] outline-[3px] w-full z-[2] overflow-hidden left-0 top-0 md:text-base md:block md:leading-[25.6px]"></div>
        </div>
        <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mx-auto p-px md:text-base md:leading-[25.6px]">
          <div className="text-sm content-center items-center box-border caret-transparent flex flex-row-reverse grow flex-wrap justify-start leading-[22.4px] mb-[-21px] ml-[-21px] mr-[-21px] mt-[-21px] outline-[3px] md:text-base md:leading-[25.6px] md:ml-[-38.5px] md:mr-[-38.5px]">
            <ServiceAreasContent />
            <ServiceAreasImage />
          </div>
        </div>
      </div>
    </div>
  );
};
