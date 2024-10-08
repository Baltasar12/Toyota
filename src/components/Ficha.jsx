import React, { useEffect,  useState } from 'react';
import { gsap } from 'gsap';
import {PhotoCarousel} from './PhotoCarousel';
import { Hilux, Der, Izq } from '../utils';
import { hightlightsSlides } from '../utils';

const Ficha = () => {
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

  const carousel = [...hightlightsSlides,...hightlightsSlides]

  useEffect(() => {
    // Animaciones GSAP
    gsap.fromTo(
      '.animate',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <section className='pt-20' id='ficha'>

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-10 mb-6'>
        <img src={Hilux} alt="Camioneta Hilux" className="w-full md:w-1/2 h-auto animate" />
        
        <div className='flex flex-col justify-center md:ml-10 mt-6 md:mt-0'>
          <h2 className='font-semibold text-xl md:text-2xl animate'>Hilux DX/SR</h2>
          <h1 className='font-bold  text-4xl md:text-6xl leading-tight mt-2 animate'>Preparada para <br/> cualquier desafío</h1>
            <p className='mt-4 max-w-prose md:mt-7 text-sm md:text-base'>
            La Hilux DX/SR está diseñada para enfrentar todo tipo de terrenos y condiciones con su robustez y tecnología avanzada. 
            Ya sea en caminos difíciles o en la vida cotidiana, esta camioneta está lista para superar cualquier obstáculo, 
            ofreciendo confiabilidad y rendimiento excepcional en cada viaje.
            </p>
        </div>
      </article>

      <div className='relative w-full max-w-3xl mx-auto mt-20 bg-slate-200 rounded-md'>
        {/* Carrusel */}
        <div className='overflow-hidden'>
          <div className='flex transition-transform duration-500'
            style={{
              transform: `translateX(-${currentIndex * (220 / hightlightsSlides.length)}%)`,
              width: `${100 * carousel.length / hightlightsSlides.length}%`,
            }}>
            {carousel.map((dato, index) => (
              <PhotoCarousel dato={dato} key={index} />
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
      </div>

      <article className='flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-32 mt-10'>
        <div>
          <h1 className='text-lg md:text-xl font-semibold mb-2 animate-on-scroll'>Tansmisión</h1>
            <p className='text-sm max-w-prose md:text-base'>Manual de 6 velocidades. Tracción 4x2, optimizando la eficiencia y el control durante la conducción. La tracción 4x2 proporciona potencia únicamente a dos ruedas,
             generalmente las traseras, lo que resulta en una conducción suave en carreteras pavimentadas y en condiciones normales, 
             favoreciendo el ahorro de combustible y la simplicidad mecánica.
            </p>
        </div>
        <img src={Der} alt="Derecha" className="w-full md:w-1/2 h-auto mt-6 md:mt-0 animate-on-scroll" />
      </article>

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-6'>
        <img src={Izq} alt="Izquierda" className="w-full md:w-1/2 h-auto animate-on-scroll" />
        <div className='md:ml-10 mt-6 md:mt-0'>
          <h1 className='text-lg md:text-xl font-semibold mb-2 animate-on-scroll'>Confort & Tecnología</h1>
            <p className='text-sm max-w-prose md:text-base'>Todas las versiones vienen equipadas con audio con pantalla táctil de 9”, 
            conectividad inalámbrica Android Auto® y 
            Apple CarPlay®* y control de velocidad crucero.
            </p>
        </div>
      </article>
    </section>
  )
}

export default Ficha;
