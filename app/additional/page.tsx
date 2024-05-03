"use client";

import Navbar from " /components/navbar";
import Button from " /components/ui/button";

export default function Additional() {
  return (
    <div>
      <Navbar />
      <Button className="fixed bottom-1/4 left-1/4 animate-bounce">
        Not bad
      </Button>
      <Button className="fixed bottom-1/4 left-2/3 animate-bounce">
        Boring
      </Button>
    </div>
  );
}
