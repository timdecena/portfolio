import React from "react";
import Reveal from "../motion/Reveal";

export default function SocialIconButton({
  href,
  icon,
  label,
  delay = 0,
  className = "",
}) {
  return (
    <Reveal delay={delay} className={className}>
      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
        <span className="bannerIcon">{icon}</span>
      </a>
    </Reveal>
  );
}
