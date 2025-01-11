import type { Metadata } from "next";
import { DM_Sans,Sora,Space_Grotesk } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";

// import { ThemeProvider as NextThemesProvider } from "next-themes";

const dmSans = DM_Sans({ subsets: ["latin"] });

const soraFont = Sora({
  subsets: ["latin"],
});
const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI SaaS Landing Page",
  description: "Created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "white",
        },
      }}
    >
      <html lang="en">
        <body className={clsx(spaceGroteskFont.className, "antialiased bg-gray-950 text-gray-300 font-body")}>
          {/* <NextThemesProvider attribute="class" defaultTheme="dark"> */}
          {children}
          {/* </NextThemesProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
