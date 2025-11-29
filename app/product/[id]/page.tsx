import Link from "next/link";

const products = [
  { id: "1", name: "HP Charger", price: 799, stock: 10, description: "Original HP laptop charger, 65W." },
  { id: "2", name: "Lenovo Keyboard", price: 499, stock: 15, description: "USB Lenovo keyboard, full size." },
  { id: "3", name: "Dell Battery", price: 1499, stock: 8, description: "Compatible Dell laptop battery." },
];

type ProductPageProps = {
  params: { id: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
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
        <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
          Product not found
        </h1>
        <Link href="/" style={{ color: "#22c55e", fontSize: "14px", textDecoration: "none" }}>
          ⬅ Back to Home
        </Link>
      </main>
    );
  }

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
        <h1 style={{ fontSize: "22px", fontWeight: 700 }}>{product.name}</h1>

        <Link
          href="/"
          style={{
            fontSize: "12px",
            color: "#22c55e",
            textDecoration: "none",
          }}
        >
          ⬅ Home
        </Link>
      </header>

      <div
        style={{
          borderRadius: "12px",
          border: "1px solid #1f2937",
          padding: "12px",
          marginBottom: "16px",
          backgroundColor: "#020617",
        }}
      >
        <p style={{ fontSize: "14px", marginBottom: "8px" }}>{product.description}</p>

        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#22c55e",
            marginBottom: "4px",
          }}
        >
          ₹{product.price}
        </p>

        <p style={{ fontSize: "12px", color: "#9ca3af" }}>Stock: {product.stock} pcs</p>
      </div>

      <Link
        href="/cart"
        style={{
          display: "inline-block",
          borderRadius: "999px",
          padding: "10px 20px",
          backgroundColor: "#22c55e",
          color: "#020617",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        🛒 Add to Cart (demo)
      </Link>
    </main>
  );
      }
