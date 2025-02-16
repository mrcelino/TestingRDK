import type { Metadata } from "next";
import { Work_Sans, Trirong } from "next/font/google";
import "./globals.css";
import AOSInitializer from "./aos";

const trirong = Trirong({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-trirong",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  title: "RDK UGM Website",
  description: "Ramadhan di Kampus UGM Offical Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${worksans.variable} ${trirong.variable} antialiased`}
      >
        <AOSInitializer/>
        {children}
      </body>
    </html>
  );
}
