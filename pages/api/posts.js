import { getCMSPosts } from "../../lib/cms";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    const posts = await getCMSPosts();
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    return res.status(200).json({
      success: true,
      source: "Database / Headless CMS",
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Error consultando base de datos" });
  }
}
