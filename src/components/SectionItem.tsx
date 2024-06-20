"use client";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { FC, ReactNode, useLayoutEffect, useRef, useState } from "react";
import { Constraints } from "./Constraints";

type SectionItemProps = {
  idx: number;
  overline?: string;
  title: string;
  description: string;
};

export const SectionItem: FC<SectionItemProps> = ({
  idx,
  overline,
  title,
  description,
}) => {
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
    <section key={idx} className="section-padding">
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
              "col-span-12 lg:col-span-6 space-y-4"
            )}
            variants={sectionVariants}
          >
            <h5 className="font-josefin_sans normal-case">{overline}</h5>
            <h1>{title} </h1>
            <p>{description}</p>
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
