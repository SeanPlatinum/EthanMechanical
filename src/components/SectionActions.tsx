export const SectionActions = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-[30px] flex basis-[calc(100%_-_30px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] gap-y-[30px] z-[1] mx-[15px] my-[25px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
        <a
          href="/about-us/coupons/"
          className="relative text-blue-900 text-sm bg-red-600 box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden md:text-base md:leading-[25.6px] md:w-auto"
        >
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
                View All Coupons
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
