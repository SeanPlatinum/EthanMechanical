export type FeatureCardProps = {
  containerVariant: string;
  topDecorationVariant: string;
  topDecorationInnerFirstVariant: string;
  topDecorationInnerSecondVariant: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  titleClassName: string;
  description: string;
  descriptionClassName: string;
  linkHref: string;
  linkText: string;
  linkClassName: string;
  bottomDecorationFirstVariant: string;
  bottomDecorationSecondVariant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`relative text-sm content-center items-center box-border caret-transparent gap-x-5 flex basis-[calc(100%_-_30px)] flex-col flex-wrap justify-start leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] mx-[15px] pb-10 rounded-b-[20px] md:text-base md:basis-[calc(33.33%_-_30px)] md:leading-[25.6px] ${props.containerVariant}`}
    >
      <div
        className={`absolute text-sm box-border caret-transparent h-[175px] leading-[22.4px] outline-[3px] w-full z-[-1] left-0 top-0 md:text-base md:h-[200px] md:leading-[25.6px] ${props.topDecorationVariant}`}
      >
        <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
          <div className={props.topDecorationInnerFirstVariant}></div>
          <div className={props.topDecorationInnerSecondVariant}></div>
        </div>
      </div>

      <span className="text-sm box-border caret-transparent block leading-[14px] mt-[-30px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-[90px] mb-[125px] md:text-base md:leading-4 md:mt-[-50px] md:w-[100px] md:mb-40">
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
        />
      </span>

      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] outline-[3px] md:text-base md:leading-[25.6px] min-w-px">
        <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
            <p className={props.titleClassName}>{props.title}</p>
            <span className={props.descriptionClassName}>
              {props.description}
            </span>
          </div>
        </div>
      </div>

      <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px] relative min-h-[auto] min-w-[auto]">
        <a href={props.linkHref} className={props.linkClassName}>
          <div className="relative text-sm items-center box-border caret-transparent gap-x-2.5 flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 overflow-hidden px-5 py-[15px] md:text-base md:leading-[25.6px]">
            <span className="relative text-sm items-start box-border caret-transparent hidden shrink-0 justify-start leading-[14px] outline-[3px] z-[2] md:text-base md:leading-4">
              <span className="relative text-sm items-center box-border caret-transparent inline-flex justify-center leading-[14px] outline-[3px] text-center md:text-base md:leading-4">
                <img
                  src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                  alt="Icon"
                  className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
                />
              </span>
            </span>
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
              <span className="relative text-white text-sm font-bold box-border caret-transparent block tracking-[0.36px] leading-[14px] mr-[-0.36px] outline-[3px] text-center uppercase md:text-base md:leading-4">
                {props.linkText}
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="absolute text-sm box-border caret-transparent h-[175px] leading-[22.4px] outline-[3px] w-full z-[-1] left-0 top-0 md:text-base md:h-[200px] md:leading-[25.6px]">
        <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
          <div className={props.bottomDecorationFirstVariant}></div>
          <div className={props.bottomDecorationSecondVariant}></div>
        </div>
      </div>
    </div>
  );
};
