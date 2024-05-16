"use client";

import { links } from " /lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathName);

  return (
    <nav className="relative h-20 rounded border border-gray-100 px-2 py-2.5 bg-secondary-fuchsia50">
      <ul
        className="m-5 flex flex-col items-center text-lg md:flex-row md:space-x-8 md:font-medium"
        id="nav"
      >
        {links.map((item, index) => {
          const isActive = pathName === item.href;
          return (
            <li
              key={index}
              className={
                isActive
                  ? "text-emerald-700 underline hover:scale-125"
                  : "text-black hover:scale-125"
              }
              onMouseOver={() => setHoveredPath(item.href)}
              onMouseLeave={() => setHoveredPath(pathName)}
            >
              <Link href={item.href}>
                {item.name}{" "}
                {item.href === hoveredPath && (
                  <motion.div
                    className="bg-gradient-pink-purple absolute bottom-0 left-0 -z-10 h-full rounded-md"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.1,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
