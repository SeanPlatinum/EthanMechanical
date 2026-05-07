export type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  rootClassName: string;
  iconWrapperClassName: string;
  imageClassName: string;
  contentClassName: string;
  titleClassName: string;
  descriptionClassName: string;
  ctaWrapperClassName: string;
  ctaIconOuterClassName: string;
  ctaIconInnerClassName: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <a
      href={props.href}
      className={`relative text-blue-900 text-sm box-border caret-transparent gap-x-5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-between leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] mx-2.5 my-5 pb-[30px] px-[30px] rounded-b-[20px] border-[3px] border-solid border-white md:text-base md:basis-[calc(33.33%_-_20px)] md:leading-[25.6px] md:my-[35px] ${props.rootClassName}`}
    >
      <span
        className={`text-sm box-border caret-transparent block leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] align-middle md:text-base md:leading-4 ${props.iconWrapperClassName}`}
      >
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className={`text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom md:text-base md:leading-4 ${props.imageClassName}`}
        />
      </span>

      <div
        className={`relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px] ${props.contentClassName}`}
      >
        <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
            <p
              className={`font-bold box-border caret-transparent outline-[3px] ${props.titleClassName}`}
            >
              {props.title}
            </p>
            <span
              className={`text-neutral-700 text-sm box-border caret-transparent block leading-[19.6px] outline-[3px] mt-[4.9px] md:text-base md:leading-[22.4px] md:mt-[5.6px] ${props.descriptionClassName}`}
            >
              {props.description}
            </span>
          </div>
        </div>
      </div>

      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
        <span
          className={`relative text-sm box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden md:text-base md:leading-[25.6px] md:w-auto ${props.ctaWrapperClassName}`}
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-2.5 flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 overflow-hidden px-5 py-[15px] md:text-base md:leading-[25.6px]">
            <span
              className={`relative text-sm items-start box-border caret-transparent shrink-0 justify-start leading-[14px] outline-[3px] z-[2] md:text-base md:leading-4 ${props.ctaIconOuterClassName}`}
            >
              <span
                className={`relative text-sm items-center box-border caret-transparent justify-center leading-[14px] outline-[3px] text-center md:text-base md:leading-4 ${props.ctaIconInnerClassName}`}
              >
                <img
                  src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                  alt="Icon"
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
        </span>
      </div>
    </a>
  );
};
