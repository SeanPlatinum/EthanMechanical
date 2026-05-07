export const ContactActions = () => {
  return (
    <div className="relative text-sm items-stretch bg-white box-border caret-transparent gap-x-[15px] flex flex-col justify-center leading-[22.4px] outline-[3px] gap-y-[15px] w-full p-2.5 md:text-base md:items-center md:gap-x-5 md:flex-row md:leading-[25.6px] md:gap-y-5 md:w-auto md:p-5">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
        <a
          href="https://servicebyheart.com/contact-us/"
          className="relative text-blue-900 text-sm bg-red-600 box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden md:text-base md:leading-[25.6px] md:w-auto"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-2.5 flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 overflow-hidden px-5 py-[15px] md:text-base md:leading-[25.6px]">
            <span className="relative text-sm items-start box-border caret-transparent flex shrink-0 justify-start leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] z-[2] md:text-base md:leading-4">
              <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:leading-4">
                <img
                  src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                  alt="Icon"
                  className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
                />
              </span>
            </span>
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
              <span className="relative text-white text-sm font-bold box-border caret-transparent block tracking-[0.36px] leading-[14px] mr-[-0.36px] outline-[3px] text-center uppercase md:text-base md:leading-4">
                Schedule Now
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="text-sm font-bold box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] text-center md:text-base md:leading-[25.6px] md:text-start">
        Or Call:
      </div>
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="relative text-sm items-start box-border caret-transparent gap-x-5 flex shrink-0 justify-center leading-[22.4px] outline-[3px] gap-y-5 md:text-base md:justify-start md:leading-[25.6px]">
          <a
            href="tel://(978) 847-4141"
            className="relative text-blue-900 text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px] before:accent-auto before:bg-zinc-600 before:box-border before:caret-transparent before:text-blue-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0.5 before:border-separate before:left-[calc(100%_+_10px)] before:top-0 before:font-roboto before:md:text-base before:md:leading-[25.6px]"
          >
            <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
              <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                <span className="text-neutral-700 text-[12.6px] font-bold box-border caret-transparent block leading-[17.64px] outline-[3px] uppercase font-roboto_condensed md:text-[14.4px] md:leading-[20.16px]">
                  Massachusetts
                </span>
                <p className="text-sm font-bold box-border caret-transparent leading-[19.6px] outline-[3px] md:text-[17.6px] md:leading-[24.64px]">
                  (978) 847-4141
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
