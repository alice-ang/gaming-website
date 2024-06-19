import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocaleDateString = (currentDate: Date | string) => {
  const formattedDate = new Date(currentDate);

  return {
    full: formattedDate.toLocaleDateString("en", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    home: formattedDate.toLocaleDateString("en", {
      weekday: "long",
      day: "numeric",
      month: "short",
    }),
    offerValid: formattedDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    month: formattedDate.toLocaleDateString("en", {
      month: "long",
      day: "numeric",
    }),
    day: formattedDate.toLocaleDateString("en", {
      month: "short",
      day: "numeric",
    }),
  };
};
