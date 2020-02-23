import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from 'src/components/Avatar';
import Logo from 'src/components/Logo';
import Link from 'src/components/Link';
import ButtonLinkText from 'src/components/ButtonLinkText';
import ButtonLink from 'src/components/ButtonLink';
import Dropdown from 'src/components/Dropdown';

import {
    Header,
    Nav,
    UserContainer,
    LoginContainer,
    UserName,
    RelativeContainer,
    LinkContainer,
} from './style';


const HeaderComponent = ({ user }) => {
    const { username, isAuthenticated } = user;
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const handleClick = () => {
        setIsDropdownActive(!isDropdownActive);
    };

    return (
        <Header>
            <Logo />
            <Nav>
                <LinkContainer>
                    <Link to="/about">About the project</Link>
                </LinkContainer>
                {isAuthenticated && (
                    <>
                        <LinkContainer>
                            <Link to="/boards">Boards</Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Link to="/profile">Profile</Link>
                        </LinkContainer>
                    </>
                )}
            </Nav>
            {isAuthenticated
                ? (
                    <UserContainer>
                        <Avatar firstName={username} onClick={handleClick} />
                        <UserName>{username}</UserName>
                        <RelativeContainer>
                            <Dropdown
                                isActive={isDropdownActive}
                                setIsActive={setIsDropdownActive}
                            />
                        </RelativeContainer>
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

export default connect(
    state => ({ user: state.user }),
)(HeaderComponent);
