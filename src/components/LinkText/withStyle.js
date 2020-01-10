import styled from 'styled-components';

export default Component => styled(Component)`;
    text-decoration: none;

    & .ripple-container {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${({ theme: { radius: { regular } } }) => regular};
        z-index: 0;
    }
`;
