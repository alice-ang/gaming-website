"use client";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Constraints } from "./Constraints";
import type { NavigationStoryblok } from "../../component-types-sb";
import { Button } from "./ui/button";
import { Hamburger } from "./Hamburger";

export const Navigation: FC = () => {
  const [nav, setNav] = useState<NavigationStoryblok>();

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();

      const { data } = await storyblokApi.get("cdn/stories/layout/navigation", {
        version: "draft",
        resolve_links: "url",
      });

      setNav(data.story.content);
    };

    fetchData();
  }, []);

  if (!nav) {
    return;
  }

  return (
    <nav
      className="bg-gradient-to-b from-black to-transparent py-6 fixed top-0 z-40 w-full"
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
                className="animation-transition hover:scale-110 "
              />
            </Link>
          )}

          <ul className=" gap-8 items-center hidden 2xl:flex">
            {nav.press_link && (
              <li className="text-lg uppercase cursor-pointer">
                <Link
                  href={`/${nav.press_link.story.url}`}
                  className="font-josefin_sans"
                >
                  {nav.press_link.story.name}
                </Link>
              </li>
            )}
            {nav.news_link && (
              <li className="text-lg uppercase cursor-pointer">
                <Link
                  href={`/${nav.news_link.story.url}`}
                  className="font-josefin_sans"
                  passHref
                >
                  {nav.news_link.story.name}
                </Link>
              </li>
            )}
            <Button>Play Demo</Button>
          </ul>
          <button className="block 2xl:hidden">
            <Hamburger isClicked={true} />
          </button>
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

  return {
    nav: data.story.content,
  };
}
