import React, {useState, useEffect} from 'react'



const Models = () => {
    const [ users, setUsers ] = useState([])
    const [filter, setFilter] = useState("Todos")

    const URL = 'https://challenge.egodesign.dev/api/models/'
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

    const filteredUsers = users.filter(user => filter === "Todos" || user.segment === filter);



  return (
    <section className='pt-20'>
        <h1 className='text-6xl font-bold pl-20 pt-10'>Descubrí todos los modelos</h1>
    

        <section className='border-solid border-redT px-20 py-10 border-2'>
            <div className='border-solid border-blue-700 border-2 flex'>
                <h3>Filtrar por</h3>

                <button onClick={() => setFilter("Todos")}
                    className={`px-4 py-2 ${filter === "Todos" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        Todos
                </button>
                <button onClick={() => setFilter("Sedan")}
                    className={`px-4 py-2 ${filter === "Sedan" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        Autos
                </button>
                <button onClick={() => setFilter("Hatchback")}
                    className={`px-4 py-2 ${filter === "Hatchback" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        Hatchback
                </button>
                <button onClick={() => setFilter("Pickups y Comerciales")}
                    className={`px-4 py-2 ${filter === "Pickups y Comerciales" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        Pickups y Comerciales
                </button>
                <button onClick={() => setFilter("SUVs")}
                    className={`px-4 py-2 ${filter === "SUVs" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        SUVs y Crossovers
                </button>
            </div>

            <div className='border-solid border-black border-2'>
            <div className='flex flex-wrap'>
                        {filteredUsers.map((user) => (
                            <div key={user.id} className='p-4 w-full md:w-1/2 lg:w-1/3'>
                                <img
                                    src={user.thumbnail}
                                    alt={user.name}
                                    className='w-full h-auto mb-2'
                                />
                                <h4 className='text-xl font-semibold'>{user.name}</h4>
                                <p className='text-gray-700'>Año: {user.year}</p>
                                <p className='text-gray-700'>Precio: ${user.price.toLocaleString()}</p>
                                <img
                                    src={user.photo}
                                    alt={`${user.name} photo`}
                                    className='w-full h-auto mt-2'
                                />
                            </div>
                        ))}
                    </div>
            </div>
        </section>

    </section>
  )
}

export default Models