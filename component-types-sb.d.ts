// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface BlogPostStoryblok {
  label: string;
  title: string;
  excerpt: string;
  cover_image: AssetStoryblok;
  post: RichtextStoryblok;
  component: "blog_post";
  _uid: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  title: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "button";
  _uid: string;
  [k: string]: any;
}

export interface CharacterCustomizationStoryblok {
  overline?: string;
  title: string;
  text_block: RichtextStoryblok;
  stats_card: (
    | BlogPostStoryblok
    | ButtonStoryblok
    | CharacterCustomizationStoryblok
    | FooterStoryblok
    | FooterItemStoryblok
    | ImageBlockStoryblok
    | ImageGridStoryblok
    | KeyFeaturesStoryblok
    | LatestPostsStoryblok
    | MovingCardStoryblok
    | NavigationStoryblok
    | NavItemStoryblok
    | PageStoryblok
    | ReferenceStoryblok
    | SectionItemStoryblok
    | SocialLinkStoryblok
    | SocialLinksStoryblok
    | VideoSectionStoryblok
    | ZoomHeroStoryblok
  )[];
  component: "character_customization";
  _uid: string;
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface FooterStoryblok {
  overline?: string;
  title: string;
  text_block?: RichtextStoryblok;
  character: AssetStoryblok;
  logo: AssetStoryblok;
  background_image: AssetStoryblok;
  logos?: MultiassetStoryblok;
  button?: ISbStoryData<ButtonStoryblok> | string;
  footer_items?: any[];
  developer?: RichtextStoryblok;
  footer_socials: (ISbStoryData<SocialLinkStoryblok> | string)[];
  component: "footer";
  _uid: string;
  [k: string]: any;
}

export interface FooterItemStoryblok {
  title: string;
  blocks?: (
    | BlogPostStoryblok
    | ButtonStoryblok
    | CharacterCustomizationStoryblok
    | FooterStoryblok
    | FooterItemStoryblok
    | ImageBlockStoryblok
    | ImageGridStoryblok
    | KeyFeaturesStoryblok
    | LatestPostsStoryblok
    | MovingCardStoryblok
    | NavigationStoryblok
    | NavItemStoryblok
    | PageStoryblok
    | ReferenceStoryblok
    | SectionItemStoryblok
    | SocialLinkStoryblok
    | SocialLinksStoryblok
    | VideoSectionStoryblok
    | ZoomHeroStoryblok
  )[];
  component: "footer_item";
  _uid: string;
  [k: string]: any;
}

export interface ImageBlockStoryblok {
  main_image: AssetStoryblok;
  top_left?: AssetStoryblok;
  top_right?: AssetStoryblok;
  bottom_left?: AssetStoryblok;
  bottom_right?: AssetStoryblok;
  component: "image_block";
  _uid: string;
  [k: string]: any;
}

export interface ImageGridStoryblok {
  overline?: string;
  title?: string;
  character?: AssetStoryblok;
  images: MultiassetStoryblok;
  component: "image_grid";
  _uid: string;
  [k: string]: any;
}

export interface KeyFeaturesStoryblok {
  overline?: string;
  title?: string;
  features: (
    | BlogPostStoryblok
    | ButtonStoryblok
    | CharacterCustomizationStoryblok
    | FooterStoryblok
    | FooterItemStoryblok
    | ImageBlockStoryblok
    | ImageGridStoryblok
    | KeyFeaturesStoryblok
    | LatestPostsStoryblok
    | MovingCardStoryblok
    | NavigationStoryblok
    | NavItemStoryblok
    | PageStoryblok
    | ReferenceStoryblok
    | SectionItemStoryblok
    | SocialLinkStoryblok
    | SocialLinksStoryblok
    | VideoSectionStoryblok
    | ZoomHeroStoryblok
  )[];
  show_golf_path?: boolean;
  component: "key_features";
  _uid: string;
  [k: string]: any;
}

export interface LatestPostsStoryblok {
  overline?: string;
  title?: string;
  max_num_posts: string;
  show_pagination?: boolean;
  show_banner?: boolean;
  component: "latest_posts";
  _uid: string;
  [k: string]: any;
}

export interface MovingCardStoryblok {
  top_image: AssetStoryblok;
  bottom_image: AssetStoryblok;
  background_image: AssetStoryblok;
  component: "moving_card";
  _uid: string;
  [k: string]: any;
}

export interface NavigationStoryblok {
  logo: AssetStoryblok;
  news_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  nav_links?: any;
  press_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  nav_button?: ISbStoryData<ButtonStoryblok> | string;
  component: "navigation";
  _uid: string;
  [k: string]: any;
}

export interface NavItemStoryblok {
  label: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "nav_item";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | BlogPostStoryblok
    | ButtonStoryblok
    | CharacterCustomizationStoryblok
    | FooterStoryblok
    | FooterItemStoryblok
    | ImageBlockStoryblok
    | ImageGridStoryblok
    | KeyFeaturesStoryblok
    | LatestPostsStoryblok
    | MovingCardStoryblok
    | NavigationStoryblok
    | NavItemStoryblok
    | PageStoryblok
    | ReferenceStoryblok
    | SectionItemStoryblok
    | SocialLinkStoryblok
    | SocialLinksStoryblok
    | VideoSectionStoryblok
    | ZoomHeroStoryblok
  )[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export interface ReferenceStoryblok {
  ref: any[];
  component: "reference";
  _uid: string;
  [k: string]: any;
}

export interface SectionItemStoryblok {
  overline?: string;
  image: AssetStoryblok;
  title: string;
  description: RichtextStoryblok;
  top_left_image?: AssetStoryblok;
  top_right_image?: AssetStoryblok;
  bottom_left_image?: AssetStoryblok;
  bottom_right_image?: AssetStoryblok;
  component: "section_item";
  _uid: string;
  [k: string]: any;
}

export interface SocialLinkStoryblok {
  label: string;
  url: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  type: "" | "discord" | "itch" | "facebook" | "instagram" | "reddit" | "steam" | "x" | "youtube";
  size: string;
  color: string;
  component: "social_link";
  _uid: string;
  [k: string]: any;
}

export interface SocialLinksStoryblok {
  socials: (ISbStoryData<SocialLinkStoryblok> | string)[];
  component: "social_links";
  _uid: string;
  [k: string]: any;
}

export interface VideoSectionStoryblok {
  overline?: string;
  title?: string;
  description?: string;
  right_image?: AssetStoryblok;
  left_image?: AssetStoryblok;
  video?: AssetStoryblok;
  video_url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "video_section";
  _uid: string;
  [k: string]: any;
}

export interface ZoomHeroStoryblok {
  text_image: AssetStoryblok;
  background_image: AssetStoryblok;
  foreground_image: AssetStoryblok;
  fog_layer?: AssetStoryblok;
  component: "zoom_hero";
  _uid: string;
  [k: string]: any;
}
