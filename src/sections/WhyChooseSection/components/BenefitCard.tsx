export type BenefitCardProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <div className="relative text-sm content-center items-center bg-white box-border caret-transparent gap-x-5 flex basis-[calc(100%_-_20px)] flex-col flex-wrap justify-start leading-[22.4px] max-w-full outline-[3px] gap-y-5 z-[1] mx-2.5 my-5 pb-[30px] px-[30px] rounded-b-[20px] md:text-base md:basis-[calc(33.33%_-_20px)] md:leading-[25.6px] md:my-[35px] md:pb-10 md:px-10">
      <span className="text-sm box-border caret-transparent block leading-[14px] mt-[-30px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-[75px] md:text-base md:leading-4 md:w-[90px] md:-mt-10">
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
        />
      </span>
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="text-sm box-border caret-transparent flex leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
            <p className="text-red-600 text-[17.5px] font-bold box-border caret-transparent leading-[24.5px] outline-[3px] text-center md:text-2xl md:leading-[33.6px]">
              {props.title}
            </p>
            <span className="text-sm box-border caret-transparent block leading-[19.6px] outline-[3px] text-center mt-[4.9px] md:text-base md:leading-[22.4px] md:mt-[5.6px]">
              {props.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
