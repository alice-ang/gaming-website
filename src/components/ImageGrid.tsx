"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ImageGrid = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["100%", "-40%"]);

  return (
    <div className="relative section-padding" ref={ref}>
      <motion.img
        style={{
          y: saluteY,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        src={"/exec.png"}
        width={340}
        height={290}
        alt="Priest"
        className="hidden lg:block object-contain bg-center object-center top-0 absolute right-0 rotate-6 "
      />
      <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {Array.from({ length: 14 }).map((image, index) => (
          <div
            className="relative h-full w-full aspect-video col-span-1 bg-black"
            key={index}
          >
            <Image
              src={"/blurry.png"}
              fill
              alt="image"
              className="aspect-video  object-cover hover:grayscale-0 grayscale transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
