import React, { useState } from 'react';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { signupRequest } from 'src/services/auth';
import {
    ButtonContainer,
    Page,
} from './style';

export default () => {
    const [value, setValue] = useState({});
    function submitHandler(e) {
        e.preventDefault();
        signupRequest(value);
        console.log('value: ', value);
    }
    const handleChange = e => {
        setValue({ ...value, [e.target.name]: { value: e.target.value } });
    };
    const { username, email, password } = value;
    return (
        <Page>
            <Form header="Create your account" onSubmit={submitHandler}>
                <Input name="username" value={(username && username.value) || ''} label="Enter username" onChange={handleChange} />
                <Input name="email" value={(email && email.value) || ''} label="Enter your email" type="email" onChange={handleChange} />
                <Input name="password" value={(password && password.value) || ''} label="Enter your password" type="password" onChange={handleChange} />
                <ButtonContainer>
                    <Button name="Sign Up" type="submit" />
                </ButtonContainer>
            </Form>
        </Page>
    );
};
