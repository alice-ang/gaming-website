import { getLocaleDateString } from "@/lib/utils";
import { getStoryblokApi } from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export default async function Page({ params }: { params: { slug: string } }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/posts/${params.slug}`,
    {
      version: "draft",
    },
    { cache: "no-store" }
  );

  return (
    <section className="min-h-screen pt-32">
      <div className="top-image-mask ">
        <Image
          src={data.story.content.cover_image.filename}
          alt={"blog post image"}
          className="blur opacity-65 bg-center object-cover bg-cover"
          fill
        />
      </div>
      <div className="max-w-5xl h-full mx-auto shadow space-y-4 bg-palette-footer relative">
        {data.story.content.cover_image && (
          <div className="aspect-video relative ">
            <Image
              src={data.story.content.cover_image.filename}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={data.story.content.cover_image.filename}
              className="object-cover bg-center aspect-video md:rounded-t-lg "
            />
          </div>
        )}
        <div className="py-6 px-4 md:px-12 bg-palette-footer ">
          <h5 className="text-palette-red">
            {getLocaleDateString(data.story.created_at).full}
          </h5>
          <div className="space-y-4 pb-12">
            {render(data.story.content.post)}
          </div>
        </div>
      </div>
    </section>
  );
}
