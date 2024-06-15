import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const SnapSection = ({
  children,
  fullscreen = false,
}: {
  children: ReactNode;
  fullscreen?: boolean;
}) => {
  return (
    <section
      className={cn(
        fullscreen ? " h-screen " : "h-auto",
        "snap-center snap-always py-24 max-h-[1920px]"
      )}
    >
      {children}
    </section>
  );
};
