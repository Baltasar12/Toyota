import React, { useState, useEffect } from 'react';
import { hightlightsSlides } from '../utils';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Duplicar el primer y último slide
  const slides = [
    hightlightsSlides[hightlightsSlides.length - 1],
    ...hightlightsSlides,
    hightlightsSlides[0],
  ];

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(hightlightsSlides.length);
    } else if (currentIndex === slides.length - 1) {
      setCurrentIndex(1);
    }
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  // Ajuste cuando se mueve al primer o último slide real
  useEffect(() => {
    if (!isTransitioning) {
      if (currentIndex === 0) {
        setCurrentIndex(hightlightsSlides.length);
      } else if (currentIndex === slides.length - 1) {
        setCurrentIndex(1);
      }
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-96 flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black bg-opacity-50 text-white p-4">
              {slide.textLists.map((text, i) => (
                <p key={i} className="text-lg">{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer"
        onClick={prevSlide}
      >
        &#10094;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
        onClick={nextSlide}
      >
        &#10095;
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {hightlightsSlides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              slideIndex + 1 === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(slideIndex + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
