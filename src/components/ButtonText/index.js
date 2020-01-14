import styled from 'styled-components';
import Button from 'src/components/Button';

export default styled(Button)`
    ${({
        theme: {
            secondary: {
                base, onBase, dark, light,
            },
        },
    }) => (`
            box-shadow: none;
            background-color: ${onBase};
            color: ${base};
            &:hover {
                background-color: ${light}11;
                color: ${dark};
                box-shadow: none;
            }
            &:focus {
                background-color: ${light}11;
                color: ${dark};
                box-shadow: none;
            }
            & .ripple {
                background: ${light}22;
            }
            `)};
`;
