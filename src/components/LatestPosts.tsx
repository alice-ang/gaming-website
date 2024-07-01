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

type PostData = {
  posts: BlogPostStoryblok[];
  totalPosts: number;
  perPage?: number;
  latestPost: BlogPostStoryblok;
};

export const LatestPosts: FC<{ blok: LatestPostsStoryblok }> = ({ blok }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [postData, setPostData] = useState<PostData | null>(null);
  const ref = useRef(null);

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
        posts: posts.data.stories,
        totalPosts: posts.total,
        perPage: posts.perPage,
        latestPost: posts.data.stories[0],
      });
    };

    fetchPosts(Number(blok.max_num_posts), Number(currentPage));
  }, [blok.max_num_posts, currentPage]);

  return (
    <section className="section-padding" {...storyblokEditable(blok)}>
      {blok.show_banner === true &&
        postData?.latestPost.content.cover_image.filename && (
          <div className="top-image-mask ">
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
          {blok.show_banner === true &&
            postData?.latestPost.content.cover_image.filename && (
              <div className="grid grid-cols-12 w-full">
                <div className="col-span-8 relative aspect-video">
                  <Image
                    src={postData.latestPost.content.cover_image.filename}
                    alt={"blog post image"}
                    className="bg-cover object-cover bg-center aspect-video"
                    fill
                  />
                </div>
                <div className="col-span-4 bg-white py-6 flex flex-col justify-between">
                  <div
                    className={cn(
                      "ml-4 w-fit bg-palette-background brush-mask animation-transition"
                    )}
                  >
                    {postData?.latestPost.content.label && (
                      <h2 className="font-josefin_sans px-12 py-4">
                        {postData.latestPost.content.label}
                      </h2>
                    )}
                  </div>
                  <div className="space-y-2 p-4 flex-1 overflow-hidden text-ellipsis  bg-blue-100">
                    <h5 className="text-palette-red">
                      {getLocaleDateString(postData.latestPost.created_at).full}
                    </h5>
                    <h2 className="text-palette-footer ">
                      {postData.latestPost.content?.title}
                    </h2>
                    <p className=" text-black h-fit text-ellipsis ">
                      {postData.latestPost.content?.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            )}
          <div className="text-center space-y-2">
            <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            <h1>{blok.title}</h1>
          </div>
          {postData?.posts && (
            <div className="grid grid-cols-3 gap-6 w-full ">
              {postData.posts.map((story: BlogPostStoryblok, index: number) => (
                <motion.div
                  ref={ref}
                  variants={sectionVariants}
                  initial="offscreen"
                  key={story.slug}
                  animate="onscreen"
                  viewport={{ amount: 0.8 }}
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
            postData?.totalPosts &&
            postData?.perPage && (
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
                      length: postData.totalPosts / postData.perPage,
                    }).map((_, index) => (
                      <PaginationLink
                        href="#"
                        key={index}
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
                    postData.totalPosts / postData.perPage - 1 && (
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
