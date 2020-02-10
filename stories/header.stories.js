import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from 'src/components/Header';
import Dropdown from 'src/components/Dropdown';


export default {
    title: 'Header',
    component: Header,
};
const actionsData = {
    onClick: action('clicked'),
};
const defaultProps = {
    firstName: 'Olga',
};
const authProps = {
    username: 'Olga',
    isAuthenticated: true,
    isActive: true,
};

export const DefaultHeader = () => <Header {...defaultProps} {...actionsData} />;
DefaultHeader.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px', width: '100%' }}>{storyFn()}</div>],
};
export const AuthenticatedtHeader = () => <Header {...authProps} {...actionsData} />;
AuthenticatedtHeader.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px', width: '100%' }}>{storyFn()}</div>],
};
export const DropdownIsActive = () => <Header {...authProps} />
