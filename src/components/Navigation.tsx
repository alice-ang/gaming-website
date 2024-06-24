import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { NavigationStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";

export const Navigation: FC<{ blok: NavigationStoryblok }> = async ({
  blok,
}) => {
  return (
    <nav
      className="bg-transparent py-6 px-4 fixed top-0 z-40 w-full backdrop-blur-sm"
      {...storyblokEditable(blok)}
    >
      <Constraints>
        <div className="flex flex-row items-center w-full justify-between ">
          {blok?.logo.filename && (
            <Link href={"/"} passHref>
              <Image
                src={blok.logo.filename}
                alt={blok.logo?.alt ?? "golf ball logo"}
                height={60}
                width={60}
                className="animation-transition hover:scale-110"
              />
            </Link>
          )}

          <ul className="flex gap-8 items-center">
            {/* {blok.nav_links &&
              blok.nav_links.map((link, index) => (
                <li
                  className="text-lg uppercase cursor-pointer hover:opacity-80 "
                  key={index}
                >
                  <Link href={`${link}`} className="font-josefin_sans">
                    {link}
                  </Link>
                </li>
              ))} */}
            {/* {blok?.blocks &&
              blok.blocks.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))} */}
          </ul>
        </div>
      </Constraints>
    </nav>
  );
};
