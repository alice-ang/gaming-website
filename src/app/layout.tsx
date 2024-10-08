import { Footer, Navigation, StoryblokProvider } from "@/components";
import { Dialog } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toaster";
import { apiPlugin, storyblokInit, getStoryblokApi } from "@storyblok/react";
import { ThemeProvider } from "next-themes";
import type { FooterStoryblok } from "../../component-types-sb";
import { baskerville, josefin_sans, oswald } from "./fonts";
import "./globals.css";

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    // cache: "no-cache",
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
