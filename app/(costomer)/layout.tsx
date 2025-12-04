"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/category", label: "Category", icon: "📂" },
  { href: "/orders", label: "Orders", icon: "📦" },
  { href: "/cart", label: "Cart", icon: "🛒" },
  { href: "/account", label: "Account", icon: "👤" },
];

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-1 pb-16 px-4 pt-4 max-w-3xl mx-auto w-full">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white/90 backdrop-blur">
        <div className="max-w-3xl mx-auto flex">
          {tabs.map((tab) => {
            const active = pathname === tab.href;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 flex flex-col items-center py-2 text-xs ${
                  active ? "text-blue-600 font-bold" : "text-slate-500"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
