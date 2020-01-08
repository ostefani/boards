import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';
import LinkContained from 'src/components/LinkContained';
import ButtonText from 'src/components/Button/ButtonText';

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
const LinkContainedProps = {
    to: '/home',
    name: 'Sign Up',
};

export const DefaultButton = () => <Button {...actionsData} {...defaultProps} />;
DefaultButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>],
};

export const TextButton = () => <ButtonText {...actionsData} {...ButtonTextProps} />;
TextButton.story = {
    decorators: [storyFn => <div style={{ margin: '30% auto 0 auto' }}>{storyFn()}</div>],
};


export const LinkContainedButton = () => <LinkContained {...actionsData} {...LinkContainedProps} />;

LinkContainedButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>],
};
