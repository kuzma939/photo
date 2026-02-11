import Layout from "./components/Layout";
import Home from "./home";
import seoConfig from "../../next-seo.config";

// SEO Metadata for homepage
export async function generateMetadata() {
  return {
    title: seoConfig.defaults.title,
    description: seoConfig.defaults.description,
    keywords: seoConfig.defaults.keywords,
    openGraph: seoConfig.defaults.openGraph,
    twitter: seoConfig.defaults.twitter,
    alternates: {
      canonical: seoConfig.defaults.canonical,
    },
    robots: seoConfig.defaults.robots,
  };
}

export default function Page() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
