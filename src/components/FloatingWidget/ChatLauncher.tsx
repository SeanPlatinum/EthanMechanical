export const ChatLauncher = () => {
  return (
    <div className="fixed items-center caret-transparent flex flex-col justify-end outline-[3px] left-[13px] bottom-[13px]">
      <div
        aria-label="Translations Menu"
        role="button"
        title="Translations Menu"
        className="relative items-center bg-red-600 caret-transparent hidden h-11 justify-center outline-[3px] w-11 rounded-[50%]"
      >
        <span className="caret-transparent outline-[3px]"></span>
        <div className="absolute bg-size-[140px] caret-transparent hidden h-[45px] outline-[3px] w-[45px] overflow-hidden bg-[position:-48px_-48px] left-0 top-0">
          <img
            alt="Spinner: White decorative"
            src="https://c.animaapp.com/moump05judxXNB/assets/spin_wh.svg"
            className="caret-transparent h-11 max-w-full outline-[3px] align-baseline w-11 bg-[position:0px_0px]"
          />
        </div>
        <span className="absolute caret-transparent block outline-[3px] z-[-1] -inset-2.5"></span>
      </div>
      <div
        aria-label="Accessibility Menu"
        role="button"
        title="Accessibility Menu"
        className="relative items-center bg-red-600 caret-transparent flex h-11 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-11 rounded-[50%]"
      >
        <span className="caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          <img
            role="presentation"
            alt=""
            src="https://c.animaapp.com/moump05judxXNB/assets/body_wh.svg"
            className="caret-transparent h-11 max-w-full outline-[3px] align-baseline w-11 bg-[position:0px_0px]"
          />
        </span>
        <div className="absolute bg-size-[140px] caret-transparent hidden h-[45px] outline-[3px] w-[45px] overflow-hidden bg-[position:-48px_-48px] left-0 top-0">
          <img
            alt="Spinner: White decorative"
            src="https://c.animaapp.com/moump05judxXNB/assets/spin_wh.svg"
            className="caret-transparent h-11 max-w-full outline-[3px] align-baseline w-11 bg-[position:0px_0px]"
          />
        </div>
        <span className="absolute caret-transparent block outline-[3px] z-[-1] -inset-2.5"></span>
      </div>
    </div>
  );
};
