import {
  Constraints,
  ImageGrid,
  SplatterContainer,
  StatsCard,
  ZoomHeader,
} from "@/components";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ZoomHeader />
      {/* <div className="relative  bg-black aspect-video ">
        <div className=" h-full w-full bg-[url('/tree.png')] vingette bg-contain aspect-video object-contain bg-center bg-fixed	bg-no-repeat ">
          <iframe
            src="https://www.youtube.com/embed/oD3pxbG9YYI?si=F8xI4etqxs2EG9hY&amp;controls=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute h-full w-full mask "
          ></iframe>
        </div>

         <Image
          src="/tree.png"
          alt="trees"
          className="aspect-video object-cover h-full w-full bg-center mask2 bg-fixed"
          fill
        /> 
      </div> */}

      <section className="h-screen max-h-[1280px] ">
        <div className="h-24 container-mask w-full bg-black bg-top object-top bg-cover scale-y-[-1]" />

        <Constraints>
          <div className="flex flex-col justify-between items-stretch h-full py-24">
            <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center">
              <h1>Accept the invitation</h1>
              <p>
                Dare to accept the invitation from enigmatic millionaire Nicolas
                Craven and embark on a spine-chilling golf adventure at the Club
                House on Haunted Hill.
              </p>
            </div>
            <div className=" grid grid-cols-12 gap-4 h-full items-center ">
              <div className="col-span-12 lg:col-span-4 relative aspect-video">
                <Image
                  src="https://www.xborg.com/_next/image?url=%2Fimages%2Flanding%2Favatar.png&w=3840&q=75"
                  alt="charachter"
                  fill
                  className=" object-contain bg-center scale-[1.3] lg:scale-[3.2]"
                />
              </div>
              <div className="col-span-12 lg:col-span-8 relative z-10 ">
                <iframe
                  src="https://www.youtube.com/embed/oD3pxbG9YYI?si=F8xI4etqxs2EG9hY&amp;controls=0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="aspect-video h-full w-full mask"
                ></iframe>
              </div>
            </div>
          </div>
        </Constraints>
      </section>

      <div className="py-24 ">
        <SplatterContainer>
          <Constraints>
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 lg:col-span-8 space-y-4">
                <h5 className="font-josefin_sans normal-case">Welcome to</h5>
                <h1>Clubhouse on haunted hill </h1>
                <p>
                  The character customization tool allows players to choose from
                  a wide range of cosmetic options, including hairstyles, facial
                  features, and clothing. Want to create a golfer that looks
                  like a classic horror movie villain? Or perhaps you prefer a
                  more traditional golfer look? The choice is yours!
                  <br />
                  <br />
                  Players can select from a variety of different stats to
                  enhance their golfing skills. Stats such as Muscle, Control,
                  Cunning, Mercy, and Sanity can be customized to fit each
                  players unique playstyle, offering a level of personalization
                  that is rarely found in other golf games.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-4 justify-self-center">
                <StatsCard />
              </div>
            </div>
          </Constraints>
        </SplatterContainer>
        {Array.from({ length: 4 }).map((_, index) => (
          <section key={index} className="py-24">
            <Constraints>
              <div className="grid grid-cols-12 gap-4 lg:gap-[130px] items-center">
                <div
                  className={cn(
                    index % 2 ? "lg:order-last " : "lg:text-right",
                    "col-span-12 lg:col-span-6 space-y-4"
                  )}
                >
                  <h5 className="font-josefin_sans normal-case">Welcome to</h5>
                  <h1>Clubhouse on haunted hill </h1>
                  <p>
                    Dare to accept the invitation from enigmatic millionaire
                    Nicolas Craven and embark on a spine-chilling golf adventure
                    at the Club House on Haunted Hill. Immerse yourself in this
                    semi-horror, story-driven, action-packed, multiplayer golf
                    game that brings heart-pounding twists and supernatural
                    thrills to the classic game of golf. Engage in a cinematic
                    campaign mode, where youll unravel the games story in the
                    style of a classic horror film, or challenge your friends,
                    local or online, in a casual yet deadly game of golf.
                  </p>
                </div>

                <div
                  className={cn(
                    index % 2 ? "mask" : "mask",
                    "col-span-12 lg:col-span-6 h-full w-full  aspect-video relative shadow"
                  )}
                >
                  <Image
                    src="/tree.png"
                    alt="trees"
                    className="aspect-video object-cover h-full w-full bg-center"
                    fill
                  />
                </div>
              </div>
            </Constraints>
          </section>
        ))}
      </div>
      {/* <section className="py-24">
        <Constraints>
          <Roadmap />
        </Constraints>
      </section> */}

      <ImageGrid />
    </main>
  );
}
