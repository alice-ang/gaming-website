import { Constraints, SnapSection, StickyScroll } from "@/components";
import { Button } from "@/components/ui/button";
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
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
      {Array.from({ length: 4 }).map((_, index) => (
        <SnapSection key={index}>
          <Constraints>
            <div className="flex flex-col justify-between items-stretch h-full">
              <div className="flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto text-center">
                <h1>Experience our next-gen applications</h1>
                <p>
                  Create your gaming identity and unlock a new world of
                  possibilities.
                </p>
              </div>
              <div className=" grid grid-cols-12 gap-4  h-full items-center ">
                <div className="col-span-4 relative aspect-video">
                  <Image
                    src="https://www.xborg.com/_next/image?url=%2Fimages%2Flanding%2Favatar.png&w=3840&q=75"
                    alt="charachter"
                    fill
                    className=" object-cover bg-center scale-[2.6]"
                  />
                </div>
                <div className="col-span-8 grid-cols-subgrid-4 grid gap-4 relative z-10 ">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      className={cn(index === 0 ? "col-span-4" : "col-span-2")}
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
                          <span>Visit Launchpad</span>
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
        </SnapSection>
      ))}
    </div>
  );
}
