"use client";
import { cn, getLocaleDateString } from "@/lib/utils";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import type {
  BlogPostStoryblok,
  LatestPostsStoryblok,
} from "../../component-types-sb";
import { Constraints } from "./Constraints";
import { PostItem } from "./PostItem";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import Image from "next/image";
import { LatestPostBanner } from "./LatestPostBanner";

type PostData = {
  posts: BlogPostStoryblok[];
  totalPosts: number;
  perPage?: number;
  latestPost: BlogPostStoryblok;
};

const sectionVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
      delay: 0.1 * index,
    },
  }),
};

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = ({ blok }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [postData, setPostData] = useState<PostData | null>(null);
  const ref = useRef(null);
  const page = searchParams.get("page");

  const currentPage = useMemo(() => {
    return Number(page) === 0 ? 1 : Number(page);
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
        page: page === 0 ? 1 : page,
      });

      setPostData({
        totalPosts: posts.total,
        perPage: posts.perPage,
        latestPost: posts.data.stories[0],
        posts: posts.data.stories,
      });
    };

    fetchPosts(Number(blok.max_num_posts), Number(currentPage));
  }, [blok.max_num_posts, currentPage]);

  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      {blok.show_banner === true &&
        postData?.latestPost?.content.cover_image?.filename && (
          <div className="top-img-fade">
            <Image
              src={postData.latestPost.content.cover_image.filename}
              alt={"latest blog post image"}
              className="blur opacity-65 bg-cover bg-center object-cover"
              fill
            />
          </div>
        )}
      <Constraints>
        <div className="flex flex-col justify-center items-center space-y-8 relative">
          {blok.show_banner === true && postData?.latestPost && (
            <Link
              href={`/${postData.latestPost.full_slug}`}
              passHref
              className="hover:no-underline shadow-lg"
            >
              <LatestPostBanner post={postData.latestPost} />
            </Link>
          )}
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title}</h1>
          </div>
          {postData?.posts && (
            <div className="grid grid-cols-3 gap-6 w-full ">
              {!blok.show_banner
                ? postData.posts.map(
                    (story: BlogPostStoryblok, index: number) => (
                      <motion.div
                        ref={ref}
                        variants={sectionVariants}
                        initial="offscreen"
                        key={story.slug}
                        animate="onscreen"
                        viewport={{ amount: 0.8, once: true }}
                        custom={index}
                        className="col-span-3 md:col-span-1"
                      >
                        <Link
                          href={`/${story.full_slug}`}
                          passHref
                          className="hover:no-underline"
                        >
                          <PostItem blok={story} idx={index} />
                        </Link>
                      </motion.div>
                    )
                  )
                : postData.posts
                    .filter(
                      (post: BlogPostStoryblok) =>
                        post.id != postData.latestPost.id
                    )
                    .map((story: BlogPostStoryblok, index: number) => (
                      <motion.div
                        ref={ref}
                        variants={sectionVariants}
                        initial="offscreen"
                        key={story.slug}
                        animate="onscreen"
                        viewport={{ amount: 0.8, once: true }}
                        custom={index}
                        className="col-span-3 md:col-span-1"
                      >
                        <Link
                          href={`/${story.full_slug}`}
                          passHref
                          className="hover:no-underline"
                        >
                          <PostItem blok={story} idx={index} />
                        </Link>
                      </motion.div>
                    ))}
            </div>
          )}
          {!blok.show_pagination && Number(blok.max_num_posts) >= 3 && (
            <Link href={"/news"}>
              <h4 className="font-josefin_sans normal-case">See all</h4>
            </Link>
          )}

          {blok.show_pagination &&
            postData?.totalPosts !== 0 &&
            postData?.perPage &&
            postData.totalPosts > postData.perPage && (
              <Pagination className="py-12">
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
                      length: Math.ceil(postData.totalPosts / postData.perPage),
                    }).map((_, index) => (
                      <PaginationLink
                        key={index}
                        onClick={() =>
                          router.push(`${pathname}?page=${index + 1}`)
                        }
                        className={cn(
                          currentPage === index + 1
                            ? "bg-palette-footer border-palette-body"
                            : ""
                        )}
                      >
                        {index + 1}
                      </PaginationLink>
                    ))}
                  </PaginationItem>
                  {currentPage <=
                    Math.round(postData.totalPosts / postData.perPage) && (
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
