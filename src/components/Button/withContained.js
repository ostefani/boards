import styled from 'styled-components';

export default Component => styled(Component)`
    ${({
        theme: {
            shadow: { primary, onActive },
            secondary: { base, onBase, dark },
        },
    }) => (`
            box-shadow: ${primary};
            background-color: ${base};
            color: ${onBase};
            &:hover {
                background-color: ${dark};
                box-shadow: ${onActive};
            }
            &:focus {
                background-color: ${dark};
            }
            `)};
`;
