import { Link } from "react-router-dom";

export const DesktopNavbar = () => {
  return (
    <ul className="text-sm items-stretch self-stretch box-border caret-transparent hidden shrink-0 justify-center leading-[22.4px] list-none min-h-0 min-w-px outline-[3px] w-full pl-0 md:text-base md:flex md:leading-[25.6px] md:min-h-[auto]">
      <li className="relative text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <Link
          to="/hvac/air-conditioning"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                Air Conditioning
              </span>
            </div>
            <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 outline-[3px] text-center md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/icon-3.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
              />
            </span>
          </div>
        </Link>
      </li>
      <li className="relative text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <Link
          to="/hvac/heating-services"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                Heating
              </span>
            </div>
            <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 outline-[3px] text-center md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/icon-3.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
              />
            </span>
          </div>
        </Link>
      </li>
      <li className="relative text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <Link
          to="/plumbing-services"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                Plumbing
              </span>
            </div>
            <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 outline-[3px] text-center md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/icon-3.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
              />
            </span>
          </div>
        </Link>
      </li>
      <li className="relative text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <Link
          to="/drains"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                Drains/Sewer
              </span>
            </div>
            <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 outline-[3px] text-center md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/icon-3.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
              />
            </span>
          </div>
        </Link>
      </li>
      <li className="relative text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <a
          href="https://servicebyheart.com/electrical/"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                Electrical
              </span>
            </div>
            <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 outline-[3px] text-center md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/icon-3.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
              />
            </span>
          </div>
        </a>
      </li>
      <li className="relative text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <Link
          to="/about-us"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                About Us
              </span>
            </div>
            <span className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 outline-[3px] text-center md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/icon-3.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
              />
            </span>
          </div>
        </Link>
      </li>
      <li className="text-sm items-stretch box-border caret-transparent flex shrink-0 justify-center leading-[22.4px] min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
        <a
          href="https://servicebyheart.com/contact-us/"
          className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col shrink-0 leading-[22.4px] min-h-0 min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px] md:min-h-[auto]"
        >
          <div className="relative text-sm items-center box-border caret-transparent gap-x-[5px] flex grow shrink-0 h-full justify-between leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[5px] overflow-hidden px-[17.5px] py-3.5 md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-4">
            <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
              <span className="relative text-[15.4px] font-black box-border caret-transparent block leading-[15.4px] outline-[3px] md:text-[17.6px] md:leading-[17.6px]">
                Contact Us
              </span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
};
