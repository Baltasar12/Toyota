import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Models = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("Todos");
    const [sort, setSort] = useState("Nada");
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const filterDropdownRef = useRef(null);
    const sortDropdownRef = useRef(null);

    const URL = 'https://challenge.egodesign.dev/api/models/';

    useEffect(() => {
        const showData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        showData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
                setFilterDropdownOpen(false);
            }
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setSortDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredCars = users.filter(user => filter === "Todos" || user.segment === filter);

    const sortedCars = () => {
        switch (sort) {
            case "De menor a mayor precio":
                return [...filteredCars].sort((a, b) => a.price - b.price);
            case "De mayor a menor precio":
                return [...filteredCars].sort((a, b) => b.price - a.price);
            case "Más nuevos primero":
                return [...filteredCars].sort((a, b) => b.year - a.year);
            case "Más viejos primero":
                return [...filteredCars].sort((a, b) => a.year - b.year);
            default:
                return filteredCars;
        }
    };

    const targetCarId = 5;

    return (
        <section className='pt-20'>
            <h1 className='text-6xl font-bold pl-20 pt-10'>Descubrí todos los modelos</h1>

            <section className='px-20 py-10'>
            <div className='flex items-center justify-between'>
                    {/* Filter Section */}
                    <div className='flex items-center relative'>
                        <h3 className='font-semibold cursor-pointer lg:cursor-auto mr-4 whitespace-nowrap' onClick={() => setFilterDropdownOpen(prev => !prev)}>
                            Filtrar por
                        </h3>
                        {/* Dropdown Menu for Small Screens */}
                        <div ref={filterDropdownRef} className={`absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10 ${filterDropdownOpen ? 'block' : 'hidden'} lg:hidden`}>
                            <button onClick={() => { setFilter("Todos"); setFilterDropdownOpen(false); }} 
                                className={`block px-4 py-2 w-full text-left ${filter === "Todos" ? 'bg-gray-300' : ''}`}
                            >
                                Todos
                            </button>
                            <button onClick={() => { setFilter("Sedan"); setFilterDropdownOpen(false); }} 
                                className={`block px-4 py-2 w-full text-left ${filter === "Sedan" ? 'bg-gray-300' : ''}`}
                            >
                                Autos
                            </button>
                            <button onClick={() => { setFilter("Hatchback"); setFilterDropdownOpen(false); }} 
                                className={`block px-4 py-2 w-full text-left ${filter === "Hatchback" ? 'bg-gray-300' : ''}`}
                            >
                                Hatchback
                            </button>
                            <button onClick={() => { setFilter("Pickups y Comerciales"); setFilterDropdownOpen(false); }} 
                                className={`block px-4 py-2 w-full text-left ${filter === "Pickups y Comerciales" ? 'bg-gray-300' : ''}`}
                            >
                                Pickups y Comerciales
                            </button>
                            <button onClick={() => { setFilter("SUVs"); setFilterDropdownOpen(false); }} 
                                className={`block px-4 py-2 w-full text-left ${filter === "SUVs" ? 'bg-gray-300' : ''}`}
                            >
                                SUVs y Crossovers
                            </button>
                        </div>
                        {/* Filtering Buttons for Large Screens */}
                        <div className='hidden lg:flex gap-2'>
                            <button onClick={() => setFilter("Todos")}
                                className={`px-4 py-1 ${filter === "Todos" ? 'bg-gray-300 rounded-full' : ''}`}>
                                    Todos
                            </button>
                            <button onClick={() => setFilter("Sedan")}
                                className={`px-4 py-1 ${filter === "Sedan" ? 'bg-gray-300 rounded-full' : ''}`}>
                                    Autos
                            </button>
                            <button onClick={() => setFilter("Hatchback")}
                                className={`px-4 py-1 ${filter === "Hatchback" ? 'bg-gray-300 rounded-full' : ''}`}>
                                    Hatchback
                            </button>
                            <button onClick={() => setFilter("Pickups y Comerciales")}
                                className={`px-4 py-1 ${filter === "Pickups y Comerciales" ? 'bg-gray-300 rounded-full' : ''} whitespace-nowrap`}>
                                    Pickups y Comerciales
                            </button>
                            <button onClick={() => setFilter("SUVs")}
                                className={`px-4 py-1 ${filter === "SUVs" ? 'bg-gray-300 rounded-full' : ''} whitespace-nowrap`}>
                                    SUVs y Crossovers
                            </button>
                        </div>
                    </div>

                    {/* Sort Section */}
                    <div className='flex justify-end w-full'>
                        <button onClick={() => setSortDropdownOpen(!sortDropdownOpen)} className='px-4 font-semibold hover:bg-gray-300 transition duration-500 rounded-full py-2'>
                            Ordenar por: {sort}
                        </button>
                        {sortDropdownOpen && (
                            <div ref={sortDropdownRef} className='absolute  mt-10 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
                                <button onClick={() => { setSort("Nada"); setSortDropdownOpen(false); }} className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'>
                                    Nada
                                </button>
                                <button onClick={() => { setSort("De menor a mayor precio"); setSortDropdownOpen(false); }} className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'>
                                    De menor a mayor precio
                                </button>
                                <button onClick={() => { setSort("De mayor a menor precio"); setSortDropdownOpen(false); }} className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'>
                                    De mayor a menor precio
                                </button>
                                <button onClick={() => { setSort("Más nuevos primero"); setSortDropdownOpen(false); }} className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'>
                                    Más nuevos primero
                                </button>
                                <button onClick={() => { setSort("Más viejos primero"); setSortDropdownOpen(false); }} className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'>
                                    Más viejos primero
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <hr className='my-2 border-t-2 border-gray-400' />

                <div className='flex flex-wrap'>
                    {sortedCars().map((car) => (
                        <div key={car.id} className='p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col'>

                            <div className='mt-2 text-center'>
                                <h4 className='text-2xl font-semibold mb-1 cursor-pointer'>{car.name}</h4>
                                <p className='text-gray-700 mb-2'>{car.year} | ${car.price.toLocaleString()}</p>
 
                            </div>
                            <div className='flex-grow flex items-end justify-center'>
                                <img src={car.photo} alt={`${car.name} photo`} className='w-full h-48 object-cover'/>
                            </div>
                            <div className='flex justify-center'>
                                {car.id === targetCarId && (
                                    <Link to={`Ficha`} className='block w-2/6 px-4 py-2 bg-blackT text-white rounded-full text-center mt-2 hover:bg-redT transition duration-500'>
                                        Ver modelo
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Models;
