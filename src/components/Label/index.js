import styled from 'styled-components';

const TOP = '27';
const SCALE = 0.75;

export default styled.label`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transform-origin: top left;
    z-index: 1;
    text-transform: capitalize;
    background-color: transparent;
    ${({
        isFocused,
        isFilled,
        height,
        theme: {
            secondary: { base },
            colors: { onBackground },
            font: { roboto },
            size: { medium },
            animation: { timing: { regular }, duration: { quick } },
        },
    }) => (`
        font-family: ${roboto};
        color: ${isFocused ? base : `${onBackground}88`};
        font-size: ${medium};
        transform: ${isFocused || isFilled
            ? `translateY(calc(${TOP / 2}px - 50% + ${((1 - SCALE) * 100) / 2}%)) translateX(16px) scale(0.75)`
            : `translateY(calc((${height}px / 2) - 50%)) translateX(16px)`};
        transition: transform ${quick}s ${regular}, color ${quick}s ${regular};
    `)};
`;
