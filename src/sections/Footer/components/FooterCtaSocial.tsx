export const FooterCtaSocial = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap justify-center leading-[22.4px] outline-[3px] gap-y-2.5 md:text-base md:flex-row md:flex-nowrap md:justify-start md:leading-[25.6px]">
      <a
        href="/#scheduler"
        className="relative text-white text-sm bg-red-600 box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden md:text-base md:leading-[25.6px] md:w-auto"
      >
        <span className="relative text-white text-sm font-bold box-border caret-transparent block tracking-[0.36px] leading-[14px] mr-[-0.36px] outline-[3px] text-center uppercase px-5 py-[15px] md:text-base md:leading-4">
          Schedule Heat Pump Service
        </span>
      </a>
      <a
        href="tel:+19788474141"
        className="relative text-blue-900 text-sm bg-white box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden border-2 border-blue-900 md:text-base md:leading-[25.6px] md:w-auto"
      >
        <span className="relative text-blue-900 text-sm font-bold box-border caret-transparent block tracking-[0.36px] leading-[14px] mr-[-0.36px] outline-[3px] text-center uppercase px-5 py-[13px] md:text-base md:leading-4">
          Call (978) 847-4141
        </span>
      </a>
    </div>
  );
};
