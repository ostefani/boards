import React, { useState } from 'react';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { postUser } from 'src/services/auth';
import {
    ButtonContainer,
    Page,
} from './style';

export default () => {
    const [value, setValue] = useState({});
    function submitHandler(e) {
        e.preventDefault();
        postUser(value)
            .then(data => {
                const { data: rest, errors } = data;
                if (errors) {
                    console.log('error: ', errors[0].message);
                }
                else {
                    const {
                        createUser: {
                            token, _id, username, email,
                        },
                    } = rest;
                    localStorage.setItem('boards', token);
                }
            })
            .catch(error => console.log('e: ', error));
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
