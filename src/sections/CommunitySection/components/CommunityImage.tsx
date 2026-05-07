export const CommunityImage = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-[calc(100%_-_20px)] flex-col flex-wrap h-[300px] justify-start leading-[22.4px] max-w-full min-h-[200px] outline-[3px] z-[1] mx-2.5 my-[15px] md:text-base md:basis-[280px] md:h-auto md:leading-[25.6px] md:min-h-0">
      <div className="absolute text-sm box-border caret-transparent h-full leading-[22.4px] outline-[3px] pointer-events-none w-full z-[-1] overflow-hidden left-0 top-0 md:text-base md:leading-[25.6px]">
        <div className="absolute text-sm bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-[1] overflow-hidden bg-center left-0 top-0 md:text-base md:leading-[25.6px]"></div>
      </div>
      <span className="relative text-sm bg-red-600 box-border caret-transparent hidden leading-[14px] mt-[-30px] min-h-0 min-w-0 outline-[3px] align-middle w-[calc(100%_-_60px)] p-2.5 rounded-b-[20px] md:text-base md:block md:leading-4 md:min-h-[auto] md:min-w-[auto] after:accent-auto after:bg-red-800 after:box-border after:caret-transparent after:text-neutral-700 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-[31px] after:tracking-[normal] after:leading-[14px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-30px] after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[30px] after:z-[-1] after:border-separate after:top-0 after:font-roboto after:md:text-base after:md:leading-4">
        <img
          src="https://c.animaapp.com/moump05judxXNB/assets/lennox-white.png"
          alt=""
          className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-[300px] md:text-base md:leading-4"
        />
      </span>
    </div>
  );
};
