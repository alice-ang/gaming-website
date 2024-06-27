import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Constraints } from "./Constraints";
import type { NavigationStoryblok } from "../../component-types-sb";

export const Navigation: FC = async () => {
  const { nav }: { nav: NavigationStoryblok } = await fetchData();
  return (
    <nav
      className="bg-gradient-to-b from-black to-transparent py-6 px-4 fixed top-0 z-40 w-full"
      {...storyblokEditable(nav)}
    >
      <Constraints>
        <div className="flex flex-row items-center w-full justify-between ">
          {nav?.logo.filename && (
            <Link href={"/"} passHref>
              <Image
                src={nav.logo.filename}
                alt={nav.logo?.alt ?? "golf ball logo"}
                height={60}
                width={60}
                className="animation-transition hover:scale-110"
              />
            </Link>
          )}

          <ul className="flex gap-8 items-center">
            {nav?.nav_links &&
              nav.nav_links.map((link, index) => (
                <li className="text-lg uppercase cursor-pointer" key={index}>
                  <Link href={`${link}`} className="font-josefin_sans">
                    {link}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Constraints>
    </nav>
  );
};

export async function fetchData() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/layout/navigation", {
    version: "draft",
    resolve_links: "url",
  });

  console.log(data);
  return {
    nav: data.story.content,
  };
}
