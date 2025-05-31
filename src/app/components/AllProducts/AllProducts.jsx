"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import locationData from "../../data/location";
import { useLanguage } from "../../Functions/useLanguage";
import { useSearchParams } from "next/navigation";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const locationNames = translateList("home", "header");
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location") || "all";
  

  //const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState(locationParam);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  useEffect(() => {
    setSelectedLocation(locationParam);
  }, [locationParam]);
  const current =
  selectedLocation !== "all"
    ? locationData.find((loc) => loc.location === selectedLocation)
    : null;


  const currentBanner = current?.banner || "/default-banner.jpg";
  const currentImages =
    selectedLocation === "all"
      ? locationData.flatMap((loc) => loc.images || [])
      : current?.images || [];

  const getTranslatedName = (location) => {
    const index = locationData.findIndex((loc) => loc.location === location);
    return locationNames?.[index + 7] || location; // adjusted index to match location names
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const goNext = () => {
    setModalImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const goPrev = () => {
    setModalImageIndex((prev) =>
      (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  return (
    <section className="bg-gray-100 text-black dark:text-white min-h-screen dark:bg-black">
      <div className="px-4 py-6 w-full max-w-7xl mx-auto">
        {/* Banner */}
        <div className="w-full h-72 sm:h-[500px] relative mb-6">
          <Image
            src={currentBanner}
            alt="Banner"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Location selector */}
        <div className="mb-6 w-full max-w-md">
          <label className="block mb-1 font-medium text-lg">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          >
            <option value="all">{language === "UA" ? "Усі" : "All"}</option>
            {locationData.map((loc, i) => (
              <option key={loc.id} value={loc.location}>
                {locationNames?.[i + 7] || loc.location}
              </option>
            ))}
          </select>
        </div>

        {/* Heading */}
        {selectedLocation !== "all" && (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {getTranslatedName(selectedLocation)}
            </h1>
            <p className="text-gray-700 dark:text-gray-400 mb-8">
              {currentImages.length} {currentImages.length === 1 ? "photo" : "photos"}
            </p>
          </>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentImages.map((src, i) => (
            <div
              key={i}
              className="rounded shadow overflow-hidden cursor-pointer"
              onClick={() => openModal(i)}
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={300}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-3xl text-white"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={goPrev}
          >
            &#10094;
          </button>
          <Image
            src={currentImages[modalImageIndex]}
            alt={`Photo ${modalImageIndex + 1}`}
            width={1000}
            height={800}
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={goNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}