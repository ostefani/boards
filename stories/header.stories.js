import React from 'react';
import { action } from '@storybook/addon-actions';
import { HeaderComponent } from 'src/components/Header';
import Dropdown from 'src/components/Dropdown';
import { verify } from 'src/redux/user/actions';


export default {
    title: 'Header',
    component: HeaderComponent,
    decorators: [storyFn => <div style={{ width: '100%' }}>{storyFn()}</div>],
};
const actionsData = {
    onClick: action('clicked'),
};
//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTUxMzY5OTUwYTA2MGFlODQ0NGZlOTkiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdC50dCIsInBhc3N3b3JkIjpudWxsLCJfX3YiOjAsImlhdCI6MTU4MjUyMTU1Nn0.IFv-MijckSl4itS2yiHmQLvLrio0yCRHmFNMwTSaNEM'
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
