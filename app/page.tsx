import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-3xl font-bold mb-4">Lapking Hub</h1>
      <p className="mb-6 text-sm text-slate-300 text-center px-6">
        B2B Laptop & Accessories Store
      </p>
      <Link
        href="/products"
        className="px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm"
      >
        View Products
      </Link>
    </main>
  );
}
