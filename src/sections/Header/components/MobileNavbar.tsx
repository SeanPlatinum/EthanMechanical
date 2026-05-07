import { Link } from "react-router-dom";

type MobileNavbarProps = {
  id: string;
  onNavigate: () => void;
};

export const MobileNavbar = ({ id, onNavigate }: MobileNavbarProps) => {
  return (
    <nav
      id={id}
      aria-label="Mobile navigation"
      className="absolute text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] w-full z-50 px-4 pb-4 top-full left-0 md:text-base md:hidden md:leading-[25.6px] md:min-h-0 md:min-w-0"
    >
      <div className="grid gap-2 p-4 bg-white rounded-3xl shadow-lg">
        <Link
          to="/hvac/air-conditioning"
          onClick={onNavigate}
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Air Conditioning
        </Link>
        <Link
          to="/hvac/heating-services"
          onClick={onNavigate}
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Heating
        </Link>
        <Link
          to="/plumbing-services"
          onClick={onNavigate}
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Plumbing
        </Link>
        <Link
          to="/drains"
          onClick={onNavigate}
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Drains/Sewer
        </Link>
        <Link
          to="/about-us"
          onClick={onNavigate}
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          About Us
        </Link>
      </div>
      <a
        href="https://servicebyheart.com/contact-us/"
        onClick={onNavigate}
        className="relative text-white text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center mt-4 w-full bg-blue-900 px-5 py-4 rounded-2xl text-center"
      >
        Schedule Now
      </a>
    </nav>
  );
};
