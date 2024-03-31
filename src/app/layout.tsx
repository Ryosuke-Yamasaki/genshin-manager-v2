import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={fontSans.variable}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          {children}
        </div>
      </body>
      <footer className="py-5">
        <div className="text-center text-sm">
          Copyright © COGNOSPHERE. All rights reserved
        </div>
      </footer>
    </html>
  );
}
