import styled from 'styled-components';
import Link from 'src/components/Link';

export default styled(Link)`
        font-family: ${({ theme: { font: { lato } } }) => lato};
        text-transform: uppercase;
        color: ${({ theme: { secondary: { base } } }) => base};
        font-size: 28px;

        &:hover {
            color: ${({ theme: { secondary: { dark } } }) => dark};
            &::after {
                display: none;
            }
        }
`;
