"use client";

export default function ProductsPage() {
  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
        background: "#f4f4f5",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}>
        Products TEST PAGE (V3)
      </h1>

      <p style={{ marginBottom: "16px", fontSize: "14px" }}>
        Agar niche wale buttons pe click karne se <b>alert</b> aata hai,
        to React / Next sab theek hai. Sirf yahi test kar rahe hain.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => alert("✅ Add Product button WORKING")}
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            border: "none",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Add Product (TEST)
        </button>

        <button
          type="button"
          onClick={() => alert("✅ Edit button WORKING")}
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid #000",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Edit (TEST)
        </button>

        <button
          type="button"
          onClick={() => alert("✅ Delete button WORKING")}
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid #dc2626",
            color: "#dc2626",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Delete (TEST)
        </button>
      </div>

      <p style={{ marginTop: "24px", fontSize: "13px", color: "#6b7280" }}>
        Note: Ye sirf testing page hai. Jab yaha click sahi se chalne lagega,
        tab wapas se proper table + Firestore data add karenge.
      </p>
    </div>
  );
}
