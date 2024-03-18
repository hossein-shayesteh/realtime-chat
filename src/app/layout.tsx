import React from "react";
import "./globals.css";

import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import NextUIProviders from "@/src/components/UI/NextUI/NextUIProviders";

const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "Blink - Instant Messaging App",
  description:
    "Stay connected with friends and family anytime, anywhere with Chattr. Our fast and secure messenger app makes communication effortless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  ${vazir.variable}`}>
        <NextUIProviders>{children}</NextUIProviders>
      </body>
    </html>
  );
}
