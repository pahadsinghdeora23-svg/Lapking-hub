export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-slate-600">
          Lapking Hub ka high-level overview.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white shadow-sm p-4">
          <p className="text-xs text-slate-500">Today&apos;s Orders</p>
          <p className="mt-1 text-2xl font-semibold">0</p>
        </div>
        <div className="rounded-xl bg-white shadow-sm p-4">
          <p className="text-xs text-slate-500">Pending Returns</p>
          <p className="mt-1 text-2xl font-semibold">0</p>
        </div>
        <div className="rounded-xl bg-white shadow-sm p-4">
          <p className="text-xs text-slate-500">Active Products</p>
          <p className="mt-1 text-2xl font-semibold">0</p>
        </div>
      </section>

      <section className="rounded-xl bg-white shadow-sm p-4">
        <h2 className="font-semibold mb-2 text-sm">Next steps</h2>
        <ul className="text-sm list-disc pl-5 space-y-1 text-slate-600">
          <li>Firebase se products & orders connect karna.</li>
          <li>Bulk Excel upload / price update add karna.</li>
          <li>Return & cancellation flows implement karna.</li>
        </ul>
      </section>
    </div>
  );
          }
