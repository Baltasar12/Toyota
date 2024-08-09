import React, { useState } from 'react';
import { hightlightsSlides } from '../utils';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hightlightsSlides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === hightlightsSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-20">
      {/* Imágenes */}
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {hightlightsSlides.map((slide, i) => (
            <div key={i} className="min-w-full flex flex-col items-center">
              <img src={slide.image} alt={`Slide ${i}`} className="w-3/5 h-4/5 object-cover rounded-lg"/>
                <div className="bg-white text-black p-4">
                  {slide.textLists.map((text, idx) => (
                    <p key={idx} className="text-center text-lg">
                      {text}
                    </p>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-3 rounded-r-lg">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-3 rounded-l-lg">
        &#10095;
      </button>

      {/* Puntos */}
      <div className="flex justify-center space-x-2 mt-4">
        {hightlightsSlides.map((_, slideIndex) => (
          <div key={slideIndex}
            className={`w-3 h-3 rounded-full cursor-pointer ${slideIndex === currentIndex ? 'bg-redT' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(slideIndex)}/>
        ))}
      </div>
    </div>
  );
};


export default ImageCarousel;