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
    const [state, setState] = useState('');
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
                    <BoardThumb to={`${url}/1`} />
                </TumbnailContainer>
                <Title>Your boards</Title>
                <Form isFormOpen={isFormOpen} onSubmit={handleSubmit}>
                    <Input
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
        boards,
    }),
    { postBoardRequest: postBoard },
)(BoardsComponent);
