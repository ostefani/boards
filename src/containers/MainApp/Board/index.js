import React from 'react';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import { Header, Container, GroupContainer } from './style';

export default ({ title, tasks, task }) => {
    return (
        <Container>
            <Header>{title}</Header>
            <GroupContainer>
                {tasks.map(e => (
                    <GroupOfTasks key={Math.random()} title={e.title} task={task}>
                        <Task {...task} />
                    </GroupOfTasks>
                ))}
            </GroupContainer>
        </Container>
    );
};
