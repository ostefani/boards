import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
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

const HeaderComponent = ({ isAuthenticated, username }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const handleClick = () => {
        setIsDropdownActive(!isDropdownActive);
    };
    let { url } = useRouteMatch();

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
                            <Link to={`/${username}/boards`}>Boards</Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Link to={`/${username}/profile`}>Profile</Link>
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
    ({ user }) => ({
        isAuthenticated: user.isAuthenticated,
        username: user.username,
    }),
)(HeaderComponent);
