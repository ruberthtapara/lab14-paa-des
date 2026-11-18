export default function LargeComponent() {
  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        backgroundColor: "#f0fdf4",
        border: "2px solid #86efac",
        borderRadius: "8px",
        color: "#166534",
      }}
    >
      <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        ⚡ LargeComponent (Lazy Loaded)
      </h2>
      <p style={{ marginBottom: "1rem", color: "#14532d" }}>
        Este componente fue cargado dinámicamente bajo demanda utilizando <code>next/dynamic</code> (React.lazy con <code>ssr: false</code>).
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
        <div style={{ padding: "1rem", background: "white", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#15803d" }}>+45%</div>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#4b5563" }}>Velocidad inicial de carga</p>
        </div>
        <div style={{ padding: "1rem", background: "white", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#15803d" }}>0 KB</div>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#4b5563" }}>Bundle inicial sin bloqueo</p>
        </div>
        <div style={{ padding: "1rem", background: "white", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#15803d" }}>100/100</div>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#4b5563" }}>Lighthouse Performance</p>
        </div>
      </div>
    </div>
  );
}
