import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Metrika } from "./(components)/Metrika/Metrika";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Строительство деревянных домов, бань и беседок",
  description:
    "Профессиональная команда строителей, которой уверенно можно  доверить самую ответственную работу - строительство дома. Наш опыт в этой сфере - более 12 лет, поэтому мы можем гарантировать качество работы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
      <Suspense>
        <Metrika />
      </Suspense>
    </html>
  );
}
