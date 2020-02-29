import React from 'react';
import { Header, Container, GroupContainer } from './style';

export default ({ title, children }) => {
    return (
        <Container>
            <Header>{title}</Header>
            <GroupContainer>
                {children}
            </GroupContainer>
        </Container>
    );
};
