// Robots.txt configuration for search engine crawlers
export default function robots() {
  const SITE_URL =
    (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
