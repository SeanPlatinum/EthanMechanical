import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { SchedulerSection } from "@/sections/SchedulerSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServiceAreaSection } from "@/sections/ServiceAreaSection";
import { Footer } from "@/sections/Footer";

const HomePage = () => (
  <div className="text-neutral-700 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] outline-[3px] overflow-x-hidden pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-[25.6px]">
    <Header />
    <Hero />
    <SchedulerSection />
    <AboutSection />
    <ServiceAreaSection />
    <Footer />
  </div>
);

const AboutOnlyPage = () => (
  <div className="text-neutral-700 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] outline-[3px] overflow-x-hidden pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-[25.6px]">
    <Header />
    <AboutSection />
    <SchedulerSection />
    <ServiceAreaSection />
    <Footer />
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heat-pumps" element={<HomePage />} />
        <Route path="/about-us/*" element={<AboutOnlyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
