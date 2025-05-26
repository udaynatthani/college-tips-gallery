
import React, { useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Gallery from "./components/Gallery";
import imagesData from "./data/image";

const App = () => {
  const [category, setCategory] = useState("All");

  const filteredImages =
    category === "All"
      ? imagesData
      : imagesData.filter((img) => img.category === category);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <FilterBar category={category} setCategory={setCategory} />
      <Gallery images={filteredImages} />
    </div>
  );
};

export default App;
