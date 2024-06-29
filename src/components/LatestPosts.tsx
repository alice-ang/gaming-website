"use client";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import type {
  BlogPostStoryblok,
  LatestPostsStoryblok,
} from "../../component-types-sb";
import { Constraints } from "./Constraints";
import { PostItem } from "./PostItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

type PostData = {
  posts: BlogPostStoryblok[];
  totalPosts: number;
  perPage?: number;
};

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = ({ blok }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [postData, setPostData] = useState<PostData | null>(null);

  const page = searchParams.get("page");

  const currentPage = useMemo(() => {
    return Number(page);
  }, [page]);

  useEffect(() => {
    const fetchPosts = async (numOfPosts: number, page?: number) => {
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
        page: currentPage === 0 ? 1 : currentPage,
      });

      setPostData({
        posts: posts.data.stories,
        totalPosts: posts.total,
        perPage: posts.perPage,
      });
    };

    fetchPosts(Number(blok.max_num_posts), Number(currentPage));
  }, [blok.max_num_posts, currentPage]);

  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      <Constraints>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title}</h1>
          </div>
          {postData?.posts && (
            <div className="grid grid-cols-3 gap-6 w-full">
              {postData.posts.map((story: BlogPostStoryblok, index: number) => (
                <PostItem key={story._id} blok={story} idx={index} />
              ))}
            </div>
          )}
          {Number(blok.max_num_posts) <= 3 && (
            <Link href={"/news"}>
              <h4 className="font-josefin_sans normal-case">See all</h4>
            </Link>
          )}

          {postData?.totalPosts && postData.perPage && (
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        router.push(`${pathname}?page=${currentPage - 1}`)
                      }
                    />
                  </PaginationItem>
                )}

                <PaginationItem>
                  {Array.from({
                    length: postData.totalPosts / postData.perPage,
                  }).map((_, index) => (
                    <PaginationLink href="#" key={index}>
                      {index + 1}
                    </PaginationLink>
                  ))}
                </PaginationItem>
                {currentPage <= postData.totalPosts / postData.perPage - 1 && (
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        router.push(`${pathname}?page=${currentPage + 1}`)
                      }
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </Constraints>
    </section>
  );
};
