import React from 'react';
import {
    Container,
    Title,
} from './style';

export default ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
};
