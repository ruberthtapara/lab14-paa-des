import { getCMSPosts } from "../../lib/cms";

const BASE_URL = "https://lab14-paa-des.onrender.com";

export default async function handler(req, res) {
  // Rutas estáticas clave del sitio web
  const staticPages = [
    { url: "/", changefreq: "daily", priority: "1.0" },
    { url: "/blog", changefreq: "daily", priority: "0.9" },
    { url: "/contacto", changefreq: "monthly", priority: "0.7" },
  ];

  // Consulta dinámica a la Base de Datos / CMS
  const dynamicPosts = await getCMSPosts();

  const dynamicPages = dynamicPosts.map((post) => ({
    url: `/blog/${post.id}`,
    lastmod: post.lastmod,
    changefreq: "weekly",
    priority: "0.8",
  }));

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : `<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>`}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).send(sitemap);
}
