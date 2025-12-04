"use client";

import { useState } from "react";
import type React from "react";
import { useRouter } from "next/navigation";

import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

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

    try {
      const priceNumber = Number(form.price || 0);
      const stockNumber = Number(form.stock || 0);

      await addDoc(collection(db, "products"), {
        name: form.name,
        category: form.category,
        subCategory: form.subCategory,
        compatibleModel: form.compatibleModel,
        price: priceNumber,
        partNo: form.partNo,
        stock: stockNumber,
        description: form.description,
        createdAt: Timestamp.now(),
      });

      alert("Product successfully saved to Firestore ✅");
      router.push("/admin/products");
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Product save karte time error aaya ❌");
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Add New Product</h1>

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
        {/* NAME */}
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="HP Charger"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-sm font-medium">Category</label>
          <input
            name="category"
            required
            value={form.category}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Keyboard / Charger / Battery"
          />
        </div>

        {/* SUB CATEGORY */}
        <div>
          <label className="text-sm font-medium">Sub Category</label>
          <input
            name="subCategory"
            required
            value={form.subCategory}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Dell / HP / Lenovo"
          />
        </div>

        {/* COMPATIBLE MODEL */}
        <div>
          <label className="text-sm font-medium">Compatible Model</label>
          <input
            name="compatibleModel"
            value={form.compatibleModel}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Example: HP EliteBook / Dell Latitude"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="text-sm font-medium">Price</label>
          <input
            name="price"
            type="number"
            required
            value={form.price}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="799"
          />
        </div>

        {/* PART NO */}
        <div>
          <label className="text-sm font-medium">Part No</label>
          <input
            name="partNo"
            value={form.partNo}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="ABC-123"
          />
        </div>

        {/* STOCK */}
        <div>
          <label className="text-sm font-medium">Stock</label>
          <input
            name="stock"
            type="number"
            required
            value={form.stock}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="10"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm"
            placeholder="Product description here..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white text-sm"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
