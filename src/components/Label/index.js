import styled from 'styled-components';

const TOP = '27';
const SCALE = 0.75;

export default styled.label`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transform-origin: top left;
    text-transform: capitalize;
    background: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    transform-origin: top left;
    transform: ${({ height }) => `translateY(calc((${height}px / 2) - 50%)) translateX(16px)`};
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
        color: ${isFocused ? base : `${onBackground}8c`};
        font-size: ${medium};
        transform: ${isFocused || isFilled
            ? `translateY(calc(${TOP / 2}px - 50% + ${((1 - SCALE) * 100) / 2}%)) translateX(16px) scale(0.75)`
            : `translateY(calc((${height}px / 2) - 50%)) translateX(16px)`};
        transition: transform ${quick}s ${regular}, color ${quick}s ${regular};
    `)};
`;
