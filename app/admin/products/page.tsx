"use client";

import { useRouter } from "next/navigation";
import AdminLayout from "../layout";

type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
};

const demoProducts: Product[] = [
  {
    id: "hp-charger",
    name: "HP Charger",
    sku: "HP-65W",
    price: 799,
    stock: 10,
  },
  {
    id: "lenovo-keyboard",
    name: "Lenovo Keyboard",
    sku: "LKB-01",
    price: 499,
    stock: 15,
  },
  {
    id: "dell-battery",
    name: "Dell Battery",
    sku: "DELL-BAT",
    price: 1499,
    stock: 8,
  },
];

export default function ProductsPage() {
  const router = useRouter();

  const handleAddProduct = () => {
    // New product form page
    router.push("/admin/products/new");
  };

  const handleEdit = (id: string) => {
    // Abhi demo mode – baad me yaha /admin/products/[id]/edit banayenge
    alert(`Edit clicked for product: ${id}\nAbhi ye sirf demo hai.`);
  };

  const handleDelete = (id: string) => {
    // Abhi demo mode – Firestore connect hone ke baad actual delete karege
    const ok = confirm(
      `Delete clicked for product: ${id}\nAbhi ye sirf demo data hai, actual delete nahi hoga.`
    );
    if (ok) {
      alert("Demo mode: Delete UI working. Firestore ke baad real delete hoga.");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Products</h1>
            <p className="text-sm text-gray-500">
              Yaha se aap Lapking Hub ke saare products manage karoge.
            </p>
          </div>

          <button
            onClick={handleAddProduct}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow"
          >
            + Add Product
          </button>
        </div>

        <div className="bg-white rounded-xl shadow border overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">SKU</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demoProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t last:border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {product.sku}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    ₹{product.price}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {product.stock}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right space-x-2">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="px-3 py-1 text-xs rounded border border-gray-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-3 py-1 text-xs rounded border border-red-300 text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="px-4 py-3 text-xs text-gray-400 border-t">
            Note: Abhi ye demo data hai. Next step me isko Firestore se connect
            karenge.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}
