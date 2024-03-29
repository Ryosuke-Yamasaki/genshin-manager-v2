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
    <html lang="ja">
      <body className={fontSans.variable}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
