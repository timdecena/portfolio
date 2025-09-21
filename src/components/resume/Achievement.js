import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Certifications */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AWS Cloud Foundations Certificate"
            subTitle="2025"
            result="Certified"
            des="Earned certification in AWS Cloud Foundations, covering cloud concepts, AWS core services, security, and architecture."
          />
          <ResumeCard
            title="AWS Cloud Architecting"
            subTitle="2025"
            result="Certified"
            des="Completed AWS Cloud Architecting course with focus on designing scalable and reliable systems on the AWS platform."
          />
          
          <ResumeCard
            title="AWS Community Day Philippines – Cebu Roadshow"
            subTitle="2023"
            result="Completed"
            des="Participated in the AWS Community Day Cebu Roadshow 2023, gaining insights into the latest AWS technologies and cloud solutions."
          />
          
          <ResumeCard
            title="CAT Officer"
            subTitle="2019"
            result="Leadership"
            des="Served as a Citizen Army Training (CAT) Officer, developing leadership, discipline, and teamwork skills."
          />
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Honors</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Science in Information Technology"
            subTitle="Cebu Institute of Technology – University (2022 – Present)"
            result="Scholar"
            des="Currently pursuing BSIT with relevant coursework in Spring Boot, Web Development, React, and system projects. Awarded Student Supreme Government Scholarship (2024 – Present)."
          />
          <ResumeCard
            title="Senior High School – STEM"
            subTitle="CIT University (2020 – 2022)"
            result="With Honors"
            des="Graduated Senior High School in the STEM strand with academic honors, building a strong foundation in science and technology."
          />
          <ResumeCard
            title="Junior High School"
            subTitle="CIT University (2016 – 2020)"
            result="With Honors"
            des="Completed Junior High School with honors, showcasing consistent academic performance and leadership."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
