import { Post } from "./types";
import { getLocaleDateString } from "./utils";

export const footerLinks = [
  "Support",
  "Jobs",
  "Other inqueries",
  "Privacy Policy",
  "Cookie Policy",
];

export const bentoItems = [
  {
    title: "Beware on the unseen",
    description:
      "Explore a variety of unique golf courses, each boasting different environments and eerie aesthetics, ensuring a fresh challenge with every round.",
    content:
      "Be vigilant and on the lookout for opportunities that can give you an advantage over your opponents. It's crucial to remain alert at all times, as the course is riddled with other hazards that could jeopardize your game. Ball-hurling ghouls can be found lurking in the bunkers, while specters hide in the woods, eager to sabotage your swing.",
  },
  {
    title: "Be vigilant",
    content:
      "Hitting a weak spot in an old church tower might cause it to crumble and crush your rivals under a pile of rubble.",
    description:
      "Lookout for opportunities that can give you an advantage over your opponents.",
  },
  {
    title: "Remain alert",
    description:
      "The course is riddled with other hazards that could jeopardize your game.",
    content:
      "Ball-hurling ghouls can be found lurking in the bunkers, while specters hide in the woods, eager to sabotage your swing.",
  },
];

export const features = [
  {
    idx: 1,
    overline: "Key features",
    title: "Variety",
    description:
      "Explore a variety of unique golf courses, each boasting different environments and eerie aesthetics, ensuring a fresh challenge with every round.",
  },
  {
    idx: 2,
    overline: "Key features",
    title: "Advantages",
    description:
      "Be vigilant and on the lookout for opportunities that can give you an advantage over your opponents. For example, hitting a weak spot in an old church tower can cause it to crumble and crush your rivals under a pile of rubble.",
  },
  {
    idx: 3,
    overline: "Key features",
    title: "Hazards",
    description:
      "It's crucial to remain alert at all times, as the course is riddled with other hazards that could jeopardize your game. Ball-hurling ghouls can be found lurking in the bunkers, while specters hide in the woods, eager to sabotage your swing.",
  },
];

export const posts: Post[] = [
  {
    idx: 1,
    title: `Update #1`,
    createdAt: getLocaleDateString(new Date()).full,
    body: {
      markdown:
        "The character customization tool allows players to choose from a wide range of cosmetic options, including hairstyles, facial features, and clothing. Want to create a golfer that looks like a classic horror movie villain? Or perhaps you prefer a more traditional golfer look? The choice is yours!",
    },
  },
  {
    idx: 2,
    title: `Update #2`,
    createdAt: getLocaleDateString(new Date()).full,
    body: {
      markdown:
        "The character customization tool allows players to choose from a wide range of cosmetic options, including hairstyles, facial features, and clothing. Want to create a golfer that looks like a classic horror movie villain? Or perhaps you prefer a more traditional golfer look? The choice is yours!",
    },
  },
  {
    idx: 3,
    title: `Update #2`,
    createdAt: getLocaleDateString(new Date()).full,
    body: {
      markdown:
        "The character customization tool allows players to choose from a wide range of cosmetic options, including hairstyles, facial features, and clothing. Want to create a golfer that looks like a classic horror movie villain? Or perhaps you prefer a more traditional golfer look? The choice is yours!",
    },
  },
];
