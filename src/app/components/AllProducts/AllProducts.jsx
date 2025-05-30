"use client";

import React, { useState } from "react";
import Image from "next/image";
import locationData from "../../data/location";
import { useLanguage } from "../../Functions/useLanguage";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Catalogues", "header");

  const [selectedLocation, setSelectedLocation] = useState("Ciutadella Park");

  const current = locationData.find((loc) => loc.location === selectedLocation);
  const currentBanner = current?.banner || "/default-banner.jpg";
  const currentImages = current?.images || [];

  const getTranslatedName = (loc) => {
    return loc.translations?.[language]?.name || loc.location;
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
            {locationData.map((loc) => (
              <option key={loc.id} value={loc.location}>
                {getTranslatedName(loc)}
              </option>
            ))}
          </select>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {getTranslatedName(current) || "Locations"}
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mb-8">
          {currentImages.length} {currentImages.length === 1 ? "photo" : "photos"}
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentImages.map((src, i) => (
            <div key={i} className="rounded shadow overflow-hidden">
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={300}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <p className="text-center text-sm mt-1 text-gray-800 dark:text-gray-200">
                {getTranslatedName(current)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
