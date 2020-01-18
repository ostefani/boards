import React from 'react';
import Avatar from 'src/components/Avatar';
import Logo from 'src/components/Logo';
import Link from 'src/components/Link';
import ButtonLinkText from 'src/components/ButtonLinkText';
import ButtonLink from 'src/components/ButtonLink';

import {
    Header,
    Nav,
    UserContainer,
    LoginContainer,
    UserName,
} from './style';


export default ({ firstName, isAuthenticated }) => {
    const handleClick = () => {
        console.log('click');
    };

    return (
        <Header>
            <Logo />
            <Nav><Link to="/about">About the project</Link></Nav>
            {isAuthenticated
                ? (
                    <UserContainer>
                        <Avatar firstName={firstName} onClick={handleClick} />
                        <UserName>{firstName}</UserName>
                    </UserContainer>
                )
                : (
                    <LoginContainer>
                        <ButtonLinkText to="/login" name="Sign in" />
                        <ButtonLink to="/signup" name="Sign up" />
                    </LoginContainer>
                )}
        </Header>
    );
};
