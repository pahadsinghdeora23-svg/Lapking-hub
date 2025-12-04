"use client";

import { useEffect, useState, FormEvent } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Product = {
  id?: string;
  name: string;
  category: string;
  subCategory: string;
  compatibleModel: string;
  price: number;
  partNumber: string;
  description: string;
  imageUrl: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState<
    Omit<Product, "id" | "price"> & { price: string }
  >({
    name: "",
    category: "",
    subCategory: "",
    compatibleModel: "",
    price: "",
    partNumber: "",
    description: "",
    imageUrl: "",
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "products"));
      const items: Product[] = snap.docs.map((d) => {
        const data = d.data() as Omit<Product, "id">;
        return { id: d.id, ...data };
      });
      setProducts(items);
    } catch (err) {
      console.error("Error loading products", err);
      alert("Products load karne me problem aayi. Console check karo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Product name required hai.");
      return;
    }

    const priceNumber = Number(formData.price);
    if (Number.isNaN(priceNumber) || priceNumber < 0) {
      alert("Price sahi number me daalo.");
      return;
    }

    setSaving(true);
    try {
      await addDoc(collection(db, "products"), {
        name: formData.name.trim(),
        category: formData.category.trim(),
        subCategory: formData.subCategory.trim(),
        compatibleModel: formData.compatibleModel.trim(),
        price: priceNumber,
        partNumber: formData.partNumber.trim(),
        description: formData.description.trim(),
        imageUrl: formData.imageUrl.trim(),
        createdAt: new Date(),
      });

      setFormData({
        name: "",
        category: "",
        subCategory: "",
        compatibleModel: "",
        price: "",
        partNumber: "",
        description: "",
        imageUrl: "",
      });

      await fetchProducts();
    } catch (err) {
      console.error("Error saving product", err);
      alert("Product save karne me error aaya.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    const ok = confirm("Ye product delete karna hai?");
    if (!ok) return;

    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error deleting", err);
      alert("Delete karne me problem aayi.");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-sm text-gray-500">
          Yaha se aap Lapking Hub ke saare products manage karoge.
        </p>
      </div>

      {/* Add Product Form */}
      <div className="bg-white rounded-lg shadow border p-4 space-y-4">
        <h2 className="text-lg font-semibold mb-2">Add / Create Product</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="HP Laptop Keyboard"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Category</label>
              <input
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="Keyboard / Charger / Battery"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Sub Category</label>
              <input
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="Dell / HP / Lenovo"
                value={formData.subCategory}
                onChange={(e) =>
                  setFormData({ ...formData, subCategory: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Compatible Model</label>
              <input
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="Dell Inspiron 3521, HP 15s..."
                value={formData.compatibleModel}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    compatibleModel: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Price (₹)</label>
              <input
                type="number"
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="1499"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Part No.</label>
              <input
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="D3LL-KB-123"
                value={formData.partNumber}
                onChange={(e) =>
                  setFormData({ ...formData, partNumber: e.target.value })
                }
              />
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-sm font-medium">Image URL (optional)</label>
              <input
                className="w-full rounded border px-3 py-2 text-sm"
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
              />
              <p className="text-xs text-gray-400">
                Abhi ke liye sirf URL. Baad me direct upload feature add
                karenge.
              </p>
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="w-full rounded border px-3 py-2 text-sm"
                rows={3}
                placeholder="Short description in Hindi / English..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center rounded bg-black text-white text-sm font-medium px-4 py-2 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Product"}
          </button>
        </form>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow border p-4">
        <h2 className="text-lg font-semibold mb-3">Products List</h2>

        {loading ? (
          <p className="text-sm text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-sm text-gray-500">
            Abhi koi product nahi hai. Upar form se naya product add karo.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50 text-left">
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Category / Sub</th>
                  <th className="px-3 py-2">Compatible Model</th>
                  <th className="px-3 py-2">Part No.</th>
                  <th className="px-3 py-2">Price</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b last:border-b-0">
                    <td className="px-3 py-2 font-medium">{p.name}</td>
                    <td className="px-3 py-2">
                      <div>{p.category}</div>
                      <div className="text-xs text-gray-500">
                        {p.subCategory}
                      </div>
                    </td>
                    <td className="px-3 py-2">{p.compatibleModel}</td>
                    <td className="px-3 py-2">{p.partNumber}</td>
                    <td className="px-3 py-2">₹{p.price}</td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="text-xs text-red-600 border border-red-500 px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
  }
