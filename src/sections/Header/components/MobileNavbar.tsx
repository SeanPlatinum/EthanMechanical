import { Link } from "react-router-dom";

export const MobileNavbar = () => {
  return (
    <div className="relative text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:hidden md:leading-[25.6px] md:min-h-0 md:min-w-0">
      <div className="grid gap-2 p-4 bg-white rounded-3xl shadow-lg">
        <Link
          to="/hvac/air-conditioning"
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Air Conditioning
        </Link>
        <Link
          to="/hvac/heating-services"
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Heating
        </Link>
        <Link
          to="/plumbing-services"
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Plumbing
        </Link>
        <Link
          to="/drains"
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          Drains/Sewer
        </Link>
        <Link
          to="/about-us"
          className="text-blue-900 text-sm font-black uppercase tracking-[0.04em] px-4 py-3 rounded-2xl bg-blue-50 text-center hover:bg-blue-100 transition-colors"
        >
          About Us
        </Link>
      </div>
      <a
        href="https://servicebyheart.com/contact-us/"
        className="relative text-white text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center mt-4 w-full bg-blue-900 px-5 py-4 rounded-2xl text-center"
      >
        Schedule Now
      </a>
    </div>
  );
};
