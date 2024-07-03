import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC, Suspense } from "react";
import type {
  PageStoryblok,
  SocialLinkStoryblok,
} from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
  socials: SocialLinkStoryblok;
}> = ({ blok, socials }) => (
  <main {...storyblokEditable(blok)} className="">
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <Suspense key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} socials={socials} />
        </Suspense>
      ))}
  </main>
);
