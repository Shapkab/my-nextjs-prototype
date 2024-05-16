"use client";

import Navbar from " /components/navbar";
import Button from " /components/ui/button";
import Carousel from " /components/ui/carousel";
import Progressbar from " /components/ui/progressbar";
import { imgCarousel } from " /lib/data";
import { useCallback, useEffect, useState } from "react";

export default function Additional() {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState(`bg-secondary-fuchsia50`);
  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const updateProgress = useCallback(() => {
    setProgress(() => (counter * 10 > 100 ? 100 : counter * 10));
  }, [counter]);

  const handleClick = (func1: () => void, func2: () => void) => {
    return () => {
      func1();
      func2();
    };
  };

  const handleBgColorChange = useCallback(() => {
    const newBgColor =
      counter < 0 ? `bg-secondary-pink400` : `bg-secondary-teal50`;
    setBgColor(newBgColor);
  }, [counter]);

  useEffect(() => {
    updateProgress();
    handleBgColorChange();
  }, [counter, updateProgress, handleBgColorChange]);

  return (
    <div className={`relative ${bgColor}`}>
      <Navbar />
      <div className="m-14 flex max-h-screen flex-col items-center justify-center text-center">
        <Carousel data={imgCarousel} />
      </div>
      <div className="flex grid h-40 grid-cols-2 place-items-center gap-3">
        <Button
          className="relative animate-bounce bg-amber-100 text-black"
          onClick={handleClick(decreaseCounter, updateProgress)}
        >
          Boring
        </Button>
        <Button
          className="relative animate-bounce bg-amber-100 text-black"
          onClick={handleClick(increaseCounter, updateProgress)}
        >
          Not bad
        </Button>
      </div>
      <Progressbar progress={progress} />
    </div>
  );
}
