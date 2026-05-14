const logoSrc = "/images/logo.png";

export const FooterLogo = () => {
  return (
    <a
      href="/"
      className="text-blue-900 text-sm box-border caret-transparent block h-24 w-[220px] overflow-hidden leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] align-middle md:text-base md:leading-4"
    >
      <img
        src={logoSrc}
        alt="Comfort Pros"
        className="text-sm box-border caret-transparent h-full w-full leading-[14px] outline-[3px] object-cover object-center align-bottom md:text-base md:leading-4"
      />
    </a>
  );
};
