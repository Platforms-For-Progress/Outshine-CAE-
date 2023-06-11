import React, { useState, useEffect } from 'react';
import b1 from "./banner1.jpeg"
import b2 from "./banner2.jpeg"
import b3 from "./banner3.jpeg"
import "./Banner.css";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [b1, b2, b3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="flag">
      <img
        src={images[currentImageIndex]}
        className='banner'
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Banner;
