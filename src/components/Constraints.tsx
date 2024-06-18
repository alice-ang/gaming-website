import { ReactNode } from "react";

export const Constraints = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-2xl h-full w-full">{children}</div>
  );
};
