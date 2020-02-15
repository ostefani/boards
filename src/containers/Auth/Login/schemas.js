export const stateSchema = {
    email: { value: '', error: '', isValidated: false },
    password: { value: '', error: '', isValidated: false },
};
export const stateValidatorSchema = {
    email: {
        required: true,
        validator: {
            regEx: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            error: 'Invalid email format.',
        },
    },
    password: {
        required: true,
    },
};
