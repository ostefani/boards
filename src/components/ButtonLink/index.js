import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button/style';

export default ({ name, to }) => (<Button as={Link} to={to}>{name}</Button>);
