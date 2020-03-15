import styled from 'styled-components';
import Button from 'src/components/Button';

const Form = styled.form`
    height: 40px;
    align-items: center;
    justify-content: flex-start;
    display: inline-flex;
    ${({
        isFormOpen,
        theme: {
            secondary: { base },
            radius: { regular: rounded },
            animation: { timing: { regular }, duration: { regular: smooth } },
        },
    }) => (`
        border-radius: ${rounded};
        border: 2px solid ${base};
        border: ${isFormOpen ? `2px solid ${base}` : '2px solid transparent'};
        transition: border ${smooth}s ${regular};
    `)};
`;

const ButtonWithStyle = styled(Button)`
    flex-shrink: 0;
`;
const Input = styled.input`
    flex-shrink: 0;
    outline: none;
    height: 100%;
    width: ${({ isFormOpen }) => (isFormOpen ? '300px' : '0')};
    padding: 0;
    border: none;
    &::placeholder {
        opacity: ${({ isFormOpen }) => (isFormOpen ? '1' : '0')};
        transition: ${({ theme: { animation: { timing: { regular }, duration: { regular: smooth } } } }) => `opacity ${smooth}s ${regular}`};
    }
    ${({
        isFormOpen,
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { small },
            radius: { regular: rounded },
            animation: { timing: { regular }, duration: { regular: smooth } },
        },
    }) => (`
        color: ${onBackground};
        font-family: ${roboto};
        font-size: ${small};
        border-radius: ${rounded};
        padding: ${isFormOpen ? '8px  16px' : '0'};
        transition: width ${smooth}s ${regular}, padding ${smooth}s ${regular};
    `)};
`;

const Title = styled.h1`
    font-size: ${({ theme: { size: { large } } }) => large};
    font-family: ${({ theme: { font: { roboto } } }) => roboto};
`;

const TumbnailContainer = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 300px;
    grid-template-rows: auto;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (min-width: 900px) {
        grid-template-columns: 300px 300px 300px;
        justify-content: flex-start;
    }
`;

export {
    Title,
    Form,
    Input,
    TumbnailContainer,
    ButtonWithStyle as Button,
};
