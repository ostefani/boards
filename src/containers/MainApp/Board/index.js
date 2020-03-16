import React from 'react';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import Page from 'src/containers/MainApp/PageContainer';
import { Title, Container, GroupContainer } from './style';

export default ({ title, tasks }) => {
    return (
        <Page>
            <Container>
                <Title>{title}</Title>
                <GroupContainer>
                    {tasks.map(e => (
                        <GroupOfTasks key={Math.random()} title={e.title}>
                            {e.groupOfTasks && e.groupOfTasks.map(task => (
                                <Task key={Math.random()} {...task} />
                            ))}
                        </GroupOfTasks>
                    ))}
                </GroupContainer>
            </Container>
        </Page>
    );
};
