import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC, Suspense } from "react";
import type {
  ButtonStoryblok,
  PageStoryblok,
  SocialLinksStoryblok,
  SocialLinkStoryblok,
} from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
  nav_button: ButtonStoryblok;
  footer_socials: SocialLinksStoryblok;
}> = ({ blok, footer_socials, nav_button }) => (
  <main {...storyblokEditable(blok)} className="">
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <Suspense key={nestedBlok._uid}>
          <StoryblokComponent
            blok={nestedBlok}
            footer_socials={footer_socials}
            nav_button={nav_button}
          />
        </Suspense>
      ))}
  </main>
);
