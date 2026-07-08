"use client";

import { useState } from "react";

const serviceOptions = [
  "Deep Cleaning",
  "Post-Construction Cleaning",
  "General Cleaning",
  "Office Cleaning",
  "School Cleaning",
  "Not sure / other",
];

export default function RequestServicePage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState(serviceOptions[0]);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `Service Request: ${serviceType}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service Type: ${serviceType}`,
      `Location: ${location}`,
      "",
      "Details:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:Sales@blacksheepservices.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-tan-dark">
          Request Service
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl">
          Get a Cleaning Plan
        </h1>
        <p className="mt-6 text-lg text-brand-tan">
          Fill this out and it&apos;ll open a pre-filled email to our team at{" "}
          <a
            href="mailto:Sales@blacksheepservices.org"
            className="underline underline-offset-4 hover:text-brand-gold-light"
          >
            Sales@blacksheepservices.org
          </a>
          . We&apos;ll follow up to schedule a time that works.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-tan">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none focus:border-brand-gold"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-brand-tan">
                Company / School (optional)
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-tan">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none focus:border-brand-gold"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-tan">
                Phone (optional)
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-brand-tan">
              Service Type
            </label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none focus:border-brand-gold"
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-brand-tan">
              Location (city)
            </label>
            <input
              id="location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Naperville, IL"
              className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none placeholder:text-brand-tan-dark focus:border-brand-gold"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-tan">
              Tell us about the space
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Size of the space, how often you'd like cleaning, any specific needs..."
              className="mt-2 w-full rounded-lg border border-brand-brown bg-brand-charcoal px-4 py-2.5 text-brand-cream outline-none placeholder:text-brand-tan-dark focus:border-brand-gold"
            />
          </div>

          <button
            type="submit"
            className="inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light"
          >
            Send Request
          </button>
        </form>
      </div>
    </main>
  );
}
