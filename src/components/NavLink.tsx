import Link from "next/link";
import React, { FC } from "react";
import type { NavLinkStoryblok } from "../../component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

export const NavLink: FC<{ blok: NavLinkStoryblok }> = ({ blok }) => {
  return (
    <Link href={blok.link.url} {...storyblokEditable(blok)}>
      {blok.label}
    </Link>
  );
};
