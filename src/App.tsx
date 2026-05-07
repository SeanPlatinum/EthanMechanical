import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingWidget } from "@/components/FloatingWidget";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { FloatingIframes } from "@/components/FloatingIframes";
import { AboutPage } from "@/pages/AboutPage";
import { HeatingPage } from "@/pages/HeatingPage";
import { PlumbingPage } from "@/pages/PlumbingPage";
import { DrainsPage } from "@/pages/DrainsPage";
import { AirConditioningPage } from "@/pages/AirConditioningPage";

const HomePage = () => (
  <body className="text-neutral-700 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto md:text-base md:leading-[25.6px]">
    <FloatingWidget />
    <div className="absolute text-sm box-border caret-transparent hidden h-4 leading-[22.4px] outline-[3px] w-9 z-[2147483647] bg-[position:0px_0px] md:text-base md:leading-[25.6px]"></div>
    <div className="absolute text-sm box-border caret-transparent hidden h-[9px] leading-[22.4px] outline-[3px] w-4 z-[2147483647] bg-[position:0px_0px] md:text-base md:leading-[25.6px]"></div>
    <div className="absolute text-sm box-border caret-transparent hidden h-[9px] leading-[22.4px] outline-[3px] w-4 z-[2147483647] bg-[position:0px_0px] md:text-base md:leading-[25.6px]"></div>
    <div className="absolute text-sm bg-black box-border caret-transparent hidden h-3 leading-[22.4px] min-w-[200px] outline-[3px] w-[150px] z-[2147483647] border-yellow-400 rounded-[5px] border-[3px] border-solid top-5 md:text-base md:leading-[25.6px] md:w-[512px]">
      <div className="absolute text-sm box-border caret-transparent h-0 leading-[22.4px] outline-[3px] w-5 left-2/4 bottom-full md:text-base md:leading-[25.6px] before:accent-auto before:border-b-yellow-400 before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:ml-[-17px] before:outline-[3px] before:pointer-events-none before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:border-t-transparent before:border-x-transparent before:border-separate before:border-[17px] before:border-solid before:left-2/4 before:bottom-full before:font-roboto before:md:text-base before:md:leading-[25.6px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-700 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-0 after:-ml-3.5 after:border-t-transparent after:border-x-transparent after:border-separate after:border-[14px] after:border-solid after:left-2/4 after:bottom-full after:font-roboto after:md:text-base after:md:leading-[25.6px]"></div>
    </div>
    <div className="text-sm box-border caret-transparent flex leading-[22.4px] min-h-[1000px] outline-[3px] md:text-base md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent grow leading-[22.4px] min-h-[auto] min-w-px outline-[3px] w-full md:text-base md:leading-[25.6px]">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
    <FloatingIframes />
    <div className="text-sm box-border caret-transparent hidden h-[0.1px] leading-[22.4px] outline-[3px] w-[0.1px] md:text-base md:leading-[25.6px]"></div>
  </body>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/about-us/" element={<AboutPage />} />
        <Route path="/hvac/heating-services" element={<HeatingPage />} />
        <Route path="/hvac/heating-services/" element={<HeatingPage />} />
        <Route path="/plumbing-services" element={<PlumbingPage />} />
        <Route path="/plumbing-services/" element={<PlumbingPage />} />
        <Route path="/drains" element={<DrainsPage />} />
        <Route path="/drains/" element={<DrainsPage />} />
        <Route
          path="/hvac/air-conditioning"
          element={<AirConditioningPage />}
        />
        <Route
          path="/hvac/air-conditioning/"
          element={<AirConditioningPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
