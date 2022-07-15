import styled from '@emotion/styled';
import 'animate.css';

const ResultadoDiv = styled.div`
    color: #fff;
    margin-top: 10px;
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;

const DivContenido = styled.div`
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
        color : Blue
    }
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`;

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
        
    }
`;
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: bold;
    }
`;

const Resultado = ({ resultado }) => {
    const { LASTUPDATE, IMAGEURL, CHANGEPCT24HOUR, LOWDAY, PRICE, HIGHDAY } =
        resultado;

    return (
        <ResultadoDiv>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Imagen
                    src={`https://www.cryptocompare.com/${IMAGEURL}`}
                    alt='image cryptocompare'
                    className='animate__animated animate__fadeIn'
                />
            </div>

            <DivContenido className='animate__animated animate__fadeIn'>
                <Precio>
                    El precio es de: <span>{PRICE}</span>
                </Precio>
                <Texto>
                    El precio más alto del día: <span>{HIGHDAY}</span>
                </Texto>
                <Texto>
                    El precio más bajo del día: <span>{LOWDAY}</span>
                </Texto>
                <Texto>
                    Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
                </Texto>
                <Texto>
                    Última actualización: <span>{LASTUPDATE}</span>
                </Texto>
            </DivContenido>
        </ResultadoDiv>
    );
};

export default Resultado;