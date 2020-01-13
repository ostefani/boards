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
    const handleClick = () => {

    };

    return (
        <Header>
            <Logo />
            <Nav><Link to="/about" name="About the project" /></Nav>
            <UserContainer>
                <Avatar firstName={firstName} onClick={handleClick} />
                <UserName>{firstName}</UserName>
            </UserContainer>
        </Header>
    );
};
