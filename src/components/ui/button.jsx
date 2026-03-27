import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-designColor/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bodyColor disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-designColor text-white shadow-[0_18px_40px_rgba(184,138,90,0.20)] hover:-translate-y-0.5 hover:bg-[#c09363]",
        outline:
          "border border-white/12 bg-white/[0.03] text-lightText hover:border-designColor/50 hover:bg-white/[0.06]",
        ghost: "text-lightText hover:bg-white/[0.06] hover:text-white",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        icon: "h-11 w-11",
        lg: "h-12 px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
