import React from 'react';
import {
    StyledLink as Link,
    Title,
} from './style';

export default ({ title, to }) => {
    console.log('title: ', title);
    return (
        <Link to={to}>
            <Title>{title}</Title>
        </Link>
    );
};
