import React from "react";
import Title from "../layouts/Title";
import Reveal from "../motion/Reveal";

export default function SectionHeading({ title, des, align = "left" }) {
  return (
    <Reveal
      className={align === "center" ? "flex justify-center text-center" : ""}
    >
      <Title title={title} des={des} align={align} />
    </Reveal>
  );
}
