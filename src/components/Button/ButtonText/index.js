import React from 'react';
import Button from 'src/components/Button';
import withText from 'src/components/Button/withText';

export default withText(props => <Button className="button-text" {...props} />);
