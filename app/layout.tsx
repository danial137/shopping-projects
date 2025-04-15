import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
