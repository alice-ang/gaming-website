import React, { FC } from "react";
import { TrailerStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Trailer: FC<{ blok: TrailerStoryblok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Constraints>
        <div className="flex flex-col justify-between items-stretch h-full section-padding">
          <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center relative">
            <h1>{blok.title}</h1>
            <p>{blok.description}</p>
          </div>
          <div className=" grid grid-cols-12 gap-8 h-full items-center ">
            <div className="col-span-12 lg:col-span-4 hidden lg:block relative aspect-video">
              <Image
                src={blok.image.filename}
                alt={blok.image.alt ?? ""}
                fill
                className="object-contain bg-center scale-[1.3] lg:scale-[3.2]"
              />
            </div>
            <div className="col-span-12 lg:col-span-8 relative z-10 ">
              <iframe
                src={`${blok.url}&amp;controls=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video h-full w-full mask"
              ></iframe>
            </div>
          </div>
        </div>
      </Constraints>
    </section>
  );
};
