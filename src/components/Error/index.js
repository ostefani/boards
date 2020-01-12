import styled from 'styled-components';

export default styled.div`
    position: absolute;
    bottom: 0;
    ${({
        theme: { colors: { error }, size: { tiny }, font: { roboto } }
    }) => (`
        color: ${error},
        font-size: ${tiny},
        font-family: ${roboto};
    `)};
`;
