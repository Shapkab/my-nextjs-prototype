"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="block bottom-0">
        <div className="flex-justify-center text-center text-amber-500">
      <ul className="mt-3 flex-wrap items-center text-sm font-medium text-orange-200 dark:text-gray-400">
        <li>
          <Link
            className="select-none items-center gap-2 rounded-lg px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-orange-300 opacity-80 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            href="https://github.com/Shapkab/nextjs-dashboard"
          >
            Link to my GitHub
          </Link>
        </li>
      </ul>
      <p className="gap-2 rounded-lg px-4 py-2 text-center text-amber-500 opacity-80">
        © {new Date().getFullYear()} MIT Licensed
      </p>
        </div>
    </footer>
  );
}
