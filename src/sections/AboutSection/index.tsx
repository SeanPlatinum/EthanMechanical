import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { AboutMedia } from "@/sections/AboutSection/components/AboutMedia";

export const AboutSection = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] py-[75px] md:text-base md:leading-[25.6px] md:py-[100px]">
      <div className="relative text-sm items-stretch box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mx-auto p-px md:text-base md:leading-[25.6px]">
        <div className="text-sm content-center items-center box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] outline-[3px] -m-px md:text-base md:leading-[25.6px]">
          <AboutContent />
          <AboutMedia />
        </div>
      </div>
      <div className="relative text-sm items-stretch bg-cyan-100 box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mt-[100px] mx-auto p-px rounded-br-[40px] md:text-base md:leading-[25.6px]">
        <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] ml-[-11px] mr-[-11px] outline-[3px] -my-4 md:text-base md:leading-[25.6px]">
          <div className="relative text-sm content-center items-center box-border caret-transparent gap-x-5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] mx-2.5 my-[15px] pt-10 pb-0 px-[30px] md:text-base md:content-start md:items-start md:basis-[calc(100%_-_320px)] md:leading-[25.6px] md:pb-10">
            <span className="relative text-sm bg-red-600 box-border caret-transparent block leading-[14px] mt-[-70px] max-w-[300px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-[calc(100%_-_60px)] p-2.5 rounded-b-[20px] md:text-base md:hidden md:leading-4 md:min-h-0 md:min-w-0 after:accent-auto after:bg-red-800 after:box-border after:caret-transparent after:text-neutral-700 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[31px] after:tracking-[normal] after:leading-[14px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-30px] after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[30px] after:z-[-1] after:border-separate after:top-0 after:font-roboto after:md:text-base after:md:leading-4">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/image-1.svg"
                alt=""
                className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-[300px] md:text-base md:leading-4"
              />
            </span>
            <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
              <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                  <p className="text-blue-900 text-[17.5px] font-bold box-border caret-transparent leading-[24.5px] outline-[3px] text-center md:text-2xl md:leading-[33.6px] md:text-start">
                    We Heart the People of Metro Denver and the Colorado Front
                    Range
                  </p>
                  <span className="text-sm box-border caret-transparent block leading-[22.4px] outline-[3px] text-center mt-[4.9px] md:text-base md:leading-[25.6px] md:text-start md:mt-[5.6px]">
                    Heart Heating, Cooling, Plumbing, Electric is deeply
                    involved in the local community and is a participant of Feel
                    the Love by Lennox. Through this program, the team helps
                    provide free heating systems to local families in need,
                    reinforcing their commitment to giving back where it matters
                    most.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[25.6px]">
              <a
                href="/about-us/community/"
                className="relative text-blue-900 text-sm bg-red-600 box-border caret-transparent inline-flex flex-col leading-[22.4px] min-w-px outline-[3px] w-full overflow-hidden md:text-base md:leading-[25.6px] md:w-auto"
              >
                <div className="relative text-sm items-center box-border caret-transparent gap-x-2.5 flex grow shrink-0 h-full justify-center leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 overflow-hidden px-5 py-[15px] md:text-base md:leading-[25.6px]">
                  <span className="relative text-sm items-start box-border caret-transparent hidden shrink-0 justify-start leading-[14px] outline-[3px] z-[2] md:text-base md:leading-4">
                    <span className="relative text-sm items-center box-border caret-transparent inline-flex justify-center leading-[14px] outline-[3px] text-center md:text-base md:leading-4">
                      <img
                        src="https://c.animaapp.com/moump05judxXNB/assets/icon-2.svg"
                        alt="Icon"
                        className="text-sm box-border caret-transparent h-3.5 leading-[14px] outline-[3px] align-baseline w-3.5 md:text-base md:h-4 md:leading-4 md:w-4"
                      />
                    </span>
                  </span>
                  <div className="text-sm box-border caret-transparent leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
                    <span className="relative text-white text-sm font-bold box-border caret-transparent block tracking-[0.36px] leading-[14px] mr-[-0.36px] outline-[3px] text-center uppercase md:text-base md:leading-4">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-[calc(100%_-_20px)] flex-col flex-wrap h-[300px] justify-start leading-[22.4px] max-w-full min-h-[200px] outline-[3px] z-[1] mx-2.5 my-[15px] md:text-base md:basis-[280px] md:h-auto md:leading-[25.6px] md:min-h-0">
            <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
              <div className="absolute text-sm bg-[url('https://c.animaapp.com/moump05judxXNB/assets/community_4.jpg')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center left-0 top-0 md:text-base md:leading-[25.6px]"></div>
            </div>
            <span className="relative text-sm bg-red-600 box-border caret-transparent hidden leading-[14px] mt-[-30px] min-h-0 min-w-0 outline-[3px] align-middle w-[calc(100%_-_60px)] p-2.5 rounded-b-[20px] md:text-base md:block md:leading-4 md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-red-800 after:box-border after:caret-transparent after:text-neutral-700 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[31px] after:tracking-[normal] after:leading-[14px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-30px] after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[30px] after:z-[-1] after:border-separate after:top-0 after:font-roboto after:md:text-base after:md:leading-4">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/lennox-white.png"
                alt=""
                className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-[300px] md:text-base md:leading-4"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
