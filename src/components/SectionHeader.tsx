export type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  rootVariantClass: string;
  eyebrowVariantClass?: string;
  titleVariantClass: string;
  contentWrapperVariantClass?: string;
  showReviewsSection?: boolean;
  reviewsContent?: React.ReactNode;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`relative text-sm box-border caret-transparent leading-[22.4px] max-w-full outline-[3px] z-[1] md:text-base md:leading-[25.6px] ${props.rootVariantClass}`}
    >
      <div
        className={
          props.eyebrowVariantClass
            ? `text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-w-px outline-[3px] text-center uppercase font-roboto_condensed md:text-[17.6px] md:leading-[25.6px] ${props.eyebrowVariantClass}`
            : "text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-w-px outline-[3px] text-center uppercase font-roboto_condensed md:text-[17.6px] md:leading-[25.6px]"
        }
      >
        {props.eyebrow}
      </div>

      <div
        className={
          props.contentWrapperVariantClass
            ? `relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] text-center md:text-base md:leading-[25.6px] ${props.contentWrapperVariantClass}`
            : "relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] text-center md:text-base md:leading-[25.6px]"
        }
      >
        <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
          <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
            <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
              <h2
                className={`text-[28px] font-bold box-border caret-transparent leading-[33.6px] outline-[3px] md:text-[40px] md:leading-[48px] ${props.titleVariantClass}`}
              >
                {props.title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {props.showReviewsSection ? props.reviewsContent : null}
    </div>
  );
};
