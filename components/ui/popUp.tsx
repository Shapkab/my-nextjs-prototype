"use client";

import Button from " /components/ui/button";
import cn from " /lib/utils";
import React from "react";

interface PopupProps {
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  classname?: string;
}

export default function PopUp({
  popup,
  setPopup,
  children,
  classname,
}: PopupProps) {
  if (!popup) return null;

  const toggle = () => {
    setPopup((old) => !old);
  };
  const transClass = popup ? "flex" : "hidden";

  return (
    <div className="translate-y-1/5 relative inset-0 left-5 flex h-fit w-fit flex-col items-center justify-center py-2">
      <ul className={cn("rounded-lg p-3", transClass, classname)}>
        {React.Children.map(children, (item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center p-3 text-center"
            >
              {item}
            </li>
          );
        })}
      </ul>
      {popup ? (
        <Button
          className="bg-yellow-300 text-center opacity-80 transition duration-500 hover:scale-110 focus:ring focus:ring-purple-300"
          onClick={toggle}
        >
          Close
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}
