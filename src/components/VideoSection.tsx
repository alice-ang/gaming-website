import React, { FC } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { VideoSectionStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";

export const VideoSection: FC<{ blok: VideoSectionStoryblok }> = ({ blok }) => {
  return (
    <section className="section-padding relative" {...storyblokEditable(blok)}>
      {blok.left_image?.filename && (
        <div className="vingette aspect-video">
          <Image
            src={blok.left_image.filename}
            alt={"blog post image"}
            className=" opacity-65 z-10 bg-cover object-cover aspect-video"
            fill
          />
        </div>
      )}
      <Constraints>
        <div className="grid grid-cols-12 gap-6  items-center relative">
          <div className="col-span-12 lg:col-span-5 space-y-4 ">
            <h1>accept the invitation</h1>
            <p>
              Dare to accept the invitation from enigmatic millionaire Nicolas
              Craven and embark on a spine-chilling golf adventure at the Club
              House on Haunted Hill.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-[url('/paper.jpg')] p-3 max-w-3xl mx-auto shadow-xl frame-mask ">
              <div className="aspect-video frame-mask relative">
                <iframe
                  src={blok.video_url?.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute w-full h-full shadow"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Constraints>
    </section>
  );
};
