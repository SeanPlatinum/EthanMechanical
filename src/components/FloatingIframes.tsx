export const FloatingIframes = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
      <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
        <iframe
          title="podium webchat widget prompt"
          aria-label="podium webchat widget prompt"
          className="fixed text-sm box-border caret-transparent h-[216px] leading-[22.4px] max-h-[216px] max-w-[340px] outline-[3px] align-baseline w-[340px] z-[2147482997] right-0 bottom-[75px] md:text-base md:leading-[25.6px]"
        ></iframe>
      </div>
      <iframe
        title="podium webchat widget bubble"
        aria-label="podium webchat widget bubble"
        className="fixed text-sm box-border caret-transparent h-[100px] leading-[22.4px] max-h-[100px] max-w-max outline-[3px] align-baseline w-max z-[2147482997] right-0 bottom-0 md:text-base md:leading-[25.6px]"
      ></iframe>
    </div>
  );
};
