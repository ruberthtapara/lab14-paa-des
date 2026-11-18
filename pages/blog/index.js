import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getCMSPosts } from "../../lib/cms";

export async function getStaticProps() {
  const posts = await getCMSPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60, // Incremental Static Regeneration (ISR)
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog de SEO Técnico y Desarrollo Web | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Artículos especializados en optimización de rendimiento, meta tags dinámicos, sitemaps y buenas prácticas en Next.js."
        />
        <meta name="keywords" content="Blog SEO, Next.js, Web Vitals, Optimización Web, Desarrollo Web" />
        <meta property="og:title" content="Blog de SEO Técnico y Desarrollo Web" />
        <meta
          property="og:description"
          content="Descubre guías paso a paso para dominar la optimización técnica en Next.js."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://lab14-paa-des.onrender.com/blog" />
      </Head>

      <Navbar />

      <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#111827" }}>
          Blog de Optimización y SEO
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#4b5563", marginBottom: "2rem" }}>
          Aprende las mejores técnicas para mejorar el rendimiento y posicionamiento en Google.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                padding: "1.5rem",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
                transition: "transform 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    backgroundColor: "#e0f2fe",
                    color: "#0369a1",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#9ca3af" }}>{post.lastmod}</span>
              </div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                <Link
                  href={`/blog/${post.id}`}
                  style={{ color: "#1d4ed8", textDecoration: "none" }}
                >
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: "#4b5563", marginBottom: "1rem", lineHeight: "1.6" }}>
                {post.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>Por {post.author}</span>
                <Link
                  href={`/blog/${post.id}`}
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
