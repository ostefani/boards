import styled from 'styled-components';

const Button = styled.button.attrs({ className: 'button' })`
    min-width: 70px;
    display: flex-inline;
    background-color: ${({ theme: { secondary: { base } } }) => base};
`;

export { Button };
