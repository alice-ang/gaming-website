import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC, ReactNode } from "react";
import { Constraints } from "./Constraints";

export const SplatterContainer: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <section className="relative">
      <div className="h-16 container-mask w-full bg-palette-footer bg-top object-top bg-cover" />
      <div className="py-16 bg-palette-footer">
        <Constraints>{children}</Constraints>
      </div>
      <div className="h-16 container-mask w-full bg-palette-footer bg-top object-top bg-cover scale-y-[-1]" />
    </section>
  );
};
