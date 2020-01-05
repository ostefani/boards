import styled from 'styled-components';

const Button = styled.div.attrs({ className: 'button' })`
    min-width: 70px;
    background-color: ${({ theme: { secondary: { base } } }) => base};
`;

export { Button };
