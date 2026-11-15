// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "LINEUP HUB",
  description: "라인업 컴퍼니 팬 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="pb-16">
        <Header />
        <main className="max-w-md mx-auto min-h-screen bg-[#f8fafc]">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
