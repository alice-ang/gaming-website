import React from "react";
import { FC } from "react";
import type {
  BlogPostStoryblok,
  LatestPostsStoryblok,
} from "../../component-types-sb";
import { PostItem } from "./PostItem";
import { storyblokEditable } from "@storyblok/react/rsc";

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = ({ blok }) => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full" {...storyblokEditable(blok)}>
      {blok.posts.map((post: BlogPostStoryblok, index) => (
        <PostItem key={post._uid} blok={post} idx={index} />
      ))}
    </div>
  );
};
