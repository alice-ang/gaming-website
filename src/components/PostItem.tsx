import { Post } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

export const PostItem: FC<Post> = ({ title, idx, createdAt, body }) => {
  return (
    <article
      className={cn(
        // index % 2 ? " hover:rotate-2" : "hover:-rotate-2",
        "rotate-0 col-span-3 md:col-span-1 bg-white w-full p-2: lg:p-4 relative space-y-4 shadow-md border border-white animation-transition group"
      )}
    >
      <div
        className={cn(
          idx % 2 ? "rotate-12" : "-rotate-6",
          "absolute bg-palette-background brush-mask right-0 z-10  animation-transition"
        )}
      >
        <h5 className="font-josefin_sans px-12 py-4">{title}</h5>
      </div>

      <div className="aspect-video relative overflow-hidden">
        <Image
          fill
          alt="post"
          src={"/blurry.png"}
          className="aspect-video group-hover:scale-110 animation-transition"
        />
      </div>
      <div className="space-y-2">
        <h5 className="text-palette-red">{createdAt}</h5>
        <p className="line-clamp-2 text-black">{body.markdown}</p>
      </div>
    </article>
  );
};
