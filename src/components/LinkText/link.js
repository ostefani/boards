import Button from './index';
import React from 'react';
import { Link } from 'react-router-dom';

console.log('button: ', Button);

export default (props) => {
    console.log('props: ', props);
    return (
        <Button as={Link} to={props.to} {...props} />
    );
}
