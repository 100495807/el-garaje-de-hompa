import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const siteUrl = new URL(base, context.site).toString();
  const articles = (await getCollection("articulos", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: "El Garaje de Hompa",
    description: "Revista diaria de coches con opinion personal, guias de compra y cultura automovilistica.",
    site: siteUrl,
    customData: "<language>es-ES</language>",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `${base}articulos/${article.id}/`,
    })),
  });
}
