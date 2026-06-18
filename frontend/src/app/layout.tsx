// Path: src/app/layout.tsx

import "./globals.css";

import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "FinSight AI",
  description: "Agentic Financial Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}