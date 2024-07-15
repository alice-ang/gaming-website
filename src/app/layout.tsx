import { Footer, Navigation, PreLoader, StoryblokProvider } from "@/components";
import { Dialog } from "@/components/ui/dialog";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react/rsc";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { FooterStoryblok } from "../../component-types-sb";
import { baskerville, josefin_sans, oswald } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Clubhouse on Haunted Hill",
  description:
    "Dare to accept the invitation from enigmatic millionaire Nicolas Craven and embark on a spine-chilling golf adventure at the Club House on Haunted Hill.",
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
  // apiOptions: {
  //   fetch: cachedFetch,
  // },
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { blok }: { blok: FooterStoryblok } = await fetchData();

  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${oswald.variable} ${baskerville.variable} ${josefin_sans.variable}  `}
        >
          {/* <PreLoader /> */}
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
            <Toaster />
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
