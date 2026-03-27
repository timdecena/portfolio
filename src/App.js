import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 text-lightText">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(184,138,90,0.12),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(120,101,82,0.10),transparent_24%)]" />
      <Navbar />
      <div className="mx-auto max-w-screen-xl">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
