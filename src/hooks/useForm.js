import { useState, useEffect, useCallback } from 'react';

const ERRORS = {

}

export default (stateSchema, validationSchema = {}, callback) => {
    const [state, setState] = useState(stateSchema);
    const [isDirty, setIsDirty] = useState(false);
    const [isValidated, setIsValidated] = useState(false);

    // Wrapped in useCallback to cached the function to avoid intensive memory leaked
    // in every re-render in component
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
                    const s = e.message;
                    if (s.includes('Username ')) {
                        setState(prevState => ({
                            ...prevState,
                            username: { value: state.username.value, error: response[0].message },
                        }));
                    }
                    if (s.includes('User ')) {
                        setState(prevState => ({
                            ...prevState,
                            email: { value: state.email.value, error: response[0].message },
                        }));
                    }
                    if (s.includes('Password ')) {
                        setState(prevState => ({
                            ...prevState,
                            password: { value: state.email.value, error: response[0].message },
                        }));
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
