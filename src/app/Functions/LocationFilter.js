// src/app/Functions/LocationFilter.jsx
"use client";

export default function LocationFilter({ selectedLocation, onSelectLocation }) {
  const locations = [
    "All",
    "Gothic Quarter",
    "Cathedral of Barcelona",
    "Sagrada Família",
    "Ciutadella Park",
    "Parc del Laberint",
    "Parc de Montjuïc",
  ];

  return (
    <select
      value={selectedLocation}
      onChange={(e) => onSelectLocation(e.target.value)}
      className="w-full p-2 rounded border border-gray-400 dark:bg-gray-800 dark:text-white"
    >
      {locations.map((loc) => (
        <option key={loc} value={loc === "All" ? "" : loc}>
          {loc}
        </option>
      ))}
    </select>
  );
}
