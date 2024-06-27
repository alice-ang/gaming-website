import React, { FC } from "react";
import { Constraints } from "./Constraints";
import type {
  KeyFeaturesStoryblok,
  SectionItemStoryblok,
} from "../../component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import { SectionItem } from "./SectionItem";
import { GolfPath } from "./GolfPath";

export const KeyFeatures: FC<{ blok: KeyFeaturesStoryblok }> = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="section-padding relative overflow-hidden"
    >
      <div className=" w-full h-full absolute">
        <GolfPath />
      </div>
      <Constraints>
        <div className="flex flex-row items-center justify-center">
          <div className=" text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title}</h1>
          </div>
        </div>
        {blok?.features.map((feature, index) => (
          <SectionItem
            blok={feature as SectionItemStoryblok}
            idx={index}
            key={feature._uid}
          />
        ))}
      </Constraints>
    </section>
  );
};
