import React from "react";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import ResumeCard from "./ResumeCard";

const educationItems = [
  {
    title: "B.S Information Technology - May 2026",
    subTitle: "Cebu Institute of Technology - University",
    result: "SSG Scholar",
    des: "Currently completing a BS Information Technology degree with honors while building experience in full stack development, REST APIs, cloud technologies, and software engineering projects.",
  },
  {
    title: "Junior and Senior High School - STEM",
    subTitle: "Cebu Institute of Technology - University (2016 - 2022)",
    result: "With Honors",
    des: "Completed secondary education in the STEM track, building a strong foundation in analytical thinking, technology, and academic performance.",
  },
];

const focusItems = [
  {
    title: "SSG Scholar",
    subTitle: "Cebu Institute of Technology - University",
    result: "2024 - Present",
    des: "Recognized through the Student Supreme Government Scholarship while pursuing software development work, coursework, and project-based learning.",
  },
  {
    title: "Technical Focus",
    subTitle: "Full Stack and Backend Development",
    result: "Ongoing",
    des: "Focused on Java, C#, Python, SQL, React, TypeScript, JavaScript, Spring Boot, REST APIs, microservices, and cloud-based deployment.",
  },
  {
    title: "Tools and Platforms",
    subTitle: "Modern Development Workflow",
    result: "Hands-on",
    des: "Experienced with VS Code, Git, GitHub, Docker, EC2, NGINX, MySQL Workbench, MongoDB, PostgreSQL, Firebase, and collaborative Kanban-based workflows.",
  },
];

const Education = () => {
  return (
    <div className="grid gap-8 lgl:grid-cols-2 lgl:gap-12">
      <div>
        <Reveal>
          <div className="mb-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-designColor">2020 - 2026</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Education Quality</h2>
          </div>
        </Reveal>
        <StaggerGroup className="space-y-6">
          {educationItems.map((item) => (
            <StaggerItem key={item.title}>
              <ResumeCard {...item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div>
        <Reveal delay={0.08}>
          <div className="mb-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-designColor">2024 - 2026</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Honors & Focus</h2>
          </div>
        </Reveal>
        <StaggerGroup className="space-y-6" delayChildren={0.08}>
          {focusItems.map((item) => (
            <StaggerItem key={item.title}>
              <ResumeCard {...item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
};

export default Education;
