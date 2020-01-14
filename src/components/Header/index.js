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


export default ({ firstName, isAuthenticated, onClick, }) => {
    const handleClick = () => {

    };

    return (
        <Header>
            <Logo />
            <Nav><Link to="/about" name="About the project" /></Nav>
            {isAuthenticated
                ? (
                    <UserContainer>
                        <Avatar firstName={firstName} onClick={onClick} />
                        <UserName>{firstName}</UserName>
                    </UserContainer>
                )
                : (
                    <LoginContainer>
                        <ButtonLinkText to="/login" name="Sign in" onClick={onClick} />
                        <ButtonLink to="/signup" name="Sign up" onClick={onClick} />
                    </LoginContainer>
                )}
        </Header>
    );
};
