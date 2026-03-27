import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const alignMap = {
  left: "items-start text-left",
  center: "items-center text-center",
};

const Title = ({ title, des, align = "left" }) => {
  return (
    <div className={cn("mb-14 flex flex-col gap-5 font-titleFont", alignMap[align])}>
      <Badge variant="default">{title}</Badge>
      <h1 className="max-w-3xl text-4xl font-extrabold capitalize leading-tight text-white md:text-5xl">
        {des}
      </h1>
    </div>
  );
};

export default Title;
