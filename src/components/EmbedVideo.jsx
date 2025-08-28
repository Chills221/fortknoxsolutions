import React from 'react';

const EmbedVideo = ({ 
  src = "https://www.youtube.com/embed/W-rz-eO40gA?si=LrRwkPK49G8uEMpK",
  title = "YouTube video player",
  className = ""
}) => {
  return (
    <div className={`w-full bg-white py-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Responsive video container with 16:9 aspect ratio */}
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      </div>
    </div>
  );
};

export default EmbedVideo;