export default function CustomerHome() {
  return (
    <div className="space-y-4">
      <section>
        <h1 className="text-2xl font-bold">Lapking Hub</h1>
        <p className="text-sm text-slate-600">
          B2B Laptop & Computer Accessories – Dealer Friendly Prices
        </p>
      </section>

      <section className="p-4 rounded-xl bg-white shadow-sm">
        <h2 className="font-semibold mb-2">Quick Categories</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <button className="rounded-lg border px-3 py-2">Chargers</button>
          <button className="rounded-lg border px-3 py-2">Keyboards</button>
          <button className="rounded-lg border px-3 py-2">Batteries</button>
          <button className="rounded-lg border px-3 py-2">Cables</button>
        </div>
      </section>

      <section className="p-4 rounded-xl bg-white shadow-sm">
        <h2 className="font-semibold mb-2">Today's Highlights</h2>
        <p className="text-sm text-slate-600">
          Yaha baad me Firebase se featured products aayenge.
        </p>
      </section>
    </div>
  );
}
