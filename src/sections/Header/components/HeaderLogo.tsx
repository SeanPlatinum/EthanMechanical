import { Link } from "react-router-dom";

const logoSrc = "/images/logo.png";

export const HeaderLogo = () => {
  return (
    <Link
      to="/"
      className="caret-transparent block h-16 w-[150px] overflow-hidden outline-[3px] align-middle no-underline"
    >
      <img
        src={logoSrc}
        alt="Comfort Pros"
        className="h-full w-full object-cover object-center align-bottom"
      />
    </Link>
  );
};
