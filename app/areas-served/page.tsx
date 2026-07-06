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
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          Areas Served
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Serving Illinois
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Black Sheep Services works with businesses, schools, and
          institutions across Illinois. If you&apos;re in the state, there&apos;s a
          good chance we already cover your area — and if you&apos;re not sure,
          just ask.
        </p>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Including, but not limited to:</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-center text-sm font-medium text-zinc-200"
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Don&apos;t see your area listed?
          </h2>
          <p className="mt-3 text-zinc-400">
            Reach out and we&apos;ll let you know if we can serve your location.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
