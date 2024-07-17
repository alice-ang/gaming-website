import { getLocaleDateString } from "@/lib/utils";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { Metadata } from "next";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/posts/${params.slug}`,
    {
      version: "draft",
    },
    { cache: "no-store" }
  );

  return {
    title: data.story.content.title,
    description: data.story.content.excerpt,
    openGraph: {
      title: data.story.content.title,
      description: data.story.content.excerpt,
      locale: "en_US",
      type: "website",
      images: {
        url: data.story.content.cover_image.filename,
      },
    },
  };
}

export default async function Page({ params }: Props) {
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
      <div className="top-img-fade ">
        <Image
          src={data.story.content.cover_image.filename}
          alt={"blog post image"}
          className="opacity-65 blur bg-center object-cover bg-cover"
          fill
        />
      </div>
      <div className="max-w-5xl h-full mx-auto shadow space-y-4 bg-background md:rounded-lg relative overflow-hidden">
        {data.story.content.cover_image && (
          <div className="aspect-video relative ">
            <Image
              src={data.story.content.cover_image.filename}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={data.story.content.cover_image.filename}
              className="object-cover bg-center aspect-video "
            />
          </div>
        )}
        <div className="py-6 px-4 md:px-12 bg-background space-y-2">
          <h5 className="text-palette-red">
            {getLocaleDateString(data.story.created_at).full}
          </h5>
          <div className="space-y-4 pb-12  text-white">
            {render(data.story.content.post)}
          </div>
        </div>
      </div>
    </section>
  );
}
