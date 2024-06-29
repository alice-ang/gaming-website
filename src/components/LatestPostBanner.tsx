import React, { FC } from "react";
import Image from "next/image";

export const LatestPostBanner: FC = () => {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-8 relative aspect-video"></div>
      <div className="col-span-4 bg-white flex flex-col justify-between pt-8"></div>
    </div>
  );
};
