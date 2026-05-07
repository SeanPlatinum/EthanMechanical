import { FooterLinkColumn } from "@/sections/Footer/components/FooterLinkColumn";
import { FooterCtaSocial } from "@/sections/Footer/components/FooterCtaSocial";
import { FooterLocations } from "@/sections/Footer/components/FooterLocations";

export const FooterLinks = () => {
  return (
    <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] outline-[3px] w-full mx-auto p-px md:text-base md:leading-[25.6px]">
      <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] outline-[3px] mt-[-11px] mr-[-11px] mb-[-11px] ml-[-11px] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm items-stretch box-border caret-transparent gap-x-5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-start leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] m-2.5 md:text-base md:content-start md:items-start md:basis-[calc(50%_-_20px)] md:leading-[25.6px]">
          <div className="relative text-sm items-stretch box-border caret-transparent hidden justify-center leading-[22.4px] outline-[3px] w-full mx-auto p-px md:text-base md:flex md:leading-[25.6px]">
            <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] outline-[3px] mt-[-11px] mr-[-11px] mb-[-11px] ml-[-11px] md:text-base md:leading-[25.6px]">
              <FooterLinkColumn
                title="Services"
                items={[
                  {
                    href: "https://servicebyheart.com/hvac/air-conditioning/",
                    label: "Air Conditioning",
                  },
                  {
                    href: "https://servicebyheart.com/hvac/heating-services/",
                    label: "Heating",
                  },
                  {
                    href: "https://servicebyheart.com/plumbing-services/",
                    label: "Plumbing",
                  },
                  {
                    href: "https://servicebyheart.com/electrical/",
                    label: "Electrical",
                  },
                  {
                    href: "https://servicebyheart.com/drains/",
                    label: "Drains/Sewer",
                  },
                ]}
                containerClassName="border-r-neutral-700 border-r-2 border-solid"
              />
              <FooterLinkColumn
                title="Quick Links"
                items={[
                  {
                    href: "/about-us",
                    label: "About Us",
                  },
                  {
                    href: "https://servicebyheart.com/service-area/",
                    label: "Service Area",
                  },
                  {
                    href: "https://servicebyheart.com/about-us/maintenance-plan/",
                    label: "Maintenance Plan",
                  },
                  {
                    href: "https://servicebyheart.com/about-us/financing/",
                    label: "Financing",
                  },
                  {
                    href: "https://servicebyheart.com/about-us/coupons/",
                    label: "Coupons",
                  },
                  {
                    href: "https://servicebyheart.com/about-us/careers/",
                    label: "Careers",
                  },
                ]}
                containerClassName=""
              />
            </div>
          </div>
          <FooterCtaSocial />
        </div>
        <FooterLocations />
      </div>
    </div>
  );
};
