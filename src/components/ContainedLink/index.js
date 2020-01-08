import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';

export default ({ to, name }) => {
    return (
        <Button as={Link} to={to}>{name}</Button>
    );
};
