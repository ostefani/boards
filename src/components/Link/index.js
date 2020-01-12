import React from 'react';
import Link from './style';

export default ({ to, name, className }) => <Link to={to} className={className}>{name}</Link>;
