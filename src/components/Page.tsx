import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC } from "react";
import type { PageStoryblok } from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
}> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
  </main>
);
