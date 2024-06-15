import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Roadmap = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      layout="slider"
      className="w-full space-y-4"
    >
      <h1 className="pb-12">Our roadmap</h1>

      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 xl:basis-1/3 space-y-4"
          >
            <h2 className="text-palette-yellow">Q{index + 1} 2024</h2>
            <div className="border-l-2 p-4 ">
              <p>
                Create your gaming identity and unlock a new world of
                possibilities.
                <br />
                Create your gaming identity and unlock a new world of
                possibilities.
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
