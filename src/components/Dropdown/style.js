import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 300px;
    max-height: ${({ maxHeight }) => maxHeight}px;
    border-radius: ${({ theme: { radius: { secondary } } }) => secondary};
    background: ${({ theme: { colors: { background } } }) => background};
    overflow: hidden;

    ${({ isActive }) => isActive && (`
        border: 1px solid #000000;
        box-shadow: ${({ theme: { shadow: { primary } } }) => primary};
    `)};
`;
const Items = styled.ul`
    padding-left: 0;
    margin: 32px auto;
`;
const Item = styled.li`
    padding: 8px 0;
    &:first-child {
        padding: 16px 0 8px 0;
    }
`;

export {
    Container,
    Items,
    Item,
};
