
"use client";

import { useState } from "react";

export default function Caracteristicas() {

    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ];

    const [contador, setContador] = useState(0);

    function aumentarContador() {
        setContador(contador + 1);
    }

    return (
        <main>
            <h2>Características do React e Next.js</h2>

            <ul>
                {caracteristicas.map((caracteristica, i) => {
                    return (
                        <li key={i}>
                            {caracteristica}
                        </li>
                    );
                })}
            </ul>

            <button onClick={aumentarContador}>
                Clicar aqui
            </button>

            <p>Cliques: {contador}</p>
        </main>
    );
}
