export type RatingBadgeProps = {
  href: string;
  ratingText: string;
  ariaLabel: string;
  iconSrc: string;
  iconAlt: string;
  rootVariant: string;
  contentVariant: string;
  starsWrapperVariant: string;
  starItemVariant: string;
  textContainerVariant: string;
  textWrapperVariant: string;
  textVariant: string;
};

export const RatingBadge = (props: RatingBadgeProps) => {
  return (
    <a
      href={props.href}
      className={`relative text-blue-900 text-sm content-center items-center box-border caret-transparent gap-x-[5px] flex flex-wrap justify-center leading-[22.4px] outline-[3px] gap-y-[5px] md:text-base md:leading-[25.6px] ${props.rootVariant}`}
    >
      <span
        className={`text-sm items-center box-border caret-transparent flex justify-start leading-[22.4px] min-w-px outline-[3px] md:text-base md:leading-[25.6px] ${props.contentVariant}`}
      >
        <span
          role="img"
          aria-label={props.ariaLabel}
          className={`text-sm items-center box-border caret-transparent flex justify-between leading-[14px] min-w-px outline-[3px] md:text-base md:leading-4 ${props.contentVariant}`}
        >
          <span
            className={`text-sm items-center box-border caret-transparent flex justify-center leading-[14px] outline-[3px] text-center md:text-base md:leading-4 ${props.starItemVariant}`}
          >
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
            />
          </span>
          <span
            className={`text-sm items-center box-border caret-transparent flex justify-center leading-[14px] outline-[3px] text-center ml-[5px] md:text-base md:leading-4 ${props.starItemVariant}`}
          >
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
            />
          </span>
          <span
            className={`text-sm items-center box-border caret-transparent flex justify-center leading-[14px] outline-[3px] text-center ml-[5px] md:text-base md:leading-4 ${props.starItemVariant}`}
          >
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
            />
          </span>
          <span
            className={`text-sm items-center box-border caret-transparent flex justify-center leading-[14px] outline-[3px] text-center ml-[5px] md:text-base md:leading-4 ${props.starItemVariant}`}
          >
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
            />
          </span>
          <span
            className={`text-sm items-center box-border caret-transparent flex justify-center leading-[14px] outline-[3px] text-center ml-[5px] md:text-base md:leading-4 ${props.starItemVariant}`}
          >
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
            />
          </span>
        </span>
      </span>
      <div
        className={`relative text-sm box-border caret-transparent leading-[22.4px] min-w-px outline-[3px] md:text-base md:leading-[25.6px] ${props.textContainerVariant}`}
      >
        <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <div
            className={`text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-w-px outline-[3px] md:text-base md:leading-[25.6px] ${props.textWrapperVariant}`}
          >
            <p
              className={`text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] text-center capitalize md:text-base md:leading-4 ${props.textVariant}`}
            >
              {props.ratingText}
              {"\n"} on Google
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
