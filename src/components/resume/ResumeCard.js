import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="group flex gap-5">
      <div className="relative mt-8 hidden w-6 flex-col items-center sm:flex">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
        <span className="relative z-10 mt-2 inline-flex h-4 w-4 rounded-full border border-designColor/40 bg-designColor shadow-[0_0_0_6px_rgba(184,138,90,0.12)]" />
      </div>
      <Card className="w-full transition-all duration-300 hover:border-designColor/30 hover:bg-white/[0.06]">
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-col gap-4 lgl:flex-row lgl:items-center lgl:justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
              <p className="text-sm leading-6 text-gray-400">{subTitle}</p>
            </div>
            <Badge className="w-fit" variant="muted">
              {result}
            </Badge>
          </div>
          <p className="text-sm leading-7 text-gray-300 md:text-base">{des}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeCard;
