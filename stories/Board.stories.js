import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Task from 'src/components/Task';
// import GroupOfTasks from 'src/components/GroupOfTasks';
import Board from 'src/containers/MainApp/Board';

const actionsData = {
    onClick: action('clicked'),
};

const tasktProps = {
    title: 'Provide decorator for each header story',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci odio, euismod sed finibus vel, efficitur ut eros. In dignissim sed augue vel malesuada. Nam id purus nulla. Quisque nec lobortis metus.',
    date: new Date().toLocaleDateString(),
};
const groupProps = [{
    title: 'To do',
}];
const boardProps = {
    title: 'This is a very very very long title This is a very very very long title This is a very very very long title',
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

export default {
    title: 'Board',
    component: Board,
};
export const DefaultBoard = () => (
    <Board {...boardProps} tasks={[...groupProps]} task={tasktProps} />
);

DefaultBoard.story = {
    decorators: [storyFn => <Provider store={authStore}>{storyFn()}</Provider>],
}
