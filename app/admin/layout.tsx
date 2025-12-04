export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Lapking Hub</h2>
        <nav className="space-y-2 text-sm">
          <a href="/admin/dashboard" className="block hover:text-blue-300">
            Dashboard
          </a>
          <a href="/admin/products" className="block hover:text-blue-300">
            Products
          </a>
          <a href="/admin/orders" className="block hover:text-blue-300">
            Orders
          </a>
          <a href="/admin/categories" className="block hover:text-blue-300">
            Categories
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}
