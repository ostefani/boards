import React, { useState } from 'react';
import Page from 'src/containers/MainApp/PageContainer';
import {
    Title,
    BoardsContainer,
    FormContainer,
    Form,
    Input,
    Button,
} from './style';

export default () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleClick = e => {
        if (isFormOpen) return null;
        setIsFormOpen(true);
    };

    return (
        <Page>
            <div>
                <Title>Your boards</Title>
                <BoardsContainer>
                    <Form isFormOpen={isFormOpen}  onSubmit={handleSubmit}>
                        <Input />
                        <Button name="Create Board" onClick={handleClick} />
                    </Form>
                </BoardsContainer>
            </div>
        </Page>
    );
};
