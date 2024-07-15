import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Constraints = ({
  children,
  hasPadding = true,
}: {
  children: ReactNode;
  hasPadding?: boolean;
}) => {
  return (
    <div
      className={cn(
        hasPadding ? "px-4" : "",
        "mx-auto max-w-screen-2xl h-full w-full "
      )}
    >
      {children}
    </div>
  );
};
