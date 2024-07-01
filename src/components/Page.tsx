import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC, Suspense } from "react";
import type { ButtonStoryblok, PageStoryblok } from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
  nav_button: ButtonStoryblok;
}> = ({ blok, nav_button }) => (
  <main {...storyblokEditable(blok)} className="">
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <Suspense key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} nav_button={nav_button} />
        </Suspense>
      ))}
  </main>
);
