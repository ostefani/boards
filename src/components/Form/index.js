import React from 'react';
import {
    Form,
    Container,
    Header,
} from './style';

export default ({ children, header }) => {
    return (
        <Container>
            <Header>{header}</Header>
            <Form>{children}</Form>
        </Container>
    );
};
