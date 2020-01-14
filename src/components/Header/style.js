import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    @media (min-width: 767px) {
        padding-left: 32px;
        padding-right: 32px;
        min-height: 48px;
    }
`;
const Nav = styled.nav`
    margin: 0 auto 0 auto;
`;
const UserContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8px;
    align-items: center;
`;
const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8px;
`;
const UserName = styled.div`
    font-family: ${({ theme: { font: { roboto } } }) => roboto};
    font-size: ${({ theme: { size: { small } } }) => small};
    color: ${({ theme: { colors: { onBackground } } }) => onBackground};
`;

export {
    Header,
    Nav,
    UserContainer,
    LoginContainer,
    UserName,
};
