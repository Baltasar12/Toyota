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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, possimus molestias, <br /> commodi quaerat  nam facere officia ad eum temporibus fugiat nisi cupiditate nemo <br /> eveniet illum animi obcaecati quia assumenda qui?
          </p>
        </div>
      </article>

      <PhotoCarousel />

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-10'>
        <div>
          <h1 className='text-lg md:text-xl font-semibold mb-2'>Título de 20px</h1>
          <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
        <img src={Der} alt="Derecha" className="w-full md:w-1/2 h-auto mt-6 md:mt-0" />
      </article>

      <article className='flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mt-6'>
        <img src={Izq} alt="Izquierda" className="w-full md:w-1/2 h-auto" />
        <div className='md:ml-10 mt-6 md:mt-0'>
          <h1 className='text-lg md:text-xl font-semibold mb-2'>Título de 20px</h1>
          <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
      </article>
    </section>
  )
}

export default Ficha;
