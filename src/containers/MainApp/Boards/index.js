import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import BoardThumb from 'src/components/BoardThumbnail';
import Page from 'src/containers/MainApp/PageContainer';
import { postBoard } from 'src/redux/boards/actions';

import {
    Title,
    Form,
    Input,
    Button,
    TumbnailContainer,
} from './style';

const BoardsComponent = ({ postBoardRequest, boards }) => {
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
console.log('boards: ', boards);
    return (
        <Page>
            <div>
                <TumbnailContainer>
                    {boards.map(board => (
                        <BoardThumb key={board.id} to={`${url}/${board.id}`} title={board.title} />
                    ))}
                </TumbnailContainer>
                <Title>Your boards</Title>
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
    { postBoardRequest: postBoard },
)(BoardsComponent);
