import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
        letter-spacing: 0.05em;
        text-decoration: none;
        font-family: ${({ theme: { font: { roboto } } }) => roboto};
        font-size: ${({ theme: { size: { medium } } }) => medium};
        color: ${({ theme: { colors: { onBackground } } }) => onBackground};
        transition: ${({ theme: { animation: { timing: { regular }, duration: { quick } } } }) => (`
            color ${quick}s ${regular};
        `)};
        &:hover {
            color: ${({ theme: { secondary: { base } } }) => base};
            transition: ${({ theme: { animation: { timing: { regular }, duration: { quick } } } }) => (`
            color ${quick}s ${regular};
        `)};
        }
`;
