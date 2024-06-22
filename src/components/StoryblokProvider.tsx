"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import { SectionItem } from "./SectionItem";
import { KeyFeatures } from "./KeyFeatures";
import { Page } from "./Page";
import { ImageGrid } from "./ImageGrid";
import { PostItem } from "./PostItem";
import { LatestPosts } from "./LatestPosts";
import { SplatterContainer } from "./SplatterContainer";
import { Footer } from "./Footer";
import { ZoomHeader } from "./ZoomHeader";
import { StatsCard } from "./StatsCard";
import { CustomizationSection } from "./CustomizationSection";

/** 2. Import your components */

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW,
  use: [apiPlugin],
  components: {
    section_item: SectionItem,
    key_features: KeyFeatures,
    page: Page,
    image_grid: ImageGrid,
    blog_post: PostItem,
    latest_posts: LatestPosts,
    splatter_container: SplatterContainer,
    footer: Footer,
    zoom_hero: ZoomHeader,
    moving_card: StatsCard,
    character_customization: CustomizationSection,
  },
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return children;
};
