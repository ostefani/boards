import styled from 'styled-components';

const RippleContainer = styled.div`
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${({ theme: { radius: { regular } } }) => regular};
        z-index: 0;
`;
export default RippleContainer;
