import { Link } from "react-router-dom";

type MobileNavbarProps = {
  id: string;
  onNavigate: () => void;
};

const navItems = [
  { to: "/heat-pumps", label: "Heat Pumps" },
  { to: "/about-us", label: "About Us" },
];

export const MobileNavbar = ({ id, onNavigate }: MobileNavbarProps) => {
  return (
    <nav
      id={id}
      aria-label="Mobile navigation"
      className="absolute text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] w-full z-50 px-4 pb-4 top-full left-0 md:text-base md:hidden md:leading-[25.6px] md:min-h-0 md:min-w-0"
    >
      <div className="grid gap-2 p-4 bg-white rounded-3xl shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <a
        href="/#scheduler"
        onClick={onNavigate}
        className="relative text-white text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center mt-4 w-full bg-blue-900 px-5 py-4 rounded-2xl text-center"
      >
        Heat Pump Service
      </a>
    </nav>
  );
};
