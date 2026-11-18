const BASE_URL = "https://lab14-paa-des.onrender.com";

export default function handler(req, res) {
  const urls = ["/", "/blog", "/contacto"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${BASE_URL}${url}</loc></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.status(200).send(sitemap);
}
