import styled from 'styled-components';

export default Component => styled(Component)`
        position: relative;
        letter-spacing: 0.05em;
        text-decoration: none;
        font-family: ${({ theme: { font: { roboto } } }) => roboto};
        font-size: ${({ theme: { size: { medium } } }) => medium};
        color: ${({ theme: { colors: { onBackground } } }) => onBackground};
        transition: ${({ theme: { animation: { timing: { regular }, duration: { quick } } } }) => (`
            color ${quick}s ${regular};
        `)};
        &:after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: ${({ theme: { secondary: { base } } }) => base};
                position: absolute;
                bottom: 0;
                left: 0;
                transform: scaleX(0);
                transform-origin: left top;
                transition: ${({ theme: { animation: { timing: { regular }, duration: { quick } } } }) => (`
            transform ${quick}s ${regular};
        `)};
        }
        &:hover {
            &:after {
                transform: scale(1);
                transition: ${({ theme: { animation: { timing: { regular }, duration: { quick } } } }) => (`
            transform ${quick}s ${regular};
        `)};
            }
        }
`;
