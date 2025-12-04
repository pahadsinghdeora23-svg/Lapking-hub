"use client";

import { useState } from "react";
import { db, uploadProductImage, serverTimestamp } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

type ProductForm = {
  name: string;
  category: string;
  subCategory: string;
  compatibleModel: string;
  price: string;
  partNo: string;
  description: string;
};

export default function AdminProductsPage() {
  const [form, setForm] = useState<ProductForm>({
    name: "",
    category: "",
    subCategory: "",
    compatibleModel: "",
    price: "",
    partNo: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!form.name || !form.category || !form.price) {
      setMessage("Name, Category aur Price required hain.");
      return;
    }

    if (!imageFile) {
      setMessage("Please product image select karo.");
      return;
    }

    try {
      setIsSaving(true);

      // 1️⃣ Image Firebase Storage me upload
      const imageUrl = await uploadProductImage(imageFile);

      // 2️⃣ Product document Firestore me save
      const productsRef = collection(db, "products");
      await addDoc(productsRef, {
        name: form.name,
        category: form.category,
        subCategory: form.subCategory,
        compatibleModel: form.compatibleModel,
        price: Number(form.price),
        partNo: form.partNo,
        description: form.description,
        imageUrl,
        stock: 0,
        sku: form.partNo || form.name.toLowerCase().replace(/\s+/g, "-"),
        createdAt: serverTimestamp.now(),
        updatedAt: serverTimestamp.now(),
      });

      setMessage("✅ Product successfully add ho gaya (image ke saath)!");
      setForm({
        name: "",
        category: "",
        subCategory: "",
        compatibleModel: "",
        price: "",
        partNo: "",
        description: "",
      });
      setImageFile(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Product save karte time error aaya.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Products</h1>
      <p className="text-sm text-gray-400 mb-6">
        Yaha se aap Lapking Hub ke saare products manage karoge.
      </p>

      {/* 🔹 Add Product Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 grid gap-3 max-w-xl bg-white/5 p-4 rounded-lg"
      >
        <h2 className="font-medium mb-2">Add New Product</h2>

        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
        />

        <input
          name="category"
          placeholder="Category (e.g. Keyboard)"
          value={form.category}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
        />

        <input
          name="subCategory"
          placeholder="Sub Category (e.g. Dell)"
          value={form.subCategory}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
        />

        <input
          name="compatibleModel"
          placeholder="Compatible Model (e.g. Dell Inspiron 3521)"
          value={form.compatibleModel}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
        />

        <input
          name="price"
          type="number"
          placeholder="Price (₹)"
          value={form.price}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
        />

        <input
          name="partNo"
          placeholder="Part No"
          value={form.partNo}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="px-3 py-2 rounded border border-gray-600 bg-transparent text-sm"
          rows={3}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm"
        />

        <button
          type="submit"
          disabled={isSaving}
          className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded bg-blue-600 text-sm font-medium disabled:opacity-60"
        >
          {isSaving ? "Saving..." : "Save Product"}
        </button>

        {message && (
          <p className="text-xs mt-1 text-yellow-300">
            {message}
          </p>
        )}
      </form>

      {/* Neeche aapka existing table / demo data reh sakta hai (agar chaho to) */}
      <p className="text-xs text-gray-400">
        Note: Abhi form se jo products add honge woh Firestore ki{" "}
        <code>products</code> collection me jayenge. Baad me list ko bhi
        Firestore se live data se connect karenge.
      </p>
    </div>
  );
    }
