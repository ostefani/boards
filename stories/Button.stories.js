import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'src/components/Button/';
import ButtonLink from 'src/components/ButtonLink';
import ButtonText from 'src/components/ButtonText';
import Link from 'src/components/Link';
import Logo from 'src/components/Logo';

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
const withLoader = {
    isLoading: true,
};
const ButtonTextProps = {
    name: 'Button Text',
};
const FullWidthButtonProps = {
    name: 'Full Width Button',
    size: 'isFullWidth',
};
const ButtonLinkProps = {
    to: '/home',
    name: 'Sign Up',
};
const LinkProps = {
    to: '/home',
};

export const DefaultButton = () => <Button {...actionsData} {...defaultProps} />;
DefaultButton.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px' }}>{storyFn()}</div>],
};

export const ButtonWithLoader = () => <Button {...actionsData} {...withLoader} />;

export const TextButton = () => <ButtonText {...actionsData} {...ButtonTextProps} />;
TextButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};

export const FullWidthButton = () => <Button {...actionsData} {...FullWidthButtonProps} />;
FullWidthButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto', width: '80%' }}>{storyFn()}</div>],
};


export const ButtonLinkButton = () => <ButtonLink {...actionsData} {...ButtonLinkProps} />;

ButtonLinkButton.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};

export const LinkDefault = () => <Link {...actionsData} {...LinkProps}>Solutions</Link>;
LinkDefault.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};

export const LogoDefault = () => <Logo />;
LogoDefault.story = {
    decorators: [storyFn => <div style={{ margin: '200px auto 0 auto' }}>{storyFn()}</div>],
};
