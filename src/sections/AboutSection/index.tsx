import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { AboutMedia } from "@/sections/AboutSection/components/AboutMedia";

const commitments = [
  "Heat pump recommendations matched to the home, not a generic package.",
  "Clear repair options before work begins.",
  "Maintenance built around comfort, efficiency, and system life.",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] py-[75px] md:text-base md:leading-[25.6px] md:py-[100px]"
    >
      <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mx-auto p-px md:text-base md:leading-[25.6px]">
        <div className="text-sm content-center items-center box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] outline-[3px] -m-px md:text-base md:leading-[25.6px]">
          <AboutContent />
          <AboutMedia />
        </div>
      </div>
      <div className="relative text-sm items-stretch bg-[#A9D1F8] box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mt-[100px] mx-auto p-px md:text-base md:leading-[25.6px]">
        <div className="grid w-full gap-5 p-8 md:grid-cols-[minmax(0,1fr)_1fr] md:p-10">
          <div>
            <p className="font-roboto_condensed text-[15.4px] font-bold uppercase tracking-[0.18em] text-blue-900 md:text-[17.6px]">
              Our Heat Pump Promise
            </p>
            <h3 className="mt-3 text-[28px] font-bold leading-[36px] text-blue-900 md:text-[40px] md:leading-[48px]">
              Focused service, practical guidance, and clean workmanship.
            </h3>
          </div>
          <ul className="grid gap-4">
            {commitments.map((commitment) => (
              <li
                key={commitment}
                className="bg-white px-5 py-4 text-base font-medium leading-7 text-neutral-700"
              >
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
