
import Image from 'next/image';

import tecnologias from '@/app/data/tecnologias.json';

export default function Tecnologias() {

    const listaTecnologias = JSON.parse(JSON.stringify(tecnologias));

    return (
        <main className="min-h-screen bg-gray-100 p-8">

            <h2 className="text-3xl font-bold text-center mb-8">
                Tecnologias Exploradas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {listaTecnologias.map((tecnologia: any, i: number) => {

                    return (

                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                        >

                            <Image
                                src={'/tecnologias/' + tecnologia.image}
                                alt={tecnologia.title}
                                width={100}
                                height={100}
                            />

                            <h3 className="text-xl font-bold mt-4">
                                {tecnologia.title}
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {tecnologia.description}
                            </p>

                            <p className="text-yellow-500 font-bold mt-4">
                                Rating: {tecnologia.rating}/5
                            </p>

                        </div>

                    );

                })}

            </div>

        </main>
    );
}
