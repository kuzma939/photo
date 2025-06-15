"use client"; // Оголошуємо файл як клієнтський компонент

import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import galleryJsonLd from "../seo/gallery-jsonld";
import products from "../data/products";
import seoConfig from "../../../next-seo.config";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const GalleryInfo = dynamic(() => import("../components/GalleryInfo/GalleryInfo"), {
  ssr: false,
  loading: () => <div>Loading gallery...</div>,
});

export default function GalleryPage() {
  const gallery = products.filter((product) => product.isTop);

  const jsonLd = galleryJsonLd(gallery);
  const seo = seoConfig.gallery;

  return (
    <div className="transition-colors">
      {/* SEO-метатеги */}
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content={seo.robots} />
      </Head>

      {/* JSON-LD для SEO */}
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <GalleryInfo />
      </Layout>
    </div>
  );
}
