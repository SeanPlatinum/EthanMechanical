import { Link } from "react-router-dom";
import { FooterCtaSocial } from "@/sections/Footer/components/FooterCtaSocial";

export const FooterLinks = () => {
  return (
    <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] outline-[3px] w-full mx-auto p-px md:text-base md:leading-[25.6px]">
      <div className="grid w-full gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
        <div>
          <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-blue-900 md:text-[17.6px]">
            Comfort Pros
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[36px] text-red-600 md:text-[40px] md:leading-[48px]">
            Heat pump comfort, without the unrelated service menu.
          </h2>
          <p className="mt-4 max-w-[680px] text-base leading-8">
            Installation, repair, maintenance, and replacement guidance for
            efficient heat pump systems.
          </p>
          <div className="mt-7">
            <FooterCtaSocial />
          </div>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid gap-3 text-sm font-bold uppercase tracking-[0.08em]"
        >
          <Link
            to="/heat-pumps"
            className="bg-white px-5 py-4 text-blue-900 transition-colors hover:bg-[#A9D1F8]"
          >
            Heat Pumps
          </Link>
          <Link
            to="/about-us"
            className="bg-white px-5 py-4 text-blue-900 transition-colors hover:bg-[#A9D1F8]"
          >
            About Us
          </Link>
          <a
            href="tel:+19788474141"
            className="bg-blue-900 px-5 py-4 text-white transition-colors hover:bg-blue-800"
          >
            (978) 847-4141
          </a>
        </nav>
      </div>
    </div>
  );
};
