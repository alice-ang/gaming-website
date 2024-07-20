import { cn, getLocaleDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BlogPostStoryblok } from "../../component-types-sb";
import { PostItem } from "./PostItem";

export const LatestPostBanner: FC<{ post: BlogPostStoryblok }> = ({ post }) => {
  return (
    <>
      <div className="hidden grid-cols-12 w-full lg:grid">
        <div className="col-span-8 relative aspect-video">
          <div className="post-banner-image">
            <Image
              src={post.content.cover_image.filename}
              alt={"blog post image"}
              className="bg-cover object-cover bg-center aspect-video"
              fill
            />
          </div>
        </div>
        <div className="col-span-4 bg-white py-6 px-4 flex flex-col justify-between">
          <div
            className={cn(
              "ml-4 w-fit bg-palette-background brush-mask animation-transition"
            )}
          >
            {post.content.label && (
              <h2 className="font-josefin_sans px-12 py-4">
                {post.content.label}
              </h2>
            )}
          </div>
          <div className="space-y-2">
            <h5 className="text-palette-red">
              {getLocaleDateString(post.created_at).full}
            </h5>
            <h2 className="text-palette-footer ">{post.content?.title}</h2>
            <p className=" text-black line-clamp-6">{post.content?.excerpt}</p>
          </div>
          <div />
        </div>
      </div>
      <div className="block lg:hidden">
        <PostItem blok={post} idx={0} />
      </div>
    </>
  );
};
