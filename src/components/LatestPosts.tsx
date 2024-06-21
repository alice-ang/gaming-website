import React from "react";
import { FC } from "react";
import type {
  BlogPostStoryblok,
  LatestPostsStoryblok,
} from "../../component-types-sb";
import { PostItem } from "./PostItem";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Constraints } from "./Constraints";

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = ({ blok }) => {
  return (
    <section className="">
      <Constraints>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>

            <h1>{blok.title} </h1>
          </div>
          <div
            className="grid grid-cols-3 gap-6 w-full"
            {...storyblokEditable(blok)}
          >
            {blok.posts.map((post: BlogPostStoryblok, index) => (
              <PostItem key={post._uid} blok={post} idx={index} />
            ))}
          </div>
          <h4 className="font-josefin_sans normal-case">See all</h4>
        </div>
      </Constraints>
    </section>
  );
};
