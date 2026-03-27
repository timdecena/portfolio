import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../motion/Reveal";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "education", label: "Education", component: Education },
  { key: "skills", label: "Professional Skills", component: Skills },
  { key: "experience", label: "Experience", component: Experience },
  { key: "achievements", label: "Achievements", component: Achievement },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  const ActiveComponent =
    tabs.find((tab) => tab.key === activeTab)?.component ?? Education;

  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        title="Expected Graduation: May 2026"
        des="My Resume"
        align="center"
      />
      <Reveal>
        <div className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "resumeLi",
                activeTab === tab.key &&
                "border-designColor/40 bg-designColor/10 text-white shadow-[0_18px_44px_rgba(255,1,79,0.16)]"
                
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>
      <ActiveComponent key={activeTab} />
    </section>
  );
};

export default Resume;
