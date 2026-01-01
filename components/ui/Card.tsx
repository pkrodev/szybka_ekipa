import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  children,
  variant = "default",
  padding = "md",
  hover = false,
  className,
  ...props
}: CardProps) {
  const baseStyles = "rounded-xl overflow-hidden";

  const variants = {
    default: "bg-white",
    bordered: "bg-white border border-border",
    elevated: "bg-white shadow-lg",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <div
      className={cn(baseStyles, variants[variant], paddings[padding], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-2xl font-bold text-foreground", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-gray-600", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-border", className)} {...props}>
      {children}
    </div>
  );
}
