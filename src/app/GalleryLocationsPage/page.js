import Script from "next/script";
import Layout from "../components/Layout";
import GalleryLocations from "../components/GalleryLocations/GalleryLocations";
import generateGalleryLocationsJsonLd from "../seo/gallery-locations-jsonld";
import seoConfig from "../../../next-seo.config";
import products from "../data/products";

// SEO Metadata for Gallery Locations page
export async function generateMetadata() {
  return {
    title: seoConfig.favoriteSpots.title,
    description: seoConfig.favoriteSpots.description,
    keywords: seoConfig.favoriteSpots.keywords,
    openGraph: seoConfig.favoriteSpots.openGraph,
    twitter: seoConfig.favoriteSpots.twitter,
    alternates: {
      canonical: seoConfig.favoriteSpots.canonical,
    },
    robots: seoConfig.favoriteSpots.robots,
  };
}

export default function Products() {
  const jsonLd = generateGalleryLocationsJsonLd(products);

  return (
    <div className="transition-colors">
      <Script
        id="gallery-locations-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <GalleryLocations />
      </Layout>
    </div>
  );
}
