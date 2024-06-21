"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import { SectionItem } from "./SectionItem";
import { KeyFeatures } from "./KeyFeatures";
import { Page } from "./Page";
import { ImageGrid } from "./ImageGrid";

/** 2. Import your components */

storyblokInit({
  accessToken: "rrhhnwOXRli6XasvUcSklQtt",
  use: [apiPlugin],
  components: {
    section_item: SectionItem,
    key_features: KeyFeatures,
    page: Page,
    image_grid: ImageGrid,
  },
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return children;
};
