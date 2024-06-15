"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const ZoomHeader = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const bushScale = useTransform(scrollYProgress, [0, 1], [1.6, 4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  return (
    <div ref={container} className="h-[300vh] relative ">
      <motion.div
        style={{
          opacity,
          scale,
        }}
        className=" overflow-hidden top-0 h-screen sticky bg-[url('/blurry.png')] bg-cover bg-bottom object-contain "
      >
        <div className="flex flex-col justify-center items-center h-full ">
          <div className=" h-full w-full absolute">
            <video
              src="https://a.storyblok.com/f/204235/x/752ad30c94/fog.webm"
              autoPlay
              loop
              muted
              className="mix-blend-screen saturate-0 h-full w-full object-cover aspect-video"
            ></video>
          </div>
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
              src={
                "https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
              }
              fill
              alt="image"
              placeholder="blur"
              blurDataURL="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
              className="object-cover aspect-video"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
