import {
  Constraints,
  ImageGrid,
  Roadmap,
  StatsCard,
  VideoContainer,
  ZoomHeader,
} from "@/components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { bentoItems } from "@/lib/mock";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ZoomHeader />
      {/* <div className="vingette">
        <img src="https://clubhouseonhauntedhill.com/images/image-_1_-_1_-1.webp" />
      </div> */}
      <div className="py-24 ">
        <Constraints>
          <VideoContainer />
        </Constraints>
        {Array.from({ length: 1 }).map((_, index) => (
          <section key={index} className="h-screen py-24 max-h-[1280px] ">
            <Constraints>
              <div className="flex flex-col justify-between items-stretch h-full">
                <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center">
                  <h1>Accept the invitation</h1>
                  <p>
                    Dare to accept the invitation from enigmatic millionaire
                    Nicolas Craven and embark on a spine-chilling golf adventure
                    at the Club House on Haunted Hill.
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
                  <div className="col-span-12 lg:col-span-8 grid-cols-subgrid-4 grid gap-4 relative z-10 ">
                    {bentoItems.map((item, index) => (
                      <div
                        className={cn(
                          index === 0 ? "col-span-4" : "col-span-2"
                        )}
                        key={index}
                      >
                        <Card className="h-full">
                          <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <span>{item.content}</span>
                          </CardContent>
                          {/* <CardFooter>
                            <p>Visit Launchpad</p>
                          </CardFooter> */}
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Constraints>
          </section>
        ))}
        <section>
          <Constraints>
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-8 ">hej</div>

              <div className="col-span-4  justify-self-center">
                <StatsCard />
              </div>
            </div>
          </Constraints>
        </section>
        {Array.from({ length: 4 }).map((_, index) => (
          <section key={index} className="py-24">
            <Constraints>
              <div className="grid grid-cols-12 gap-4 lg:gap-[130px]">
                <div
                  className={cn(
                    index % 2 ? "order-last " : "text-right",
                    "col-span-7 space-y-4"
                  )}
                >
                  <h5 className="font-josefin_sans">Overline</h5>
                  <h2>Welcome to clubhouse on haunted hoöö </h2>
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

                <div className="col-span-5 h-full w-full mask aspect-video relative shadow">
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
      <section>
        <ImageGrid />
      </section>
    </main>
  );
}
