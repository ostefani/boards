import styled from 'styled-components';

export default styled.div`
    position: absolute;
    bottom: 0;
    padding-left: 16px;
    ${({
        theme: { colors: { error }, size: { tiny }, font: { roboto } },
    }) => (`
        color: ${error};
        font-size: ${tiny};
        font-family: ${roboto};
    `)};
`;
