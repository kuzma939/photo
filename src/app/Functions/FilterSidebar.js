// components/filters/LocationFilter.jsx
"use client";

import React, { useState } from "react";
import { useLanguage } from "./useLanguage";
import { FiFilter } from "react-icons/fi";

export default function FilterSidebar({ children }) {
  const { translateList } = useLanguage();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const menuItems = translateList("Filtersidebar", "header") || [];

  return (
    <>
      {/* Кнопка відкриття фільтра на мобільних */}
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex flex-col items-center justify-center gap-1 z-50"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open Filters"
      >
        <FiFilter size={24} />
        <span className="text-xs font-medium">{menuItems[8] || "Filter"}</span>
      </button>

      {isFilterOpen && (
        <button
          className="fixed md:hidden top-1 right-1 text-black dark:text-white text-lg bg-white dark:bg-gray-900 p-2 z-[100]"
          onClick={() => setIsFilterOpen(false)}
        >
          ✖
        </button>
      )}

      <aside
        className={`w-full md:w-1/3 lg:w-1/4 bg-gray-300 p-4 sm:p-6 rounded-lg shadow-2xl dark:bg-[#0f172a] 
        md:block md:relative md:translate-x-0 overflow-y-auto 
        ${isFilterOpen ? "fixed inset-0 bg-white dark:bg-[#0f172a] z-50 translate-x-0" : "hidden"} md:translate-x-0`}
        aria-label="Filter Sidebar"
      >
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-950 dark:border-gray-700 pb-2">
            {menuItems[2] || "Filters"}
          </h2>

          {/* Тут children — ми передаємо <LocationFilter /> і <SortMenu /> */}
          <div className="mb-6">
            {children}
          </div>

          {/* Кнопка закриття фільтра на мобільних */}
          <div className="w-full dark:bg-gray-900 p-4 shadow-lg md:hidden">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              onClick={() => setIsFilterOpen(false)}
            >
              {menuItems[9] || "Apply"}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
