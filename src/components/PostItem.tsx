import { cn, getLocaleDateString } from "@/lib/utils";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { FC } from "react";
import type { BlogPostStoryblok } from "../../component-types-sb";

export const PostItem: FC<{ blok: BlogPostStoryblok; idx: number }> = ({
  blok,
  idx,
}) => {
  return (
    <div
      className={cn(
        // idx % 2 ? " lg:hover:rotate-1" : "lg:hover:-rotate-1",
        " rotate-0 col-span-3 md:col-span-1 w-full relative shadow-lg animation-transition group hover:no-underline"
      )}
      {...storyblokEditable(blok)}
    >
      <div
        className={cn(
          idx % 2 ? "rotate-12" : "-rotate-6",
          "absolute bg-palette-background brush-mask right-2 z-10 animation-transition top-2"
        )}
      >
        {blok.content?.label && (
          <h5 className="font-josefin_sans px-12 py-4">{blok.content.label}</h5>
        )}
      </div>

      {blok?.content?.cover_image && (
        <div className="aspect-video relative overflow-hidden ">
          <div className="post-card-image">
            <Image
              src={blok.content.cover_image.filename}
              alt={blok.content.cover_image?.alt ?? "blog image"}
              className="aspect-video group-hover:scale-110 animation-transition "
              fill
              placeholder="blur"
              blurDataURL={blok.content.cover_image.filename}
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="space-y-2 p-4 bg-white">
        <h5 className="text-palette-red">
          {getLocaleDateString(blok.created_at).full}
        </h5>
        <h3 className="text-palette-footer line-clamp-1">
          {blok.content?.title}
        </h3>
        <p className="line-clamp-2 text-black">{blok.content?.excerpt}</p>
      </div>
    </div>
  );
};
