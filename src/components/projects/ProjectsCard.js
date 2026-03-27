import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-designColor/30 hover:bg-white/[0.06]">
      <div className="overflow-hidden rounded-t-[28px]">
        <img
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          src={src}
          alt={title}
        />
      </div>
      <CardContent className="flex h-full flex-col gap-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge>{title}</Badge>
            <p className="text-sm leading-7 text-gray-300">{des}</p>
          </div>
          <div className="flex gap-2">
            {githubLink && (
              <Button asChild variant="outline" size="icon">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub link`}>
                  <BsGithub />
                </a>
              </Button>
            )}
            {liveLink && (
              <Button asChild variant="outline" size="icon">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} live link`}>
                  <FaGlobe />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
