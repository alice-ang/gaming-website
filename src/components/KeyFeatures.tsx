import React, { FC } from "react";
import { Constraints } from "./Constraints";
import type {
  KeyFeaturesStoryblok,
  SectionItemStoryblok,
} from "../../component-types-sb";
import { storyblokEditable } from "@storyblok/react";
import { SectionItem } from "./SectionItem";
import { GolfPath } from "./GolfPath";

export const KeyFeatures: FC<{ blok: KeyFeaturesStoryblok }> = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="section-padding relative overflow-hidden"
    >
      {/* {blok.show_golf_path && (
        <div className=" w-full h-full absolute">
          <GolfPath />
        </div>
      )} */}

      <Constraints hasPadding={false}>
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
