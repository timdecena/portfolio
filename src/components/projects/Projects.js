import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Whiskerwatch"
          des="WhiskerWatch is a lost-and-found and pet adoption system that helps connect pets with owners and new families. Users can report lost pets, find adoptable animals, 
          and stay connected through an easy-to-use platform."
          src={projectOne}
        />
        <ProjectsCard
          title="Sugdone"
          des="SugDone is a reminder and to-do app that helps users organize tasks and stay on track. It lets you set reminders, 
          manage to-do lists, and boost daily productivity with ease."
          src={projectTwo}
        />
        <ProjectsCard
          title="Sinesugbowatch"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="Study Buddy"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
        />
        <ProjectsCard
          title="Vocabventure"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
        />

      </div>
    </section>
  );
}

export default Projects