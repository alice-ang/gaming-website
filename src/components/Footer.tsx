"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Constraints } from "./Constraints";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const saluteY = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);

  return (
    <section className="relative overflow-hidden">
      <Constraints>
        <div
          className="grid grid-cols-12 items-center gap-6  relative py-24 "
          ref={ref}
        >
          <Image
            src={"/victims.png"}
            fill
            alt="Characters"
            className="object-contain bg-right object-center absolute opacity-10 aspect-video -rotate-6 scale-125 lg:scale-90 lg:translate-x-56 "
          />
          <div className="col-span-12 lg:col-span-6 ">
            <button className="text-2xl text-palette-yellow border border-palette-yellow px-6 py-2 -rotate-12 mb-4">
              Community
            </button>
            <h2 className="title uppercase">
              Take <br />
              the <br />
              Swing
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 h-full relative items-center justify-center flex flex-col">
            <div className="space-y-8 items-start justify-start flex flex-col relative">
              <div className="space-y-4">
                <h4>Official forums</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eleifend porta sem, sit amet ultricies nunc vehicula at.
                  Vestibulum urna arcu, suscipit semper nisl ut, imperdiet
                  imperdiet purus. Maecenas accumsan ullamcorper arcu ac
                  finibus. Aenean porttitor, libero quis tempus venenatis, nibh
                  urna tincidunt felis, non condimentum augue lacus vel ligula.
                  Morbi id orci tristique.
                </p>
              </div>
              <Button>Go to discord</Button>
              {/* socials here      */}
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
                src={"/gibbet.png"}
                alt="logo-full"
                width={190}
                height={60}
              />

              <div className="flex flex-row items-start flex-wrap gap-4 justify-between">
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
                      Kaplansgatan 16B,
                      <br />
                      541 34 Skövde, Sweden
                    </p>
                  </div>
                </div>
                <div className="space-y-4 w-full lg:w-1/3">
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
                  {/* <div className="flex space-x-8 items-center">
                    {footerLinks.map((link, index) => (
                      <p className="underline" key={link}>
                        {link}
                      </p>
                    ))}
                  </div> */}
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
                <p className="text-palette-lightGrey text-sm">
                  © 2024 Gibbet Games | All Rights Reserved
                </p>
                <p className="text-palette-lightGrey text-sm">
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
