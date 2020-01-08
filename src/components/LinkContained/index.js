import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'src/components/Button/style';
import LinkComponent from './style';

export default ({ to, name, onClick }) => {
    return (
        <LinkComponent as={Link} to={to} onClick={onClick}>{name}</LinkComponent>
    );
};
