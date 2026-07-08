import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas Served | Black Sheep Services",
  description:
    "Black Sheep Services provides commercial cleaning throughout Illinois, including Chicago, Naperville, Aurora, Rockford, Peoria, and Springfield.",
};

const cities = [
  "Chicago",
  "Naperville",
  "Aurora",
  "Joliet",
  "Rockford",
  "Peoria",
  "Springfield",
  "Champaign",
];

export default function AreasServedPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-tan-dark">
          Areas Served
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl">
          Serving Illinois
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-tan">
          Black Sheep Services works with businesses, schools, and
          institutions across Illinois. If you&apos;re in the state, there&apos;s a
          good chance we already cover your area — and if you&apos;re not sure,
          just ask.
        </p>

        <div className="mt-14">
          <h2 className="text-xl font-semibold text-brand-cream">
            Including, but not limited to:
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city}
                className="rounded-xl border border-brand-brown bg-brand-charcoal/40 px-4 py-3 text-center text-sm font-medium text-brand-cream"
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-brand-brown bg-brand-black p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-cream">
            Don&apos;t see your area listed?
          </h2>
          <p className="mt-3 text-brand-tan">
            Reach out and we&apos;ll let you know if we can serve your location.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
