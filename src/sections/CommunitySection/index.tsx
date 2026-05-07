import { CommunityContent } from "@/sections/CommunitySection/components/CommunityContent";
import { CommunityImage } from "@/sections/CommunitySection/components/CommunityImage";

export const CommunitySection = () => {
  return (
    <div className="relative text-sm items-stretch bg-cyan-100 box-border caret-transparent flex justify-center leading-[22.4px] max-w-[1200px] outline-[3px] w-[88%] mt-[100px] mx-auto p-px rounded-br-[40px] md:text-base md:leading-[25.6px]">
      <div className="text-sm items-stretch box-border caret-transparent flex grow flex-wrap justify-start leading-[22.4px] ml-[-11px] mr-[-11px] outline-[3px] -my-4 md:text-base md:leading-[25.6px]">
        <CommunityContent />
        <CommunityImage />
      </div>
    </div>
  );
};
