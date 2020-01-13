import styled from 'styled-components';
import Button from 'src/components/Button';

export default styled(Button)`
    ${({
        theme: {
            secondary: {
                base, onBase, dark, lightOpacity,
            },
        },
    }) => (`
            box-shadow: none;
            background-color: ${onBase};
            color: ${base};
            &:hover {
                background-color: ${lightOpacity};
                color: ${dark};
                box-shadow: none;
            }
            &:focus {
                background-color: ${lightOpacity};
                color: ${dark};
                box-shadow: none;
            }
            & .ripple {

            }
            `)};
`;
