import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fullstack Developer"
            subTitle="Lodong South Korean Development Team (June - Aug 2025)"
            result="Freelance"
            des="Worked with a South Korean developer team led by CEO Yi Jun Yo, focusing on projects built with Spring Boot and TypeScript. Collaborated on full stack solutions and contributed to high-quality development practices."
          />
          <ResumeCard
            title="ESL Teacher"
            subTitle="Acadsoc (April - October 2025)"
            result="Part Time"
            des="Taught English as a Second Language to international students through Acadsoc. Focused on improving speaking, listening, reading, and writing skills with engaging and interactive lessons."
          />
          <ResumeCard
            title="Service Crew"
            subTitle="Mc Donalds (January - August 2022)"
            result="Part Time"
            des="Worked as a service crew member at McDonald's in Banawa Cebu, providing customer service, preparing orders, and maintaining a clean and efficient work environment."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
