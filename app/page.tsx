import Link from "next/link";

const products = [
  { id: "1", name: "HP Charger", price: 799 },
  { id: "2", name: "Lenovo Keyboard", price: 499 },
  { id: "3", name: "Dell Battery", price: 1499 },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "16px",
        maxWidth: "480px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#020617",
        color: "white",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: 700 }}>Lapking Hub</h1>

        {/* Cart button */}
        <Link
          href="/cart"
          style={{
            borderRadius: "999px",
            padding: "6px 14px",
            backgroundColor: "#22c55e",
            color: "#020617",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          🛒 Cart
        </Link>
      </header>

      <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "12px" }}>
        B2B Laptop & Accessories Store
      </p>

      <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
        Products
      </h2>

      <div style={{ display: "grid", gap: "10px" }}>
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                borderRadius: "12px",
                border: "1px solid #1f2937",
                padding: "10px",
                backgroundColor: "#020617",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600 }}>
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#22c55e",
                  }}
                >
                  ₹{p.price}
                </span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                Tap to view details
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
      }
