import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';

export default {
    title: 'Default Button',
    component: Button,
};

const actionsData = {
    onClick: action('clicked'),
};
const defaultProps = {
    type: 'button',
    name: 'Primary',
};

export const DefaultButton = () => <Button {...actionsData} {...defaultProps}>Hello Button</Button>;
