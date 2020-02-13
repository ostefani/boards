import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import RollerLoader from 'src/components/RollerLoader';
import { login } from 'src/services/auth';
import { setLogin } from 'src/redux/user/actions';

import {
    Container,
    ButtonContainer,
    Page,
} from './style';

const LogInComponent = ({ setLoginAction }) => {
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = e => {
        if (isLoading) return;
        e.preventDefault();
        setIsLoading(true);
        login(value)
            .then(data => {
                setIsLoading(false);
                const { data: rest, errors } = data;
                if (errors) {
                    console.log('error: ', errors[0].message);
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
    const { email, password } = value;

    return (
        <Page>
            <Container>
                {/*isLoading && <RollerLoader />*/}
                <Form header="Log in to Boards" onSubmit={handleSubmit}>
                    <Input name="email" value={(email && email.value) || ''} label="Enter your email" type="email" onChange={handleChange} />
                    <Input name="password" value={(password && password.value) || ''} label="Enter your password" type="password" onChange={handleChange} />
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
