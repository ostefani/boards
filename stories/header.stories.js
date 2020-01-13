import React from 'react';
// import { action } from '@storybook/addon-actions';
import Header from 'src/components/Header';


export default {
    title: 'Header',
    component: Header,
};

const defaultProps = {
    firstName: 'Olga',
};

export const DefaultHeader = () => <Header {...defaultProps} />;
DefaultHeader.story = {
    decorators: [storyFn => <div style={{ marginTop: '200px', width: '100%' }}>{storyFn()}</div>],
};
