import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'src/components/Button/style';
import LinkComponent from './style';

export default ({ isText, to, name, onClick }) => {
    return (
        <LinkComponent as={Link} to={to} isText={isText} onClick={onClick}>{name}</LinkComponent>
    );
};
