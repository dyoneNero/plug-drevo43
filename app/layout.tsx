import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "drevo43",
  description: "Мы занимаемся строительством деревянных домов, беседок, бань",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta name="yandex-verification" content="f44a600ceff299c8" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
