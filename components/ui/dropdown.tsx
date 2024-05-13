"use client";

import cn from " /lib/utils";
import React, { useState } from "react";

export interface ItemsMenuProps {
  classname: string;
  children: React.ReactNode[];
}

export function Dropdown({ classname, children }: ItemsMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <div className="relative place-self-end">
      <button
        id="dropdownDefaultButton"
        type="button"
        data-target="dropdown-with-dropright"
        aria-expanded={isOpen}
        className="flex rounded-lg bg-gray-600 p-5 text-center text-white transition-all duration-500"
        onClick={toggle}
      >
        Open description
      </button>
      <ul
        className={cn(
          "absolute top-0 grid translate-x-52 grid-cols-8 divide-x rounded-lg border p-3",
          transClass,
          classname,
        )}
        aria-labelledby="dropdownDefaultButton"
      >
        {children.map((item, index) => {
          return (
            <li key={index} className="p-2 text-xs ">
              {item}
            </li>
          );
        })}
        {isOpen ? (
          <div className="absolute right-0 top-0" onClick={toggle}></div>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
