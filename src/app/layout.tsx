import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "La Santé Vietnam | Premium French-Style Bedding Manufacturer & Exporter",
  description: "Direct-from-manufacturer sourcing of premium French-inspired bedding. EU-certified quality. 500+ global distribution partners. Request export pricing today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${raleway.variable} ${cormorant.variable} font-sans text-[#2E2924] bg-[#FAF7F2] antialiased`}>
        {children}
      </body>
    </html>
  );
}
