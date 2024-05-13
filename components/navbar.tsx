"use client";

import { links } from " /lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="relative h-20 rounded border border-gray-100 bg-amber-100 px-2 py-2.5 blur-[0.5px]">
      <ul
        className="my-4 flex flex-col items-center text-lg md:flex-row md:space-x-8 md:font-medium"
        id="nav"
      >
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className={
                pathName === link.href
                  ? "text-emerald-700 underline hover:scale-125"
                  : "text-black hover:scale-125"
              }
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
