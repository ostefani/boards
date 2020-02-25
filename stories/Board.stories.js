import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Task from 'src/components/Task';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Board from 'src/components/Board';

const actionsData = {
    onClick: action('clicked'),
};

const tasktProps = {
    title: 'Provide decorator for each header story',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci odio, euismod sed finibus vel, efficitur ut eros. In dignissim sed augue vel malesuada. Nam id purus nulla. Quisque nec lobortis metus.',
    date: new Date().toLocaleDateString(),
};
const groupProps = {
    title: 'To do',
};
const boardProps = {
    title: 'This is a very very very long title This is a very very very long title This is a very very very long title',
};

export default {
    title: 'Board',
    component: Board,
};
export const DefaultHeader = () => (
    <Board {...boardProps}>
        <GroupOfTasks {...groupProps} {...actionsData}>
            <Task {...tasktProps} />
            <Task {...tasktProps} />
        </GroupOfTasks>
        <GroupOfTasks {...groupProps} {...actionsData}>
            <Task {...tasktProps} />
            <Task {...tasktProps} />
        </GroupOfTasks>
        <GroupOfTasks {...groupProps} {...actionsData}>
            <Task {...tasktProps} />
            <Task {...tasktProps} />
        </GroupOfTasks>
        <GroupOfTasks {...groupProps} {...actionsData}>
            <Task {...tasktProps} />
            <Task {...tasktProps} />
        </GroupOfTasks>
        <GroupOfTasks {...groupProps} {...actionsData}>
            <Task {...tasktProps} />
            <Task {...tasktProps} />
        </GroupOfTasks>
    </Board>
);
