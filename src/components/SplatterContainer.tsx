import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC } from "react";
import type { SplatterContainerStoryblok } from "../../component-types-sb";

export const SplatterContainer: FC<{ blok: SplatterContainerStoryblok }> = ({
  blok,
}) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <div className="h-16 container-mask w-full bg-palette-footer bg-top object-top bg-cover" />
      <div className="py-16 bg-palette-footer">
        {blok.body &&
          blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
      </div>
      <div className="h-16 container-mask w-full bg-palette-footer bg-top object-top bg-cover scale-y-[-1]" />
    </section>
  );
};
