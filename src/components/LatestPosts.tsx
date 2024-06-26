import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import { FC } from "react";
import type {
  BlogPostStoryblok,
  LatestPostsStoryblok,
} from "../../component-types-sb";
import { Constraints } from "./Constraints";
import { PostItem } from "./PostItem";
import Link from "next/link";

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = async ({
  blok,
}) => {
  const { data } = await fetchPosts(Number(blok.max_num_posts));

  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      <Constraints>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title} </h1>
          </div>
          {data.stories.length && (
            <div className="grid grid-cols-3 gap-6 w-full">
              {data.stories.map((story: BlogPostStoryblok, index: number) => (
                <PostItem key={story._id} blok={story} idx={index} />
              ))}
            </div>
          )}
          {Number(blok.max_num_posts) <= 3 && (
            <Link href={"/news"}>
              <h4 className="font-josefin_sans normal-case">See all</h4>
            </Link>
          )}
        </div>
      </Constraints>
    </section>
  );
};

export async function fetchPosts(numOfPosts: number) {
  let filter_query = {
    component: {
      in: "blog_post",
    },
  };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories", {
    version: "draft",
    resolve_links: "url",
    sort_by: "first_published_at:desc",
    filter_query: filter_query,
    per_page: numOfPosts,
  });
}
