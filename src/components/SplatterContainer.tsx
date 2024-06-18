import { ReactNode } from "react";

export const SplatterContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative">
      <div className="h-16 container-mask w-full bg-palette-footer bg-top object-top bg-cover" />
      <div className="py-16 bg-palette-footer">{children}</div>
      <div className="h-16 container-mask w-full bg-palette-footer bg-top object-top bg-cover scale-y-[-1]" />
    </section>
  );
};