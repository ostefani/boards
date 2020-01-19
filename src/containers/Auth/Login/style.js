import styled from 'styled-components';

const ButtonContainer = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    @media (min-width: 767px) {
        display: flex;
        justify-content: flex-start;
    }
`;
const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme: { colors: { dark } } }) => dark};
    padding-top: 48px;
    padding-bottom: 48px;
`;
const Header = styled.h1`
    text-align: center;
    width: 100%;
    margin: 0 0 40px 0;
`;

export {
    Page,
    Header,
    ButtonContainer,
};
