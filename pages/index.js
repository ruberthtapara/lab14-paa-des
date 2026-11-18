import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="H6aBI3cUebMsKLhyPtHz2RHfs_eX4YExRwNR5txzQ0Q" />
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Bienvenido a mi página optimizada</h1>
        <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1.5rem" }}>
          Aprende cómo mejorar el rendimiento y SEO en Next.js con optimización de imágenes.
        </p>

        <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <Image
            src="/images/seo-image.png"
            width={800}
            height={400}
            alt="Ejemplo de imagen optimizada"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </main>
    </>
  );
}
