import { FooterMain } from "@/sections/Footer/components/FooterMain";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
    >
      <FooterMain />
      <div className="relative text-sm bg-blue-900 box-border caret-transparent flex justify-between leading-[22.4px] min-w-px outline-[3px] z-[9998] py-[5px] md:text-base md:leading-[25.6px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:basis-[30px] before:shrink-0 before:text-sm before:not-italic before:normal-nums before:font-normal before:h-[30px] before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:normal-case before:invisible before:w-[30px] before:border-separate before:font-roboto before:md:basis-[50px] before:md:text-base before:md:h-[50px] before:md:leading-[25.6px] before:md:w-[50px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-700 after:block after:basis-[30px] after:shrink-0 after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[30px] after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-none after:text-start after:no-underline after:indent-[0px] after:normal-case after:invisible after:w-[30px] after:border-separate after:font-roboto after:md:basis-[50px] after:md:text-base after:md:h-[50px] after:md:leading-[25.6px] after:md:w-[50px]">
        <div className="text-sm items-center box-border caret-transparent gap-x-[50px] flex basis-full flex-col justify-center leading-[22.4px] min-h-[auto] min-w-px outline-[3px] gap-y-[50px] z-[5] md:text-base md:leading-[25.6px]">
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[15px] flex flex-col grow shrink-0 justify-between leading-[22.4px] max-w-[1200px] min-h-[auto] min-w-px outline-[3px] gap-y-[15px] w-full md:text-base md:gap-x-2.5 md:flex-row md:leading-[25.6px] md:gap-y-2.5">
            <div className="text-white text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
              © 2026 E&J Mechanical Reserved 
            </div>
            <div className="relative text-sm items-stretch box-border caret-transparent gap-x-[5px] flex flex-wrap justify-start leading-[22.4px] outline-[3px] gap-y-[5px] md:text-base md:leading-[25.6px]">
              <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                  <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                    <div className="text-white text-sm box-border caret-transparent leading-[19.6px] outline-[3px] text-center md:text-base md:leading-[22.4px] md:text-start">
                      <a
                        href="/privacy-policy/"
                        className="text-sm box-border caret-transparent leading-[19.6px] outline-[3px] text-center md:text-base md:leading-[22.4px] md:text-start"
                      >
                        Privacy Policy
                      </a>
                      |{" "}
                      <a
                        href="/sitemap/"
                        className="text-sm box-border caret-transparent leading-[19.6px] outline-[3px] text-center md:text-base md:leading-[22.4px] md:text-start"
                      >
                        Sitemap
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
