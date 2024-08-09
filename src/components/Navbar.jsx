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
    { name: "Actividades", link: "/#" },
    { name: "Servicio al cliente", link: "/#" },
    { name: "Ventas especiales", link: "/#" },
    { name: "Innovación", link: "/#" },
    { name: "Prensa", link: "/#" },
    { name: "Acerca de...", link: "/#" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className='shadow-md w-full fixed z-30 py-4 px-10 bg-whiteT flex items-center justify-start gap-20'>
      {/*Logo*/}
      <div className='cursor-pointer'>
        <img src={egoImg} alt="EGO" />
      </div>

      {/*Links items*/}
      <ul className={`font-semibold hidden md:flex items-center flex-grow transition-opacity duration-500 ease-out ${open ? 'opacity-0' : 'hidden md:flex items-center flex-grow'}`}>
        {primaryLinks.map((link, index) => (
          <li key={index} className='px-5'>
            <a href={link.link} className={`hover:text-redT duration-500 ${location.pathname === link.link ? 'text-redT border-b-4 border-redT py-6' : ''}`}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* Secondary Links */}
      <div className={`fixed top-0 right-0 h-full overflow-y-auto bg-whiteT z-20  transition-transform transform ${open ? 'translate-x-0' : 'translate-x-full'} duration-500 ease-in-out`}>
        <ul className='font-semibold pt-20'>
          
          {[...primaryLinks,...secondaryLinks].map((link, index) => (
            <React.Fragment key={index}>
             {(index === primaryLinks.length - 0 || index === primaryLinks.length + 2 || index === primaryLinks.length + 5 || index === primaryLinks.length + 9) && (
                <div className='border-t border-gray-300 my-4' />
              )}
              <li className='md:ml-8 md:my-2 my-3 font-semibold text-right py-1'>
                <a href={link.link} className={`px-9 hover:text-redT duration-500 ${location.pathname === link.link ? 'text-redT border-b-4 border-redT py-2' : ''}`}>{link.name}</a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Menu Icon */}
      <div className='cursor-pointer w-7 h-7 ml-auto z-30' onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
}

export default Navbar;
