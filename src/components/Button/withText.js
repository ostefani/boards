import styled from 'styled-components';

export default Component => styled(Component)`
    ${({
        theme: {
            secondary: { base, onBase, light },
        },
    }) => (`
            box-shadow: none;
            background-color: ${onBase};
            color: ${base};
            &:hover {
                background-color: ${light};
                opacity: 0.5;
            }
            &:focus {
                background-color: ${light};
                opacity: 0.8;
            }
            `)};
`;
