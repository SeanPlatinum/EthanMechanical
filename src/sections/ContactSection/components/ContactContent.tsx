import { ContactActions } from "@/sections/ContactSection/components/ContactActions";

export const ContactContent = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-5 flex basis-full flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] my-2.5 pt-10 pb-[30px] px-[30px] rounded-2xl md:text-base md:content-start md:items-start md:basis-[66.66%] md:leading-[25.6px] md:pl-10 md:pr-5 md:pb-10">
      <div className="text-neutral-100 text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center uppercase -mb-2.5 font-roboto_condensed md:text-[17.6px] md:leading-[25.6px] md:text-start">
        Get In Touch With Heart Heating, Cooling, Plumbing, Electric
      </div>
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
        <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-w-px outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
          <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
            <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
              <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] outline-[3px] text-center md:text-[40px] md:leading-[48px] md:text-start">
                Full Service Home Comfort
              </h2>
              <span className="text-white text-sm box-border caret-transparent block leading-[25.2px] outline-[3px] text-center mt-3.5 md:text-base md:leading-[28.8px] md:text-start md:mt-4">
                Heating, cooling, plumbing, and electrical services come
                together to support comfort, safety, and reliability throughout
                your home. From routine care to repairs and system upgrades,
                each service is handled with attention to detail and a focus on
                long term performance. Trusted solutions help keep everything
                running smoothly through every season.
              </span>
            </div>
          </div>
        </div>
      </div>
      <ContactActions />
    </div>
  );
};
