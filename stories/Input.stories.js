import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from 'src/components/Input';

export default {
    title: 'Inputs',
    component: Input,
};

const actionsData = {
    onChange: action('changed'),
};
const defaultProps = {

};

export const DefaultInput = () => <Input {...actionsData} {...defaultProps} />;
DefaultInput.story = {
    decorators: [storyFn => <div style={{ margin: '100px 100px 0 auto' }}>{storyFn()}</div>],
};
