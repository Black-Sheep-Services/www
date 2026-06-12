export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-zinc-100">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
          Welcome to
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Black Sheep Services
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          Stand out from the flock. Site coming soon.
        </p>
        <a
          href="mailto:hello@blacksheepservices.com"
          className="mt-10 inline-block rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-300"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
