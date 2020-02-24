import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Task from 'src/components/Task';

const actionsData = {
    onClick: action('clicked'),
};

const defaultProps = {
    title: 'Provide decorator for each header story',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci odio, euismod sed finibus vel, efficitur ut eros. In dignissim sed augue vel malesuada. Nam id purus nulla. Quisque nec lobortis metus.',
    //date: new Date().toDateString(),
    date: new Date().toLocaleDateString(),
};

export default {
    title: 'Task',
    component: Task,
};
export const DefaultHeader = () => <Task {...defaultProps} {...actionsData} />;
/*DefaultHeader.story = {
    decorators: [storyFn => <Provider store={defaultStore}><div style={{ width: '100%' }}>{storyFn()}</div></Provider>],
};*/
