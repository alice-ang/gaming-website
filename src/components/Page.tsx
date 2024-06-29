import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC, Suspense } from "react";
import type { ButtonStoryblok, PageStoryblok } from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
  nav_cta: ButtonStoryblok;
}> = ({ blok, nav_cta }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <Suspense key={nestedBlok._uid}>
          <StoryblokComponent nav_cta={nav_cta} blok={nestedBlok} />
        </Suspense>
      ))}
  </main>
);
