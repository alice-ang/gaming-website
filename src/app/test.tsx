import {
  Constraints,
  ImageGrid,
  PostItem,
  SplatterContainer,
  StatsCard,
  ZoomHeader,
} from "@/components";
import { posts } from "@/lib/mock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ZoomHeader />

      <section className="h-screen max-h-[1280px] ">
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
        <Constraints>
          <div className="flex flex-row items-center justify-center space-y-4">
            <div className=" text-center ">
              <h5 className="font-josefin_sans normal-case">Welcome to</h5>
              <h1>Clubhouse on haunted hill </h1>
            </div>
          </div>
        </Constraints>
        {/* {features.map((feature, index) => (
          <SectionItem blok={undefined} {...feature} key={index} />
        ))} */}
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
              {posts.map((post, index) => (
                <PostItem key={index} {...post} />
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
