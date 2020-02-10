import React, { useState, useEffect, useRef } from 'react';

import {
    Container,
    Items,
    Item,
} from './style';

const items = ['Logout'];

export default ({ isActive }) => {
    const [height, setHeight] = useState(0);
    const container = useRef(0);
    useEffect(() => {
        setHeight(isActive ? container.current.scrollHeight : 0);
    }, [isActive]);
    console.log('height: ', height);
    return (
        <Container ref={container} isActive={isActive} maxHeight={height}>
            <Items>
                {
                    items.map(e => <Item key={Math.random()}>{e}</Item>)
                }
            </Items>
        </Container>
    );
};
