"use client";

export default function AdminProductsPage() {
  const handleClick = () => {
    alert("Admin Products button working ✅");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#f1f5f9",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: 600 }}>
        Test Admin Products (Firebase connected in lib/firebase.ts)
      </h1>

      <button
        onClick={handleClick}
        style={{
          padding: "12px 16px",
          borderRadius: "999px",
          border: "none",
          fontWeight: 600,
          fontSize: "14px",
          backgroundColor: "#2563eb",
          color: "white",
        }}
      >
        👉 Click Me (Test)
      </button>

      <p>
        Agar is button pe click karne se alert aaye to JavaScript, client
        component sab sahi chal raha hai. Firebase sirf background me ready hai.
      </p>
    </div>
  );
}
