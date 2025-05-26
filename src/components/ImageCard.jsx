
import React from "react";

const ImageCard = ({ img, onClick }) => (
  <div
    className="relative cursor-pointer overflow-hidden rounded-xl shadow-md"
    onClick={onClick}
  >
    <img
      src={img.url}
      alt={img.title}
      className="w-full h-60 object-cover transform hover:scale-110 transition duration-300"
    />
    <div className="absolute bottom-0 bg-black/50 text-white text-sm p-2 w-full text-center">
      {img.title}
    </div>
  </div>
);

export default ImageCard;
