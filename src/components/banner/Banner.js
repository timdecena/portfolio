import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="section-shell flex flex-col items-center gap-14 pt-10 lgl:flex-row xl:gap-8"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
