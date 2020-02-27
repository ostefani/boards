import styled from 'styled-components';
import Button from 'src/components/Button';

const FormContainer = styled.div`

`;

const BoardsContainer = styled.div`

`;

const Form = styled.form`
    width: ${({ isFormOpen }) => (isFormOpen ? '300px' : '40px')};
    height: 40px;;
    display: flex;
    align-items: center;

    ${({
        theme: {
            secondary: { base },
            radius: { regular: rounded },
            animation: { timing: { regular }, duration: { regular: smooth } },
        },
    }) => (`
        border-radius: ${rounded};
        border: 2px solid ${base};
        transition: width ${smooth}s ${regular};
    `)};
`;

const ButtonWithStyle = styled(Button)`
    flex-shrink: 0;
    transform: translateX(-40px);
`;
const Input = styled.input`
    flex-shrink: 0;
    outline: none;
    height: 100%;
    width: 100%;
    border: none;
    padding: 8px 48px 8px 8px;
    /*width: 40px;*/
    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { small },
            radius: { regular: rounded },
            animation: { timing: { regular }, duration: { smooth } }
        },
    }) => (`
        color: ${onBackground};
        font-family: ${roboto};
        font-size: ${small};
        border-radius: ${rounded};
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
