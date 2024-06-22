"use client";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { ImageGridStoryblok } from "../../component-types-sb";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const ImageGrid: FC<{ blok: ImageGridStoryblok }> = ({ blok }) => {
  const ref = useRef(null);
  const [api, setApi] = useState<CarouselApi>();
  const [imageIdx, setImageIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setImageIdx(api.selectedScrollSnap());

    api.on("select", () => {
      console.log(blok.images.length, api.scrollSnapList().length);
      setImageIdx(api.selectedScrollSnap());
    });
  }, [api, blok.images.length, imageIdx]);

  return (
    <>
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
              <DialogTrigger>
                <Image
                  src={image.filename}
                  fill
                  alt={image.alt ?? "game image"}
                  className="aspect-video object-cover hover:grayscale-0 hover:scale-105 grayscale transition duration-300 ease-in-out"
                />
              </DialogTrigger>
            </div>
          ))}
        </div>
      </div>
      <DialogContent className="overflow-hidden">
        <DialogTitle>{blok.images[imageIdx]?.alt}</DialogTitle>
        <Carousel
          className=" h-full w-full rounded-lg relative "
          setApi={setApi}
        >
          <CarouselContent>
            {blok.images.map((image, index) => (
              <CarouselItem
                className="relative h-full w-full aspect-video"
                key={image.id}
              >
                <Image
                  src={blok.images[imageIdx].filename}
                  alt={blok.images[imageIdx].alt ?? ""}
                  fill
                  className="absolute bottom-0 object-cover rounded-lg"
                />
                {/* <Image
                    src={data.images[currentIdx].url}
                    fill
                    alt="image"
                    className="absolute bottom-0 object-cover rounded-lg "
                  /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="absolute" />
          <CarouselNext className="absolute" /> */}
        </Carousel>
      </DialogContent>
    </>
  );
};
