"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PaginatedProducts from "../../components/PaginatedProducts/PaginatedProducts";
import ProductBanner from "../../components/products/ProductBanner";
import { useLanguage } from "../../Functions/useLanguage";
import products from "../../data/products";
import LocationFilter from "../../Functions/LocationFilter";
import TypeFilter from "../../Functions/TypeFilter";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Catalogues", "header");

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState(""); 
 const [showFilter, setShowFilter] = useState(false);


  const descriptionRef = useRef(null);

  useEffect(() => {
    if (productId) {
      const product = products.find((p) => String(p.id) === productId);
      setSelectedProduct(product || null);
    } else {
      setSelectedProduct(null);
    }
  }, [productId]);

  // ✅ ФІЛЬТРАЦІЯ по location + category
  const filteredProducts = products.filter((product) => {
    const matchLocation = selectedLocation ? product.location === selectedLocation : true;
    const matchType = selectedType ? product.type === selectedType : true;
  return matchLocation && matchType;
   
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    router.push(`/All-products?product=${product.id}`, { scroll: false });
  };

  const handleCloseBanner = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("product");
    router.push(`/All-products?${newParams.toString()}`, { scroll: false });
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gray-100 text-black dark:text-white min-h-screen dark:bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">



       

        {!selectedProduct && (
          <div className="relative w-full h-72 sm:h-[600px] mb-6">
            <Image
              src="/2.avif"
              alt="Category Banner"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
            />
          </div>
        )}

        {selectedProduct && (
          <ProductBanner
            selectedProduct={selectedProduct}
            descriptionRef={descriptionRef}
            handleContactButtonClick={() => {}}
            onClose={handleCloseBanner}
          />
        )}
        {/* 🔽 ВИБІР ЛОКАЦІЇ — завжди показується під банером */}
<div className="mb-6 w-full md:w-2/3 lg:w-1/2 space-y-4">
  <div>
    <label className="block mb-1 font-medium">Location</label>
    <LocationFilter
      selectedLocation={selectedLocation}
      onSelectLocation={setSelectedLocation}
    />
  </div>
</div>

 {/* ✅ Блок фільтрів */}
 {showFilter && (
          <div className="mb-6 w-full md:w-2/3 lg:w-1/2 space-y-4">
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <LocationFilter
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
              />
            </div>
      {/*}      <div>
    <label className="block mb-1 font-medium">Тип</label>
    <TypeFilter
      selectedType={selectedType}
      onSelectType={setSelectedType}
    />
  </div>
        */}
          </div>
        )}
        <section className="w-full px-4 sm:px-6 md:px-8 py-4">
  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
    {selectedLocation || "Locations"}
  </h1>
  <p className="text-gray-700 dark:text-gray-400 mt-2 pb-4">
    {filteredProducts.length} {filteredProducts.length === 1 ? "photo" : "photos"}
  </p>
</section>


        <section className="w-full">
          <PaginatedProducts
            products={filteredProducts}
            productsPerPage={12}
            onProductClick={handleProductClick}
          />
        </section>
      </div>
    </section>
  );
}

