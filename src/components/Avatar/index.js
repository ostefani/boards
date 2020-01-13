import React from 'react';
import Avatar from './style';

export default ({ firstName }) => {
    const initials = firstName.toUpperCase()[0];

    return (
        <Avatar>{initials}</Avatar>
    );
};
