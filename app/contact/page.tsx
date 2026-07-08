import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Black Sheep Services",
  description:
    "Contact Black Sheep Services for commercial cleaning throughout Illinois.",
};

export default function ContactPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-tan-dark">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-brand-tan">
          Questions about a service, a quote, or scheduling? Reach out any
          time.
        </p>

        <div className="mt-12 space-y-4 rounded-2xl border border-brand-brown bg-brand-charcoal/40 p-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-tan-dark">Phone</p>
            <a
              href="tel:6308867419"
              className="mt-1 block text-xl font-semibold text-brand-cream hover:text-brand-gold-light"
            >
              (630) 886-7419
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-tan-dark">Email</p>
            <a
              href="mailto:Sales@blacksheepservices.org"
              className="mt-1 block text-xl font-semibold text-brand-cream hover:text-brand-gold-light"
            >
              Sales@blacksheepservices.org
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-tan-dark">
              Service Area
            </p>
            <p className="mt-1 text-xl font-semibold text-brand-cream">Illinois</p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/request-service"
            className="inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
          >
            Request Service
          </Link>
        </div>
      </div>
    </main>
  );
}
