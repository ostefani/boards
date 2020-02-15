import styled from 'styled-components';

const Form = styled.form.attrs(() => ({ noValidate: true }))`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;
const Container = styled.div`
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding: 48px;
    background: ${({ theme: { colors: { background } } }) => background};
    box-shadow: ${({ theme: { shadow: { primary } } }) => primary};

    @media (min-width: 767px) {
        width: 600px;
    }
`;
const Header = styled.h1`
    text-align: center;
    width: 100%;
    margin: 0 0 40px 0;
`;

export {
    Form,
    Container,
    Header,
};
