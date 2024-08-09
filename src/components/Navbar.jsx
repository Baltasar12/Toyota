import React, { useState } from 'react';
import {XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid'
import { egoImg } from '../utils';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const primaryLinks =[
    {name:"Modelos",link:"/"},
    {name:"Ficha de modelo",link:"/Ficha"},
  ];

  const secondaryLinks = [
    {name:"Servicios y Accesorios",link:"/#"},
    {name:"Financiación",link:"/#"},
    {name:"Reviews y Comunidad",link:"/#"},

    {name:"Toyota Mobility Service",link:"/#"},
    {name:"Toyota Gazoo Racing",link:"/#"},
    {name:"Toyota Híbridos",link:"/#"},

    {name:"Concesionarios",link:"/#"},
    {name:"Test Drive",link:"/#"},
    {name:"Contacto",link:"/#"},
  ]

  let [open, setOpen] =useState(false);
  const location = useLocation();

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-30'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/*Logo Image*/}
          <div className='cursor-pointer flex items-center gap-1'>
            <img src={egoImg} alt="EGO"/>
          </div>

        {/* Menu icon */}
          <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer w-7 h-7'>
              {
                 open ? <XMarkIcon/> : <Bars3Icon />
              }
          </div>

        {/* links items */}
          <ul className={`text-right md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-whiteT md:z-auto z-[-1] left-0 w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                primaryLinks.map((link, index) => (
                  <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href={link.link} className={`text-blackT hover:text-redT duration-500 px-5 ${location.pathname === link.link ? 'text-redT border-b-2 border-red-500 py-5' : ''}`}>{link.name}</a>
                  </li>))
                }
                          
                {open && secondaryLinks.map((link, index) => (
                  <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href={link.link} className='text-blackT hover:text-redT duration-500 px-5'>{link.name}</a>
                  </li>))   
                }
          </ul>
        </div>
      </div>
  )
}

export default Navbar