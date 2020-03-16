import React from 'react';
import {
    StyledLink as Link,
    Title,
} from './style';

export default ({ title, to }) => {
    return (
        <Link to={to}>
            <Title to={to}>{title}</Title>
        </Link>
    );
};
