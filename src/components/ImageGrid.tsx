import Image from "next/image";

export const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: 14 }).map((image, index) => (
        <div
          className="relative h-full w-full aspect-video col-span-1 bg-black"
          key={index}
        >
          <Image
            src={"/blurry.png"}
            fill
            alt="image"
            className="aspect-video  object-cover hover:grayscale-0 grayscale transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};
