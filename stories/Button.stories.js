import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';
import LinkText from 'src/components/LinkText';
import ButtonText from 'src/components/ButtonText';

export default {
    title: 'Buttons',
    component: Button,
};

const actionsData = {
    onClick: action('clicked'),
};
const defaultProps = {
    name: 'Default',
};
const ButtonTextProps = {
    name: 'Button Text',
};
const LinkTextProps = {
    to: '/home',
    name: 'Sign Up',
};

export const DefaultButton = () => <Button {...actionsData} {...defaultProps} />;
DefaultButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>],
};

export const TextButton = () => <ButtonText {...actionsData} {...ButtonTextProps} />;
TextButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};


export const LinkTextButton = () => <LinkText {...actionsData} {...LinkTextProps} />;

LinkTextButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};
