export const stateSchema = {
    email: { value: '', error: '', isValidated: false },
    password: { value: '', error: '', isValidated: false },
};
export const stateValidatorSchema = {
    email: {
        //required: true,
        /*validator: {
            regEx: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            error: 'Invalid email format.',
        },*/
    },
    password: {
        //required: true,
    },
};
