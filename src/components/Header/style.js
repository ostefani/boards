import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    @media (min-width: 767px) {
        padding-left: 32px;
        padding-right: 32px;
    }
`;
const Nav = styled.nav`
    margin: 0 auto;
`;
const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;
const UserName = styled.div`
    margin-left: 8px;
    font-family: ${({ theme: { font: { roboto } } }) => roboto};
    font-size: ${({ theme: { size: { small } } }) => small};
    color: ${({ theme: { colors: { onBackground } } }) => onBackground};
`;

export {
    Header,
    Nav,
    UserContainer,
    UserName,
};
