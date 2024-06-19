import {
  Constraints,
  ImageGrid,
  SplatterContainer,
  StatsCard,
  ZoomHeader,
} from "@/components";
import { features } from "@/lib/mock";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ZoomHeader />

      <section className="h-screen max-h-[1280px] ">
        <div className="h-24 container-mask w-full bg-black bg-top object-top bg-cover scale-y-[-1]" />

        <Constraints>
          <div className="flex flex-col justify-between items-stretch h-full section-padding">
            <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center">
              <h1>Accept the invitation</h1>
              <p>
                Dare to accept the invitation from enigmatic millionaire Nicolas
                Craven and embark on a spine-chilling golf adventure at the Club
                House on Haunted Hill.
              </p>
            </div>
            <div className=" grid grid-cols-12 gap-4 h-full items-center ">
              <div className="col-span-12 lg:col-span-4 hidden lg:block relative aspect-video">
                <Image
                  src="https://www.xborg.com/_next/image?url=%2Fimages%2Flanding%2Favatar.png&w=3840&q=75"
                  alt="charachter"
                  fill
                  className="object-contain bg-center scale-[1.3] lg:scale-[3.2]"
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

      <div className="section-padding">
        {features.map((feature, index) => (
          <section key={index} className="section-padding">
            <Constraints>
              <div className="grid grid-cols-12 gap-4 xl:gap-[130px] items-center">
                <div
                  className={cn(
                    index % 2 ? "lg:order-last " : "lg:text-right",
                    "col-span-12 lg:col-span-6 space-y-4"
                  )}
                >
                  <h5 className="font-josefin_sans normal-case">
                    {feature.overline}
                  </h5>
                  <h1>{feature.title} </h1>
                  <p>{feature.description}</p>
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
      </div>
      {/* <section className="section-padding">
        <Constraints>
          <Roadmap />
        </Constraints>
      </section> */}
      <section className="">
        <Constraints>
          <div className="flex flex-col justify-center items-center space-y-8">
            <div className="text-center space-y-4">
              <h5 className="font-josefin_sans normal-case">Check out the</h5>
              <h1>Latest news </h1>
            </div>
            <div className="grid grid-cols-3 gap-6 w-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    index % 2 ? " hover:rotate-2" : "hover:-rotate-2",
                    "rotate-0 col-span-3 md:col-span-1 bg-white w-full p-2: lg:p-4 relative space-y-4 shadow-md border border-white animation-transition"
                  )}
                >
                  <div
                    className={cn(
                      index % 2 ? "rotate-12" : "-rotate-6",
                      "absolute bg-palette-background brush-mask right-0 z-10"
                    )}
                  >
                    <h3 className="font-josefin_sans px-12 py-4">UPDATE #1</h3>
                  </div>

                  <div className="aspect-video relative">
                    <Image
                      fill
                      alt="post"
                      src={"/blurry.png"}
                      className="aspect-video"
                    />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-palette-red">Fri, November 26, 2021</h5>
                    <p className="line-clamp-2 text-black">
                      The character customization tool allows players to choose
                      from a wide range of cosmetic options, including
                      hairstyles, facial features, and clothing. Want to create
                      a golfer that looks like a classic horror movie villain?
                      Or perhaps you prefer a more traditional golfer look? The
                      choice is yours!
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="font-josefin_sans normal-case">See all</h4>
          </div>
        </Constraints>
      </section>
      <ImageGrid />
    </main>
  );
}
