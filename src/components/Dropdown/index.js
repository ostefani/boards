import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setLogout } from 'src/redux/user/actions';

import {
    Container,
    Items,
    Item,
    Logout,
} from './style';

const items = ['Logout'];

const DropdownComponent = ({ isActive, setLogoutAction, setIsActive }) => {
    const [height, setHeight] = useState(0);
    const container = useRef(0);
    const handleClick = () => {
        localStorage.removeItem('boards');
        setLogoutAction();
    };
    const handleClickOutside = e => {
        if (container.current && !container.current.contains(e.target) && height > 0) {
            setHeight(0);
            setIsActive(false);
        }
    };
    useEffect(() => {
        setHeight(isActive ? container.current.scrollHeight : 0);
    }, [isActive]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    return (
        <Container ref={container} isActive={isActive} maxHeight={height}>
            <Items>
                {
                    items.map(e => (
                        e === 'Logout'
                            ? <Item key={Math.random()}><Logout onClick={handleClick}>{e}</Logout></Item>
                            : <Item key={Math.random()}>{e}</Item>
                    ))
                }
            </Items>
        </Container>
    );
};

export default connect(
    null,
    {
        setLogoutAction: setLogout,
    }
)(DropdownComponent);
