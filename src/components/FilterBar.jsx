import React from "react";

const categories = [
  "All",
  "Team Vibes",
  "Creative Campaigns",
  "Work Hard, Play Hard",
  "Behind-The-Scenes",
];

const FilterBar = ({ category, setCategory }) => (
  <div className="flex justify-center flex-wrap gap-3 px-4 mb-6">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          category === cat
            ? "bg-blue-700 text-white"
            : "bg-white text-blue-700 border border-blue-700"
        }`}
        onClick={() => setCategory(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default FilterBar;