import React from 'react';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import Page from 'src/containers/MainApp/PageContainer';
import { Header, Container, GroupContainer } from './style';

export default ({ title, tasks, task }) => {
    console.log('Board loaded');
    return (
        <Page>
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
        </Page>
    );
};
