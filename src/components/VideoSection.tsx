import React, { FC } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { VideoSectionStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";

export const VideoSection: FC<{ blok: VideoSectionStoryblok }> = ({ blok }) => {
  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      <Constraints>
        <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center pb-8 overflow-hidden">
          <h1>{blok.title}</h1>
          <p>{blok.description}</p>
        </div>

        <div className="bg-palette-backgroundLight w-full aspect-video h-full max-w-7xl relative -traslate-y-24 mx-auto ">
          {/* <video
            src={
              blok.video?.filename ??
              "https://www.youtube.com/embed/oD3pxbG9YYI?si=F8xI4etqxs2EG9hY&amp;controls=0"
            }
            className="absolute h-full w-full aspect-video border border-white"
          ></video> */}
          <iframe
            src={blok.video_url?.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute h-full w-full shadow-mask"
          ></iframe>

          {blok?.left_image?.filename && (
            <Image
              src={blok.left_image.filename}
              alt={blok.left_image.alt ?? "left image"}
              width={220}
              height={360}
              className="-left-32 -bottom-10 absolute hidden lg:block"
            />
          )}

          {blok?.right_image?.filename && (
            <Image
              src={blok.right_image.filename}
              alt={blok.right_image.alt ?? "right image"}
              width={270}
              height={170}
              className="-right-32 -bottom-10 absolute hidden lg:block"
            />
          )}
        </div>
      </Constraints>
    </section>
  );
};
