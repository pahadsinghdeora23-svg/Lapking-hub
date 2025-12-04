"use client";

import React, { useState, FormEvent } from "react";

type ProductForm = {
  name: string;
  category: string;
  subCategory: string;
  compatibleModel: string;
  price: string;
  partNumber: string;
  stock: string;
  description: string;
};

const demoProducts = [
  { name: "HP Charger", sku: "HP-65W", price: 799, stock: 10 },
  { name: "Lenovo Keyboard", sku: "LKB-01", price: 499, stock: 15 },
  { name: "Dell Battery", sku: "DELL-BAT", price: 1499, stock: 8 },
];

export default function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState<ProductForm>({
    name: "",
    category: "",
    subCategory: "",
    compatibleModel: "",
    price: "",
    partNumber: "",
    stock: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Yaha baad me Firestore me save karenge
    console.log("New product:", form);

    alert("Product form submit ho gaya (demo). Abhi data Firebase me save nahi ho raha, ye next step hoga.");

    // reset form
    setForm({
      name: "",
      category: "",
      subCategory: "",
      compatibleModel: "",
      price: "",
      partNumber: "",
      stock: "",
      description: "",
    });

    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-gray-500">
            Yaha se aap Lapking Hub ke saare products manage karoge.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          + Add Product
        </button>
      </div>

      {/* Existing demo products table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">SKU</th>
              <th className="px-4 py-2 text-left">PRICE</th>
              <th className="px-4 py-2 text-left">STOCK</th>
              <th className="px-4 py-2 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {demoProducts.map((p) => (
              <tr key={p.sku} className="border-t">
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.sku}</td>
                <td className="px-4 py-2">₹{p.price}</td>
                <td className="px-4 py-2">{p.stock}</td>
                <td className="px-4 py-2 text-right">
                  <button className="border px-3 py-1 text-xs rounded mr-2">
                    Edit
                  </button>
                  <button className="border border-red-500 text-red-600 px-3 py-1 text-xs rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xs text-gray-500 px-4 py-3 border-t bg-gray-50">
          Note: Abhi ye demo data hai. Next step me isko Firebase se connect
          karenge.
        </p>
      </div>

      {/* Add Product form (popup style) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Add New Product</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 text-sm"
              >
                ✕
              </button>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium mb-1">
                  Product Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="HP Charger"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Category
                  </label>
                  <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-sm"
                    placeholder="Keyboard, Charger, Battery..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Sub Category / Brand
                  </label>
                  <input
                    name="subCategory"
                    value={form.subCategory}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-sm"
                    placeholder="Dell, HP, Lenovo..."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">
                  Compatible Model
                </label>
                <input
                  name="compatibleModel"
                  value={form.compatibleModel}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm"
                  placeholder="Dell Inspiron 3521..."
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Price (₹)
                  </label>
                  <input
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-sm"
                    placeholder="1499"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Stock Qty
                  </label>
                  <input
                    name="stock"
                    type="number"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-sm"
                    placeholder="10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Part No
                  </label>
                  <input
                    name="partNumber"
                    value={form.partNumber}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-sm"
                    placeholder="DELL-BAT-3521"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm"
                  rows={3}
                  placeholder="Short description about this product..."
                />
              </div>

              <p className="text-[11px] text-gray-500">
                Note: Abhi image upload aur Firebase save connect nahi hai. Sirf
                form UI bana rahe hain.
              </p>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border px-3 py-1 rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
                  }
