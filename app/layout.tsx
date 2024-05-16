import Footer from " /components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "../styles/globals.css";

const inter = Inter({ weight: ["600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="bg-secondary-fuchsia50 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
