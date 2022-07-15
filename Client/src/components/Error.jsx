import styled from '@emotion/styled';
import 'animate.css';

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 10px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
`;

const Error = ({ children }) => {
    return (
        <Texto className='animate__animated animate__shakeX'>{children}</Texto>
    );
};

export default Error;