import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevFlow",
  description: "DevFlow is a platform for developers to learn and grow",
  icons: {
    icon: "/public/assets/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
