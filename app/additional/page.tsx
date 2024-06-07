"use client";

import Navbar from " /components/navbar";
import Button from " /components/ui/button";
import Carousel from " /components/ui/carousel";
import MapNavigation from " /components/ui/mapNavigation";
import ModalVideo from " /components/ui/modalVideo";
import PopUp from " /components/ui/popUp";
import Progressbar from " /components/ui/progressbar";
import { contactRef, embedMedia, imgCarousel } from " /lib/data";
import { useCallback, useEffect, useState } from "react";

export default function Additional() {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState(`bg-secondary-fuchsia50`);
  const [openPopup, setOpenPopup] = useState(false);
  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
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
      counter < 0 ? `bg-secondary-fuchsia300` : `bg-secondary-teal50`;
    setBgColor(newBgColor);
  }, [counter]);

  const handleRemovePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    updateProgress();
    handleBgColorChange();
  }, [counter, updateProgress, handleBgColorChange]);

  const contactElements = Object.entries(contactRef).map(([key, value]) => (
    <div key={key}>
      <strong>{key}:</strong> {value}
    </div>
  ));

  return (
    <div className={`relative ${bgColor}`}>
      <Navbar />
      <div className="animate-blob absolute -left-4 top-10 h-72 w-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob absolute -right-20 top-20 h-72 w-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob absolute -bottom-10 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <section id="contacts">
        <Button
          className="bg-gradient-pink-purple top-30 relative left-5"
          onClick={() => {
            setOpenPopup((old) => !old);
          }}
        >
          My contacts
        </Button>
        <PopUp
          popup={openPopup}
          setPopup={handleRemovePopup}
          classname="outline text-blue-gray-500 bg-gradient-pink-purple"
        >
          {contactElements}
        </PopUp>
      </section>
      <section id="media-attachments">
        <div className="m-5 grid grid-cols-2 gap-3">
          <div className="ml-10 flex h-full w-2/3 flex-col items-center justify-center border-y-8 bg-teal-100 p-6 text-center">
            <Carousel data={imgCarousel} />
          </div>
          <div className="mr-10 border-y-8 bg-teal-100 p-6">
            {" "}
            Map
            <MapNavigation address="Ciudad de México" />
          </div>
          <div className="ml-10 h-96 border-y-8 bg-teal-100 p-6">
            <Button
              className="bg-gradient-pink-purple m-5"
              onClick={() => setIsModalVideoOpen(true)}
            >
              Open youtube video
            </Button>
            <ModalVideo
              isOpen={isModalVideoOpen}
              onClose={() => setIsModalVideoOpen(false)}
              videoId={embedMedia.youtubeId}
            />
          </div>
        </div>
      </section>
      <section id="estimate">
        <div className="bg-amber grid h-10 grid-cols-2 place-items-center gap-3 p-5">
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
      </section>
    </div>
  );
}
