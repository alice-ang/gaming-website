"use client";
import React, { FC, useEffect, useState } from "react";
import { SocialLinksStoryblok } from "../../component-types-sb";
import { SocialLink } from "./SocialLink";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";

export const SocialMedia: FC = () => {
  const [blok, setBlok] = useState<SocialLinksStoryblok>();

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();

      const { data } = await storyblokApi.get("cdn/stories/518726709", {
        version: "draft",
        resolve_links: "url",
      });

      console.log(data);
      // setBlok(data.story.content);
    };

    fetchData();
  }, []);

  if (!blok) {
    return;
  }
  console.log("blok");
  return (
    <div className="space-x-4" {...storyblokEditable(blok)}>
      {/* {blok?.socials &&
        blok.socials.map((social) => (
          <SocialLink blok={social.content} key={social.id} />
        ))} */}
      <h1>blok</h1>
    </div>
  );
};
