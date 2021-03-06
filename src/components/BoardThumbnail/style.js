import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    background-color: ${({ theme: { colors: { dark } } }) => `${dark}33`};
    transition: ${({ theme: { animation: { timing: { regular: ease }, duration: { quick } } } }) => `background-color ${quick}s ${ease}`};
    border-radius: ${({ theme: { radius: { secondary } } }) => secondary};
    &:hover {
        background-color: ${({ theme: { colors: { dark } } }) => `${dark}aa`};
        transition: ${({ theme: { animation: { timing: { regular: ease }, duration: { quick } } } }) => `background-color ${quick}s ${ease}`};
    }
`;

const Title = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    ${({
        theme: {
            colors: { onBackground },
            font: { roboto },
            size: { medium },
        },
    }) => (`
            color: ${onBackground}cc;
            font-family: ${roboto};
            font-size: ${medium};

    `)};
`;

export {
    StyledLink,
    Title,
};
