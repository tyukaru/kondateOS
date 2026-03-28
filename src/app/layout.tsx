import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "パーソナル献立OS",
  description: "あなたの状態に合わせてAIが献立を提案。3秒で今日のごはんが決まる。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="mx-auto min-h-dvh max-w-md bg-[#fdf8f2]">
        {children}
      </body>
    </html>
  );
}
