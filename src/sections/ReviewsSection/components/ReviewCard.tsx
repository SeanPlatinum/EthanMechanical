export type ReviewCardProps = {
  reviewerName: string;
  reviewTime: string;
  reviewText: string;
  expandedText?: string;
  ratingAriaLabel?: string;
  starIconSrc?: string;
  platformLogoSrc: string;
  platformLogoAlt: string;
  showExpandableContent?: boolean;
  readMoreText?: string;
  readLessText?: string;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="relative text-sm box-border caret-transparent basis-full grow shrink-0 leading-[22.4px] max-w-full outline-[3px] z-[1] md:text-base md:basis-[calc(33.3333%_-_32px)] md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm content-start items-start bg-neutral-100 box-border caret-transparent gap-x-5 flex flex-col flex-wrap h-full justify-start leading-[22.4px] outline-[3px] gap-y-5 w-full p-[30px] md:text-base md:leading-[25.6px]">
          <div className="relative text-sm content-start items-stretch box-border caret-transparent gap-x-2.5 grid grid-cols-[1fr_50px] grid-rows-[auto] justify-center justify-items-stretch leading-[22.4px] outline-[3px] gap-y-5 w-full md:text-base md:leading-[25.6px]">
            <div className="relative text-sm content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap justify-start leading-[22.4px] max-w-full outline-[3px] gap-y-2.5 md:text-base md:leading-[25.6px]">
              <span className="text-[12.6px] items-center box-border caret-transparent flex justify-start leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-[14.4px] md:leading-[25.6px]">
                <span
                  role="img"
                  aria-label={props.ratingAriaLabel || "5 / 5"}
                  className="text-[12.6px] items-center box-border caret-transparent flex justify-between leading-[12.6px] min-h-[auto] min-w-px outline-[3px] md:text-[14.4px] md:leading-[14.4px]"
                >
                  <span className="text-blue-900 text-[12.6px] items-center box-border caret-transparent flex justify-center leading-[12.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[14.4px] md:leading-[14.4px]">
                    <img
                      src={
                        props.starIconSrc ||
                        "https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                      }
                      alt="Icon"
                      className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[12.6px] outline-[3px] align-baseline w-[12.6px] md:text-[14.4px] md:h-[14.4px] md:leading-[14.4px] md:w-[14.4px]"
                    />
                  </span>
                  <span className="text-blue-900 text-[12.6px] items-center box-border caret-transparent flex justify-center leading-[12.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center ml-0.5 md:text-[14.4px] md:leading-[14.4px]">
                    <img
                      src={
                        props.starIconSrc ||
                        "https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                      }
                      alt="Icon"
                      className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[12.6px] outline-[3px] align-baseline w-[12.6px] md:text-[14.4px] md:h-[14.4px] md:leading-[14.4px] md:w-[14.4px]"
                    />
                  </span>
                  <span className="text-blue-900 text-[12.6px] items-center box-border caret-transparent flex justify-center leading-[12.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center ml-0.5 md:text-[14.4px] md:leading-[14.4px]">
                    <img
                      src={
                        props.starIconSrc ||
                        "https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                      }
                      alt="Icon"
                      className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[12.6px] outline-[3px] align-baseline w-[12.6px] md:text-[14.4px] md:h-[14.4px] md:leading-[14.4px] md:w-[14.4px]"
                    />
                  </span>
                  <span className="text-blue-900 text-[12.6px] items-center box-border caret-transparent flex justify-center leading-[12.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center ml-0.5 md:text-[14.4px] md:leading-[14.4px]">
                    <img
                      src={
                        props.starIconSrc ||
                        "https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                      }
                      alt="Icon"
                      className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[12.6px] outline-[3px] align-baseline w-[12.6px] md:text-[14.4px] md:h-[14.4px] md:leading-[14.4px] md:w-[14.4px]"
                    />
                  </span>
                  <span className="text-blue-900 text-[12.6px] items-center box-border caret-transparent flex justify-center leading-[12.6px] min-h-[auto] min-w-[auto] outline-[3px] text-center ml-0.5 md:text-[14.4px] md:leading-[14.4px]">
                    <img
                      src={
                        props.starIconSrc ||
                        "https://c.animaapp.com/moump05judxXNB/assets/icon-8.svg"
                      }
                      alt="Icon"
                      className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[12.6px] outline-[3px] align-baseline w-[12.6px] md:text-[14.4px] md:h-[14.4px] md:leading-[14.4px] md:w-[14.4px]"
                    />
                  </span>
                </span>
              </span>
              <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] w-full md:text-base md:leading-[25.6px]">
                <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                  <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                    <div className="text-red-600 text-[15.4px] font-bold box-border caret-transparent leading-[21.56px] outline-[3px] md:text-[17.6px] md:leading-[24.64px]">
                      {props.reviewerName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-black/50 text-[11.2px] box-border caret-transparent leading-[13.44px] mt-[-5px] min-h-[auto] min-w-px outline-[3px] md:text-[12.8px] md:leading-[15.36px]">
                {props.reviewTime}
              </div>
            </div>
            <div className="relative text-sm box-border caret-transparent leading-[22.4px] max-w-full outline-[3px] md:text-base md:leading-[25.6px]">
              <span className="text-sm box-border caret-transparent inline-block leading-[14px] outline-[3px] align-middle w-[30px] md:text-base md:leading-4">
                <img
                  src={props.platformLogoSrc}
                  alt={props.platformLogoAlt}
                  className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
                />
              </span>
            </div>
          </div>
          <div className="text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
            {props.reviewText}
            {props.showExpandableContent ? (
              <>
                <span className="text-sm box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                  {props.expandedText}
                </span>
                <span className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                  ...
                </span>
                <button className="appearance-none text-sm bg-transparent caret-transparent leading-[22.4px] mt-[-5px] outline-[3px] text-center underline p-0 md:text-base md:leading-[25.6px]">
                  {props.readMoreText || "Read more"}
                </button>
                <button className="appearance-none text-sm bg-transparent caret-transparent hidden leading-[22.4px] mt-[-5px] outline-[3px] text-center underline p-0 md:text-base md:leading-[25.6px]">
                  {props.readLessText || "Read less"}
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
