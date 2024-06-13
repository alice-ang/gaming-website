import React, { ReactNode } from "react";

export const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center min-h-screen h-screen snap-always py-24">
      {children}
    </section>
  );
};
