import React from 'react';
import { Bars, Container } from './style';

export default ({ className }) => (
    <Container className={className}>
        <Bars>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Bars>
    </Container>
);
