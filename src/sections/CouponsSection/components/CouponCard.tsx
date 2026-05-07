export type CouponCardProps = {
  badgeText: string;
  priceText: string;
  offerTitle: string;
  valueText: string;
  ctaHref: string;
  ctaText: string;
  disclaimerText: string;
  expiryText: string;
  logoSrc: string;
  logoAlt: string;
  iconSrc: string;
  iconAlt: string;
};

export const CouponCard = (props: CouponCardProps) => {
  return (
    <div className="relative text-sm box-border caret-transparent basis-[calc(100%_-_30px)] leading-[22.4px] max-w-full outline-[3px] z-[1] mx-[15px] my-[25px] md:text-base md:basis-[calc(33.33%_-_30px)] md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full md:text-base md:leading-[25.6px]">
        <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-5 flex flex-col grow shrink-0 flex-wrap h-full justify-between leading-[22.4px] outline-[3px] gap-y-5 z-[1] pb-[30px] px-5 rounded-b-[20px] md:text-base md:leading-[25.6px]">
          <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden rounded-b-[20px] left-0 top-0 md:text-base md:leading-[25.6px]">
            <div className="absolute text-sm bg-[url('https://images.unsplash.com/photo-1581092918484-8313a1b1f0c1?w=800&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center rounded-b-[20px] left-0 top-0 md:text-base md:leading-[25.6px]"></div>
          </div>
          <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-5 flex flex-col grow shrink-0 flex-wrap justify-start leading-[22.4px] outline-[3px] gap-y-5 md:text-base md:leading-[25.6px]">
            <div className="text-white text-sm font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center uppercase mt-2.5 -mb-2.5 font-roboto_condensed md:text-base md:leading-[25.6px]">
              {props.badgeText}
            </div>
            <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
              <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                  <p className="text-white text-[42px] font-bold box-border caret-transparent leading-[42px] outline-[3px] text-center uppercase md:text-[64px] md:leading-[64px]">
                    {props.priceText}
                  </p>
                  <span className="text-white text-sm font-bold box-border caret-transparent block leading-[19.6px] outline-[3px] text-center mt-3.5 md:text-[19.2px] md:leading-[26.88px] md:mt-[19.2px]">
                    {props.offerTitle}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-white text-sm font-bold box-border caret-transparent leading-[19.6px] min-h-[auto] min-w-px outline-[3px] text-center md:text-base md:leading-[22.4px]">
              <p className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                {props.valueText}
              </p>
            </div>
          </div>
          <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap justify-center leading-[22.4px] outline-[3px] gap-y-2.5 md:text-base md:leading-[25.6px]">
            <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
              <a
                href={props.ctaHref}
                className="relative text-blue-900 text-sm bg-red-600 box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden md:text-base md:leading-[25.6px] md:w-auto"
              >
                <div className="relative text-sm items-center box-border caret-transparent gap-x-2.5 flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 overflow-hidden px-5 py-[15px] md:text-base md:leading-[25.6px]">
                  <span className="relative text-sm items-start box-border caret-transparent flex shrink-0 justify-start leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] z-[2] md:text-base md:leading-4">
                    <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:leading-4">
                      <img
                        src={props.iconSrc}
                        alt={props.iconAlt}
                        className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
                      />
                    </span>
                  </span>
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                    <span className="relative text-white text-sm font-bold box-border caret-transparent block tracking-[0.36px] leading-[14px] mr-[-0.36px] outline-[3px] text-center uppercase md:text-base md:leading-4">
                      {props.ctaText}
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="text-white text-[11.2px] box-border caret-transparent leading-[15.68px] min-h-[auto] min-w-px outline-[3px] text-center md:text-[12.8px] md:leading-[17.92px]">
              {props.disclaimerText}
              <br className="text-[11.2px] box-border caret-transparent leading-[15.68px] outline-[3px] md:text-[12.8px] md:leading-[17.92px]" />
              <strong className="text-[11.2px] font-bold box-border caret-transparent leading-[15.68px] outline-[3px] md:text-[12.8px] md:leading-[17.92px]">
                {props.expiryText}
              </strong>
            </div>
          </div>
          <div className="absolute text-sm box-border caret-transparent h-[calc(100%_-_20px)] leading-[22.4px] outline-[3px] w-[calc(100%_-_20px)] z-[-1] rounded-b-[15px] border-2 border-dashed border-white left-2.5 top-2.5 md:text-base md:leading-[25.6px]"></div>
        </div>
      </div>
    </div>
  );
};
