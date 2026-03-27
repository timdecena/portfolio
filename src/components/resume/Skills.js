import React from "react";
import { motion } from "motion/react";
import Reveal from "../motion/Reveal";

const coreSkills = [
  { label: "Java", value: 90 },
  { label: "C#", value: 80 },
  { label: "Python", value: 75 },
  { label: "SQL", value: 85 },
];

const toolSkills = [
  { label: "Spring Boot", value: 90 },
  { label: "ReactJS", value: 80 },
  { label: "TypeScript", value: 80 },
  { label: "REST APIs", value: 85 },
  { label: "AWS", value: 85 },
  { label: "Docker", value: 70 },
];

function SkillBar({ label, value, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.22em] text-gray-300">
          <span>{label}</span>
          <span className="text-designColor">{value}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-designColor via-[#9e7650] to-[#6d5845]"
            initial={{ width: 0, opacity: 0.4 }}
            whileInView={{ width: `${value}%`, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
          />
        </div>
      </div>
    </Reveal>
  );
}

const Skills = () => {
  return (
    <div className="grid gap-8 lgl:grid-cols-2 lgl:gap-12">
      <div className="panel-surface p-6">
        <Reveal>
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-designColor">Core Skills</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Development Skill</h2>
          </div>
        </Reveal>
        <div className="space-y-7">
          {coreSkills.map((item, index) => (
            <SkillBar key={item.label} {...item} delay={index * 0.08} />
          ))}
        </div>
      </div>

      <div className="panel-surface p-6">
        <Reveal delay={0.08}>
          <div className="mb-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-designColor">Frameworks</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Tools & Frameworks</h2>
          </div>
        </Reveal>
        <div className="space-y-7">
          {toolSkills.map((item, index) => (
            <SkillBar key={item.label} {...item} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
