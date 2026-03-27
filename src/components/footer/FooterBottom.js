import React from "react";
import Reveal from "../motion/Reveal";

const FooterBottom = () => {
  return (
    <Reveal className="py-10">
      <div className="glass-divider mb-6" />
      <p className="text-center text-sm uppercase tracking-[0.28em] text-gray-500">
        © 2026 Anthony Decena. All rights reserved.
      </p>
    </Reveal>
  );
};

export default FooterBottom;
