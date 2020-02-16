import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { postUser } from 'src/services/auth';
import { setLogin } from 'src/redux/user/actions';
import useForm from 'src/hooks/useForm';
import { stateSchema, stateValidatorSchema } from './schemas';
import {
    ButtonContainer,
    Page,
    Container,
} from './style';

const SignUp = ({ setLoginAction }) => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        state, handleOnChange, handleOnSubmit,
    } = useForm(
        stateSchema,
        stateValidatorSchema,
        onSubmit,
    );
    function onSubmit(e) {
        if (isLoading) return null;
        // e.preventDefault();
        setIsLoading(true);
        return postUser(state)
            .then(data => {
                setIsLoading(false);
                const { data: rest, errors } = data;
                if (errors) {
                    return Promise.reject(errors);
                }
                const {
                    createUser: {
                        token, _id, username, email,
                    },
                } = rest;
                localStorage.setItem('boards', token);
                setLoginAction({
                    id: _id, username, email, isAuthenticated: true,
                });
                return Promise.resolve('ok');
            })
            .catch(error => {
                setIsLoading(false);
                return error;
            });
    }
    const {
        username: { value: username, error: usernameError },
        email: { value: email, error: emailError },
        password: { value: password, error: passwordError },
    } = state;

    console.log('state: ', state);

    return (
        <Page>
            <Container>
                <Form header="Create your account" onSubmit={handleOnSubmit}>
                    <Input
                        name="username"
                        value={username}
                        error={usernameError}
                        label="Enter username"
                        onChange={handleOnChange}
                    />
                    <Input
                        name="email"
                        value={email}
                        error={emailError}
                        label="Enter your email"
                        type="email"
                        onChange={handleOnChange}
                    />
                    <Input
                        name="password"
                        value={password}
                        error={passwordError}
                        label="Enter your password"
                        type="password"
                        onChange={handleOnChange}
                    />
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
