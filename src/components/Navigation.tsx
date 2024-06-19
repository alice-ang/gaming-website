import React from "react";
import { Constraints } from "./Constraints";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="bg-transparent py-6 px-4 fixed top-0 z-40 w-full backdrop-blur-sm ">
      <Constraints>
        <div className="flex flex-row items-center w-full justify-between ">
          <Link href={"/"} passHref>
            <Image
              src="/ball-logo.png"
              alt="golf ball logo"
              height={60}
              width={60}
              className="animation-transition hover:scale-110"
            />
          </Link>

          <ul className="flex gap-8 items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <Link href={"/"} key={index}>
                Link
              </Link>
            ))}
            <Button>Play demo</Button>
          </ul>
        </div>
      </Constraints>
    </nav>
  );
};
