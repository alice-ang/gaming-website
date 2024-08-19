import React, { FC } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { VideoSectionStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";

export const VideoSection: FC<{ blok: VideoSectionStoryblok }> = ({ blok }) => {
  return (
    <section className="section-padding relative" {...storyblokEditable(blok)}>
      {blok.left_image?.filename && (
        <div className="vingette-left aspect-video">
          <Image
            src={blok.left_image.filename}
            alt={"blog post image"}
            className=" opacity-65 z-10 bg-cover object-cover aspect-video"
            fill
          />
        </div>
      )}
      <Constraints>
        <div className="grid grid-cols-12 gap-6 xl:gap-24 items-center relative">
          <div className="col-span-12 lg:col-span-5 space-y-2 md:space-y-4">
            <h1>accept the invitation</h1>
            <p>
              Dare to accept the invitation from enigmatic millionaire Nicolas
              Craven and embark on a spine-chilling golf adventure at the Club
              House on Haunted Hill.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 ">
            <div className="bg-[url('/stone.png')] p-2 md:p-4 aspect-video shadow-xl bg-center bg-cover object-cover object-center">
              <div className="aspect-video relative border-2 border-black rounded">
                <iframe
                  src={blok.video_url?.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute w-full h-full shadow "
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Constraints>
    </section>
  );
};
