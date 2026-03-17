import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "../globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "La Santé Vietnam | Premium French-Style Bedding Manufacturer & Exporter",
  description: "Direct-from-manufacturer sourcing of premium French-inspired bedding. EU-certified quality. 500+ global distribution partners. Request export pricing today.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${lato.variable} ${playfair.variable} font-sans text-[#2E2924] bg-[#FAF7F2] antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <TopBar />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
