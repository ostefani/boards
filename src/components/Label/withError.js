import styled from 'styled-components';
import Label from './index';

export default styled(Label)`
    ${({
        theme: {
            colors: { error },
        },
    }) => (`
        color: ${error};
    `)
}`;
