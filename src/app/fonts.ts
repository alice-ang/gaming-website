import { Oswald, Baskervville } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const baskerville = Baskervville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
  weight: "400",
});
