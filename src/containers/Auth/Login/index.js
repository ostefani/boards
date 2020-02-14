import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import RollerLoader from 'src/components/RollerLoader';
import { login } from 'src/services/auth';
import { setLogin } from 'src/redux/user/actions';
import useForm from 'src/hooks/useForm';
import { stateSchema, stateValidatorSchema } from './schemas';

import {
    Container,
    ButtonContainer,
    Page,
} from './style';

const LogInComponent = ({ setLoginAction }) => {
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {
        state, handleOnChange, handleOnSubmit,
    } = useForm(
        stateSchema,
        stateValidatorSchema,
        onSubmit,
    );

    function onSubmit(e) {
        if (isLoading) return;
        setIsLoading(true);
        return login(state)
            .then(data => {
                setIsLoading(false);
                const { data: rest, errors } = data;
                if (errors) {
                    console.log('error: ', errors[0].message);
                    return Promise.reject(errors);
                }
                else {
                    const {
                        login: {
                            token, _id, email, username,
                        },
                    } = rest;
                    localStorage.setItem('boards', token);
                    setLoginAction({
                        id: _id, email, username, isAuthenticated: true,
                    });
                    return Promise.resolve('ok');
                }
            })
            .catch(error => {
                setIsLoading(false);
                return error;
            });
    };

    // const { email, password } = state;
    const {
        email: { value: email, error: emailError },
        password: { value: password, error: passwordError },
    } = state;
    console.log('state: ', state);

    return (
        <Page>
            <Container>
                {/*isLoading && <RollerLoader />*/}
                <Form header="Log in to Boards" onSubmit={handleOnSubmit}>
                    <Input name="email" value={(email|| '')} label="Enter your email" type="email" onChange={handleOnChange} />
                    <Input name="password" value={(password || '')} label="Enter your password" type="password" onChange={handleOnChange} />
                    <ButtonContainer>
                        <Button name="Log in" type="submit" isLoading={isLoading} />
                    </ButtonContainer>
                </Form>
            </Container>
        </Page>
    );
};

export default connect(
    null,
    {
        setLoginAction: setLogin,
    },
)(LogInComponent);
