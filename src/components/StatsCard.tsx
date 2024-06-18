import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export const StatsCard = () => {
  return (
    <CardContainer className="border border-black bg-white p-3 rounded-xl shadow:sm hover:shadow-2xl w-fit">
      <CardBody className="relative group/card  h-auto shover:shadow-2xl rounded-xl bg-[url('/tree.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full overflow-hidden absolute rounded-xl group-hover/card:backdrop-blur-xs bg-black/10 transition duration-150 ease-in-out" />

        <CardItem translateZ="70" className="w-full">
          <Image
            src="/grimes.png"
            height="300"
            width="300"
            className=" object-contain scale-110 group-hover/card:scale-125 transition duration-300 ease-in-out translate-y-12 mx-auto"
            alt="thumbnail "
          />
        </CardItem>

        <CardItem translateZ="100" className="relative">
          <Image
            src="/stats.png"
            height="300"
            width="300"
            className="object-contain mx-auto w-fit h-auto"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
