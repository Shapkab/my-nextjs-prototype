"use client";

import React from "react";
import cn from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={cn("btn-teal", className)}>{children}</button>;
}
