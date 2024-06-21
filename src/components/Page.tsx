import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC } from "react";
import type {
  BlogPostStoryblok,
  PageStoryblok,
} from "../../component-types-sb";

export const Page: FC<{
  blok: PageStoryblok;
  posts: BlogPostStoryblok[];
}> = ({ blok, posts }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <StoryblokComponent
          posts={posts}
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
  </main>
);
