import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button/style';

export default ({ name }, ...props) => (<Button as={Link} {...props}>{name}</Button>);
