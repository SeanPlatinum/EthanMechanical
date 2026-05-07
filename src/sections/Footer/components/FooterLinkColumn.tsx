export type FooterLinkColumnProps = {
  title: string;
  items: {
    href: string;
    label: string;
  }[];
  containerClassName: string;
};

export const FooterLinkColumn = (props: FooterLinkColumnProps) => {
  return (
    <div
      className={`relative text-sm box-border caret-transparent basis-[calc(100%_-_20px)] leading-[22.4px] max-w-full outline-[3px] z-[1] m-2.5 md:text-base md:basis-[calc(50%_-_20px)] md:leading-[25.6px] ${props.containerClassName}`}
    >
      <div className="text-red-600 text-[15.4px] font-bold box-border caret-transparent tracking-[0.36px] leading-[22.4px] min-w-px outline-[3px] uppercase font-roboto_condensed md:text-[17.6px] md:leading-[25.6px]">
        {props.title}
      </div>
      <ul className="text-sm box-border caret-transparent leading-[22.4px] list-none min-w-px outline-[3px] pl-0 md:text-base md:leading-[25.6px]">
        {props.items.map((item, index) => (
          <li
            className="text-sm box-border caret-transparent leading-[22.4px] min-w-px outline-[3px] md:text-base md:leading-[25.6px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-roboto before:md:text-base before:md:leading-[25.6px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-700 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-none after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto after:md:text-base after:md:leading-[25.6px]"
            key={index}
          >
            <a
              href={item.href}
              className="relative text-blue-900 text-sm box-border caret-transparent flex flex-col leading-[22.4px] min-w-px outline-[3px] overflow-hidden md:text-base md:leading-[25.6px]"
            >
              <div className="relative text-sm items-center box-border caret-transparent flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-0 min-w-0 outline-[3px] overflow-hidden py-[9.8px] md:text-base md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:py-[11.2px]">
                <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-0 min-w-px outline-[3px] mr-auto my-[5px] md:text-base md:leading-[25.6px] md:min-h-[auto]">
                  <span className="relative text-sm font-bold box-border caret-transparent block leading-[14px] outline-[3px] md:text-base md:leading-4">
                    {item.label}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
