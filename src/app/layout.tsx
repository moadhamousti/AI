import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbitra.ai",
  description: "Simple AI Chat",
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
