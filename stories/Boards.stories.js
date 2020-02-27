import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Boards from 'src/containers/MainApp/Boards';

export default {
    title: 'Boards',
    component: Boards,
};
const authProps = {
    username: 'ostefani',
    isAuthenticated: true,
    id: '',
    email: '',
    isLoading: false,
};

const authStore = {
    getState: () => ({ user: authProps }),
    subscribe: () => 0,
    dispatch: action('dispatch'),
};
const actionsData = {
    onClick: action('clicked'),
};
const defaultProps = {
    name: 'Default',
};

export const DefaultBoards = () => <Boards />;
DefaultBoards.story = {
    decorators: [storyFn => <Provider store={authStore}>{storyFn()}</Provider>],
};
