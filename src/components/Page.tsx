import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC, Suspense } from "react";
import type { NavLinkStoryblok, PageStoryblok } from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
  nav_links: NavLinkStoryblok[];
}> = ({ blok, nav_links }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <Suspense key={nestedBlok._uid}>
          <StoryblokComponent nav_links={nav_links} blok={nestedBlok} />
        </Suspense>
      ))}
  </main>
);
