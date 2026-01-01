import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

export default function Container({
  children,
  size = "xl",
  padding = true,
  className,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  const paddingStyles = padding ? "px-4 sm:px-6 lg:px-8" : "";

  return (
    <div
      className={cn("mx-auto w-full", sizes[size], paddingStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
