import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import BoardThumb from 'src/components/BoardThumbnail';
import Page from 'src/containers/MainApp/PageContainer';
import { postBoard, getBoards } from 'src/redux/boards/actions';

import {
    Title,
    Form,
    Input,
    Button,
    TumbnailContainer,
} from './style';

const BoardsComponent = ({ postBoardRequest, getBoardsRequest, boards }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [state, setState] = useState({ title: '' });
    const { url } = useRouteMatch();

    const handleChange = e => {
        const { name, value } = e.target;
        setState({ [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (isFormOpen) {
            setIsFormOpen(false);
            postBoardRequest({ ...state });
            setState({ title: '' });
        }
        else {
            setIsFormOpen(true);
        }
    };
    useEffect(() => {
        if (!boards.length > 0) {
            getBoardsRequest();
        }
    }, []);

    return (
        <Page>
            <div>
                <Title>Your boards</Title>
                <TumbnailContainer>
                    {boards.map(board => (
                        <BoardThumb key={Math.random()} to={`${url}/${board._id}`} title={board.title} />
                    ))}
                </TumbnailContainer>
                <Form isFormOpen={isFormOpen} onSubmit={handleSubmit}>
                    <Input
                        value={state.title}
                        isFormOpen={isFormOpen}
                        placeholder="Add board title"
                        name="title"
                        onChange={handleChange}
                    />
                    <Button name={isFormOpen ? 'Submit' : 'Create new board'} />
                </Form>
            </div>
        </Page>
    );
};

export default connect(
    ({ boards }) => ({
        boards: boards.boards,
    }),
    {
        postBoardRequest: postBoard,
        getBoardsRequest: getBoards,
    },
)(BoardsComponent);
