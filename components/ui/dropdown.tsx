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
    <>
      <div className={cn("", classname)}>
        <button
          id="dropdownDefaultButton"
          type="button"
          data-target="dropdown-with-dropright"
          className={cn(
            "flex rounded-lg bg-gray-600 px-6 py-3 text-center text-white transition-all duration-500",
            classname,
          )}
          onClick={toggle}
        >
          Open description
        </button>
        <div
          className={cn(
            "text-blue-gray-500 gradient-pink-purple open absolute right-0 top-0 mt-2 w-64 translate-x-64 rounded-lg border bg-white p-3",
            transClass,
          )}
          aria-labelledby="dropdownDefaultButton"
        >
          <ul className="h-min py-2">
            {children.map((item) => {
              return (
                <li key="item" className="block py-2 pl-5">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-20"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
