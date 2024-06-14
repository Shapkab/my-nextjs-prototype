"use client";

import { contactRef } from " /lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-fuchsia50 bottom-0 block">
      <ul className="mt-3 flex-wrap text-center">
        <li>
          <Link
            className="select-none rounded-lg px-4 py-2 align-middle font-sans text-xs font-bold uppercase text-amber-500 opacity-80 transition-all hover:bg-pink-500/10 active:bg-pink-500/30"
            href={contactRef.github}
          >
            Link to my GitHub
          </Link>
        </li>
      </ul>
      <p className="gap-2 rounded-lg px-4 py-2 text-center text-amber-500 opacity-80">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
