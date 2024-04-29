"use client";

import { links } from " /lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="rounded border border-gray-200 bg-fuchsia-100 px-2 py-2.5 shadow dark:border-gray-700 sm:px-4">
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
                  ? "text-fuchsia-600 underline"
                  : "text-black"
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
