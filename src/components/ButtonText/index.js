import React from 'react';
import Button from 'src/components/Button';
import withText from './withText';

export default withText(props => <Button {...props} />);
