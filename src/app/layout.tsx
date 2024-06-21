import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import type { Metadata } from "next";
import { baskerville, josefin_sans, oswald } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clubhouse on Haunted Hill",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${oswald.variable} ${baskerville.variable} ${josefin_sans.variable}`}
        >
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > */}
          {/* <Navigation /> */}
          {children}
          {/* <Footer /> */}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </StoryblokProvider>
  );
}
