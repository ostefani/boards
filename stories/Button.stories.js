import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';
import ButtonLink from 'src/components/ButtonLink';
import ButtonText from 'src/components/ButtonText';
import Link from 'src/components/Link';

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
const ButtonLinkProps = {
    to: '/home',
    name: 'Sign Up',
};
const LinkProps = {
    to: '/home',
    name: 'Solutions',
};

export const DefaultButton = () => <Button {...actionsData} {...defaultProps} />;
DefaultButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>],
};

export const TextButton = () => <ButtonText {...actionsData} {...ButtonTextProps} />;
TextButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};


export const ButtonLinkButton = () => <ButtonLink {...actionsData} {...ButtonLinkProps} />;

ButtonLinkButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};

export const LinkDefault = () => <Link {...actionsData} {...LinkProps} />;
LinkDefault.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};
