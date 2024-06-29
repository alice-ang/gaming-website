import { Navigation, StoryblokProvider, Footer } from "@/components";
import { Dialog } from "@/components/ui/dialog";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react/rsc";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { baskerville, josefin_sans, oswald } from "./fonts";
import "./globals.css";
import type { FooterStoryblok } from "../../component-types-sb";

export const metadata: Metadata = {
  title: "Clubhouse on Haunted Hill",
  description: "Generated by create next app",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  });
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { blok }: { blok: FooterStoryblok } = await fetchData();

  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${oswald.variable} ${baskerville.variable} ${josefin_sans.variable} bg-[url('/texture.jpg')] `}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Dialog>
              <Navigation />
              {children}

              <Footer blok={blok} />
            </Dialog>
          </ThemeProvider>
        </body>
      </html>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/layout/footer", {
    version: "draft",
    resolve_links: "url",
  });

  return {
    blok: data.story.content,
  };
}
