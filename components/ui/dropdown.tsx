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
          className={cn(
            "flex rounded-lg bg-gray-600 px-6 py-3 text-center text-white",
            classname,
          )}
          onClick={toggle}
        >
          Open description
        </button>
        {children.map((item) => {
          return (
            <ul
              key="item"
              className={cn(
                "text-blue-gray-500 gradient-pink-purple duration-600 translate-x-full rounded-lg border bg-white p-3 ease-in-out",
                transClass,
              )}
            >
              <li className="">{item}</li>
            </ul>
          );
        })}
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
