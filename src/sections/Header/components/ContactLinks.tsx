export const ContactLinks = () => {
  return (
    <div className="relative text-sm items-start box-border caret-transparent gap-x-5 flex shrink-0 justify-start leading-[22.4px] outline-[3px] gap-y-5 md:text-base md:leading-[25.6px]">
      <span className="text-sm box-border caret-transparent block leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-[35px] -mr-2.5 md:text-base md:leading-4 md:w-[45px]">
        <img
          src="https://c.animaapp.com/moump05judxXNB/assets/phone-icon.svg"
          alt=""
          className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
        />
      </span>
      <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex flex-col shrink-0 justify-start leading-[22.4px] outline-[3px] gap-y-[5px] md:text-base md:gap-x-5 md:flex-row md:leading-[25.6px] md:gap-y-5">
        <a
          href="tel://(978) 847-4141"
          className="relative text-blue-900 text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px] before:accent-auto before:bg-zinc-600 before:box-border before:caret-transparent before:text-blue-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-full before:font-roboto before:md:text-base before:md:h-full before:md:leading-[25.6px] before:md:w-0.5 before:md:left-[calc(100%_+_10px)] before:md:top-0"
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
  );
};
