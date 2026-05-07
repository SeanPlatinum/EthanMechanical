import { TopBanner } from "@/sections/Header/components/TopBanner";
import { MainHeader } from "@/sections/Header/components/MainHeader";
import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header
      role="banner"
      className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
    >
      <TopBanner />
      <MainHeader />
      <Navbar />
    </header>
  );
};
