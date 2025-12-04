"use client";

import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

const initialProducts: Product[] = [
  { id: "1", name: "HP Charger", price: 799, stock: 10 },
  { id: "2", name: "Lenovo Keyboard", price: 499, stock: 15 },
  { id: "3", name: "Dell Battery", price: 1499, stock: 8 },
];

const AdminProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // + Add Product button
  const handleAddProduct = () => {
    alert("+ Add Product button working! (Baad me form page open karenge)");
    // yaha baad me: router.push("/admin/products/new");
  };

  // Edit button
  const handleEdit = (product: Product) => {
    alert(`Edit click: ${product.name}`);
    // yaha baad me: router.push(`/admin/products/${product.id}/edit`);
  };

  // Delete button
  const handleDelete = (id: string) => {
    const confirmDelete = confirm("Is product ko delete karna hai?");
    if (!confirmDelete) return;

    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-4 shadow-sm">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Admin Products</h1>

          <button
            onClick={handleAddProduct}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition active:scale-95 hover:bg-blue-700"
          >
            + Add Product
          </button>
        </div>

        {/* Products table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-600">
                  PRODUCT
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
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-slate-200 bg-white"
                >
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">₹{product.price}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="rounded-lg border border-slate-400 px-3 py-1 text-xs font-medium transition hover:bg-slate-100 active:scale-95"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="rounded-lg border border-red-500 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 active:scale-95"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-6 text-center text-slate-500"
                  >
                    Abhi koi product nahi hai. + Add Product dabakar naya product
                    add karein.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage;
