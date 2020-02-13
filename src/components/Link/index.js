import React from 'react';
import { Link } from 'react-router-dom';
import WithStyle from './style';

export default WithStyle(({ to, children, className }) => (
    <Link to={to} className={className}>{children}</Link>
));
