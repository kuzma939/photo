import { Suspense } from "react";
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
import seoConfig from "../../../next-seo.config";
import contactJsonLd from "../seo/contact-jsonld";

export const dynamic = "force-dynamic";

// SEO Metadata for Contact page
export async function generateMetadata() {
  return {
    title: seoConfig.contact.title,
    description: seoConfig.contact.description,
    keywords: seoConfig.contact.keywords,
    openGraph: seoConfig.contact.openGraph,
    twitter: seoConfig.contact.twitter,
    alternates: {
      canonical: seoConfig.contact.canonical,
    },
    robots: seoConfig.contact.robots,
  };
}

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}