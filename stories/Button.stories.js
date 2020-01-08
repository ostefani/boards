import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';
import LinkContained from 'src/components/LinkContained';

export default {
    title: 'Buttons',
    component: Button,
};

const actionsData = {
    onClick: action('clicked'),
};
const defaultProps = {
    type: 'button',
    name: 'Primary',
};
const fullWidthProps = {
    type: 'button',
    name: 'Full Width Button',
    isFullWidth: true,
};
const LinkContainedProps = {
    to: '/home',
    name: 'Sign Up',
};

export const DefaultButton = () => <Button {...actionsData} {...defaultProps} />;
DefaultButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>]
};

export const FullWidthtButton = () => <Button {...actionsData} {...fullWidthProps} />;

FullWidthtButton.story = {
    decorators: [storyFn => <div style={{ width: '80%', margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};

export const LinkContainedButton = () => <LinkContained {...actionsData} {...LinkContainedProps} />;

LinkContainedButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>],
};
