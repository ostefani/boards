import styled from 'styled-components';

const Header = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    @media (min-width: 767px) {
        padding: 0;
        min-height: ${({ theme: { header: { height } } }) => `${height}px`};
    }
`;
const Nav = styled.nav`
    margin: 0 auto 0 64px;
    display: flex;
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
const LinkContainer = styled.div`
    &:not(last-child) {
        margin-right: 32px;
    }
`;
const UserName = styled.div`
    font-family: ${({ theme: { font: { roboto } } }) => roboto};
    font-size: ${({ theme: { size: { small } } }) => small};
    color: ${({ theme: { colors: { onBackground } } }) => onBackground};
`;
const RelativeContainer = styled.div`
    position: relative;
`;

export {
    Header,
    Nav,
    UserContainer,
    LoginContainer,
    UserName,
    RelativeContainer,
    LinkContainer,
};
