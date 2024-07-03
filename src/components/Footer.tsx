"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";
import { Constraints } from "./Constraints";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { storyblokEditable } from "@storyblok/react/rsc";
import type { FooterStoryblok } from "../../component-types-sb";
import { render } from "storyblok-rich-text-react-renderer";
import { cn } from "@/lib/utils";
import { SocialMedia } from "./SocialMedia";

export const Footer: FC<{ blok: FooterStoryblok }> = ({ blok }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);

  return (
    <section className="relative overflow-hidden" {...storyblokEditable(blok)}>
      <Constraints>
        <div
          className="grid grid-cols-12 items-center gap-16 xl:gap-[130px] relative section-padding"
          ref={ref}
        >
          <Image
            src={blok.background_image.filename}
            fill
            alt={blok.background_image.alt ?? "Characters"}
            className="object-contain bg-right object-center absolute opacity-10 aspect-video -rotate-6 scale-125 lg:scale-90 lg:translate-x-56 pointer-events-none"
          />
          <div className="col-span-12 lg:col-span-6 ">
            {blok.overline && (
              <button className="w-fit text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 -rotate-12 mb-4">
                {blok.overline}
              </button>
            )}
            {blok?.socials && <SocialMedia blok={blok.socials} />}

            <h2 className="title uppercase max-w-[90px]">{blok.title}</h2>
          </div>
          <div className="col-span-12 lg:col-span-6 h-full relative items-center justify-center flex flex-col">
            <div className="space-y-8 items-start justify-start flex flex-col relative">
              <div className="space-y-4">{render(blok.text_block)}</div>
              <Button>Go to discord</Button>
            </div>
          </div>

          <motion.img
            style={{
              y: saluteY,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              scale: 1.3,
            }}
            src={blok.character.filename}
            width={340}
            height={290}
            alt={blok.character.alt ?? "character"}
            className="object-contain bg-center object-center bottom-0 absolute -left-24 rotate-6 hidden lg:block"
          />
        </div>
      </Constraints>

      <footer className="relative ">
        <div className="h-10 xl:h-44 footer-mask w-full bg-palette-footer bg-top object-top bg-cover" />

        <div className="bg-palette-footer p-4">
          <Constraints>
            <div className="space-y-16">
              <Image
                src={blok.logo.filename}
                alt={blok.logo.alt ?? "logo"}
                width={190}
                height={60}
              />

              <div className="flex flex-row items-start flex-wrap gap-4 justify-between">
                <div className="flex-1 space-x-12 md:space-x-16 flex flex-row ">
                  <div className="space-y-4 ">
                    <h6 className="overline-title">Follow us</h6>
                    <div>
                      {[0, 1, 2].map((_, index) => (
                        <p key={index}>Twitter</p>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 ">
                    <h6 className="overline-title"> Office location</h6>
                    <p>
                      Kaplansgatan 16B,
                      <br />
                      541 34 Skövde, Sweden
                    </p>
                  </div>
                </div>
                <div className="space-y-4 w-full md:w-1/3">
                  <h6 className="overline-title"> Newsletter</h6>
                  <form>
                    <div className="">
                      <div className="w-full relative flex flex-nowrap ">
                        <input
                          className="bg-neutral-200 py-3 px-4 flex-1"
                          placeholder="eg. yourname@example.com"
                        />
                        <div className="absolute right-0 ">
                          <button
                            type="submit"
                            className="bg-palette-yellow py-3 px-6 text-palette-footer rounded-r-sm"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <Separator />
              <div
                className={cn(
                  blok.logos?.length && blok.logos.length > 2
                    ? "justify-between"
                    : "justify-start",
                  "flex flex-row  flex-wrap items-center gap-4 lg:gap-x-32 lg:gap-y-6 "
                )}
              >
                {blok.logos?.map((logo, index) => (
                  <Image
                    src={logo.filename}
                    alt={logo.alt ?? "logo "}
                    width={140}
                    height={40}
                    key={index}
                  />
                ))}
              </div>

              <div className="flex justify-center">
                {blok.developer && (
                  <div className="text-center ">{render(blok.developer)}</div>
                )}
              </div>
            </div>
          </Constraints>
        </div>
      </footer>
    </section>
  );
};
