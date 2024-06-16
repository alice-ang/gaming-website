import { Oswald, Baskervville, Josefin_Sans } from "next/font/google";

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

export const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});
