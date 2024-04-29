"use client";

import React from "react";
import cn from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex h-10 w-40 items-center rounded-lg bg-teal-200 px-4 text-sm font-medium text-white transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-teal-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
