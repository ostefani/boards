import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import Page from 'src/containers/MainApp/PageContainer';
import { getBoard } from 'src/redux/boards/actions';
import { Title, Container, GroupContainer } from './style';

const mapStateToProps = (state, ownProps) => {
    const { boards } = state.boards;
    const { computedMatch: { params: { id } } } = ownProps;
    const board = boards.find(e => e._id === id);
    return { board, id };
};

const BoardComponent = ({
    board,
    id,
    getBoardRequest,
}) => {
    useEffect(() => {
        getBoardRequest(id);
    }, []);

    return (
        <Page>
            <Container>
                <Title>{board.title}</Title>
                <GroupContainer>
                    {board.tasks && board.tasks.map(e => (
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

export default connect(
    mapStateToProps,
    {
        getBoardRequest: getBoard,
    },
)(BoardComponent);
