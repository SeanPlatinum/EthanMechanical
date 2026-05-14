import { AboutActions } from "@/sections/AboutSection/components/AboutActions";

export const AboutContent = () => {
  return (
    <div className="relative text-sm items-stretch bg-neutral-100 box-border caret-transparent gap-x-5 flex basis-full flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] px-[30px] py-10 md:text-base md:content-start md:items-start md:basis-6/12 md:leading-[25.6px] md:px-10 before:md:accent-auto before:md:aspect-auto before:md:bg-neutral-100 before:md:box-border before:md:caret-transparent before:md:text-neutral-700 before:md:block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-full before:md:tracking-[normal] before:md:leading-[25.6px] before:md:list-outside before:md:list-disc before:md:outline-[3px] before:md:overscroll-x-auto before:md:overscroll-y-auto before:md:pointer-events-auto before:md:absolute before:md:snap-align-none before:md:snap-normal before:md:snap-none before:md:text-start before:md:no-underline before:md:decoration-auto before:md:indent-[0px] before:md:normal-case before:md:underline-offset-auto before:md:visible before:md:w-[100px] before:md:z-[-1] before:md:scroll-m-0 before:md:scroll-p-[auto] before:md:rounded-br-[100px] before:md:border-separate before:md:left-full before:md:top-0 before:md:font-roboto">
      <div className="text-blue-900 text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center uppercase font-roboto_condensed md:text-[17.6px] md:leading-[25.6px] md:text-left">
        About Comfort Pros
      </div>
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
        <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-w-px outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
          <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
            <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
              <h2 className="text-red-600 text-[28px] font-bold box-border caret-transparent leading-[33.6px] outline-[3px] text-center md:text-[40px] md:leading-[48px] md:text-start">
                Heat Pump Focused, Service Driven
              </h2>
              <span className="text-sm box-border caret-transparent block leading-[25.2px] outline-[3px] text-center mt-3.5 md:text-base md:leading-[28.8px] md:text-start md:mt-4">
                Comfort Pros is built around modern heat pump comfort. That
                means every conversation, service visit, and recommendation is
                focused on efficient heating and cooling from a single system.
                <br className="text-sm box-border caret-transparent leading-[25.2px] outline-[3px] text-center md:text-base md:leading-[28.8px] md:text-start" />
                <br className="text-sm box-border caret-transparent leading-[25.2px] outline-[3px] text-center md:text-base md:leading-[28.8px] md:text-start" />
                We help homeowners understand their options, solve performance
                problems, and keep equipment cared for season after season. The
                goal is simple: clear communication, careful workmanship, and a
                home that feels comfortable without unnecessary service clutter.
              </span>
            </div>
          </div>
        </div>
      </div>
      <AboutActions />
    </div>
  );
};
