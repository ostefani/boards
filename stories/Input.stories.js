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
    name: 'name',
};
const errorProps = {
    name: 'name',
    error: 'Error message',
};

export const DefaultInput = () => <Input {...actionsData} {...defaultProps} />;
DefaultInput.story = {
    decorators: [storyFn => <div style={{ margin: '100px auto 0 auto', width: '50%' }}>{storyFn()}</div>],
};

export const InputWithError = () => <Input {...actionsData} {...errorProps} />;
InputWithError.story = {
    decorators: [storyFn => <div style={{ margin: '100px auto 0 auto', width: '50%' }}>{storyFn()}</div>],
};
