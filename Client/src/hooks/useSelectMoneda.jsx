import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin: 5px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value=''>- Seleccione -</option>
                {opciones.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.nombre}
                    </option>
                ))}
            </Select>
        </>
    );

    return [state, SelectMonedas];
};

export default useSelectMonedas;