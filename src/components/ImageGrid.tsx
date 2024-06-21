"use client";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";
import { ImageGridStoryblok } from "../../component-types-sb";

export const ImageGrid: FC<{ blok: ImageGridStoryblok }> = ({ blok }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]);

  return (
    <div
      className="relative section-padding"
      ref={ref}
      {...storyblokEditable(blok)}
    >
      {blok.character?.filename && (
        <motion.img
          style={{
            y: saluteY,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          src={blok.character.filename}
          width={340}
          height={290}
          alt={blok.character.alt ?? "character"}
          className="hidden lg:block object-contain bg-center object-center top-0 absolute right-0 rotate-6 "
        />
      )}

      <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  ">
        {blok.images.map((image, index) => (
          <div
            className="relative h-full w-full aspect-video col-span-1 bg-black overflow-hidden"
            key={index}
          >
            <Image
              src={image.filename}
              fill
              alt={image.alt ?? "game image"}
              className="aspect-video object-cover hover:grayscale-0 hover:scale-105 grayscale transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
