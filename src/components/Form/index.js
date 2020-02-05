import React from 'react';
import {
    Form,
    Container,
    Header,
} from './style';

export default ({
    header, children, onSubmit, onChange, value,
}) => (
    <Container>
        <Header>{header}</Header>
        <Form value={value} onSubmit={onSubmit} onChange={onChange}>{children}</Form>
    </Container>
);
