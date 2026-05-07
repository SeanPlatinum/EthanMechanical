export const AboutMedia = () => {
  return (
    <div className="relative text-sm content-start items-start box-border caret-transparent flex basis-full flex-col flex-wrap justify-center leading-[22.4px] max-w-full outline-[3px] z-[1] md:text-base md:basis-6/12 md:leading-[25.6px]">
      <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] w-full md:text-base md:leading-[25.6px]">
        <div className="text-base bg-white box-border caret-transparent leading-[22.4px] outline-[3px] w-full md:leading-[25.6px]">
          <div className="relative box-border caret-transparent h-0 leading-[22.4px] outline-[3px] z-[1] overflow-hidden pb-[350px] md:leading-[25.6px]">
            <div className="absolute box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full left-0 top-0 md:leading-[25.6px]">
              <span className="box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:leading-[25.6px]">
                Video Player
              </span>
              <div
                role="application"
                aria-label="Video Player"
                className="box-border caret-transparent leading-[22.4px] outline-[3px] md:leading-[25.6px]"
              >
                <div className="box-border caret-transparent leading-[22.4px] outline-[3px] md:leading-[25.6px]">
                  <div className="box-border caret-transparent leading-[22.4px] outline-[3px] md:leading-[25.6px]">
                    <div className="box-border caret-transparent leading-[22.4px] outline-[3px] md:leading-[25.6px]">
                      <video
                        poster="https://c.animaapp.com/moump05judxXNB/assets/heat-video-cover-comp.webp"
                        preload="metadata"
                        playsinline="1"
                        loop=""
                        muted=""
                        src="https://servicebyheart.com/wp-content/uploads/2026/03/Copy-of-Copy-of-Heart-HCPE-Brand.mp4"
                        className="absolute box-border caret-transparent h-full leading-[22.4px] object-fill outline-[3px] align-baseline w-full left-0 top-0 md:leading-[25.6px]"
                      >
                        <source
                          src="https://servicebyheart.com/wp-content/uploads/2026/03/Copy-of-Copy-of-Heart-HCPE-Brand.mp4"
                          type="video/mp4"
                          className="text-black box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full left-0 top-0 md:leading-[25.6px]">
                    <div className="absolute bg-[url('https://c.animaapp.com/moump05judxXNB/assets/heat-video-cover-comp.webp')] bg-no-repeat bg-contain box-border caret-transparent hidden h-full leading-[22.4px] outline-[3px] w-full z-20 bg-center left-0 top-0 md:leading-[25.6px]">
                      <img
                        src="https://c.animaapp.com/moump05judxXNB/assets/heat-video-cover-comp.webp"
                        alt=""
                        className="absolute aspect-[auto_0_/_0] box-border caret-transparent h-full leading-[22.4px] max-w-full object-contain outline-[3px] align-baseline w-full left-0 top-0 md:leading-[25.6px]"
                      />
                    </div>
                    <div className="absolute box-border caret-transparent hidden h-full leading-[22.4px] outline-[3px] w-full z-20 left-0 top-0 md:leading-[25.6px]">
                      <div className="box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:leading-[25.6px]">
                        <span className="box-border caret-transparent leading-[22.4px] outline-[3px] md:leading-[25.6px]"></span>
                      </div>
                    </div>
                    <div className="absolute box-border caret-transparent hidden h-full leading-[22.4px] outline-[3px] w-full z-20 left-0 top-0 md:leading-[25.6px]">
                      <div className="box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:leading-[25.6px]"></div>
                    </div>
                    <div className="absolute box-border caret-transparent h-full leading-[22.4px] outline-[3px] w-full z-20 left-0 top-0 md:leading-[25.6px]">
                      <div
                        role="button"
                        aria-label="Play"
                        className="box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:leading-[25.6px]"
                      ></div>
                    </div>
                  </div>
                  <div className="absolute items-center bg-black/80 box-border caret-transparent hidden justify-between leading-[22.4px] outline-[3px] z-[999] mb-5 mx-5 bottom-0 inset-x-0 md:leading-[25.6px]">
                    <div className="relative items-center box-border caret-transparent flex h-[30px] justify-center leading-4 outline-[3px] w-[30px] p-2.5">
                      <button
                        type="button"
                        title="Play"
                        aria-label="Play"
                        className="text-white/50 text-sm bg-white/50 caret-transparent block h-[30px] leading-[14px] [mask-image:url('https://servicebyheart.com/wp-content/themes/pro/cornerstone/assets/svg/font_awesome/solid/play.svg')] [mask-repeat:no-repeat] outline-[3px] text-center align-top w-[30px] [mask-position:50%] p-0"
                      ></button>
                    </div>
                    <div
                      role="timer"
                      className="relative text-white/50 text-[10px] items-center box-border caret-transparent hidden justify-center tracking-[0.25px] leading-[10px] outline-[3px] text-center w-[46px] md:flex"
                    >
                      <span className="box-border caret-transparent inline outline-[3px] md:block">
                        00:00
                      </span>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex basis-[0%] grow h-[30px] justify-center leading-4 outline-[3px] w-[30px] px-2.5 md:px-0">
                      <span
                        role="slider"
                        aria-label="Time Slider"
                        className="relative bg-white/30 box-border caret-transparent block h-2.5 outline-[3px] w-full z-[1] overflow-hidden"
                      >
                        <span className="box-border caret-transparent hidden outline-[3px]"></span>
                        <span className="absolute bg-white/30 box-border caret-transparent block h-full outline-[3px] origin-[0%_0%] w-full left-0 top-0"></span>
                        <span className="absolute bg-white box-border caret-transparent block h-full outline-[3px] origin-[0%_0%] w-full left-0 top-0"></span>
                        <span className="box-border caret-transparent hidden outline-[3px]"></span>
                        <span className="box-border caret-transparent hidden outline-[3px]">
                          <span className="box-border caret-transparent outline-[3px]"></span>
                        </span>
                        <span className="box-border caret-transparent hidden outline-[3px]">
                          <span className="box-border caret-transparent outline-[3px]">
                            00:00
                          </span>
                          <span className="box-border caret-transparent outline-[3px]"></span>
                        </span>
                      </span>
                    </div>
                    <div className="relative text-white/50 text-[10px] items-center box-border caret-transparent hidden justify-center tracking-[0.25px] leading-[10px] outline-[3px] text-center w-[46px] md:flex">
                      <span className="box-border caret-transparent inline outline-[3px] md:block">
                        00:30
                      </span>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex h-[30px] justify-center leading-4 outline-[3px] w-[30px] p-2.5">
                      <button
                        type="button"
                        title="Unmute"
                        aria-label="Unmute"
                        className="text-white/50 text-sm bg-white/50 caret-transparent block h-[30px] leading-[14px] [mask-image:url('https://servicebyheart.com/wp-content/themes/pro/cornerstone/assets/svg/font_awesome/solid/volume-off.svg')] [mask-repeat:no-repeat] outline-[3px] text-center align-top w-[30px] [mask-position:50%] p-0"
                      ></button>
                      <a
                        href="javascript://void(0);"
                        aria-label="Volume Slider"
                        role="slider"
                        className="text-blue-900 box-border caret-transparent hidden outline-[3px]"
                      >
                        <span className="box-border caret-transparent hidden outline-[3px]">
                          Use Up/Down Arrow keys to increase or decrease volume.
                        </span>
                        <div className="box-border caret-transparent outline-[3px]">
                          <div className="box-border caret-transparent h-[0%] outline-[3px] bottom-0"></div>
                          <div className="box-border caret-transparent outline-[3px] bottom-[0%]"></div>
                        </div>
                      </a>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex h-[30px] justify-center leading-4 outline-[3px] w-[30px] p-2.5">
                      <button
                        type="button"
                        title="Fullscreen"
                        aria-label="Fullscreen"
                        className="text-white/50 text-sm bg-white/50 caret-transparent block h-[30px] leading-[14px] [mask-image:url('https://servicebyheart.com/wp-content/themes/pro/cornerstone/assets/svg/font_awesome/solid/expand.svg')] [mask-repeat:no-repeat] outline-[3px] text-center align-top w-[30px] [mask-position:50%] bg-[position:-80px_0px] p-0"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute text-sm box-border caret-transparent block leading-[14px] max-w-[85px] outline-[3px] top-[-30px] align-middle w-[120px] z-[3] -right-5 md:text-base md:leading-4 md:max-w-none">
          <img
            src="https://c.animaapp.com/moump05judxXNB/assets/heart-icon.svg"
            alt=""
            className="text-sm box-border caret-transparent leading-[14px] max-w-full outline-[3px] align-bottom w-full md:text-base md:leading-4"
          />
        </span>
      </div>
      <div className="relative text-sm bg-red-600 box-border caret-transparent leading-[22.4px] min-h-[auto] min-w-px outline-[3px] z-[2] pl-[60px] pr-2.5 py-2.5 rounded-l-[100px] md:text-base md:leading-[25.6px] md:pl-[90px]">
        <div className="text-sm items-center box-border caret-transparent flex justify-center leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <span className="absolute text-sm items-start box-border caret-transparent flex shrink-0 justify-start leading-[14px] outline-[3px] z-[2] -left-2.5 md:text-base md:leading-4">
            <span className="relative text-sm items-center box-border caret-transparent flex h-[65px] justify-center leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-[65px] md:text-base md:h-[84px] md:leading-4 md:w-[84px]">
              <img
                src="https://c.animaapp.com/moump05judxXNB/assets/thumbs-icon.svg"
                alt=""
                className="text-sm aspect-[auto_0_/_0] box-border caret-transparent leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-bottom w-[65px] md:text-base md:leading-4 md:w-[84px]"
              />
            </span>
          </span>
          <div className="text-sm box-border caret-transparent grow leading-[22.4px] max-w-full min-h-[auto] min-w-px outline-[3px] md:text-base md:leading-[25.6px]">
            <p className="text-white text-[12.6px] box-border caret-transparent tracking-[2px] leading-[17.64px] outline-[3px] uppercase -mr-0.5 font-roboto_condensed md:text-base md:leading-[22.4px]">
              Premium-quality Home services Done Right
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
