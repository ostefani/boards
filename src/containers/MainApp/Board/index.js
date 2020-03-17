import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import Page from 'src/containers/MainApp/PageContainer';
import { getBoard } from 'src/redux/boards/actions';
import { Title, Container, GroupContainer } from './style';

// const BoardComponent = ({ title, tasks }) => {
const BoardComponent = ({ boards, getBoardRequest, id }) => {
    useEffect(() => {
        getBoardRequest(id);
    }, []);

    return (
        <Page>
            <Container>
                null
                {/*<Title>{boards[id].title}</Title>
                <GroupContainer>
                    {boards[id].tasks.map(e => (
                        <GroupOfTasks key={Math.random()} title={e.title}>
                            {e.groupOfTasks && e.groupOfTasks.map(task => (
                                <Task key={Math.random()} {...task} />
                            ))}
                        </GroupOfTasks>
                    ))}
                </GroupContainer>*/}
            </Container>
        </Page>
    );
};

export default connect(
    ({ boards }) => ({
        boards: boards.boards,
    }),
    {
        getBoardRequest: getBoard,
    },
)(BoardComponent);
