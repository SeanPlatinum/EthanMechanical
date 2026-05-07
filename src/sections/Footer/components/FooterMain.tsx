import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterMain = () => {
  return (
    <div className="relative text-sm bg-neutral-100 border-t-red-600 box-border caret-transparent flex justify-between leading-[22.4px] min-w-px outline-[3px] z-[9998] py-[50px] border-t-[5px] md:text-base md:leading-[25.6px] md:py-[75px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:basis-[30px] before:shrink-0 before:text-sm before:not-italic before:normal-nums before:font-normal before:h-[30px] before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:normal-case before:invisible before:w-[30px] before:border-separate before:font-roboto before:md:basis-[50px] before:md:text-base before:md:h-[50px] before:md:leading-[25.6px] before:md:w-[50px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-700 after:block after:basis-[30px] after:shrink-0 after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[30px] after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-none after:text-start after:no-underline after:indent-[0px] after:normal-case after:invisible after:w-[30px] after:border-separate after:font-roboto after:md:basis-[50px] after:md:text-base after:md:h-[50px] after:md:leading-[25.6px] after:md:w-[50px]">
      <div className="text-sm items-center box-border caret-transparent gap-x-[50px] flex basis-full flex-col justify-center leading-[22.4px] min-h-[auto] min-w-px outline-[3px] gap-y-[50px] z-[5] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm items-center box-border caret-transparent gap-x-5 flex flex-col grow shrink-0 justify-center leading-[22.4px] max-w-[1200px] min-h-[auto] min-w-px outline-[3px] gap-y-5 w-full md:text-base md:items-start md:leading-[25.6px]">
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};
