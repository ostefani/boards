import styled from 'styled-components';
import Button from 'src/components/Button';

export default styled(Button)`
    min-width: 40px;
    border-radius: 50%;
    padding: 0;
    box-shadow: none;
    &:hover {
        box-shadow: none;
    }
`;
