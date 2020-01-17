import React from 'react';
import Link from './style';

export default ({ to, children, className }) => <Link to={to} className={className}>{children}</Link>;
