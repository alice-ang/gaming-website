import React, { FC } from "react";
import Image from "next/image";
import { BlogPostStoryblok } from "../../component-types-sb";
import { cn, getLocaleDateString } from "@/lib/utils";

export const LatestPostBanner: FC<{ post: BlogPostStoryblok }> = ({ post }) => {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-8 relative aspect-video">
        <Image
          src={post.content.cover_image.filename}
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
          {post.content.label && (
            <h2 className="font-josefin_sans px-12 py-4">
              {post.content.label}
            </h2>
          )}
        </div>
        <div className="space-y-2 p-4 flex-1 overflow-hidden text-ellipsis  bg-blue-100">
          <h5 className="text-palette-red">
            {getLocaleDateString(post.created_at).full}
          </h5>
          <h2 className="text-palette-footer ">{post.content?.title}</h2>
          <p className=" text-black h-fit text-ellipsis ">
            {post.content?.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};
