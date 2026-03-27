import React from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMongodb } from "react-icons/si";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import SocialIconButton from "../common/SocialIconButton";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Full Stack Developer.", "Backend Developer."],
    loop: true,
    typeSpeed: 38,
    deleteSpeed: 18,
    delaySpeed: 1600,
  });

  const socialLinks = [
    {
      href: "https://github.com/timdecena",
      label: "GitHub profile",
      icon: <FaGithub />,
    },
    {
      href: "https://www.facebook.com/anthony.decena.39",
      label: "Facebook profile",
      icon: <FaFacebookF />,
    },
    {
      href: "https://x.com/TimDecena",
      label: "X profile",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.linkedin.com/in/anthony-decena/",
      label: "LinkedIn profile",
      icon: <FaLinkedinIn />,
    },
  ];

  const skills = [<FaReact key="react" />, <SiSpringboot key="spring" />, <SiTailwindcss key="tailwind" />, <SiMongodb key="mongo" />, <FaAws key="aws" />];

  return (
    <div className="flex w-full flex-col gap-12 lgl:w-1/2">
      <div className="panel-surface overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_30%)]" />
        <div className="flex flex-col gap-6">
          <Reveal>
            <Badge variant="muted">WELCOME TO MY WORLD</Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl xl:text-6xl">
              Hi, I'm <span className="text-designColor">Anthony Decena</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-2xl font-bold text-white sm:text-3xl xl:text-4xl">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#b88a5a"
              />
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="max-w-2xl text-base leading-7 text-gray-300">
              Full Stack Developer with internship experience at Alliance
              Software Inc., where I contributed to a Tenant Management System
              using Java, Spring Boot, React, and TypeScript in a microservices
              architecture. I also worked as a freelance developer with a South
              Korean team, building a Project Management System with a focus on
              backend development, unit testing, and RESTful APIs.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                offset={-88}
                duration={500}
                className={buttonVariants({ size: "lg" })}
              >
                Let&apos;s Work Together
              </Link>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/timdecena"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="panel-surface p-6">
          <Reveal>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Find me in
            </h2>
          </Reveal>
          <StaggerGroup className="flex flex-wrap gap-4" stagger={0.1}>
            {socialLinks.map((item) => (
              <StaggerItem key={item.label}>
                <SocialIconButton {...item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="panel-surface p-6">
          <Reveal>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Best skill on
            </h2>
          </Reveal>
          <StaggerGroup className="flex flex-wrap gap-4" stagger={0.08}>
            {skills.map((icon, index) => (
              <StaggerItem key={index}>
                <span className="bannerIcon">{icon}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
