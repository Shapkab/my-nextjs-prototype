"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-amber-600">
      <ul className="lex mt-3 flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link
            className="select-none items-center gap-2 rounded-lg px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 opacity-80 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            href="https://github.com/Shapkab/nextjs-dashboard"
          >
            Link for my GitHub
          </Link>
        </li>
      </ul>
      <p className="gap-2 rounded-lg px-4 py-2 text-center text-pink-500 opacity-80">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
