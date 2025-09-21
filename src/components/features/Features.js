import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Development"
          des="I build complete web apps, front-end to back-end. 
          Everything works seamlessly for users."
         
        />
        <Card
          title="App Development"
          des="I create apps that are easy to use and solve real problems.
           I handle the project from start to finish."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Hosting Websites "
          des="I get websites online and keep them fast and secure. 
          You focus on your work, I handle the tech."
          icon={<SiProgress />}
        />
        <Card
          title="Performance Optimization"
          des="I speed up websites and apps for smooth use. 
          Users enjoy faster, efficient performance."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="I design websites and apps that are clear and user-friendly. 
          Every detail improves the experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="ESL Teacher"
          des="I teach English in a practical, easy way. 
          Lessons are tailored and interactive."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features