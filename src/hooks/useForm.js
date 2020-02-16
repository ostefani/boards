import { useState, useEffect } from 'react';

//const TYPES = ['username', 'email', 'password'];
const TYPES = {
    username: 'username',
    email: 'email',
    password: 'password',
};

export default (stateSchema, validationSchema = {}, callback) => {
    const [state, setState] = useState(stateSchema);
    const [isDirty, setIsDirty] = useState(false);
    const [isValidated, setIsValidated] = useState(false);

    const hasErrorInState = () => {
        const hasError = Object.keys(validationSchema).some(key => {
            const isInputFieldRequired = validationSchema[key].required;
            const stateValue = state[key].value;
            const stateError = state[key].error;
            return (isInputFieldRequired && !stateValue) || stateError;
        });
        return hasError;
    };

    // Used to handle every changes in every input
    const handleOnChange = event => {
        setIsDirty(true);
        const { name } = event.target;
        const { value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: { value, error: '', isValidated: false },
        }));
    };

    const handleOnSubmit = event => {
        // console.log('event: ', event.target.elements.email.name);
        event.preventDefault();
        Object.keys(state).forEach(name => {
            let error = '';
            const { value } = state[name];
            if (validationSchema[name].required) {
                if (!value) {
                    error = 'This is required field.';
                }
            }
            if (
                validationSchema[name].validator !== null
                    && typeof validationSchema[name].validator === 'object'
            ) {
                if (value && !validationSchema[name].validator.regEx.test(value)) {
                    error = validationSchema[name].validator.error;
                }
            }
            setState(prevState => ({
                ...prevState,
                [name]: { value, error, isValidated: true },
            }));
        });
    };

    useEffect(() => {
        if (isValidated && !hasErrorInState()) {
            callback().then(response => {
                if (response === 'ok') return;
                response.forEach(e => {
                    const { type, message: error } = e;
                    const { value } = state[type];
                    if (type === TYPES.username) {
                        setState(prevState => ({ ...prevState, [type]: { value, error } }));
                    }
                    if (type === TYPES.email) {
                        setState(prevState => ({ ...prevState, [type]: { value, error } }));
                    }
                    if (type === TYPES.password) {
                        setState(prevState => ({ ...prevState, [type]: { value, error } }));
                    }
                });
            }).catch(e => console.log('e: ', e));
        }
    }, [isValidated]);

    useEffect(() => {
        setIsValidated(Object.keys(state).every(name => state[name].isValidated));
    }, [state]);

    return {
        state, handleOnChange, handleOnSubmit,
    };
};
