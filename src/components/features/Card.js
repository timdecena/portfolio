import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Card as UICard, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const Card = ({ title, des, icon }) => {
  return (
    <UICard className="group h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-designColor/30 hover:bg-white/[0.06]">
      <CardContent className="flex h-full flex-col gap-8 px-6 py-7">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl text-designColor transition duration-500 group-hover:scale-105 group-hover:border-designColor/30"
            )}
          >
            {icon ? (
              icon
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="h-[2px] w-7 rounded-full bg-designColor" />
                <span className="h-[2px] w-7 rounded-full bg-designColor" />
                <span className="h-[2px] w-7 rounded-full bg-designColor" />
              </div>
            )}
          </div>
          <Badge variant="muted">Service</Badge>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-sm leading-7 text-gray-300">{des}</p>
        </div>
        <div className="mt-auto">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-designColor transition duration-300 group-hover:border-designColor/40 group-hover:translate-x-1">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </CardContent>
    </UICard>
  );
};

export default Card;
