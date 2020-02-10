import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100px;
    margin: 8px 0;
    max-height: ${({ maxHeight }) => maxHeight}px;
    border-radius: ${({ theme: { radius: { secondary } } }) => secondary};
    background: ${({ theme: { colors: { background } } }) => background};
    overflow: hidden;

    ${({ isActive }) => isActive && (`
        border: 1px solid #000000;
        box-shadow: ${({ theme: { shadow: { onActive } } }) => onActive};
    `)};

    ${({
        size,
        theme: {
            secondary: { base, onBase, dark },
            radius: { secondary },
            font: { robotoMedium },
            shadow: { primary },
            animation: { timing: { regular: ease }, duration: { quick } },
        },
    }) => (`
            min-width: ${size === 'isFullWidth' ? '100%' : '144px'};
            min-width: 100%;
            box-shadow: ${primary};
            background-color: ${onBase};
            color: ${base}
            border-radius: ${secondary};
            font-family: ${robotoMedium};
            transition: box-shadow ${quick}s ${ease}, background-color ${quick}s ${ease};
            `)};
`;
const Items = styled.ul`
    padding-left: 0;
    margin: 0 auto;
`;
const Item = styled.li`
    padding: 16px 16px 0 16px;
    &:first-child {
        padding: 16px;
    }
    &:last-child {
        padding: 16px;
    }
`;
const Logout = styled.button.attrs(() => ({ type: 'button' }))`
    border: none;
    outline: none;
    cursor: pointer;
`;

export {
    Container,
    Items,
    Item,
    Logout,
};
