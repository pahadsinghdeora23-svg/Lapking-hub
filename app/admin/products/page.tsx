import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Top header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-gray-500">
            Yaha se aap Lapking Hub ke saare products manage karoge.
          </p>
        </div>

        {/* ✅ Ab yaha simple Link hai, button jaisa dikhega */}
        <Link
          href="/admin/products/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg text-sm inline-flex items-center justify-center"
        >
          + Add Product
        </Link>
      </div>

      {/* Neeche demo products table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">NAME</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">SKU</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">PRICE</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">STOCK</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3">HP Charger</td>
              <td className="px-4 py-3">HP-65W</td>
              <td className="px-4 py-3">₹799</td>
              <td className="px-4 py-3">10</td>
              <td className="px-4 py-3 space-x-2">
                <button className="px-3 py-1 rounded border text-xs">Edit</button>
                <button className="px-3 py-1 rounded border border-red-500 text-red-600 text-xs">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">Lenovo Keyboard</td>
              <td className="px-4 py-3">LKB-01</td>
              <td className="px-4 py-3">₹499</td>
              <td className="px-4 py-3">15</td>
              <td className="px-4 py-3 space-x-2">
                <button className="px-3 py-1 rounded border text-xs">Edit</button>
                <button className="px-3 py-1 rounded border border-red-500 text-red-600 text-xs">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">Dell Battery</td>
              <td className="px-4 py-3">DELL-BAT</td>
              <td className="px-4 py-3">₹1499</td>
              <td className="px-4 py-3">8</td>
              <td className="px-4 py-3 space-x-2">
                <button className="px-3 py-1 rounded border text-xs">Edit</button>
                <button className="px-3 py-1 rounded border border-red-500 text-red-600 text-xs">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        Note: Abhi ye demo data hai. Next step me isko Firebase se connect karenge.
      </p>
    </div>
  );
}
