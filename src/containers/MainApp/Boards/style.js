import styled from 'styled-components';

const FormContainer = styled.div`

`;

const BoardsContainer = styled.div`

`;

const Form = styled.form`

`;

const Button = styled.button`

`;

const Input = styled.input`

`;

const Title = styled.h1`
    font-size: ${({ theme: { size: { medium } } }) => medium};
    font-family: ${({ theme: { font: { roboto } } }) => roboto};
`;

export {
    Title,
    BoardsContainer,
    FormContainer,
    Form,
    Button,
    Input,
};
