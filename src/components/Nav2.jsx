import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { egoImg } from '../utils';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const primaryLinks = [
    { name: "Modelos", link: "/" },
    { name: "Ficha de modelo", link: "/Ficha" },
  ];

  const secondaryLinks = [
    { name: "Servicios y Accesorios", link: "/#" },
    { name: "Financiación", link: "/#" },
    { name: "Reviews y Comunidad", link: "/#" },
    { name: "Toyota Mobility Service", link: "/#" },
    { name: "Toyota Gazoo Racing", link: "/#" },
    { name: "Toyota Híbridos", link: "/#" },
    { name: "Concesionarios", link: "/#" },
    { name: "Test Drive", link: "/#" },
    { name: "Contacto", link: "/#" },
  ];

  let [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-30'>
      <div className='flex items-center justify-between bg-white py-4 px-7'>
        {/* Logo Image */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <img src={egoImg} alt="EGO" />
        </div>

        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='cursor-pointer w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        {/* Links items */}
        <ul className={`absolute bg-white left-0 w-full transition-all duration-500 ease-in ${open ? 'top-12 opacity-100' : 'top-[-490px] opacity-0'} z-[-1]`}>
          {primaryLinks.map((link, index) => (
            <li key={index} className='my-7 font-semibold text-center'>
              <a href={link.link} className={`text-blackT hover:text-redT duration-500 ${location.pathname === link.link ? 'text-redT border-b-2 border-red-500 py-5' : ''}`} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}

          {secondaryLinks.map((link, index) => (
            <li key={index} className='my-7 font-semibold text-center'>
              <a href={link.link} className='text-blackT hover:text-redT duration-500' onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
