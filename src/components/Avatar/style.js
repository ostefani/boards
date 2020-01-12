import styled from 'styled-components';
import { Button } from 'src/components/Button/style';

export default styled(Button)`
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 50%;
    padding: 0;
    box-shadow: none;
    &:hover {
        box-shadow: none;
    }
`;
