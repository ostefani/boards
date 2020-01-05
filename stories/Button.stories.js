import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';

export default {
    title: 'Button',
    component: Button,
};

const actionsData = {
    onClick: action('clicked'),
};

export const HelloButton = () => <Button {...actionsData}>Hello Button</Button>;
