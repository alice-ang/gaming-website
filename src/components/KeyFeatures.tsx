import React, { FC } from "react";
import { Constraints } from "./Constraints";
import type {
  KeyFeaturesStoryblok,
  SectionItemStoryblok,
} from "../../component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import { SectionItem } from "./SectionItem";

export const KeyFeatures: FC<{ blok: KeyFeaturesStoryblok }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Constraints>
        {blok?.features.map((feature, index) => (
          <SectionItem
            blok={feature as SectionItemStoryblok}
            idx={index}
            key={index}
          />
        ))}
      </Constraints>
    </section>
  );
};
