import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center max-w-2xl px-6 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Sales Analytics Dashboard
        </h1>

        <p className="text-slate-300 text-lg">
          Interactive sales insights for 2022–2024 built with
          Next.js, TypeScript, and Recharts.
        </p>

        <Link
          href="/dashboard"
          className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
        >
          Open Dashboard →
        </Link>
      </div>
    </main>
  );
}

