"use client";
import React, { useRef } from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { footerLinks } from "@/lib/mock";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["70%", "100%"]);

  return (
    <section className="relative overflow-hidden">
      <Constraints>
        <div
          className="grid grid-cols-12 items-center relative py-56"
          ref={ref}
        >
          <Image
            src={"/victims.png"}
            fill
            alt="Characters"
            className="object-contain bg-right object-center	absolute opacity-10 aspect-video -rotate-6 scale-90 translate-x-56"
          />
          <div className="col-span-12 md:col-span-6 ">
            <button className="text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 -rotate-12 mb-4">
              Community
            </button>
            <h2 className="title uppercase">
              Take <br />
              the <br />
              Swing
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 h-full relative items-center justify-center flex flex-col">
            <div className="space-y-8 items-start justify-start flex flex-col relative">
              <div className="space-y-4">
                <h4>Official forums</h4>
                <p>
                  Want to explore more HELLDIVERS 2? Looking to forge
                  friendships? Want your voice to be heard? <br />
                  Join our server for all the latest news, info & updates about
                  the studio and our game. Don’t hesitate, enlist today!
                </p>
              </div>
              <Button>Go to discord</Button>
              socials
            </div>
          </div>

          <motion.img
            style={{
              y: saluteY,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              scale: 1.3,
            }}
            src={"/priest.png"}
            width={340}
            height={290}
            alt="Priest"
            className="object-contain bg-center object-center bottom-0 absolute -left-24 rotate-6 hidden md:block"
          />
        </div>
      </Constraints>

      <footer className="relative ">
        <div className=" w-full bg-[url('/footer.png')] h-16 -top-16  bg-no-repeat object-cover bg-center bg-cover absolute z-100" />

        <div className="bg-[#000B10] p-4 ">
          <Constraints>
            <div className="space-y-16">
              <Image
                src={"/gibbet.png"}
                alt="logo-full"
                width={190}
                height={60}
              />

              <div className="space-x-16 flex flex-row items-start flex-wrap">
                <div className="flex-1 space-x-16 flex flex-row ">
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
                      Hammarby Kaj 10d,
                      <br />
                      Stockholm 120 32, Sweden
                    </p>
                  </div>
                </div>
                <div className="space-y-4 ">
                  <h6 className="overline-title"> Newsletter</h6>
                  <form>
                    <div className="flex-1">
                      <div className="w-full relative flex flex-nowrap ">
                        <input
                          className="bg-neutral-200 py-3 px-6 flex-1"
                          placeholder="eg. yourname@example.com"
                        />
                        <div className="absolute  right-0 ">
                          <button
                            type="submit"
                            className="bg-palette-backgroundLight py-3 px-6"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex space-x-8 items-center">
                    {footerLinks.map((link, index) => (
                      <p className="underline" key={link}>
                        {link}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex flex-row justify-between flex-wrap items-center gap-4 lg:gap-x-32 lg:gap-y-4 ">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Image
                    src={"/gibbet.png"}
                    alt="logo-full"
                    width={120}
                    height={30}
                    key={index}
                  />
                ))}
              </div>

              <div className="flex flex-row justify-between items-center">
                <p className="text-palette-darkGrey text-sm">
                  © 2024 Arrowhead Game Studios | All Rights Reserved
                </p>
                <p className="text-palette-darkGrey text-sm">
                  Website crafted by Alice A
                </p>
              </div>
            </div>
          </Constraints>
        </div>
      </footer>
    </section>
  );
};