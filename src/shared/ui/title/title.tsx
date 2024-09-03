import { cn } from "@/lib/utils";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Variant = "pm" | "sec";

interface Props {
  size?: TitleSize;
  variant?: Variant;
  text: string;
  className?: string;
}

export const Title: React.FC<Props> = ({
  size = "sm",
  text,
  className,
  variant = "pm",
}) => {
  const objectTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  };

  const objectClassNameBySize = {
    xs: "text-[16px] ys-text",
    sm: "text-[22px] ys-text",
    md: "text-[26px] ys-text",
    lg: "text-[32px] ys-display",
    xl: "text-[40px] ys-display",
    "2xl": "text-[48px] ys-display",
  };

  const objectVariant = {
    pm: "text-primary",
    sec: "text-secondary",
  };

  return React.createElement(
    objectTagBySize[size],
    {
      className: cn(
        objectClassNameBySize[size],
        objectVariant[variant],
        className
      ),
    },
    text
  );
};
