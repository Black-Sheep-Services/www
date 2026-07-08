import Image from "next/image";
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
      {/* Header image */}
      <section className="relative w-full aspect-[1717/916]">
        <Image
          src="/images/hero-banner.png"
          alt="Black Sheep Services — premium commercial cleaning. Different by design, above by standard."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="w-full bg-brand-black px-6 py-8 text-center">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-service"
            className="inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
          >
            Request Service
          </Link>
          <Link
            href="/services"
            className="inline-block rounded-full border border-brand-brown px-6 py-3 text-sm font-semibold text-brand-cream transition hover:border-brand-gold"
          >
            Our Services
          </Link>
        </div>
      </section>

      <section className="w-full border-t border-brand-brown bg-brand-charcoal/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-brand-cream sm:text-3xl">
            What We Do
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-brand-brown bg-brand-black p-6"
              >
                <h3 className="text-lg font-semibold text-brand-gold">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-brand-tan">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-cream underline underline-offset-4 hover:text-brand-gold-light"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Team / marketing section */}
      <section className="w-full border-t border-brand-brown px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[1402/1122] w-full overflow-hidden rounded-2xl border border-brand-brown">
            <Image
              src="/images/team-cleaning.png"
              alt="A Black Sheep Services team member cleaning an office hallway"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-tan-dark">
              Our Team
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand-cream sm:text-3xl">
              Trained, Trusted, Thorough
            </h2>
            <p className="mt-4 text-brand-tan">
              Every Black Sheep Services team member shows up in uniform,
              fully equipped, and held to the same standard — no shortcuts,
              no half-clean corners. It&apos;s the same attention to detail
              whether it&apos;s a single office or an entire facility.
            </p>
            <p className="mt-4 font-semibold text-brand-gold">
              Different by design. Above by standard.
            </p>
          </div>
        </div>
      </section>

      {/* Flyer / promo section */}
      <section className="w-full border-t border-brand-brown bg-brand-charcoal/40 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-tan-dark">
              Current Promotion
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand-cream sm:text-3xl">
              Commercial Cleaning, Done Right
            </h2>
            <p className="mt-4 text-brand-tan">
              Deep cleaning, post-construction cleaning, general cleaning,
              office cleaning, and school cleaning — all under one flyer, one
              team, one standard. Reach out and we&apos;ll build a plan around
              your space.
            </p>
            <div className="mt-8">
              <Link
                href="/request-service"
                className="inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[1545/2000] w-full max-w-sm overflow-hidden rounded-2xl border border-brand-brown shadow-lg">
            <Image
              src="/images/cleaning-flyer.jpg"
              alt="Black Sheep Services commercial cleaning promotional flyer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="w-full border-t border-brand-brown px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-brand-cream sm:text-3xl">
            Proudly Serving Illinois
          </h2>
          <p className="mt-4 text-brand-tan">
            From offices to schools to newly built spaces, we bring the same
            standard of clean to businesses and institutions throughout the
            state.
          </p>
          <div className="mt-8">
            <Link
              href="/areas-served"
              className="text-sm font-semibold text-brand-cream underline underline-offset-4 hover:text-brand-gold-light"
            >
              View areas we serve →
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-brand-brown bg-brand-charcoal/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-brand-cream sm:text-3xl">
            Ready for a cleaner space?
          </h2>
          <p className="mt-4 text-brand-tan">
            Tell us about your space and schedule, and we&apos;ll put together a
            plan that fits.
          </p>
          <Link
            href="/request-service"
            className="mt-8 inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
          >
            Request Service
          </Link>
        </div>
      </section>
    </main>
  );
}
