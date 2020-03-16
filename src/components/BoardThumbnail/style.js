import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    display: block;
    width: 50%;
    height: 200px;
`;

const Title = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { large },
        },
    }) => (`
            color: ${onBackground}cc;
            font-family: ${roboto};
            font-size: ${large};

    `)};
`;

export {
    StyledLink,
    Title,
};
