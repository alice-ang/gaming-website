import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { FC } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import type { CharacterCustomizationStoryblok } from "../../component-types-sb";
import { Constraints } from "./Constraints";
import { SplatterContainer } from "./SplatterContainer";

export const CustomizationSection: FC<{
  blok: CharacterCustomizationStoryblok;
}> = ({ blok }) => {
  return (
    <SplatterContainer {...storyblokEditable(blok)}>
      <Constraints>
        <div className="grid grid-cols-12 gap-6 xl:gap-32 ">
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
