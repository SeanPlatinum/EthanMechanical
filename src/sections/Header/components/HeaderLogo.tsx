import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link
      to="/"
      className="caret-transparent block outline-[3px] align-middle no-underline"
    >
      <span className="font-semibold text-blue-900 text-xl md:text-2xl tracking-tight leading-tight whitespace-nowrap">
        E&amp;J Mechanical
      </span>
    </Link>
  );
};
