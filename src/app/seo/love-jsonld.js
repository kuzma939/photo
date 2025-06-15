const loveJsonLd = (products) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "Product",
    identifier: product.id,
    name: product.translations?.EN?.name || "Unnamed Product",
    image: product.image
      ? {
          "@type": "ImageObject",
          url: `https://www.latore.shop?loveStoryImage=${product.image}`,
          width: 1200,
          height: 628,
          caption: product.translations?.EN?.name || "Unnamed Product",
        }
      : undefined,
    description: product.translations?.EN?.description || "No description available",
    sku: product.sku || "N/A",
    offers: {
      "@type": "Offer",
      price: product.discountPrice || product.price,
      priceCurrency: "UAH",
      availability: "https://schema.org/InStock",
    },
    category: product.category || "General",
    color: product.colors?.join(", "),
    size: product.sizes?.join(", "),
    itemCondition: "https://schema.org/NewCondition",
  })),
});

export default loveJsonLd;
