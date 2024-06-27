import { motion } from "framer-motion";
import React, { FC } from "react";
import { ImageBlockStoryblok } from "../../component-types-sb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Constraints } from "./Constraints";

const rotateBottomLeft = {
  rest: {
    rotate: 0,
    y: -50,
    x: 100,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  hover: {
    y: -50,
    x: 0,
    opacity: 1,
    rotate: -20,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

const rotateBottomRight = {
  rest: {
    rotate: 0,
    y: -50,
    x: 100,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  hover: {
    y: -40,
    x: 160,
    opacity: 1,
    rotate: 20,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

const rotateTopRight = {
  rest: {
    y: 120,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  hover: {
    y: -40,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

const rotateTopLeft = {
  rest: {
    y: 120,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  hover: {
    y: -40,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
    },
  },
};

export const ImageBlock: FC<{
  blok: ImageBlockStoryblok;
  isRotating: boolean;
}> = ({ blok, isRotating = false }) => {
  return (
    <Constraints>
      <div
        className={cn(
          isRotating ? "order-last" : "",
          "relative h-full w-full aspect-video "
        )}
        {...storyblokEditable(blok)}
      >
        <motion.div
          className="aspect-video relative "
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <Image
            src={blok.main_image.filename}
            fill
            alt={blok.main_image?.alt ?? "main image"}
            className={cn(
              // isRotating ? "rotate-2" : "-rotate-2",
              "aspect-video object-cover bg-center object-center shadow-lg relative z-10 transition duration-300 ease-in-out mask"
            )}
          />
          {blok?.top_left && (
            <motion.img
              src={blok.top_left.filename}
              alt={blok.top_left?.alt ?? "top right image"}
              width={170}
              height={70}
              className="left-0 -top-32 absolute z-0 hidden lg:block"
              variants={rotateTopLeft}
            />
          )}

          {blok?.top_right && (
            <motion.img
              src={blok.top_right.filename}
              alt={blok.top_right?.alt ?? "top right image"}
              width={170}
              height={70}
              className="right-28 -top-32 absolute z-0 hidden lg:block"
              variants={rotateTopRight}
            />
          )}
          {blok?.bottom_left && (
            <motion.img
              src={blok.bottom_left.filename}
              alt={blok.bottom_left?.alt ?? "bottom left image"}
              width={170}
              height={70}
              className="-left-24 -bottom-10 absolute z-0 hidden lg:block origin-bottom"
              variants={rotateBottomLeft}
            />
          )}
          {blok?.bottom_right && (
            <motion.img
              src={blok.bottom_right.filename}
              alt={blok.bottom_right?.alt ?? "bottom right image"}
              width={170}
              height={70}
              className="right-28 -bottom-10 absolute z-0 hidden lg:block origin-bottom"
              variants={rotateBottomRight}
            />
          )}
        </motion.div>
      </div>
    </Constraints>
  );
};
