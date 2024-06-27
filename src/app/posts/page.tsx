import { Constraints, PostItem } from "@/components";
import { getStoryblokApi } from "@storyblok/react/rsc";
import type { BlogPostStoryblok } from "../../../component-types-sb";

export default async function Page() {
  const fetchPosts = async () => {
    let filter_query = {
      component: {
        in: "blog_post",
      },
    };

    const storyblokApi = getStoryblokApi();
    return await storyblokApi.getAll("cdn/stories", {
      version: "draft",
      resolve_links: "url",
      sort_by: "first_published_at:desc",
      filter_query: filter_query,
    });
  };

  const posts = await fetchPosts();

  return (
    <Constraints>
      <main className="space-y-8 section-padding">
        <h1 className="text-center">Latest news</h1>
        <div className=" grid grid-cols-3 gap-4 lg:gap-8">
          {posts.map((post: BlogPostStoryblok, index) => (
            <PostItem blok={post} idx={index} key={post.slug} />
          ))}
        </div>
      </main>
    </Constraints>
  );
}
