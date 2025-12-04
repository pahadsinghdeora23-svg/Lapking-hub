const demoProducts = [
  { id: "1", name: "HP Charger", sku: "HP-65W", price: 799, stock: 10 },
  { id: "2", name: "Lenovo Keyboard", sku: "LKB-01", price: 499, stock: 15 },
  { id: "3", name: "Dell Battery", sku: "DELL-BAT", price: 1499, stock: 8 },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-slate-600">
            Yaha se aap Lapking Hub ke saare products manage karoge.
          </p>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          + Add Product
        </button>
      </header>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="border-b bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">SKU</th>
              <th className="px-4 py-2 text-right">Price</th>
              <th className="px-4 py-2 text-right">Stock</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {demoProducts.map((p) => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2 text-slate-600">{p.sku}</td>
                <td className="px-4 py-2 text-right font-medium">
                  ₹{p.price}
                </td>
                <td className="px-4 py-2 text-right">{p.stock}</td>
                <td className="px-4 py-2 text-right space-x-2">
                  <button className="text-xs rounded border px-2 py-1">
                    Edit
                  </button>
                  <button className="text-xs rounded border px-2 py-1 text-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500">
        Note: Abhi ye demo data hai. Next step me isko Firebase se connect karenge.
      </p>
    </div>
  );
      }
