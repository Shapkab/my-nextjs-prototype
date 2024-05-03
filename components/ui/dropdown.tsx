import cn from " /lib/utils";
import React from "react";

export interface itemsMenuProps {
  classname: string;
  children: React.ReactNode;
}

export function Dropdown({ classname, children }: itemsMenuProps) {
  return (
    <>
      <button
        data-ripple-light="true"
        data-popover-target="menu-1"
        data-popover-nested="true"
        className={cn(
          "flex select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
          classname,
        )}
      >
        Open description
      </button>
      <ul
        role="menu"
        data-popover="menu"
        data-popover-placement="bottom"
        className="border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 absolute z-10 min-w-[180px] overflow-auto rounded-md border bg-white p-3 font-sans text-sm font-normal shadow-lg focus:outline-none"
      >
        <li
          role="menuitem"
          className="hover:bg-blue-gray-50 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900 block w-full cursor-pointer select-none rounded-md px-3 pb-2 pt-[9px] text-start leading-tight transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80"
        >
          {children}
        </li>
      </ul>
    </>
  );
}
