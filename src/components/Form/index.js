import React from 'react';
import {
    Form,
    Container,
    Header,
} from './style';

export default ({ header, children }) => {
    return (
        <Container>
            <Header>{header}</Header>
            <Form>{children}</Form>
        </Container>
    );
};
