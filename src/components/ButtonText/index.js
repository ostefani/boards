import React from 'react';
import Button from 'src/components/Button';
import WithStyle from './style';

export default WithStyle(props => (<Button className="button-text" {...props} />));
