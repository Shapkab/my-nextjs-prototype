"use client";

import cn from " /lib/utils";
import React from "react";

export interface HTagProps {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className: string;
}

export default function HTag({ tag, className, children }: HTagProps) {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn("block text-2xl font-semibold", className)}>
          {children}
        </h1>
      );
    case "h2":
      return <h2 className={cn("block", className)}>{children}</h2>;
    case "h3":
      return <h3 className={cn("block", className)}>{children}</h3>;
    default:
      return <></>;
  }
}
