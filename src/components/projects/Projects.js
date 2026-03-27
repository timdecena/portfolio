import React from "react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const projectItems = [
  {
    title: "Vocabventure",
    des: "A gamified learning app for Grade 7 students focused on spelling and vocabulary through interactive challenges. Tech stack: React, TypeScript, Tailwind CSS.",
    src: projectFour,
    githubLink: "https://github.com/timdecena/Vocabventure",
    liveLink: "https://vocabia.duckdns.org/",
  },
  {
    title: "Whiskerwatch",
    des: "A lost-and-found and pet adoption platform that connects pets with owners and adopters. Tech stack: React, TypeScript, Spring Boot, MySQL.",
    src: projectOne,
  },
  {
    title: "Sugdone",
    des: "A task and reminder app that helps users manage to-do lists and stay organized. Tech stack: React, TypeScript, Zustand, Tailwind CSS.",
    src: projectTwo,
  },
  {
    title: "Sinesugbowatch",
    des: "A streaming platform inspired by Netflix with a modern and user-friendly interface. Tech stack: React, TypeScript, Tailwind CSS.",
    src: projectThree,
  },
  {
    title: "Study Buddy",
    des: "A Django-based platform that connects students with nearby tutors for booking sessions. Tech stack: Django, Python, SQLite.",
    src: projectFive,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        title="Visit My Portfolio And Keep Your Feedback"
        des="My Projects"
        align="center"
      />
      <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.12}>
        {projectItems.map((item) => (
          <StaggerItem key={item.title}>
            <ProjectsCard {...item} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
};

export default Projects;
