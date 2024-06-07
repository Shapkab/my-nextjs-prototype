"use client";

import Button from " /components/ui/button";

interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function ModalVideo({
  isOpen,
  onClose,
  videoId,
}: ModalVideoProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative h-fit max-w-3xl rounded-lg bg-white p-4 shadow-lg">
        <div className="flex justify-center pb-3">
          <Button onClick={onClose} className="bg-red-500 text-white">
            Close
          </Button>
        </div>
        <div className="aspect-h-24 aspect-w-16 flex justify-center">
          <iframe
            className="h-[315px] w-[560px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
