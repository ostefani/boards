import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';

export default props => (<Button as={Link} {...props} />);
