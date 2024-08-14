"use client";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { Constraints } from "./Constraints";
import type { NavigationStoryblok } from "../../component-types-sb";
import { Button } from "./ui/button";
import { Hamburger } from "./Hamburger";
import { AnimatePresence, motion, Variants } from "framer-motion";

const variants: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: () => ({
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 50,
    },
  }),
};

const mobileNav: Variants = {
  closed: {
    height: 0,
  },
  open: {
    height: "100%",
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },

  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,

      delay: 0.2 * index,
    },
  }),
};

export const Navigation: FC = () => {
  const [nav, setNav] = useState<NavigationStoryblok>();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();

      const { data } = await storyblokApi.get("cdn/stories/layout/navigation", {
        version: "draft",
        resolve_links: "url",
      });

      setNav(data.story.content);
    };

    const fetchLinks = async () => {
      const storyblokApi = getStoryblokApi();

      const { data } = await storyblokApi.get("cdn/links", {
        version: "draft",
      });

      let navSlugs: string[] = [];

      Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder) {
          return;
        }
        const slug = data.links[linkKey].slug;

        if (!slug.includes("/")) {
          navSlugs.push(slug);
        }
      });

      setLinks(navSlugs.sort());
    };

    fetchData();
    fetchLinks();
  }, []);

  if (!nav) {
    return;
  }

  return (
    <div>
      <motion.nav
        className="bg-gradient-to-b from-black to-transparent py-6 fixed top-0 z-40 w-full"
        ref={ref}
        variants={variants}
        initial="offscreen"
        animate="onscreen"
        viewport={{ amount: 0.8, once: true }}
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
                  className="animation-transition hover:scale-110 hover:rotate-12"
                />
              </Link>
            )}

            <ul className=" gap-8 items-center hidden xl:flex">
              {links.map((link) => (
                <li className="text-lg uppercase cursor-pointer" key={link}>
                  <Link href={`/${link}`} className="font-josefin_sans">
                    {link}
                  </Link>
                </li>
              ))}

              {nav.demo_link?.url && (
                <Link
                  passHref
                  href={nav.demo_link.url}
                  target={nav.demo_link.target}
                >
                  <Button>Play Demo</Button>
                </Link>
              )}
            </ul>
            <button
              className="block xl:hidden"
              onClick={() => setOpen(!isOpen)}
            >
              <Hamburger isClicked={isOpen} />
            </button>
          </div>
        </Constraints>
      </motion.nav>
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            variants={mobileNav}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden fixed h-screen w-screen bg-palette-footer z-20 flex-col justify-center items-center flex xl:hidden "
          >
            <ul className="space-y-4 lg:space-y-8">
              {links.map((item, index) => (
                <motion.li
                  variants={mobileNav}
                  initial="offscreen"
                  animate="onscreen"
                  exit={"offscreen"}
                  viewport={{ amount: 0.8, once: true }}
                  custom={index}
                  key={index}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={`/${item}`}
                    className="text-4xl lg:text-5xl font-josefin_sans uppercase font-semibold"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}

              {nav.demo_link?.url && (
                <motion.li
                  variants={mobileNav}
                  initial="offscreen"
                  animate="onscreen"
                  exit={"offscreen"}
                  viewport={{ amount: 0.8, once: true }}
                  custom={links.length + 1}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={nav.demo_link.url}
                    passHref
                    className="text-4xl lg:text-5xl font-josefin_sans uppercase font-semibold"
                  >
                    Demo
                  </Link>
                </motion.li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
