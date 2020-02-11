import styled from 'styled-components';
import Button from 'src/components/Button';

export default styled(Button)`
    min-width: 40px;
    border-radius: 50%;
    padding: 0;
    box-shadow: none;
    &:hover {
        box-shadow: none;
    }
    & .ripple {
        @keyframes ripple {
        0% {
            opacity: 0.35;
            transform: scale(0);
        }
        10% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.3;
            transform: scale(1);
        }
    }
    }
`;
