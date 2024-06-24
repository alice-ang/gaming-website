import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import { FC } from "react";
import type { LatestPostsStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";
import { PostItem } from "./PostItem";

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = async ({
  blok,
}) => {
  const posts = await fetchPosts();

  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      <Constraints>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title} </h1>
          </div>
          {posts && (
            <div className="grid grid-cols-3 gap-6 w-full">
              {posts.map((post, index) => (
                <PostItem key={post.title} blok={post} idx={index} />
              ))}
            </div>
          )}

          <h4 className="font-josefin_sans normal-case">See all</h4>
        </div>
      </Constraints>
    </section>
  );
};

export async function fetchPosts() {
  let filter_query = {
    component: {
      in: "blog_post",
    },
  };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.getAll("cdn/stories", {
    version: "draft",
    resolve_links: "url",
    sort_by: "first_published_at:desc",
    filter_query: filter_query,
    per_page: 3,
  });
}
