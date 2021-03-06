import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    margin: 8px 0;
    max-height: ${({ maxHeight }) => maxHeight}px;
    background: ${({ theme: { colors: { background } } }) => background};
    overflow: hidden;
    opacity: 0;

    ${({ isActive }) => isActive && (`
        opacity: 1;
        width: 100px;
    `)};

    ${({
        size,
        theme: {
            colors: { background },
            radius: { secondary },
            font: { robotoMedium },
            shadow: { primary },
            animation: { timing: { regular: ease }, duration: { quick } },
        },
    }) => (`
            min-width: ${size === 'isFullWidth' ? '100%' : '144px'};
            min-width: 100%;
            box-shadow: ${primary};
            background-color: ${background};
            border-radius: ${secondary};
            font-family: ${robotoMedium};
            transition: box-shadow ${quick}s ${ease}, opacity ${quick}s ${ease}, width ${quick}s ${ease}, max-height ${quick}s ${ease};
            `)};
`;
const Items = styled.ul`
    padding-left: 0;
    margin: 0 auto;
`;
const Item = styled.li`
    padding: 16px 16px 0 16px;
    display: flex;
    align-items: center;
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
    ${({ theme: {
        colors: { onBackground, background },
        secondary: { base },
        animation: {
            timing: { regular: ease },
            duration: { quick },
        },
    },
}) => (`
        color: ${onBackground};
        background: ${background};
        transition: color ${quick}s ${ease};
        &:hover {
            color: ${base};
        }
    `)}
`;

export {
    Container,
    Items,
    Item,
    Logout,
};
