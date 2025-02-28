// app/layout.tsx
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { JetBrains_Mono } from "next/font/google";
import { ReactQueryProvider } from "./QueryClientProvider"; // Importa o novo provider
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Angelo Portfolio",
  description:
    "Hi, my name is Angelo, also Tech Padawan, and this is my web development portfolio.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
