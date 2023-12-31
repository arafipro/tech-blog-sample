import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
export const metadata: Metadata = {
  title: "Tech Blog",
  description: "My Developer Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Header className="mb-10" />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
