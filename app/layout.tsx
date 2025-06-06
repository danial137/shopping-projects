import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Full Stack Ecommerce",
  description: "Create app with next, prisma and neon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        >
           <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}
