import React from 'react';
import Avatar from 'src/components/Avatar';
import Logo from 'src/components/Logo';
import Link from 'src/components/Link';

import {
    Header,
    Nav,
    UserContainer,
    UserName,
} from './style';


export default ({ firstName }) => {

    return (
        <Header>
            <Logo />
            <Nav><Link to="/about">About the project</Link></Nav>
            <UserContainer>
                <Avatar firstName={firstName} />
                <UserName>{firstName}</UserName>
            </UserContainer>
        </Header>
    );
};
