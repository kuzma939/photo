"use client";
import products from "../../data/products";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
//import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
//import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";
import ProductBanner from "../products/ProductBanner";

export default function TopProductsInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("home", "top_products");
  const router = useRouter();
  const searchParams = useSearchParams();
  const descriptionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topProducts = products.filter((product) => product.isTop === true);

  const selectedProductId = searchParams.get("product");
  const initialProduct = selectedProductId
    ? topProducts.find((p) => p.id === Number(selectedProductId))
    : topProducts[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  useEffect(() => {
    if (selectedProductId) {
      const foundProduct = topProducts.find((p) => p.id === Number(selectedProductId));
      if (foundProduct) {
        setSelectedProduct(foundProduct);
        setTimeout(() => {
          descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [selectedProductId]);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    router.push(`?product=${product.id}`, undefined, { shallow: true });
    setIsModalOpen(true); // відкриваємо модалку
  };
  
  const onContactClick = (selectedColor, selectedSize, quantity, currentLanguage) => {
    handleContactButtonClick(router, selectedProduct, selectedColor, selectedSize, quantity, currentLanguage);
  };
  
  
  return (
    <>
      {isModalOpen && selectedProduct && (
        <ProductBanner
          selectedProduct={selectedProduct}
          onClose={() => {
            setIsModalOpen(false);
            router.push("/Top-products", undefined, { shallow: true }); // очищає ?product=...
          }}
        />
      )}
  
      <div className="dark:bg-gray-800 bg-gray-100 text-black dark:text-white min-h-screen px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{menuItems[0]}</h1>
        </div>
  
        <section aria-labelledby="top-products">
          <h2 id="top-products" className="sr-only">Top Products</h2>
          <div className="bg-gray-100 dark:bg-gray-800 max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
              {topProducts.map((product) => {
                const translatedName = product.translations?.[language]?.name || product.title;
  
                return (
                  <article
                    key={product.id}
                    className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="w-full h-[200px] sm:h-[350px] overflow-hidden rounded-t">
                      <Image
                        src={product.image}
                        alt={`Preview of ${translatedName}`}
                        width={300}
                        height={350}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <div className="p-2 sm:p-4 dark:bg-gray-200">
                      <h3 className="font-semibold text-sm sm:text-lg">{translatedName}</h3>
                      <p className="text-black dark:text-gray-600 text-xs sm:text-base">{product.price} UAH</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}