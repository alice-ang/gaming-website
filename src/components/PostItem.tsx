import { cn, getLocaleDateString } from "@/lib/utils";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { FC } from "react";
import type { BlogPostStoryblok } from "../../component-types-sb";
import Link from "next/link";

export const PostItem: FC<{ blok: BlogPostStoryblok; idx: number }> = ({
  blok,
  idx,
}) => {
  return (
    <Link
      href={`/posts/${blok.slug}`}
      passHref
      className={cn(
        idx % 2 ? " md:hover:rotate-2" : "md:hover:-rotate-2",
        "rotate-0 col-span-3 md:col-span-1 bg-white w-full p-2: lg:p-4 relative shadow-md border border-white animation-transition group hover:no-underline"
      )}
      {...storyblokEditable(blok)}
    >
      <div
        className={cn(
          idx % 2 ? "rotate-12" : "-rotate-6",
          "absolute bg-palette-background brush-mask right-0 z-10 animation-transition"
        )}
      >
        {blok.content?.label && (
          <h5 className="font-josefin_sans px-12 py-4">{blok.content.label}</h5>
        )}
      </div>

      {blok?.content?.cover_image && (
        <div className="aspect-video relative overflow-hidden mb-4">
          <Image
            src={blok.content.cover_image.filename}
            alt={blok.content.cover_image?.alt ?? "blog image"}
            className="aspect-video group-hover:scale-110 animation-transition"
            fill
            placeholder="blur"
            blurDataURL={blok.content.cover_image.filename}
            loading="lazy"
          />
        </div>
      )}

      <div className="space-y-2 p-4">
        <h5 className="text-palette-red">
          {getLocaleDateString(blok.created_at).full}
        </h5>
        <h3 className="text-palette-footer line-clamp-1">
          {blok.content?.title}
        </h3>
        <p className="line-clamp-2 text-black">{blok.content?.excerpt}</p>
      </div>
    </Link>
  );
};
