import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <div className="relative text-sm bg-blue-900 box-border caret-transparent leading-[22.4px] outline-[3px] z-[1] mx-auto pt-[75px] pb-[50px] md:text-base md:leading-[25.6px] md:pt-[100px]">
      <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
        <div className="absolute text-sm bg-[url('https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center left-0 top-0 md:text-base md:leading-[25.6px]"></div>
      </div>
      <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mx-auto p-px md:text-base md:leading-[25.6px]">
        <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] mb-[-21px] ml-[-11px] mr-[-11px] mt-[-21px] outline-[3px] md:text-base md:leading-[25.6px] md:-my-9">
          <SectionHeader
            eyebrow="Full-Service Home Comfort"
            title="One Heart. All-in-One Home Services."
            rootVariantClass="content-center items-center gap-x-2.5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-center gap-y-2.5 mx-2.5 my-5 pb-5 md:my-[35px] md:pb-0"
            eyebrowVariantClass="text-neutral-100 min-h-[auto]"
            titleVariantClass="text-white"
            contentWrapperVariantClass="min-h-[auto] min-w-[auto]"
          />
          <ServiceCard
            href="/hvac/heating-services/"
            title="Heating"
            description="Heating services help keep your home comfortable during colder months with dependable performance and reliable warmth."
            imageSrc="https://c.animaapp.com/moump05judxXNB/assets/heating-icon.svg"
            imageAlt=""
            ctaText="Learn More"
            rootClassName="content-start items-start bg-white"
            iconWrapperClassName="mt-[-30px] w-[75px] ml-auto md:w-[90px] md:-mt-10"
            imageClassName="w-full"
            contentClassName="mt-[-30px]"
            titleClassName="text-red-600 text-[17.5px] leading-[24.5px] md:text-2xl md:leading-[33.6px]"
            descriptionClassName=""
            ctaWrapperClassName="bg-blue-900"
            ctaIconOuterClassName="hidden"
            ctaIconInnerClassName=""
          />
          <ServiceCard
            href="/hvac/air-conditioning/"
            title="Cooling"
            description="Cooling services help keep your home comfortable during warmer months with consistent performance and reliable temperature control."
            imageSrc="https://c.animaapp.com/moump05judxXNB/assets/hvac-icon.svg"
            imageAlt=""
            ctaText="Learn More"
            rootClassName="content-start items-start bg-white"
            iconWrapperClassName="mt-[-30px] w-[75px] ml-auto md:w-[90px] md:-mt-10"
            imageClassName="w-full"
            contentClassName="mt-[-30px]"
            titleClassName="text-red-600 text-[17.5px] leading-[24.5px] md:text-2xl md:leading-[33.6px]"
            descriptionClassName=""
            ctaWrapperClassName="bg-blue-900"
            ctaIconOuterClassName="hidden"
            ctaIconInnerClassName="inline-flex"
          />
          <ServiceCard
            href="/plumbing-services/"
            title="Plumbing"
            description="Leaks, low water pressure, or everyday plumbing issues can disrupt your home fast. Plumbing services help restore proper flow and comfort with reliable repairs and solutions."
            imageSrc="https://c.animaapp.com/moump05judxXNB/assets/plumbing-icon.svg"
            imageAlt=""
            ctaText="Learn More"
            rootClassName="content-start items-start bg-white"
            iconWrapperClassName="mt-[-30px] w-[75px] ml-auto md:w-[90px] md:-mt-10"
            imageClassName="w-full"
            contentClassName="mt-[-30px]"
            titleClassName="text-red-600 text-[17.5px] leading-[24.5px] md:text-2xl md:leading-[33.6px]"
            descriptionClassName=""
            ctaWrapperClassName="bg-blue-900"
            ctaIconOuterClassName="hidden"
            ctaIconInnerClassName="inline-flex"
          />
          <ServiceCard
            href="/drains/"
            title="Drains"
            description="Got a clog or a slow drain causing trouble? Drain services help clear buildup and restore proper flow before small issues turn into bigger plumbing problems."
            imageSrc="https://c.animaapp.com/moump05judxXNB/assets/gutters-icon.svg"
            imageAlt=""
            ctaText="Learn More"
            rootClassName="content-start items-start bg-white"
            iconWrapperClassName="mt-[-30px] w-[75px] ml-auto md:w-[90px] md:-mt-10"
            imageClassName="w-full"
            contentClassName="mt-[-30px]"
            titleClassName="text-red-600 text-[17.5px] leading-[24.5px] md:text-2xl md:leading-[33.6px]"
            descriptionClassName=""
            ctaWrapperClassName="bg-blue-900"
            ctaIconOuterClassName="hidden"
            ctaIconInnerClassName="inline-flex"
          />
          <ServiceCard
            href="/electrical/"
            title="Electrical"
            description="Flickering lights or outlets not working as they should? Electrical services help keep your home powered safely by addressing repairs, upgrades, and everyday electrical needs."
            imageSrc="https://c.animaapp.com/moump05judxXNB/assets/lighting-icon.svg"
            imageAlt=""
            ctaText="Learn More"
            rootClassName="content-start items-start bg-white"
            iconWrapperClassName="mt-[-30px] w-[75px] ml-auto md:w-[90px] md:-mt-10"
            imageClassName="w-full"
            contentClassName="mt-[-30px]"
            titleClassName="text-red-600 text-[17.5px] leading-[24.5px] md:text-2xl md:leading-[33.6px]"
            descriptionClassName=""
            ctaWrapperClassName="bg-blue-900"
            ctaIconOuterClassName="hidden"
            ctaIconInnerClassName="inline-flex"
          />
          <ServiceCard
            href="https://servicebyheart.com/contact-us/"
            title="Book Service"
            description="Schedule service quickly and get the care your home needs without delays."
            imageSrc=""
            imageAlt=""
            ctaText="Schedule Now"
            rootClassName="content-center items-center bg-cyan-100"
            iconWrapperClassName="mt-[-13px] max-w-[90%]"
            imageClassName="w-[218px]"
            contentClassName=""
            titleClassName="text-[21px] leading-[29.4px] text-center uppercase md:text-[32px] md:leading-[44.8px]"
            descriptionClassName="text-center"
            ctaWrapperClassName="bg-red-600"
            ctaIconOuterClassName="flex min-h-[auto] min-w-[auto]"
            ctaIconInnerClassName="flex min-h-[auto] min-w-[auto]"
          />
        </div>
      </div>
    </div>
  );
};
