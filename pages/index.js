import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
  loading: () => <p style={{ color: "#666", marginTop: "1rem" }}>Cargando componente con Lazy Loading...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web, rendimiento" />
        <meta property="og:title" content="Mi Sitio Optimizado - Home" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lab14-paa-des.onrender.com/" />
        <meta name="google-site-verification" content="H6aBI3cUebMsKLhyPtHz2RHfs_eX4YExRwNR5txzQ0Q" />
      </Head>

      <Navbar />

      <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#111827" }}>
          Bienvenido a mi página optimizada
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#4b5563", marginBottom: "1.5rem" }}>
          Aprende cómo mejorar el rendimiento y posicionamiento SEO en aplicaciones modernas con Next.js.
        </p>

        <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
          <Image
            src="/images/seo-image.png"
            width={800}
            height={400}
            alt="Ejemplo de imagen optimizada"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Componente cargado dinámicamente con Lazy Loading */}
        <DynamicComponent />
      </main>
    </>
  );
}
