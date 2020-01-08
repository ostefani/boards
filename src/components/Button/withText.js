import styled from 'styled-components';

export default Component => styled(Component)`
    ${({
        theme: {
            secondary: { base, onBase, light, dark },
        },
    }) => (`
            box-shadow: none;
            background-color: ${onBase};
            color: ${base};
            &:hover {
                background-color: ${light};
                color: ${dark};
            }
            &:focus {
                background-color: ${light};
                color: ${dark};
            }
            & .ripple {
                background: green;
            }
            `)};
`;
