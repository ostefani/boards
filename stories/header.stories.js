import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Header from 'src/components/Header';

const actionsData = {
    onClick: action('clicked'),
};

const defaultProps = {
    username: 'ostefani',
};

const authProps = {
    username: 'ostefani',
    isAuthenticated: true,
    id: '',
    email: '',
    isLoading: false,
};

const defaultStore = {
    getState: () => ({ user: defaultProps }),
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

const authStore = {
    getState: () => ({ user: authProps }),
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export default {
    title: 'Header',
    component: Header,
};

export const DefaultHeader = () => <Header {...actionsData} />;
DefaultHeader.story = {
    decorators: [storyFn => <Provider store={defaultStore}><div style={{ width: '100%' }}>{storyFn()}</div></Provider>],
};

export const AuthenticatedtHeader = () => <Header {...actionsData} />;
AuthenticatedtHeader.story = {
    decorators: [storyFn => <Provider store={authStore}><div style={{ width: '100%' }}>{storyFn()}</div></Provider>],
}
