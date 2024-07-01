import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Page({ params }: any) {
  let slug = params?.slug ? params.slug.join("/") : "home";

  let storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/${slug}`,
    {
      version: "draft",
      resolve_relations: [
        // "navigation.nav_button"
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
            // "navigation.nav_button"
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
