import Link from "next/link";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/returns", label: "Returns" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="px-4 py-4 border-b">
          <h1 className="font-bold text-lg">Lapking Hub Admin</h1>
          <p className="text-xs text-slate-500">
            Single-vendor B2B control panel
          </p>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-4">
        {children}
      </main>
    </div>
  );
    }
