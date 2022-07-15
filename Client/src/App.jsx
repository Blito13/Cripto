import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import Formulario from './components/Formulario';
import 'animate.css';
import Resultado from './components/Resultado';
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
    }
`;

const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`;

const Heading = styled.h1`
    color: blue;
    text-align: center;
    font-weight: bold;
    margin: 80px 0;
    font-size: 40px;
    &:after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin: 10px auto 0 auto;
    }
`;

function App() {
    const [monedas, setMonedas] = useState({});
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (Object.keys(monedas).length > 0) {
            const cotizarCripto = async () => {
                setCargando(true)
                setResultado({})

                const { moneda, criptomoneda } = monedas;
                console.log(moneda , criptomoneda)
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

                const respuesta = await fetch(url);
                console.log(respuesta)
                const resultado = await respuesta.json();
                console.log(resultado)
                setResultado(resultado.DISPLAY[criptomoneda][moneda]);
                console.log(resultado)
                setCargando(false)
            };
            cotizarCripto()
                .then((r) => console.log(r))
                .catch((e) => console.log(e));
        }
    }, [monedas]);

    return (
        <Contenedor>
            <Imagen
                src={ImagenCripto}
                alt='Imagen criptomonedas'
                className='animate__animated animate__fadeIn'
            />
            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>
                <Formulario setMonedas={setMonedas} />

                {/* Muestra el resultado si hay algo */}
                {cargando && <Spinner />}
                {resultado.PRICE && <Resultado resultado={resultado} />}
            </div>
        </Contenedor>
    );
}

export default App;