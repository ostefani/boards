import React from 'react';
import Avatar from './style';

export default ({ firstName, lastName }) => {
    const initials = [firstName, lastName].map(e => e.toUpperCase()[0]).join('');

    return (
        <Avatar>{initials}</Avatar>
    );
};
