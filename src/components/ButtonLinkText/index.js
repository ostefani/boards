import React from 'react';
import { Link } from 'react-router-dom';
import ButtonText from 'src/components/ButtonText';

export default props => (<ButtonText forwardedAs={Link} {...props} />);
