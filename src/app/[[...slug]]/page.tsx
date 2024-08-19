import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clubhouse on Haunted Hill",
  description:
    "Dare to accept the invitation from enigmatic millionaire Nicolas Craven and embark on a spine-chilling golf adventure at the Club House on Haunted Hill.",
  openGraph: {
    description:
      "Dare to accept the invitation from enigmatic millionaire Nicolas Craven and embark on a spine-chilling golf adventure at the Club House on Haunted Hill.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Clubhouse on Haunted Hill",
    locale: "en_US",
    type: "website",
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/og.jpg`,
    },
  },
};

export default async function Page({ params }: any) {
  let slug = params?.slug ? params.slug.join("/") : "home";

  let storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/${slug}`,
    {
      version: "draft",
      resolve_relations: [
        "social_links.socials",
        "footer.footer_socials",
        "navigation.nav_button",
      ],
    },
    { cache: "no-store" }
  );

  return (
    <main className="">
      <StoryblokStory
        story={data.story}
        bridgeOptions={{
          resolveRelations: [
            "social_links.socials",
            "footer.footer_socials",
            "navigation.nav_button",
          ],
        }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  let paths: any[] = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;
    if (slug == "home") {
      return;
    }
    let splittedSlug = slug.split("/");
    paths.push({ slug: splittedSlug });
  });
  return paths;
}
