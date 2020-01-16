import React from 'react';
import {
    Container,
    Title,
    LeftContainer,
    RightContainer,
    Subtitle,
    Cube,
} from './style';

export default () => {
    return (
        <Container>
            <LeftContainer>
                <div>
                    <Title>Boards</Title>
                    <Subtitle>All you need to manage</Subtitle>
                    <Subtitle>and organize your project</Subtitle>
                </div>
            </LeftContainer>
            <RightContainer>
                <Cube>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Cube>
            </RightContainer>
        </Container>
    );
};
