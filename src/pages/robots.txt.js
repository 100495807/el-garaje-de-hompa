const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export function GET(context) {
  const siteUrl = new URL(base, context.site).toString();
  const sitemapUrl = new URL(`${base}sitemap-index.xml`, context.site).toString();

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${sitemapUrl}`,
      `Host: ${siteUrl}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
