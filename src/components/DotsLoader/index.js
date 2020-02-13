import React from 'react';
import { Dots, Container } from './style';

export default ({ className, type }) => (
    <Container className={className}>
        <Dots type={type}>
            <div></div>
            <div></div>
            <div></div>
        </Dots>
    </Container>
);
