import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { contactImg } from "../../assets/index";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import Reveal from "../motion/Reveal";
import SocialIconButton from "../common/SocialIconButton";

const ContactLeft = () => {
  return (
    <Reveal className="w-full lgl:w-[35%]">
      <Card className="overflow-hidden">
        <img
          className="h-64 w-full object-cover object-center"
          src={contactImg}
          alt="Anthony Decena contact profile"
        />
        <CardContent className="space-y-8 p-6">
          <div className="space-y-4">
            <Badge variant="muted">Available for freelance and full-time roles</Badge>
            <div>
              <h3 className="text-3xl font-bold text-white">Anthony Decena</h3>
              <p className="mt-2 text-lg text-gray-400">Software Developer</p>
            </div>
            <p className="text-base leading-7 text-gray-300">
              Full Stack Developer with internship experience at Alliance
              Software Inc. and freelance experience building backend-focused
              business systems. I work with Java, Spring Boot, React,
              TypeScript, REST APIs, cloud tools, and modern development
              workflows to deliver reliable software.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-designColor">
                <Phone className="h-4 w-4" />
              </span>
              <span>+63 919-361-9431</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-designColor">
                <Mail className="h-4 w-4" />
              </span>
              <span>anthonycdecena@gmail.com</span>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Find me in
            </h2>
            <div className="flex gap-4">
              <SocialIconButton
                href="https://www.facebook.com/anthony.decena.39"
                label="Facebook profile"
                icon={<FaFacebookF />}
              />
              <SocialIconButton
                href="https://x.com/TimDecena"
                label="X profile"
                icon={<FaTwitter />}
              />
              <SocialIconButton
                href="https://www.linkedin.com/in/anthony-decena/"
                label="LinkedIn profile"
                icon={<FaLinkedinIn />}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
};

export default ContactLeft;
