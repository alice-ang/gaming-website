import { getLocaleDateString } from "@/lib/utils";
import { getStoryblokApi } from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export default async function PostPage({ params }: any) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/posts/${params?.slug}`,
    {
      version: "draft",
      resolve_links: "url",
    },
    { cache: "no-store" }
  );

  return (
    <section className="min-h-screen py-32">
      <div className="max-w-5xl h-full mx-auto shadow-lg space-y-4">
        {data.story.content.cover_image && (
          <div className="aspect-video relative ">
            <Image
              src={data.story.content.cover_image.filename}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={data.story.content.cover_image.filename}
              className="object-cover bg-center aspect-video md:rounded-lg"
            />
          </div>
        )}
        <h5 className="text-palette-red">
          {getLocaleDateString(data.story.created_at).full}
        </h5>
        <div className="  space-y-4">{render(data.story.content.post)}</div>
      </div>
    </section>
  );
}
