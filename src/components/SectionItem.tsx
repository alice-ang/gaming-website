"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { Constraints } from "./Constraints";
import type { SectionItemStoryblok } from "../../component-types-sb";
import { render } from "storyblok-rich-text-react-renderer";

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
      y: 20,
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
      <Constraints>
        <motion.div
          ref={ref}
          className="grid grid-cols-12 gap-4 xl:gap-[130px] items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            className={cn(
              idx % 2 ? "lg:order-last " : "lg:text-right",
              "col-span-12 lg:col-span-6 space-y-2"
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
              idx % 2 ? "mask" : "mask",
              "col-span-12 lg:col-span-6 h-full w-full  aspect-video relative shadow"
            )}
          >
            <Image
              src="/tree.png"
              alt="trees"
              className="aspect-video object-cover h-full w-full bg-center"
              fill
            />
          </motion.div>
        </motion.div>
      </Constraints>
    </section>
  );
};
