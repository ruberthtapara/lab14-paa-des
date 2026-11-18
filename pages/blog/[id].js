import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getCMSPosts, getCMSPostById } from "../../lib/cms";

export async function getStaticPaths() {
  const posts = await getCMSPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getCMSPostById(params.id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default function BlogPost({ post }) {
  const canonicalUrl = `https://lab14-paa-des.onrender.com/blog/${post.id}`;

  return (
    <>
      <Head>
        {/* Meta tags dinámicos basados en los datos del post */}
        <title>{`${post.title} | Blog SEO`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={`${post.category}, Next.js, SEO, Optimización`} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Dinámico */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="article:published_time" content={post.lastmod} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
      </Head>

      <Navbar />

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <Link
          href="/blog"
          style={{
            color: "#2563eb",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "1.5rem",
            fontWeight: "500",
          }}
        >
          ← Volver al blog
        </Link>

        <article>
          <div style={{ marginBottom: "1rem" }}>
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
            <span style={{ marginLeft: "1rem", color: "#6b7280", fontSize: "0.9rem" }}>
              Publicado el {post.lastmod} por <strong>{post.author}</strong>
            </span>
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "1rem",
              lineHeight: "1.25",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#4b5563",
              lineHeight: "1.7",
              marginBottom: "2rem",
              borderLeft: "4px solid #3b82f6",
              paddingLeft: "1rem",
              fontStyle: "italic",
            }}
          >
            {post.description}
          </p>

          <div
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: "#1f2937",
              backgroundColor: "#f9fafb",
              padding: "1.5rem",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p>{post.content}</p>
          </div>
        </article>
      </main>
    </>
  );
}
