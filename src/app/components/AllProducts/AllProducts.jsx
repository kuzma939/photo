"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PaginatedProducts from "../../components/PaginatedProducts/PaginatedProducts";
import ProductBanner from "../../components/products/ProductBanner";
import { useLanguage } from "../../Functions/useLanguage";
import products from "../../data/products";
import LocationFilter from "../../Functions/LocationFilter";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Catalogues", "header");

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilter, setShowFilter] = useState(false); // ❗️Кнопка "Filter"
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (productId) {
      const product = products.find((p) => String(p.id) === productId);
      setSelectedProduct(product || null);
    } else {
      setSelectedProduct(null);
    }
  }, [productId]);

  const filteredProducts = products.filter((product) =>
    selectedLocation ? product.location === selectedLocation : true
  );

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

        {/* ✅ Маленька кнопка фільтра */}
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "×" : "Filter"}
          </button>
        </div>

        {/* ✅ Показуємо фільтр по кліку */}
        {showFilter && (
          <div className="mb-6 w-full md:w-1/2 lg:w-1/3">
            <LocationFilter
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
            />
          </div>
        )}

        {!selectedProduct && (
          <div className="relative w-full h-72 sm:h-96 mb-6">
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

        <section className="w-full px-4 sm:px-6 md:px-8 py-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{menuItems[0]}</h1>
          <p className="text-gray-700 dark:text-gray-400 mb-4">{menuItems[1]}</p>
          <p className="text-gray-700 dark:text-gray-400 mt-4 pb-4">
            {filteredProducts.length} {menuItems[2]}
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
