import React, { useState } from 'react';
import Page from 'src/containers/MainApp/PageContainer';
import {
    Title,
    Form,
    Input,
    Button,
} from './style';

export default () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

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
                <Title>Your boards</Title>
                <Form isFormOpen={isFormOpen} onSubmit={handleSubmit}>
                    <Input isFormOpen={isFormOpen} placeholder="Add board title" />
                    <Button name={isFormOpen ? 'Submit' : 'Create new board'} />
                </Form>
            </div>
        </Page>
    );
};
