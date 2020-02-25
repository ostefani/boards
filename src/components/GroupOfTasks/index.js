import React from 'react';
import { Container, Header } from './style';

export default ({ title, children }) => {
    return (
        <Container>
            <Header>{title}</Header>
            {children}
        </Container>
    );
};
