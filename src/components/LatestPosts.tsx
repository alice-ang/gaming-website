import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { FC } from "react";
import type {
  BlogPostStoryblok,
  LatestPostsStoryblok,
} from "../../component-types-sb";
import { Constraints } from "./Constraints";
import { PostItem } from "./PostItem";

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = async ({
  blok,
}) => {
  const { posts, totalPosts, perPage } = await fetchPosts(
    Number(blok.max_num_posts)
  );

  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      <Constraints>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>
              {blok.title} {totalPosts}
            </h1>
          </div>
          {posts.length && (
            <div className="grid grid-cols-3 gap-6 w-full">
              {posts.map((story: BlogPostStoryblok, index: number) => (
                <PostItem key={story._id} blok={story} idx={index} />
              ))}
            </div>
          )}
          {Number(blok.max_num_posts) <= 3 && (
            <Link href={"/news"}>
              <h4 className="font-josefin_sans normal-case">See all</h4>
            </Link>
          )}
          {/* <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                {Array.from({
                  length: totalPosts / perPage,
                }).map((_, index) => (
                  <PaginationLink href="#" key={index}>
                    {index + 1}
                  </PaginationLink>
                ))}
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination> */}
        </div>
      </Constraints>
    </section>
  );
};

export async function fetchPosts(numOfPosts: number, page?: number) {
  let filter_query = {
    component: {
      in: "blog_post",
    },
  };

  const storyblokApi = getStoryblokApi();

  const posts = await storyblokApi.get("cdn/stories", {
    version: "draft",
    resolve_links: "url",
    sort_by: "first_published_at:desc",
    starts_with: "posts/",
    filter_query: filter_query,
    per_page: numOfPosts,
    page: page,
  });

  return {
    posts: posts.data.stories,
    totalPosts: posts.total,
    perPage: posts.perPage,
  };
}
