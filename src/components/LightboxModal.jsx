import React, { useEffect } from "react";

const LightboxModal = ({ img, onClose }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  
  const handleBackgroundClick = (e) => {
    if (e.target.id === "lightbox-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        &times;
      </button>
      <img
        src={img.url}
        alt={img.title}
        className="max-w-full max-h-full rounded-xl shadow-lg"
      />
    </div>
  );
};

export default LightboxModal;