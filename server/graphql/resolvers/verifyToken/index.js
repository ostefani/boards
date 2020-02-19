import CustomError from '../../../customError';

export default async ({ token }, context) => {
    try {
        if (!context.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        return { ...context.user, password: null, token };
    }
    catch (e) {
        return e;
    }
};
