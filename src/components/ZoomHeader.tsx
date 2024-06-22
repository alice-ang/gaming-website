"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";
import { ZoomHeroStoryblok } from "../../component-types-sb";

export const ZoomHeader: FC<{ blok: ZoomHeroStoryblok }> = ({ blok }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const bushScale = useTransform(scrollYProgress, [0, 1], [1.6, 3.6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);

  return (
    <div
      ref={container}
      className="h-[300vh] relative"
      {...storyblokEditable(blok)}
    >
      <motion.div
        style={{
          opacity,
        }}
        className=" overflow-hidden top-0 h-screen sticky "
      >
        {blok.background_image && (
          <motion.div
            className="aspect-video h-full w-full absolute"
            style={{ scale }}
          >
            <Image
              src={blok.background_image.filename}
              alt={blok.background_image.alt ?? "background image"}
              fill
              placeholder="blur"
              blurDataURL={blok.background_image.filename}
              className="aspect-video bg-cover object-center object-cover "
            />
          </motion.div>
        )}
        {blok.fog_layer && (
          <div className=" h-full w-full absolute">
            <video
              src={blok.fog_layer.filename}
              autoPlay
              loop
              muted
              className="mix-blend-screen saturate-0 h-full w-full object-cover aspect-video object-bottom top-0"
            ></video>
            {/* <svg
              width="102%"
              viewBox="0 0 1862 448"
              className="translate-y-2 blur-sm bottom-0 absolute"
            >
              <path
                fill="black"
                d="m35.788 392.41.31-.5-5.284-6.64-14.211-72.46L0 322.12v-41.19l7.638-4.29L0 240.24V144l4.309 15.35 12.533-21.43-1.884-12.57L0 78.54V9.3l44.236 115.42 74.516 21.88-1.567 5.37-48.766-5.43-2.14 3.13 2.532 5.26 2.296 14.88 31.522 73.4 26.128-9.77 3.204.28 19.494-7.32 104.84-48.55.849 2.23-61.181 31.91 1.604 2.82 21.066-4.09 2.967-3.56 12.45-.62 7.343-3.51 3.138-.35.474 6.77 16.215-.52 13.305-1.73-160.435 65.63 12.007 27.59-3.814 9.51 6.651-2.36 14.169 33.32-2.24 7.92 1.452 2.06-6.537 18.81 13.614-13.54 15.901 36.3 22.551-3.11 19.226-24.35 26.741-12.13 41.531-34.17h60.242l33.512 22.35 12.233 14.53 34.119 7.22 15.583 33.46 18.246 18.12 24.357 1.43 29.566 4.55 20.788-8.24 34.269 8.51 37.405 2.94 56.943-31.39 67.309 5.42 64.15-.11 58.712-24.7 45.685 7.17 42.092-16.25 37.9-23.99 41.75-5.32 31.98-10.43 79.62-60.35-38.2 78.02 58.95 7.63 16.17 27.63 61.9 18.61 105.31 8.08 55.08-29.49 43.39 3.86 68.4-4.13 12.42-35.5 31.83 1.28 22.87 30.68 41.65 10.13 41.28 6.77 2.22-.02 25.92-44.91 7.21-12.18-2.04-4.6-82.02-80.45-10.42-9.63-18.92-12.92 14.02 6.59-27.58-34.56 20.92 13.62-52.31-53.9-2.6-5.97 2.71-5.33 58.04 57.6 4.03.8 4.65-3.25-12.86-22.35 31.51 23.48 2.22-9.48 3.94.94-1.02 6.06 4.32 14.24 7.52 5.67 3.18 8.65 73.71 65.72 39.81-68.45 21.84-2.92 16.68-9.65-8.35-9.92 9.31-4.93-8.26-5.12-2.31-20.65L1860.593 0v238.17l-68.11 124.88 1.84-.22 31.6-51.14 35.18-5.85v141.67H0v-70.9l35.788 15.8Zm103.528 20.15 1.724-.58 2.034-2.24-1.552-2.48-15.983-5.72-52.894-111.93-32.986 13.71 5.243 18.81.903-14.52 1.543 2.77.33 17.65.637 5.4-.563 5.65 5.03 15.45 2.834-18.25 2.257 44.35 6.811 22.92 12.315 7.84 30.815 4.79 31.502-3.62Zm-123.27-242.9-7.529 9.09 21.277 84.53 6.734-4.34-5.181 8.11.346 3.07 5.218-2.82 7.96-11.94 1.87 1.85-5.264 9.12 16.161-6.37.999-2.4-38.989-82.66.439-2.56-4.041-2.68Z"
              ></path>
            </svg> */}
          </div>
        )}

        <div className="flex flex-col justify-center items-center h-full relative">
          <div className="text-center flex justify-center items-end text-white space-x-4">
            <h2 className="text-2xl md:text-4xl font-semibold uppercase font-baskerville">
              Gibbet games
            </h2>
            <h4 className="text-lg font-baskerville">presents</h4>
          </div>

          <Image
            src={"/text.png"}
            alt="logo"
            width={800}
            height={400}
            placeholder="blur"
            blurDataURL="/text.png"
            className="object-fit"
          />
        </div>

        <motion.div
          style={{ scale: bushScale }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className="relative w-screen h-screen">
            <Image
              src={blok.foreground_image.filename}
              fill
              alt={blok.foreground_image.alt ?? "foreground"}
              placeholder="blur"
              blurDataURL={blok.foreground_image.filename}
              className="object-cover aspect-video"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
