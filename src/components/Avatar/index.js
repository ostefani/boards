import React from 'react';
import Avatar from './style';

export default ({ firstName, onClick }) => {
    const initials = firstName.toUpperCase()[0];

    return (
        <Avatar name={initials} onClick={onClick} />
    );
};
