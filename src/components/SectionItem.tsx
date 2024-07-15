"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import type { SectionItemStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";

type SectionItemProps = {
  idx: number;
  blok: SectionItemStoryblok;
};

export const SectionItem: FC<SectionItemProps> = ({ idx, blok }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  const sectionVariants: Variants = {
    offscreen: {
      y: height + 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  return (
    <section key={idx} className="section-padding" {...storyblokEditable(blok)}>
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
        <motion.div
          ref={ref}
          className="grid grid-cols-12 gap-6 2xl:gap-32  items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            className={cn(
              idx % 2 ? "lg:order-last " : "lg:text-right",
              "col-span-12 lg:col-span-6 space-y-2 md:space-y-4 "
            )}
            variants={sectionVariants}
          >
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title} </h1>

            <div>{render(blok.description)}</div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className={cn(
              "col-span-12 lg:col-span-6 h-full w-full aspect-video relative shadow"
            )}
          >
            {blok?.top_left_image?.filename && (
              <Image
                src={blok.top_left_image.filename}
                alt={blok.top_left_image.alt ?? "top left image"}
                width={170}
                height={70}
                className="-left-8 -top-32 absolute object-cover bg-cover  hidden md:block"
              />
            )}

            {blok?.top_right_image?.filename && (
              <Image
                src={blok.top_right_image.filename}
                alt={blok.top_right_image.alt ?? "top right image"}
                width={170}
                height={70}
                className="-right-0 -top-32 absolute object-cover bg-cover hidden md:block"
              />
            )}

            <Image
              src={blok.image.filename}
              alt={blok.image.alt ?? ""}
              className="aspect-video object-cover h-full w-full bg-center mask"
              fill
            />

            {blok?.bottom_left_image?.filename && (
              <Image
                src={blok.bottom_left_image.filename}
                alt={blok.bottom_left_image.alt ?? "bottom left image"}
                width={200}
                height={200}
                className="-left-8 -bottom-10 absolute object-cover bg-cover "
              />
            )}
            {blok?.bottom_right_image?.filename && (
              <Image
                src={blok.bottom_right_image.filename}
                alt={blok.bottom_right_image.alt ?? "bottom right image"}
                width={200}
                height={200}
                className="-right-8 -bottom-10 absolute  object-cover bg-cover"
              />
            )}
          </motion.div>
        </motion.div>
      </Constraints>
    </section>
  );
};
