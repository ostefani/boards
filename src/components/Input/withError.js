import styled from 'styled-components';
import { DefaultContainer } from './style';

export default styled(DefaultContainer)`
    ${({
        theme: {
            colors: { error },
        },
    }) => (`
    &::after {
        background-color: ${error};
    }
    &::before {
        background-color: ${error}33;
    }
    `)
}`;
