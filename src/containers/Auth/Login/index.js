import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'src/components/Form';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { login } from 'src/services/auth';
import { setUser } from 'src/redux/user/actions';

import {
    ButtonContainer,
    Page,
} from './style';

const LogInComponent = ({ setUserAction }) => {
    const [value, setValue] = useState({});

    const handleClick = () => console.log('Click');
    const handleSubmit = e => {
        e.preventDefault();
        login(value)
            .then(data => {
                const { data: rest, errors } = data;
                if (errors) {
                    console.log('error: ', errors[0].message);
                }
                else {
                    const {
                        login: {
                            token, _id, email,
                        },
                    } = rest;
                    localStorage.setItem('boards', token);
                    setUserAction({
                        id: _id, email, isAuthenticated: true,
                    });
                }
            })
            .catch(error => console.log('e: ', error));
    };
    const handleChange = e => {
        setValue({ ...value, [e.target.name]: { value: e.target.value } });
    };
    const { email, password } = value;

    return (
        <Page>
            <Form header="Log in to Boards" onSubmit={handleSubmit}>
                <Input name="email" value={(email && email.value) || ''} label="Enter your email" type="email" onChange={handleChange} />
                <Input name="password" value={(password && password.value) || ''} label="Enter your password" type="password" onChange={handleChange} />
                <ButtonContainer>
                    <Button name="Log in" type="submit" onClick={handleClick} />
                </ButtonContainer>
            </Form>
        </Page>
    );
};

export default connect(
    null,
    {
        setUserAction: setUser,
    },
)(LogInComponent);
