import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <header className={cn("section-header", alignment, className)}>
      {eyebrow ? (
        <div className="section-eyebrow">
          <span className="numeric">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
      <div className="section-underline" aria-hidden="true" />
    </header>
  );
}
