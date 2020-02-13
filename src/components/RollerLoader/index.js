import React from 'react';
import { Roller, Container } from './style';

export default ({ className }) => (
    <Container className={className}>
        <Roller>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </Roller>
    </Container>
);
