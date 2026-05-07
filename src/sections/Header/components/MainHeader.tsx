import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { RatingBadge } from "@/components/RatingBadge";
import { ContactLinks } from "@/sections/Header/components/ContactLinks";
import { HeaderCta } from "@/sections/Header/components/HeaderCta";

export const MainHeader = () => {
  return (
    <div className="relative text-sm bg-white box-border caret-transparent flex justify-between leading-[22.4px] min-w-px outline-[3px] w-full z-[9999] md:text-base md:leading-[25.6px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:basis-5 before:shrink-0 before:text-sm before:not-italic before:normal-nums before:font-normal before:h-5 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:normal-case before:invisible before:w-5 before:border-separate before:font-roboto before:md:text-base before:md:leading-[25.6px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-700 after:block after:basis-5 after:shrink-0 after:text-sm after:not-italic after:normal-nums after:font-normal after:h-5 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-none after:text-start after:no-underline after:indent-[0px] after:normal-case after:invisible after:w-5 after:border-separate after:font-roboto after:md:text-base after:md:leading-[25.6px]">
      <div className="text-sm items-center box-border caret-transparent flex basis-full justify-center leading-[22.4px] min-h-[auto] min-w-px outline-[3px] z-[5] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm items-center box-border caret-transparent gap-x-5 flex grow shrink-0 justify-between leading-[22.4px] max-w-[1200px] min-h-[auto] min-w-px outline-[3px] gap-y-5 w-full py-[15px] md:text-base md:leading-[25.6px]">
          <HeaderLogo />
          <div className="relative text-sm box-border caret-transparent hidden leading-[22.4px] min-h-0 min-w-0 outline-[3px] md:text-base md:block md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto]">
            <RatingBadge
              href="http://search.google.com/local/reviews?placeid=ChIJl6vLIcGBbIcR3nyblga1lm4"
              ratingText="Rated 4.8"
              ariaLabel="4.8 / 5"
              iconSrc="https://c.animaapp.com/moump05judxXNB/assets/icon-1.svg"
              iconAlt="Icon"
              rootVariant="flex-col"
              contentVariant="min-h-0 md:min-h-[auto]"
              starsWrapperVariant="min-h-0 md:min-h-[auto]"
              starItemVariant="text-red-600 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
              textContainerVariant="min-h-0 md:min-h-[auto]"
              textWrapperVariant="min-h-0 md:min-h-[auto]"
              textVariant="text-neutral-700"
            />
          </div>
          <ContactLinks />
          <div className="relative text-sm box-border caret-transparent hidden leading-[22.4px] min-h-0 min-w-0 outline-[3px] md:text-base md:block md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto]">
            <HeaderCta />
          </div>
        </div>
      </div>
    </div>
  );
};
