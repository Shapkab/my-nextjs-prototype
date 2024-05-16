"use client";

import React from "react";

interface ProgressProps extends React.ProgressHTMLAttributes<number> {
  progress: number;
}

export default function Progressbar({ progress }: ProgressProps) {
  return (
    <div className="relative left-1/4 m-5 h-10 w-1/2 rounded-full bg-gray-200">
      <div
        className="bg-gradient-pink-purple h-full animate-pulse rounded-full"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-teal-500">
          {progress}
        </span>
      </div>
    </div>
  );
}
