import React from 'react';
import { action } from '@storybook/addon-actions';
import { HeaderComponent } from 'src/components/Header';

export default {
    title: 'Header',
    component: HeaderComponent,
    decorators: [storyFn => <div style={{ width: '100%' }}>{storyFn()}</div>],
};

const actionsData = {
    onClick: action('clicked'),
};

const defaultProps = {
    user: {
        username: 'ostefani',
    },
};

const authProps = {
    username: 'ostefani',
    isAuthenticated: true,
    id: '',
    email: '',
    isLoading: false,
};

export const DefaultHeader = () => <HeaderComponent {...defaultProps} {...actionsData} />;

export const AuthenticatedtHeader = () => <HeaderComponent {...authProps} {...actionsData} />;
