"use client";

import Link from "next/link";

type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
};

const demoProducts: Product[] = [
  { id: "1", name: "HP Charger", sku: "HP-65W", price: 799, stock: 10 },
  { id: "2", name: "Lenovo Keyboard", sku: "LKB-01", price: 499, stock: 15 },
  { id: "3", name: "Dell Battery", sku: "DELL-BAT", price: 1499, stock: 8 },
];

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-gray-500">
            Yaha se aap Lapking Hub ke saare products manage karoge.
          </p>
        </div>

        {/* IMPORTANT: yaha se naya page open hoga */}
        <Link
          href="/admin/products/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Add Product
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {demoProducts.map((product) => (
              <tr key={product.id} className="border-t text-gray-700">
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.sku}</td>
                <td className="px-4 py-3">₹{product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="rounded border border-gray-300 px-3 py-1 text-xs">
                    Edit
                  </button>
                  <button className="rounded border border-red-500 px-3 py-1 text-xs text-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400">
        Note: Abhi ye demo data hai. Next step me isko Firestore se connect karenge.
      </p>
    </div>
  );
}
