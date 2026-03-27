import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaServer, FaCodeBranch } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import Card from "./Card";

const featureItems = [
  {
    title: "Full Stack Development",
    des: "I build complete web applications from modern React interfaces to robust backend services and databases.",
  },
  {
    title: "REST API Development",
    des: "I develop RESTful APIs for business systems using Java, Spring Boot, TypeScript, and clean architectural patterns.",
    icon: <AiFillAppstore />,
  },
  {
    title: "Cloud Deployment",
    des: "I work with AWS services, EC2, NGINX, and deployment workflows to keep applications reliable and production ready.",
    icon: <SiProgress />,
  },
  {
    title: "Backend Systems",
    des: "I build backend features with microservices, layered architecture, testing, and API-driven development.",
    icon: <FaServer />,
  },
  {
    title: "Frontend Development",
    des: "I create responsive user interfaces with React, TypeScript, Tailwind CSS, Bootstrap, and modern component libraries.",
    icon: <FaMobile />,
  },
  {
    title: "Version Control with Git",
    des: "I use Git and GitHub to manage code changes, collaborate cleanly, track progress, and keep projects organized.",
    icon: <FaCodeBranch />,
  },
];

const Features = () => {
  return (
    <section id="features" className="section-shell">
      <SectionHeading title="Features" des="What I Do" />
      <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.12}>
        {featureItems.map((item) => (
          <StaggerItem key={item.title}>
            <Card {...item} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
};

export default Features;
