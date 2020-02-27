import React from 'react';
import Page from 'src/containers/MainApp/PageContainer';
import {
    Title,
    BoardsContainer,
    FormContainer,
    Form,
    Button,
    Input,
} from './style';

export default () => {

    return (
        <Page>
        <div>
            <Title>Your boards</Title>
            <BoardsContainer>
                <FormContainer>
                    <Form>
                        <Input />
                        <Button>Create Board</Button>
                    </Form>
                </FormContainer>
            </BoardsContainer>
            </div>
        </Page>
    );
};
