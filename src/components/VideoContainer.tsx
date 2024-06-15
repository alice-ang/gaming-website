import React from "react";
import Image from "next/image";

export const VideoContainer = () => {
  return (
    <div className="bg-palette-backgroundLight w-full aspect-video h-full max-w-7xl relative -traslate-y-24 mx-auto">
      <iframe
        src="https://www.youtube.com/embed/oD3pxbG9YYI?si=F8xI4etqxs2EG9hY&amp;controls=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute h-full w-full"
      ></iframe>
      <Image
        src={"/woman.png"}
        alt="woman"
        width={220}
        height={360}
        className="-left-32 -bottom-10 absolute hidden lg:block"
      />
      <Image
        src={"/man.png"}
        alt="man"
        width={220}
        height={170}
        className="-right-32 -bottom-10 absolute hidden lg:block"
      />
    </div>
  );
};
