import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GroupOfTasks from 'src/components/GroupOfTasks';
import Task from 'src/components/Task';
import Page from 'src/containers/MainApp/PageContainer';
import { getBoard } from 'src/redux/boards/actions';
import { useParams } from 'react-router-dom';
import { Title, Container, GroupContainer } from './style';

function mapStateToProps(state, ownProps) {
    const { boards } = state.boards;
    const { _id } = ownProps;
    console.log('boards: ', boards);
    console.log('ownProps: ', ownProps);
    console.log('_id: ', _id);
    const board = boards.find(e => e._id === `5e6f8cf086709c6bc4a2bf3c`);

    // component receives additionally:
    return { board };
}

// const BoardComponent = ({ title, tasks }) => {
const BoardComponent = ({ board, getBoardRequest, computedMatch }) => {
    const { id } = useParams();
    //console.log('board: ', boards.find(board => board._id === id));
    console.log('computedMatch: ', computedMatch);
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
    /*({ boards }) => ({
        board: boards.boards.find(board => board._id === `5e6f8cf086709c6bc4a2bf3c`),
    }),*/
    mapStateToProps,
    {
        getBoardRequest: getBoard,
    },
)(BoardComponent);
