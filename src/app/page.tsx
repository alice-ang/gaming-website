import { Constraints, Roadmap, SnapSection, ZoomHero } from "@/components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <section className="py-24">
          <Constraints>
            <Roadmap />
          </Constraints>
        </section>
        {Array.from({ length: 2 }).map((_, index) => (
          <section key={index} className="min-h-screen py-24">
            <Constraints>
              <div className="flex flex-col justify-between items-stretch h-full">
                <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center">
                  <h1>Welcome to Clubhouse on Haunted Hill</h1>
                  <p>
                    Dare to accept the invitation from enigmatic millionaire
                    Nicolas Craven and embark on a spine-chilling golf adventure
                    at the Club House on Haunted Hill.
                  </p>
                </div>
                <div className=" grid grid-cols-12 gap-4 h-full items-center ">
                  <div className="col-span-12 md:col-span-4 relative aspect-video">
                    <Image
                      src="https://www.xborg.com/_next/image?url=%2Fimages%2Flanding%2Favatar.png&w=3840&q=75"
                      alt="charachter"
                      fill
                      className=" object-contain bg-center scale-[1.3] md:scale-[3.2]"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-8 grid-cols-subgrid-4 grid gap-4 relative z-10 ">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        className={cn(
                          index === 0 ? "col-span-4" : "col-span-2"
                        )}
                        key={index}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle>Gaming Launchpad</CardTitle>
                            <CardDescription>
                              Funding the most-promising gaming projects.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <span>
                              Dare to accept the invitation from enigmatic
                              millionaire Nicolas Craven and embark on a
                              spine-chilling golf adventure at the Club House on
                              Haunted Hill.
                            </span>
                          </CardContent>
                          <CardFooter>
                            <p>Visit Launchpad</p>
                          </CardFooter>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Constraints>
          </section>
        ))}
      </div>
    </main>
  );
}
