"use client";
import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ZoomHero = ({ children }: { children: ReactNode }) => {
  const container = useRef<any>();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false,
          },
        })
        .to("img", {
          scale: 2,
          z: 250,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          ".section.hero",
          {
            scale: 1.4,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );
    },
    { scope: container }
  );
  return (
    <div className="relative w-full h-[300vh] z-10 wrapper" ref={container}>
      <div className="absolute left-0 top-0 w-full h-screen flex flex-col justify-center items-center text-red-500 z-20">
        <h1 className="text-4xl font-beth-ellen">The Story of</h1>
        <p className="text-5xl font-chelsea-market font-bold">
          something very spooky
        </p>
      </div>
      <div className="relative w-full z-10 overflow-x-hidden">
        <section
          className="w-full h-screen bg-cover bg-center transition-opacity duration-500 ease"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1512747646639-ed824d861e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></section>
        {children}
      </div>
      <div className="absolute top-0 left-0 right-0 w-full h-screen perspective-500 overflow-hidden">
        <Image
          fill
          className="w-full h-full object-cover object-center relative z-40"
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
          alt="image"
        />
      </div>
    </div>
  );
};
