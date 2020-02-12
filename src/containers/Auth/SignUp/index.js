import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import RollerLoader from 'src/components/RollerLoader';
import { postUser } from 'src/services/auth';
import { setLogin } from 'src/redux/user/actions';
import {
    ButtonContainer,
    Page,
    Container,
} from './style';

const SignUp = ({ setLoginAction }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        postUser(value)
            .then(data => {
                setIsLoading(false);
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
                    setLoginAction({ id: _id, username, email, isAuthenticated: true });
                }
            })
            .catch(error => {
                setIsLoading(false);
                console.log('e: ', error);
            });
    };
    const handleChange = e => {
        setValue({ ...value, [e.target.name]: { value: e.target.value } });
    };
    const { username, email, password } = value;
    return (
        <Page>
            <Container>
                {isLoading && <RollerLoader />}
                <Form header="Create your account" onSubmit={handleSubmit}>
                    <Input name="username" value={(username && username.value) || ''} label="Enter username" onChange={handleChange} />
                    <Input name="email" value={(email && email.value) || ''} label="Enter your email" type="email" onChange={handleChange} />
                    <Input name="password" value={(password && password.value) || ''} label="Enter your password" type="password" onChange={handleChange} />
                    <ButtonContainer>
                        <Button name="Sign Up" type="submit" isLoading={isLoading} />
                    </ButtonContainer>
                </Form>
            </Container>
        </Page>
    );
};

export default connect(
    state => ({
        user: state.user,
    }),
    {
        setLoginAction: setLogin,
    },
)(SignUp);
