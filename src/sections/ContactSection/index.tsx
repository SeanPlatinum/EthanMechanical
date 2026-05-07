import { ContactContent } from "@/sections/ContactSection/components/ContactContent";
import { ContactImage } from "@/sections/ContactSection/components/ContactImage";

export const ContactSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] pt-5 pb-[75px] md:text-base md:leading-[25.6px] md:pb-[100px]">
        <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] z-[1] overflow-visible mx-auto p-px rounded-br-[50px] md:text-base md:leading-[25.6px] md:overflow-hidden">
          <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden rounded-br-[50px] left-0 top-0 md:text-base md:leading-[25.6px]">
            <div className="absolute text-sm bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center rounded-br-[50px] left-0 top-0 md:text-base md:leading-[25.6px]"></div>
          </div>
          <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] mb-[-11px] mt-[-11px] outline-[3px] -mx-px md:text-base md:leading-[25.6px]">
            <ContactContent />
            <ContactImage />
          </div>
        </div>
      </div>
    </div>
  );
};
