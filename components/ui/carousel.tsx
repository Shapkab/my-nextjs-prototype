"use client";

import Button from " /components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Carousel({
  data,
}: {
  data: {
    image: string;
  }[];
}) {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const elem = carouselRef.current as unknown as HTMLDivElement;
    const { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div>
      <div className="relative h-72 w-full overflow-hidden rounded-md">
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentImg * carouselSize.width}px)`,
          }}
          className="absolute h-full w-full whitespace-nowrap transition-all duration-300"
        >
          {data.map((v, i) => (
            <div
              key={i}
              className="relative inline-block h-full w-full shrink-0 rounded"
            >
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                src={v.image}
                fill
                sizes={"(max-width: 768px) 100vw, 50vw"}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <Button
          className={`bg border px-4 py-2 font-bold ${currentImg === 0 ? "opacity-50" : ""}`}
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => Math.max(0, prev - 1))}
        >
          {`<`}
        </Button>
        <Button
          className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 ? "opacity-50" : ""}`}
          disabled={currentImg === data.length - 1}
          onClick={() =>
            setCurrentImg((prev) => Math.min(data.length - 1, prev + 1))
          }
        >
          {">"}
        </Button>
      </div>
    </div>
  );
}
