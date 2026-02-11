import Script from "next/script";
import Layout from "../components/Layout";
import LoveGallery from "../components/LoveStoryInffo/LoveStoryInffo";
import loveJsonLd from "../seo/love-jsonld";
import products from "../data/products";
import seoConfig from "../../../next-seo.config";

// SEO Metadata for Love Story page
export async function generateMetadata() {
  return {
    title: seoConfig.loveStory.title,
    description: seoConfig.loveStory.description,
    keywords: seoConfig.loveStory.keywords,
    openGraph: seoConfig.loveStory.openGraph,
    twitter: seoConfig.loveStory.twitter,
    alternates: {
      canonical: seoConfig.loveStory.canonical,
    },
    robots: seoConfig.loveStory.robots,
  };
}

export default function LoveStoryPage() {
  const loveProducts = products;
  const jsonLd = loveJsonLd(loveProducts);

  return (
    <div className="transition-colors">
      <Script
        id="love-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <LoveGallery />
      </Layout>
    </div>
  );
}
