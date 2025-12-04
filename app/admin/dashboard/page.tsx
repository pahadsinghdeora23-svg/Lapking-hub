export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-sm text-slate-600">
          Lapking Hub admin panel summary.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-xs text-slate-500">Total Products</p>
          <p className="mt-1 text-2xl font-semibold">120</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-xs text-slate-500">Total Orders</p>
          <p className="mt-1 text-2xl font-semibold">54</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-xs text-slate-500">Pending Orders</p>
          <p className="mt-1 text-2xl font-semibold">12</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-xs text-slate-500">Total Revenue</p>
          <p className="mt-1 text-2xl font-semibold">₹1,45,000</p>
        </div>
      </section>
    </div>
  );
}
