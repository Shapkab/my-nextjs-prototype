"use client";

import Header from " /components/header";
import Button from " /components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <nav className="rounded border border-gray-200 bg-fuchsia-100 px-2 py-2.5 shadow dark:border-gray-700 sm:px-4">
        <ul
          className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
          id="nav"
        >
          <li className="mt-10 flex space-x-2 text-fuchsia-600">
            <Link href="/about">Let`s go</Link>
          </li>
        </ul>
      </nav>
      <Button className="mt-4">Start!</Button>
    </>
  );
}
