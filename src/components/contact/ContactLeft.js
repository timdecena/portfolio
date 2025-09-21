import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Anthony Decena</h3>
        <p className="text-lg font-normal text-gray-400">
          Fullstack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I build modern web applications using Spring Boot, ASP.NET, React, and TypeScript. I handle both front-end and back-end development
           to create fast and reliable apps. My focus is on delivering seamless, user-friendly experiences for every project.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+63 9193619431</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">anthonycdecena@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
                    <a href="https://www.facebook.com/anthony.decena.39" target="blank">
                      <span className="bannerIcon">
                        <FaFacebookF />
                      </span>
                    </a>
                    <a href="https://x.com/TimDecena" target="blank">
                      <span className="bannerIcon">
                        <FaTwitter />
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/anthony-decena/" target="blank">
                      <span className="bannerIcon">
                        <FaLinkedinIn />
                      </span>
                    </a>
                  </div>
      </div>
    </div>
  );
}

export default ContactLeft