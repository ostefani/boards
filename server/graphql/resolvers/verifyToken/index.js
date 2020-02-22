import CustomError from '../../../customError';

export default async (_, context) => {
    // const c = context();
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        return {
            ...context.user, password: null, token: context.headers.authorization.split(' ')[1],
        };
    }
    catch (e) {
        return e;
    }
};
