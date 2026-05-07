export const ContactImage = () => {
  return (
    <div className="relative text-sm content-center items-center box-border caret-transparent flex basis-full flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[1] my-2.5 md:text-base md:basis-[33.33%] md:leading-[25.6px]">
      <span className="text-sm box-border caret-transparent block leading-[14px] mb-[-50px] max-w-[90%] min-h-[auto] min-w-[auto] outline-[3px] align-middle z-[2] mx-0 md:text-base md:leading-4 md:max-w-none md:-ml-10 md:mr-5 md:mb-0">
        <img
          src="https://images.pexels.com/photos/8985463/pexels-photo-8985463.jpeg?auto=compress&cs=tinysrgb&w=998"
          alt=""
          className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-[998px] md:text-base md:leading-4"
        />
      </span>
      <span className="absolute text-sm box-border caret-transparent hidden h-full leading-[14px] outline-[3px] align-middle w-full md:text-base md:block md:leading-4">
        <img
          src="https://c.animaapp.com/moump05judxXNB/assets/Vector-27.svg"
          alt=""
          className="text-sm box-border caret-transparent h-full leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
        />
      </span>
    </div>
  );
};
