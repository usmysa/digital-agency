import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "デジタル庁",
  description:
    "デジタル庁は、デジタル社会形成の司令塔として、未来志向のDX（デジタル・トランスフォーメーション）を大胆に推進し、デジタル時代の官民のインフラを一気呵成に作り上げることを目指します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
