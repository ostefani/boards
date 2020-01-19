import React from 'react';
import {
    Form,
    Container,
    Header,
} from './style';

export default (props) => {
    console.log('props: ', props);
    return (
        <Container>
            <Header>{props.header}</Header>
            <Form>{props.children}</Form>
        </Container>
    );
};
