import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import Page from 'src/containers/MainApp/PageContainer';
import { getBoard } from 'src/redux/boards/actions';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Title, Container, GroupContainer } from './style';

// const BoardComponent = ({ title, tasks }) => {
const BoardComponent = ({ boards, getBoardRequest }) => {
    const { id } = useParams();
    console.log('id: ', id);
    useEffect(() => {
        console.log('BOARD IS LOADED!');
        getBoardRequest(id);
    }, []);
    const { url } = useRouteMatch();
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
