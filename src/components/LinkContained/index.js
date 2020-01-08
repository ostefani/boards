import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button/style';

console.log('Button: ', Button);

export default ({ to, name, onClick }) => {
    return (
        <Button as={Link} href={to} name={name} onClick={onClick}>{name}</Button>
    );
};
