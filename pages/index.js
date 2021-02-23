import { useState } from 'react';
function Home() {
    return (
        <div>
            <h1> Home 3</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContdor] = useState(1);

    function adicionarContador() {
        setContdor(contador + 1);

    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home

google-site-verification: google8bf91f43717cb7f2.html
