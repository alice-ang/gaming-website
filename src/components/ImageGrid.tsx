"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { ImageGridStoryblok } from "../../component-types-sb";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export const ImageGrid: FC<{ blok: ImageGridStoryblok }> = ({ blok }) => {
  const ref = useRef(null);
  const [api, setApi] = useState<CarouselApi>();
  const [imageIdx, setImageIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  });

  const peekY = useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setImageIdx(imageIdx + 1);
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
              y: peekY,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
            src={blok.character.filename}
            width={300}
            height={260}
            alt={blok.character.alt ?? "character"}
            className=" object-contain bg-center object-center top-0 absolute right-0 rotate-6 "
          />
        )}
        <div className="space-y-2 py-4">
          {blok?.overline && (
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
          )}
          {blok?.title && <h1>{blok.title}</h1>}
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
          {blok.images.map((image, index) => (
            <div
              className="relative h-full w-full aspect-video col-span-1 bg-black overflow-hidden"
              key={index}
            >
              <DialogTrigger
                onClick={() => {
                  setImageIdx(index);
                }}
              >
                <Image
                  src={image.filename}
                  fill
                  alt={image.alt ?? "game image"}
                  blurDataURL={image.filename}
                  loading="lazy"
                  placeholder={"blur"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="aspect-video object-cover hover:grayscale-0 hover:scale-105 grayscale transition duration-300 ease-in-out"
                />
              </DialogTrigger>
            </div>
          ))}
        </div>
      </div>
      <DialogContent className="overflow-hidden">
        <DialogHeader className="hidden">
          <DialogTitle>{blok.images[imageIdx]?.alt}</DialogTitle>

          <DialogDescription>{blok.images[imageIdx]?.alt}</DialogDescription>
        </DialogHeader>

        <Carousel
          className=" h-full w-full rounded-lg relative "
          setApi={setApi}
        >
          <CarouselContent>
            {blok.images.map((image) => (
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </>
  );
};
