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

const DropdownComponent = ({ isActive, setLogoutAction }) => {
    const [height, setHeight] = useState(0);
    const container = useRef(0);
    const handleClick = () => {
        localStorage.removeItem('boards');
        setLogoutAction();
    };
    useEffect(() => {
        setHeight(isActive ? container.current.scrollHeight : 0);
    }, [isActive]);

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
