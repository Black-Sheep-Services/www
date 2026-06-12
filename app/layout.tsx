import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sheep Services",
  description: "Black Sheep Services — stand out from the flock.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
