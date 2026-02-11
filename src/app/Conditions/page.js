import Script from "next/script";
import Layout from "../components/Layout";
import Conditions from "../components/Conditions/Conditions";
import generateConditionsJsonLd from "../seo/conditions-jsonld";
import seoConfig from "../../../next-seo.config";

// SEO Metadata for Conditions page
export async function generateMetadata() {
  return {
    title: seoConfig.conditions.title,
    description: seoConfig.conditions.description,
    keywords: seoConfig.conditions.keywords,
    openGraph: seoConfig.conditions.openGraph,
    twitter: seoConfig.conditions.twitter,
    alternates: {
      canonical: seoConfig.conditions.canonical,
    },
    robots: seoConfig.conditions.robots,
  };
}

export default function ConditionPage() {
  const jsonLd = generateConditionsJsonLd();

  return (
    <div className="transition-colors">
      <Script
        id="condition-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <Conditions />
      </Layout>
    </div>
  );
}
