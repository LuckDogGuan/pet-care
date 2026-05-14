import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawClean 宠物洗护",
  description: "PawClean 宠物洗护预约与服务展示页面",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
