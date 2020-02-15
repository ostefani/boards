export const stateSchema = {
    username: { value: '', error: '', isValidated: false },
    email: { value: '', error: '', isValidated: false },
    password: { value: '', error: '', isValidated: false },
};
export const stateValidatorSchema = {
    username: {
        required: true,
        validator: {
            regEx: /^[a-zA-Z]\w{2,7}$/,
            error: 'Username must be 3-8 alphanumeric characters and begin with a letter',
        },
    },
    email: {
        required: true,
        validator: {
            regEx: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            error: 'Invalid email format.',
        },
    },
    password: {
        required: true,
        validator: {
            regEx: /.{8,16}/,
            error: 'Password must be 8-16 characters',
        },
    },
};
