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
      <body className="antialiased flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Black Sheep Services. Built by Jose Vilchis.
        </footer>
      </body>
    </html>
  );
}
