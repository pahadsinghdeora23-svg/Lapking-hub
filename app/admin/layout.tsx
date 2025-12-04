export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", height: "100vh", margin: 0 }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "240px",
            background: "#111827",
            color: "white",
            padding: "20px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Lapking Hub</h2>
          <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
            <li><a href="/admin/dashboard" style={{ color: "white" }}>Dashboard</a></li>
            <li><a href="/admin/products" style={{ color: "white" }}>Products</a></li>
            <li><a href="/admin/orders" style={{ color: "white" }}>Orders</a></li>
            <li><a href="/admin/categories" style={{ color: "white" }}>Categories</a></li>
          </ul>
        </aside>

        {/* Content */}
        <main style={{ flex: 1, padding: "20px", background: "#F3F4F6" }}>
          {children}
        </main>
      </body>
    </html>
  );
            }
