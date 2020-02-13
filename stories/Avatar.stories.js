import React from 'react';
import { action } from '@storybook/addon-actions';
import Avatar from 'src/components/Avatar';

export default {
    title: 'Avatar',
    component: Avatar,
};

const actionsData = {
    onClick: action('ckicked'),
};
const defaultProps = {
    firstName: 'Oleh',
    lastName: 'Pacheko',
};

export const DefaultAvatar = () => <Avatar {...actionsData} {...defaultProps} />;
DefaultAvatar.story = {
    decorators: [storyFn => <div style={{ margin: '100px auto 0 auto' }}>{storyFn()}</div>],
};
