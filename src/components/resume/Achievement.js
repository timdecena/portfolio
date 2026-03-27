import React from "react";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import ResumeCard from "./ResumeCard";

const achievementItems = [
  {
    title: "Alliance Job Ready: Employability Skills",
    subTitle: "2026",
    result: "Completed",
    des: "Focused on improving communication, teamwork, workplace readiness, and professional collaboration.",
  },
  {
    title: "AWS Cloud Foundations Certificate",
    subTitle: "2025",
    result: "Certified",
    des: "Covers the basics of cloud computing and core AWS services.",
  },
  {
    title: "AWS Cloud Architecting",
    subTitle: "2025",
    result: "Certified",
    des: "Focuses on designing scalable and reliable systems on AWS.",
  },
  {
    title: "AWS Community Day Philippines - Cebu Roadshow",
    subTitle: "2023",
    result: "Completed",
    des: "Provided insights into AWS and modern cloud technologies.",
  },
];

const projectHighlights = [
  {
    title: "Vocabventure",
    subTitle: "Personal and School Project",
    result: "React",
    des: "A gamified learning app for Grade 7 students focused on spelling and vocabulary using React, TypeScript, Tailwind CSS.",
  },
  {
    title: "WhiskerWatch",
    subTitle: "Personal and School Project",
    result: "Spring Boot",
    des: "A lost-and-found and pet adoption platform built with React, TypeScript, Spring Boot, and MySQL.",
  },
  {
    title: "SugDone and Study Buddy",
    subTitle: "Productivity and Education Projects",
    result: "Multi-stack",
    des: "Built SugDone with React, TypeScript, Zustand, and Tailwind CSS, and Study Buddy with Django, Python, and SQLite.",
  },
];

const Achievement = () => {
  return (
    <div className="grid gap-8 lgl:grid-cols-2 lgl:gap-12">
      <div>
        <Reveal>
          <div className="mb-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-designColor">2023 - 2026</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Certifications & Achievements</h2>
          </div>
        </Reveal>
        <StaggerGroup className="space-y-6">
          {achievementItems.map((item) => (
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
            <h2 className="text-3xl font-bold text-white md:text-4xl">Project Highlights</h2>
          </div>
        </Reveal>
        <StaggerGroup className="space-y-6" delayChildren={0.08}>
          {projectHighlights.map((item) => (
            <StaggerItem key={item.title}>
              <ResumeCard {...item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
};

export default Achievement;
