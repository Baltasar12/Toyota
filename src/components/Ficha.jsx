import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import { Hilux, Der, Izq } from '../utils';

const Ficha = () => {
  return (
    <section className='pt-20'>

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-10 mb-6'>
        <img src={Hilux} alt="Camioneta Hilux" className="w-full md:w-1/2 h-auto" />
        
        <div className='flex flex-col justify-center md:ml-10 mt-6 md:mt-0'>
          <h2 className='font-semibold text-xl md:text-2xl'>Hilux DX/SR</h2>
          <h1 className='font-bold  text-4xl md:text-6xl leading-tight mt-2'>Preparada para <br/> cualquier desafío</h1>
          <p className='mt-4 md:mt-7 text-sm md:text-base'>
          La Hilux DX/SR está diseñada para enfrentar todo tipo de terrenos y condiciones <br />con su robustez y tecnología avanzada. 
          Ya sea en caminos difíciles o en la vida cotidiana, <br />esta camioneta está lista para superar cualquier obstáculo, ofreciendo confiabilidad y <br /> rendimiento excepcional en cada viaje.
          </p>
        </div>
      </article>

      <PhotoCarousel />

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-10'>
        <div>
          <h1 className='text-lg md:text-xl font-semibold mb-2'>Tansmisión</h1>
          <p className='text-sm md:text-base'>Manual de 6 velocidades. Tracción 4x2, optimizando la eficiencia y el control durante la conducción. <br /> La tracción 4x2 proporciona potencia únicamente a dos ruedas, br generalmente las traseras, <br />lo que resulta en una conducción suave en carreteras pavimentadas y en condiciones normales, <br />favoreciendo el ahorro de combustible y la simplicidad mecánica.</p>
        </div>
        <img src={Der} alt="Derecha" className="w-full md:w-1/2 h-auto mt-6 md:mt-0" />
      </article>

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-6'>
        <img src={Izq} alt="Izquierda" className="w-full md:w-1/2 h-auto" />
        <div className='md:ml-10 mt-6 md:mt-0'>
          <h1 className='text-lg md:text-xl font-semibold mb-2'>Confort & Tecnología</h1>
          <p className='text-sm md:text-base'>Todas las versiones vienen equipadas con audio con pantalla táctil de 9”, conectividad inalámbrica Android Auto® y Apple CarPlay®* y control de velocidad crucero.</p>
        </div>
      </article>
    </section>
  )
}

export default Ficha;
