"use client";

import Header from " /components/header";
import Button from " /components/ui/button";
import HTag from " /components/ui/hTag";
import Link from "next/link";
import "../styles/globals.css";

export default function Page() {
  return (
    <>
      <Header />
      <HTag tag="h2" className="slidein animate-slidein m-5">
        Hi! I`m Iryna.
      </HTag>
      <div
        className={`typewriter m-5 line-clamp-1 animate-[blink_2s_steps(10)_forwards] animate-[typewriter_2s_steps(var(--animation-steps-250),end)_forwards]`}
      >
        I`m looking for an engineering team to work with a developing project
        that to provide me interesting work that I can learn from and contribute
        to. I want to improve my technical skills. And be a part of healthy
        development team.
      </div>
      <HTag tag="h3" className="m-2 animate-bounce text-center">
        On the next page you can see all my engineering`s positions.
      </HTag>
      <Button className="bg-gradient-pink-purple m-auto mt-3 block animate-pulse text-gray-800 hover:to-amber-400">
        <Link href="/about">Let`s go</Link>
      </Button>
    </>
  );
}
