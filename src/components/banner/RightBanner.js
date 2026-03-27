import React from "react";
import { bannerImg } from "../../assets/index";
import Reveal from "../motion/Reveal";

const RightBanner = () => {
  return (
    <Reveal className="flex w-full justify-center lgl:w-1/2" delay={0.2} direction="left">
      <div className="relative flex w-full max-w-[560px] justify-center">
        <div className="absolute inset-x-6 bottom-2 top-10 rounded-[32px] bg-gradient-to-br from-designColor/16 via-white/4 to-[#6b5948]/10 blur-3xl" />
        <div className="panel-surface relative w-full overflow-hidden px-6 pt-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
          <img
            className="relative z-10 mx-auto h-[420px] w-[300px] rounded-[30px] object-cover object-top sm:h-[560px] sm:w-[420px] lgl:h-[640px] lgl:w-[460px]"
            src={bannerImg}
            alt="Anthony Decena portrait"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default RightBanner;
