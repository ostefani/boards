import React, { useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import BoardThumb from 'src/components/BoardThumbnail';
import Page from 'src/containers/MainApp/PageContainer';

import {
    Title,
    Form,
    Input,
    Button,
    TumbnailContainer,
} from './style';

export default () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { url } = useRouteMatch();
    const handleSubmit = e => {
        e.preventDefault();
        if (isFormOpen) {
            setIsFormOpen(false);
        }
        else {
            setIsFormOpen(true);
        }
    };

    return (
        <Page>
            <div>
                <TumbnailContainer>
                    <BoardThumb to={`${url}/1`} />
                </TumbnailContainer>
                <Title>Your boards</Title>
                <Form isFormOpen={isFormOpen} onSubmit={handleSubmit}>
                    <Input isFormOpen={isFormOpen} placeholder="Add board title" />
                    <Button name={isFormOpen ? 'Submit' : 'Create new board'} />
                </Form>
            </div>
        </Page>
    );
};
