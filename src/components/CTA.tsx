import React, { FC } from "react";
import { ButtonStoryblok } from "../../component-types-sb";
import { Button } from "./ui/button";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export const CTA: FC<{ blok: ButtonStoryblok }> = ({ blok }) => {
  return (
    // <Link href={blok.link.url} target={blok.link.target}>
    <Button {...storyblokEditable(blok)}>{blok.title}</Button>
    //</Link>
  );
};
