"use client";

import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
};

const initialProducts: Product[] = [
  { id: "1", name: "HP Charger", sku: "HP-65W", price: 799, stock: 10 },
  { id: "2", name: "Lenovo Keyboard", sku: "LKB-01", price: 499, stock: 15 },
  { id: "3", name: "Dell Battery", sku: "DELL-BAT", price: 1499, stock: 8 },
];

const AdminProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleAddProduct = () => {
    alert("+ Add Product click working ✅ (baad me yaha form open karenge)");
    // TODO: router.push("/admin/products/new");
  };

  const handleEdit = (product: Product) => {
    alert(`Edit click: ${product.name} ✅`);
    // TODO: router.push(`/admin/products/${product.id}/edit`);
  };

  const handleDelete = (id: string) => {
    const ok = confirm("Ye product delete karna hai?");
    if (!ok) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-4 shadow-sm">
        <h1 className="text-xl font-semibold">Products</h1>
        <p className="mb-4 text-sm text-slate-600">
          Yaha se aap Lapking Hub ke saare products manage karoge.
        </p>

        <div className="mb-4 flex justify-end">
          <button
            onClick={handleAddProduct}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            + Add Product
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">
                  NAME
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">
                  SKU
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">
                  PRICE
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">
                  STOCK
                </th>
                <th className="px-4 py-3 text-right font-semibold text-slate-600">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-slate-200">
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3">{p.sku}</td>
                  <td className="px-4 py-3">₹{p.price}</td>
                  <td className="px-4 py-3">{p.stock}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="rounded-lg border border-slate-400 px-3 py-1 text-xs font-medium transition hover:bg-slate-100 active:scale-95"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="rounded-lg border border-red-500 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 active:scale-95"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Note: Abhi ye demo data hai. Next step me isko Firebase se connect
          karenge.
        </p>
      </div>
    </div>
  );
};

export default AdminProductsPage;
