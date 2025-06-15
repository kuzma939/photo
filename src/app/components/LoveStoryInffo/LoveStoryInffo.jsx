"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../../Functions/useLanguage";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import products from "../../data/products";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import { motion } from "framer-motion";

export default function LoveGallery() {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [likesMap, setLikesMap] = useState({});
  const [copied, setCopied] = useState(false);

  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;

  // ⏳ Ініціалізація з URL
  useEffect(() => {
    const idFromUrl = searchParams.get("id");
    if (idFromUrl) {
      const index = products.findIndex((p) => p.id.toString() === idFromUrl);
      if (index !== -1) {
        setSelectedIndex(index);
        setSelectedImage(products[index].image);
      }
    }
  }, [searchParams]);

  // 🔁 Завантажити лайки з localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("likesMap");
      if (saved) {
        setLikesMap(JSON.parse(saved));
      }
    }
  }, []);

  const handleSelectProduct = (index) => {
    const product = products[index];
    setSelectedIndex(index);
    setSelectedImage(product.image);
    router.replace(`?id=${product.id}`);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setSelectedImage(null);
    router.replace("/love-story");
    setCopied(false);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % products.length;
    handleSelectProduct(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + products.length) % products.length;
    handleSelectProduct(prevIndex);
  };

  // ❤️ Обробка Like
  const handleLikeToggle = (id) => {
    setLikesMap((prev) => {
      const current = prev[id] || { count: 0, liked: false };
      const updated = {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked,
        },
      };
      localStorage.setItem("likesMap", JSON.stringify(updated));
      return updated;
    });
  };

  // 📤 Копіювати посилання
  const handleShare = async () => {
    const url = `${window.location.origin}/love-story?id=${selectedProduct.id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-[#fcf8f3] dark:bg-gray-900 min-h-screen px-4 py-8 text-black dark:text-white">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Love Story</h1>
        <p className="text-md md:text-lg mt-4 max-w-2xl mx-auto">
  {`Explore our couples' romantic journeys captured in beautiful European destinations.`}
</p>

      </header>

      {!selectedProduct && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const name = product.translations?.[language]?.name || product.title;
            const location = product.location;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer rounded overflow-hidden shadow-md hover:shadow-lg border bg-white hover:bg-gray-50 transition"
                onClick={() => handleSelectProduct(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">View Story</span>
                  </div>
                </div>
                <div className="px-4 py-3 text-center">
                  <p className="text-lg font-medium">{name}</p>
                  <p className="text-sm text-gray-800 italic">{location}</p>
                </div>
              </motion.div>
            );
          })}
        </section>
      )}

      {selectedProduct && (
        <section className="flex flex-col lg:flex-row gap-8 items-start justify-center mt-8">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square overflow-hidden rounded-lg">
              {typeof selectedImage === "string" ? (
                <Image
                  src={selectedImage}
                  alt={
                    selectedProduct.translations?.[language]?.name ||
                    selectedProduct.title ||
                    "Love photo"
                  }
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />
              ) : (
                <video
                  src={selectedImage?.src}
                  poster={selectedImage?.poster || "/default-poster.jpg"}
                  controls
                  className="object-cover w-full h-full rounded"
                />
              )}
            </div>

            <ThumbnailCarousel
              images={[selectedProduct.image, ...(selectedProduct.images || [])]}
              onImageSelect={(img) => setSelectedImage(img)}
            />
          </div>

          <div className="w-full lg:w-1/3 space-y-4">
            <h2 className="text-2xl font-bold">
              {selectedProduct.translations?.[language]?.name || selectedProduct.title}
            </h2>
            <p className="italic text-gray-900 dark:text-gray-300">
              {selectedProduct.location}
            </p>
            <p className="whitespace-pre-line">
              {selectedProduct.translations?.[language]?.description ||
                selectedProduct.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                Next
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
              >
                Back to Gallery
              </button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => handleLikeToggle(selectedProduct.id)}
                className={`px-4 py-2 rounded font-semibold flex items-center gap-2 ${
                  likesMap[selectedProduct.id]?.liked
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
              >
                ❤️ {likesMap[selectedProduct.id]?.liked ? "Liked" : "Like"} (
                {likesMap[selectedProduct.id]?.count || 0})
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                📤 {copied ? "Link Copied!" : "Share"}
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
