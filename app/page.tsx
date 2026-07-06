import Link from "next/link";

const services = [
  {
    name: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom clean that resets a space — floors, fixtures, high-touch surfaces, and everything in between.",
  },
  {
    name: "Post-Construction Cleaning",
    description:
      "Dust, debris, and residue removal after a build or remodel, so the space is move-in ready.",
  },
  {
    name: "General Cleaning",
    description:
      "Reliable, recurring cleaning to keep any facility looking its best day after day.",
  },
  {
    name: "Office Cleaning",
    description:
      "Scheduled cleaning built around your business hours, so your workplace stays presentable for staff and clients.",
  },
  {
    name: "School Cleaning",
    description:
      "Cleaning programs designed for schools — classrooms, cafeterias, gyms, and common areas kept safe and sanitary.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Commercial Cleaning in Illinois
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Black Sheep Services
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Stand out from the flock. We deliver dependable deep cleaning,
            post-construction cleaning, general cleaning, office cleaning, and
            school cleaning across Illinois.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-service"
              className="inline-block rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-300"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-zinc-800 bg-zinc-900/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            What We Do
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-zinc-100 underline underline-offset-4 hover:text-zinc-300"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-zinc-800 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Proudly Serving Illinois
          </h2>
          <p className="mt-4 text-zinc-400">
            From offices to schools to newly built spaces, we bring the same
            standard of clean to businesses and institutions throughout the
            state.
          </p>
          <div className="mt-8">
            <Link
              href="/areas-served"
              className="text-sm font-semibold text-zinc-100 underline underline-offset-4 hover:text-zinc-300"
            >
              View areas we serve →
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-zinc-800 bg-zinc-900/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready for a cleaner space?
          </h2>
          <p className="mt-4 text-zinc-400">
            Tell us about your space and schedule, and we&apos;ll put together a
            plan that fits.
          </p>
          <Link
            href="/request-service"
            className="mt-8 inline-block rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-300"
          >
            Request Service
          </Link>
        </div>
      </section>
    </main>
  );
}
