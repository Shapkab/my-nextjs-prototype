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
    <div className="translate-y-1/5 relative inset-0 left-5 flex h-fit w-fit flex-col items-center justify-center backdrop-blur-sm">
      <ul
        className={cn(
          "rounded-lg border-e-emerald-600 p-3",
          transClass,
          classname,
        )}
      >
        {React.Children.map(children, (item, index) => {
          return (
            <li
              key={index}
              className="flex w-full items-center justify-center p-3 text-center text-xl"
            >
              {item}
            </li>
          );
        })}
      </ul>
      {popup ? (
        <Button
          className="m-auto bg-yellow-300 text-center opacity-80"
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
