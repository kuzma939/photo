import Script from "next/script";
import Layout from "../components/Layout";
import GalleryInfo from "../components/GalleryInfo/GalleryInfo";
import seoConfig from "../../../next-seo.config";
import products from "../data/products";
import galleryJsonLd from "../seo/gallery-jsonld";

// SEO Metadata for Gallery page
export async function generateMetadata() {
  return {
    title: seoConfig.gallery.title,
    description: seoConfig.gallery.description,
    keywords: seoConfig.gallery.keywords,
    openGraph: seoConfig.gallery.openGraph,
    twitter: seoConfig.gallery.twitter,
    alternates: {
      canonical: seoConfig.gallery.canonical,
    },
    robots: seoConfig.gallery.robots,
  };
}

export default function GalleryPage() {
  // Select gallery items to display
  const gallery = products.filter((p) => p.isTop);

  // JSON-LD for structured data
  const jsonLd = galleryJsonLd(gallery);

  return (
    <div className="transition-colors">
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <GalleryInfo />
      </Layout>
    </div>
  );
}
