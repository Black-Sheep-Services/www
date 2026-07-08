import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Black Sheep Services",
  description:
    "Deep cleaning, post-construction cleaning, general cleaning, office cleaning, and school cleaning across Illinois.",
};

const services = [
  {
    name: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom clean for spaces that need more than a routine wipe-down — baseboards, vents, grout, and every overlooked corner. A great fit for seasonal resets, move-ins and move-outs, or getting a space back to a like-new standard.",
  },
  {
    name: "Post-Construction Cleaning",
    description:
      "Construction and remodeling leave behind dust, drywall residue, adhesive, and debris. We clear it all out — surfaces, fixtures, floors, and windows — so the space is ready to use or show, not just swept.",
  },
  {
    name: "General Cleaning",
    description:
      "Consistent, recurring cleaning on a schedule that works for you — daily, weekly, or monthly. Trash removal, surface cleaning, restrooms, and common areas kept to a dependable standard.",
  },
  {
    name: "Office Cleaning",
    description:
      "Cleaning scheduled around your business hours so it never disrupts your team or your clients. Desks, break rooms, restrooms, floors, and shared spaces — kept presentable every day.",
  },
  {
    name: "School Cleaning",
    description:
      "Cleaning programs built for the realities of a school building — classrooms, cafeterias, gyms, hallways, and restrooms — with an emphasis on sanitation and student safety.",
  },
];

export default function ServicesPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-tan-dark">
          Services
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl">
          Cleaning Services
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-tan">
          Whatever the space, we have a service built for it. Here&apos;s what
          Black Sheep Services offers across Illinois.
        </p>

        <div className="mt-14 space-y-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-brand-brown bg-brand-charcoal/40 p-8"
            >
              <h2 className="text-xl font-semibold text-brand-gold">
                {service.name}
              </h2>
              <p className="mt-3 text-brand-tan">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-brand-brown bg-brand-black p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-cream">
            Not sure which service fits?
          </h2>
          <p className="mt-3 text-brand-tan">
            Tell us about your space and we&apos;ll recommend a plan.
          </p>
          <Link
            href="/request-service"
            className="mt-6 inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
          >
            Request Service
          </Link>
        </div>
      </div>
    </main>
  );
}
