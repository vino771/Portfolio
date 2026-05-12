import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kannan Vino | Creative Developer & CSE Engineer",
  description: "Portfolio of Kannan Vino - Futuristic Developer and Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="selection:bg-[#BFFF00] selection:text-black">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
