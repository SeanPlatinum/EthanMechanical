export type LogoItemProps = {
  imageSrc: string;
  imageAlt: string;
  isLink: boolean;
  href: string;
  imageVariantClass: string;
};

export const LogoItem = (props: LogoItemProps) => {
  const image = (
    <span
      className={
        props.isLink
          ? "text-sm box-border caret-transparent block grayscale-[1] leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] align-middle md:text-base md:leading-4"
          : "text-sm box-border caret-transparent block leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] align-middle md:text-base md:leading-4"
      }
    >
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className={
          props.isLink
            ? "text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-24 md:text-base md:leading-4"
            : `text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom md:text-base md:leading-4 ${props.imageVariantClass}`
        }
      />
    </span>
  );

  if (props.isLink) {
    return (
      <a
        href={props.href}
        className="relative text-blue-900 text-sm content-center items-center box-border caret-transparent flex basis-[calc(40%_-_8.4px)] flex-col grow shrink-0 flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] md:text-base md:basis-[calc(16.6667%_-_13.3333px)] md:leading-[25.6px]"
      >
        {image}
      </a>
    );
  }

  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-[calc(40%_-_8.4px)] flex-col grow shrink-0 flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] md:text-base md:basis-[calc(16.6667%_-_13.3333px)] md:leading-[25.6px]">
      {image}
    </div>
  );
};
