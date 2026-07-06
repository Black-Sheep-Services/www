import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Sheep Services | Commercial Cleaning in Illinois",
  description:
    "Black Sheep Services provides deep cleaning, post-construction cleaning, general cleaning, office cleaning, and school cleaning throughout Illinois.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/request-service", label: "Request Service" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800 bg-zinc-950">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Black Sheep Services
            </Link>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-300">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Black Sheep Services. Built by Jose Vilchis.</p>
          <p className="mt-2">
            <a href="tel:6308867419" className="hover:text-zinc-300">
              (630) 886-7419
            </a>
            {" · "}
            <a href="mailto:Sales@blacksheepservices.org" className="hover:text-zinc-300">
              Sales@blacksheepservices.org
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
