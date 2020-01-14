import React from 'react';
import { action } from '@storybook/addon-actions';
import Jumbotron from 'src/components/Jumbotron';


export default {
    title: 'Jumbotron',
    component: Jumbotron,
};

export const DefaultJumbotron = () => <Jumbotron />;
DefaultJumbotron.story = {
    decorators: [storyFn => <div style={{ marginTop: '50px', width: '100%', borderTop: '2px solid red' }}>{storyFn()}</div>],
};
