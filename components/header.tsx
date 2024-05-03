"use client";

import HTag from " /components/ui/hTag";

export default function Header() {
  return (
    <header className="flex min-h-52 min-w-full items-center justify-center bg-amber-50">
      <div className="mx-auto w-full max-w-lg rounded-lg bg-amber-50 px-10 py-8 shadow-xl">
        <div className="mx-auto max-w-md space-y-6">
          <HTag
            tag="h1"
            classname="my-8 flex flex-row flex-nowrap items-center"
          >
            <span
              className="block flex-grow border-t border-black"
              aria-hidden={true}
              role={"presentation"}
            ></span>
            <span className="mx-4 block flex-none bg-black px-4 py-2.5 text-xs font-medium uppercase leading-none text-amber-200">
              My Portfolio
            </span>
            <span
              className="block flex-grow border-t border-black"
              aria-hidden={true}
              role={"presentation"}
            ></span>
          </HTag>
        </div>
      </div>
    </header>
  );
}
