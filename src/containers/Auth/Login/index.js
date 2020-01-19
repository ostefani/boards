import React from 'react';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';

import {
    ButtonContainer,
    Page,
    Header,
} from './style';

export default () => {
    const handleClick = () => console.log('Click');
    return (
        <Page>
            <Form>
                <Header>Log in to Boards</Header>
                <Input name="email" label="Enter your email" type="email" />
                <Input name="password" label="Enter your password" type="password" />
                <ButtonContainer>
                    <Button name="Log in" type="button" onClick={handleClick} />
                </ButtonContainer>
            </Form>
        </Page>
    );
};
