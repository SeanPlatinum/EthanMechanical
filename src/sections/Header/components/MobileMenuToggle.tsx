export const MobileMenuToggle = () => {
  return (
    <div
      role="button"
      aria-label="Toggle Off Canvas Content"
      className="relative text-sm box-border caret-transparent flex flex-col leading-[22.4px] min-h-[auto] min-w-px outline-[3px] overflow-hidden md:text-base md:hidden md:leading-[25.6px] md:min-h-0"
    >
      <div className="relative text-sm items-center box-border caret-transparent flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden p-2.5 md:text-base md:leading-[25.6px] md:min-h-0 md:min-w-0">
        <span className="relative text-sm items-start box-border caret-transparent flex shrink-0 justify-start leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] z-[2] m-[5px] md:text-base md:leading-4 md:min-h-0 md:min-w-0">
          <span className="relative text-blue-900 text-[3px] box-border caret-transparent block h-[3px] leading-[3px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none w-9 my-[9px] md:min-h-0 md:min-w-0">
            <span className="absolute bg-blue-900 box-border caret-transparent block h-full outline-[3px] translate-y-[-9px] w-full mx-auto left-0 top-0 md:transform-none"></span>
            <span className="absolute bg-blue-900 box-border caret-transparent block h-full outline-[3px] w-full mx-auto left-0 top-0"></span>
            <span className="absolute bg-blue-900 box-border caret-transparent block h-full outline-[3px] translate-y-[9px] w-full mx-auto left-0 top-0 md:transform-none"></span>
          </span>
        </span>
      </div>
    </div>
  );
};
