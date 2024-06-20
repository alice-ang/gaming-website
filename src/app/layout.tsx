import { Footer, Navigation, PreLoader } from "@/components";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { baskerville, josefin_sans, oswald } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clubhouse on Haunted Hill",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${baskerville.variable} ${josefin_sans.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <PreLoader /> */}
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
