import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FC } from "react";
import type { MovingCardStoryblok } from "../../component-types-sb";
import { cn } from "@/lib/utils";
import { storyblokEditable } from "@storyblok/react";

export const StatsCard: FC<{ blok: MovingCardStoryblok }> = ({ blok }) => {
  return (
    <CardContainer
      className="border border-black bg-white p-3 rounded-xl shadow:sm hover:shadow-2xl w-fit"
      {...storyblokEditable(blok)}
    >
      <CardBody
        className={cn(
          `relative group/card h-auto shover:shadow-2xl rounded-xl bg-cover bg-center bg-no-repeat`
        )}
      >
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt ?? "background image"}
          fill
          placeholder="blur"
          blurDataURL={blok.background_image.filename}
          className="aspect-video bg-cover object-center object-cover "
        />
        <div className="w-full h-full overflow-hidden absolute rounded-xl group-hover/card:backdrop-blur-xs bg-black/10 transition duration-150 ease-in-out" />

        <CardItem translateZ="70" className="w-full">
          <Image
            src={blok.top_image.filename}
            height="300"
            width="300"
            className={`object-contain scale-110 group-hover/card:scale-125 transition duration-300 ease-in-out translate-y-12 mx-auto`}
            alt={blok.top_image.alt ?? "top image"}
          />
        </CardItem>

        <CardItem translateZ="100" className="relative">
          <Image
            src={blok.bottom_image.filename}
            height="300"
            width="300"
            className="object-contain mx-auto w-fit h-auto"
            alt={blok.bottom_image.alt ?? "bottom image"}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
