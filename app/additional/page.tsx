"use client";

import Navbar from " /components/navbar";
import Button from " /components/ui/button";
import Carousel from " /components/ui/carousel";
import { imgCarousel } from " /lib/data";
import {useState} from "react";

export default function Additional() {
    const [counter, setCounter] = useState(0);

  return (
    <div className="relative">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <Carousel data={imgCarousel} />
      </div>
        <div className="h-40 flex grid grid-cols-2 place-items-center gap-3">
            <Button className="relative animate-bounce" onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                Not bad
            </Button>
            <Button className="relative animate-bounce" onClick={() => setCounter(prevCounter => prevCounter - 1)}>
                Boring
            </Button>
        </div>
        <p>Result {counter}</p>

    </div>
  );
}
