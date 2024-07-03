import React, { FC } from "react";
import { SocialLinksStoryblok } from "../../component-types-sb";
import { SocialLink } from "./SocialLink";

export const SocialMedia: FC<{ blok: SocialLinksStoryblok }> = ({ blok }) => {
  return (
    <div className="space-x-4">
      {blok?.socials &&
        blok.socials.map((social) => (
          <SocialLink blok={social.content} key={social} />
        ))}
    </div>
  );
};
