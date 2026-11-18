import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contacto y Asesoría SEO | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Contáctanos para auditorías de rendimiento, optimización SEO para Next.js y consultoría en posicionamiento web."
        />
        <meta name="keywords" content="Contacto SEO, Auditoría Web, Consultoría Next.js, Soporte Técnico" />
        <meta property="og:title" content="Contacto y Asesoría SEO Especializada" />
        <meta
          property="og:description"
          content="Ponte en contacto con nuestro equipo para mejorar el ranking y la velocidad de tu aplicación web."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lab14-paa-des.onrender.com/contacto" />
      </Head>

      <Navbar />

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#111827" }}>
          Contacto y Asesoría
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#4b5563", marginBottom: "2rem" }}>
          ¿Tienes dudas sobre cómo optimizar tu aplicación Next.js? Envíanos un mensaje.
        </p>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
          }}
        >
          {submitted ? (
            <div
              style={{
                backgroundColor: "#ecfdf5",
                color: "#065f46",
                padding: "1rem",
                borderRadius: "6px",
                border: "1px solid #a7f3d0",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>¡Mensaje enviado con éxito!</h3>
              <p style={{ margin: "0.5rem 0 0" }}>Nos pondremos en contacto contigo a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#374151" }}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#374151" }}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#374151" }}>
                  Mensaje o consulta SEO
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe qué requieres optimizar en tu proyecto..."
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Enviar consulta
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
