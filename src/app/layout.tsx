import type { Metadata, Viewport } from "next";
import "@fontsource-variable/42dot-sans";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLUEPRINT XI — Personalised football development",
  description:
    "Your game. Your blueprint. Personalised football development and player representation for ambitious players.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
