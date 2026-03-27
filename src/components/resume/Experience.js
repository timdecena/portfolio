import React from "react";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import ResumeCard from "./ResumeCard";

const items = [
  {
    title: "Software Developer Intern",
    subTitle: "Alliance Software Inc. (January 2026 - April 2026)",
    result: "Internship",
    des: "Worked as a full stack developer intern on a Tenant Management System using Java, Spring Boot, React, and TypeScript within a microservices architecture, using Kanban workflows and building REST APIs.",
  },
  {
    title: "Freelance Software Developer",
    subTitle: "Lodong South Korean Development Team (June 2025 - August 2025)",
    result: "Freelance",
    des: "Built a full stack Project Management System using Spring Boot and TypeScript, focusing on backend development, unit testing, and reliable API endpoints.",
  },
  {
    title: "Part time ESL Tutor",
    subTitle: "Acadsoc (April 2025 - April 2026)",
    result: "Part Time",
    des: "Delivered engaging English lessons online, focusing on pronunciation and grammar.",
  },
  {
    title: "Service Crew",
    subTitle: "Mc Donald's Paseo Arcenas (January 2022 - August 2022)",
    result: "Part Time",
    des: "Delivered exceptional customer service in a high-volume environment, resolving inquiries and supporting day-to-day operations.",
  },
];

const Experience = () => {
  return (
    <div>
      <Reveal>
        <div className="mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-designColor">2022 - 2026</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Job Experience</h2>
        </div>
      </Reveal>
      <StaggerGroup className="space-y-6">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <ResumeCard {...item} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
};

export default Experience;
