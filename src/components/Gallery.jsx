import React, { useState } from 'react';
import ImageCard from './ImageCard';
import LightboxModal from './LightboxModal';

const Gallery = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <ImageCard key={img.id} img={img} onClick={() => setSelectedImg(img)} />
      ))}

      {selectedImg && (
        <LightboxModal img={selectedImg} onClose={() => setSelectedImg(null)} />
      )}
    </div>
  );
};

export default Gallery;
