import { SectionHeader } from "@/components/SectionHeader";
import { BenefitCard } from "@/sections/WhyChooseSection/components/BenefitCard";

export const WhyChooseSection = () => {
  return (
    <div className="relative text-sm bg-blue-900 box-border caret-transparent leading-[22.4px] outline-[3px] z-[1] mx-auto py-[75px] md:text-base md:leading-[25.6px] md:py-[100px]">
      <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
        <div className="absolute text-sm bg-[url('https://c.animaapp.com/moump05judxXNB/assets/Group-658-2-1.png')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center left-0 top-0 md:text-base md:leading-[25.6px]"></div>
      </div>
      <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mx-auto p-px md:text-base md:leading-[25.6px]">
        <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] mb-[-21px] ml-[-11px] mr-[-11px] mt-[-21px] outline-[3px] md:text-base md:leading-[25.6px] md:-my-9">
          <SectionHeader
            eyebrow="Why Choose Heart Heating, Cooling, Plumbing, Electric"
            title="Experience You Can Count On"
            rootVariantClass="content-center items-center gap-x-2.5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-center gap-y-2.5 mx-2.5 my-5 pb-5 md:my-[35px] md:pb-0"
            eyebrowVariantClass="text-neutral-100 min-h-[auto]"
            titleVariantClass="text-white"
            contentWrapperVariantClass="min-h-[auto] min-w-[auto]"
          />
          <BenefitCard
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/home-icon.svg"
            iconAlt=""
            title="All-in-One Home Comfort"
            description="Heart is a full-service home comfort company offering heating, cooling, plumbing, and electrical services under one trusted brand."
          />
          <BenefitCard
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/award-icon.svg"
            iconAlt=""
            title="Premium Work, Done Right"
            description="We focus on quality workmanship and doing the job right the first time without cutting corners or pushing unnecessary upsells."
          />
          <BenefitCard
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/user-star-icon.svg"
            iconAlt=""
            title="Customer-First Values"
            description="Built on transparency, integrity, and trust, we put our customers first with honest communication and clear expectations."
          />
          <BenefitCard
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/badge-icon.svg"
            iconAlt=""
            title="Skilled, Respectful Technicians"
            description="Our trained professionals take pride in their work and treat every home with care, professionalism, and respect."
          />
          <BenefitCard
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/chat-icon.svg"
            iconAlt=""
            title="Clear, Easy Service Experience"
            description="We respond quickly, communicate clearly, and make the service process simple to understand from start to finish."
          />
          <BenefitCard
            iconSrc="https://c.animaapp.com/moump05judxXNB/assets/sheild-icon.svg"
            iconAlt=""
            title="Reliable Solutions You Can Trust"
            description="We deliver lasting solutions, stand behind our work, and are proud to serve our community with genuine care."
          />
        </div>
      </div>
    </div>
  );
};
