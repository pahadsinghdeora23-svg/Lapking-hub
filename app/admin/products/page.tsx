"use client";

export default function ProductsPage() {
  function handleAddClick() {
    alert("✅ Add Product button WORKING!\nAbhi ye sirf test hai.");
  }

  function handleEditClick() {
    alert("✅ Edit button WORKING (test).");
  }

  function handleDeleteClick() {
    alert("✅ Delete button WORKING (test).");
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">Products (TEST PAGE)</h1>

      {/* Add Product test button */}
      <button
        type="button"
        onClick={handleAddClick}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow"
      >
        + Add Product (TEST)
      </button>

      <div className="mt-8 space-x-2">
        <button
          type="button"
          onClick={handleEditClick}
          className="px-3 py-1 text-xs rounded border border-gray-300"
        >
          Edit (TEST)
        </button>
        <button
          type="button"
          onClick={handleDeleteClick}
          className="px-3 py-1 text-xs rounded border border-red-300 text-red-600"
        >
          Delete (TEST)
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Ye sirf testing page hai. Jab ye buttons chalne lagenge tab wapas
        proper table + Firestore data add karenge.
      </p>
    </div>
  );
}
