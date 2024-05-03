"use client";

import { links } from " /lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="rounded border border-gray-100 bg-amber-100 px-2 py-2.5 shadow sm:px-4">
      <ul
        className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
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
