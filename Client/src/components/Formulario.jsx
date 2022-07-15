import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMoneda';
import Error from './Error';
import { monedas } from '../data/moneda';
import 'animate.css';

const ButtonSubmit = styled.button`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    margin: 10px 0;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #7a7efd;
        cursor: pointer;
    }
`;

const Formulario = ({ setMonedas }) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectMonedas] = useSelectMonedas(
        'Elige tu Moneda',
        monedas
    );
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
        'Elige tu Criptomoneda',
        criptos
    );

    useEffect(() => {
        const consultarAPI = async () => {
            const url =
                'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            // Iterar sobre la API
            const arrayCriptos = resultado.Data.map((cripto) => {
                return {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                };
            });

            setCriptos(arrayCriptos);
        };
        consultarAPI()
            .then((r) => r)
            .catch((e) => console.log(e));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validando...
        if ([moneda, criptomoneda].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        setMonedas({
            moneda,
            criptomoneda,
        });
    };

    return (
        <>
            {error && <Error>Ambos campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
                className='animate__animated animate__fadeIn'
            >
                <SelectMonedas />
                <SelectCriptomoneda />
                <ButtonSubmit type='submit'>Cotizar</ButtonSubmit>
            </form>
        </>
    );
};

export default Formulario;