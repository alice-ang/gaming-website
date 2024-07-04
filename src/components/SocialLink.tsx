import { Button } from "@/components/ui/button";
import { FC } from "react";
import type { SocialLinkStoryblok } from "../../component-types-sb";
import {
  FaDiscord,
  FaItchIo,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaSteam,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const SocialLink: FC<{ blok: SocialLinkStoryblok }> = ({ blok }) => {
  // console.log(blok);

  const renderIcon = (
    type:
      | ""
      | "discord"
      | "itch"
      | "facebook"
      | "instagram"
      | "reddit"
      | "steam"
      | "x"
      | "youtube",
    size: number,
    color: string
  ) => {
    switch (type) {
      case "discord":
        return <FaDiscord size={size} color={color} />;
      case "itch":
        return <FaItchIo size={size} color={color} />;
      case "facebook":
        return <FaFacebook size={size} color={color} />;
      case "instagram":
        return <FaInstagram size={size} color={color} />;
      case "reddit":
        return <FaReddit size={size} color={color} />;
      case "steam":
        return <FaSteam size={size} color={color} />;
      case "x":
        return <FaXTwitter size={size} color={color} />;
      case "youtube":
        return <FaYoutube size={size} color={color} />;
      default:
        return "";
    }
  };

  return (
    <Button size="icon" variant="icon" asChild>
      <Link href={blok?.url?.url ?? ""} target="_blank">
        {renderIcon(blok?.type, Number(blok?.size), blok?.color)}
      </Link>
    </Button>
  );
};
