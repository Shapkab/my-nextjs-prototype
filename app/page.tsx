"use client";

import Header from " /components/header";
import Button from " /components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <Button className="m-auto mt-10 block animate-pulse bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 hover:to-amber-400">
        <Link href="/about">Let`s go</Link>
      </Button>
    </>
  );
}
