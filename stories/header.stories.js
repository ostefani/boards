import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Header from 'src/components/Header';
//import store from 'src/redux/store';

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
const store = {
    getState: () => {
      return {
        user: authProps,
      };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
  };
export default {
    title: 'Header',
    component: Header,
    decorators: [storyFn => <Provider store={store}><div style={{ width: '100%' }}>{storyFn()}</div></Provider>],
};

export const DefaultHeader = () => <Header {...defaultProps} {...actionsData} />;

export const AuthenticatedtHeader = () => <Header {...authProps} {...actionsData} />;
