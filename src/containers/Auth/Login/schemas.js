export const stateSchema = {
    email: { value: '', error: '' },
    password: { value: '', error: '' },
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
