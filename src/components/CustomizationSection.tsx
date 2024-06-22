import React, { FC } from "react";
import { SplatterContainer } from "./SplatterContainer";
import { Constraints } from "./Constraints";
import type { CharacterCustomizationStoryblok } from "../../component-types-sb";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

export const CustomizationSection: FC<{
  blok: CharacterCustomizationStoryblok;
}> = ({ blok }) => {
  return (
    <SplatterContainer {...storyblokEditable(blok)}>
      <Constraints>
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 lg:col-span-8 space-y-4">
            {blok.overline && (
              <h5 className="font-josefin_sans normal-case">{blok.overline}</h5>
            )}
            <h1>{blok.title} </h1>
            {render(blok.text_block)}
          </div>

          <div className="col-span-12 lg:col-span-4 justify-self-center">
            {blok.stats_card &&
              blok.stats_card.map((card) => (
                <StoryblokComponent blok={card} key={card._uid} />
              ))}
          </div>
        </div>
      </Constraints>
    </SplatterContainer>
  );
};
