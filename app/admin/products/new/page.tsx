"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "",
    subCategory: "",
    compatibleModel: "",
    price: "",
    partNo: "",
    stock: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO: Yahi par baad me Firestore me save karenge
    console.log("New product data:", form);
    alert("Abhi demo form hai. Next step me Firestore se connect karenge.");

    router.push("/admin/products");
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Add New Product</h1>
          <p className="text-sm text-gray-500">
            Lapking Hub me naya product add karein.
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/products")}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
        >
          ← Back to Products
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-gray-200 bg-white p-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="HP Charger"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="Keyboard / Charger / Battery..."
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Sub Category</label>
            <input
              name="subCategory"
              value={form.subCategory}
              onChange={handleChange}
              required
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="Dell / HP / Lenovo..."
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Compatible Model</label>
            <input
              name="compatibleModel"
              value={form.compatibleModel}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="Example: HP 15s-duxxxx"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="799"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Part No.</label>
            <input
              name="partNo"
              value={form.partNo}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="HP-65W-ORIGINAL"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              required
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="10"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Short description about product..."
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="rounded border border-gray-300 px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
        }
