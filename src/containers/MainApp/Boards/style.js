import styled from 'styled-components';
import Button from 'src/components/Button';

const FormContainer = styled.div`

`;

const BoardsContainer = styled.div`

`;

const Form = styled.form`
    height: 40px;;
    align-items: center;
    justify-content: flex-start;
    display: inline-flex;
    padding: 8px 0 8px 16px;
    ${({
        theme: {
            secondary: { base },
            radius: { regular: rounded },
            animation: { timing: { regular }, duration: { regular: smooth } },
        },
    }) => (`
        border-radius: ${rounded};
        border: 2px solid ${base};
    `)};
`;

const ButtonWithStyle = styled(Button)`
    flex-shrink: 0;
    position: relative;
`;
const Input = styled.input`
    flex-shrink: 0;
    outline: none;
    height: 100%;
    width: ${({ isFormOpen }) => (isFormOpen ? '300px' : '0')};
    //padding: ${({ isFormOpen }) => (isFormOpen ? '8px 48px 8px 8px' : '0')};
    padding: 0;
    border: none;
    &::placeholder {
        opacity: ${({ isFormOpen }) => (isFormOpen ? '1' : '0')};
        transition: ${({ theme: { animation: { timing: { regular }, duration: { regular: smooth } } } }) => `opacity ${smooth}s ${regular}`};
    }
    ${({
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
        /*transition: width ${smooth}s ${regular}, padding ${smooth}s ${regular};*/
        transition: width ${smooth}s ${regular};
    `)};
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
    Input,
    ButtonWithStyle as Button,
};
