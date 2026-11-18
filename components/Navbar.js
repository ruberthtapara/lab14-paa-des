import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#111827",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          🚀 <span>SEO Master</span>
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            href="/"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Inicio
          </Link>
          <Link
            href="/blog"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            style={{
              color: "#374151",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
