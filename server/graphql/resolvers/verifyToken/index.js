import CustomError from '../../../customError';

export default async (_, context) => {
    const c = context();
    try {
        if (!c.user) {
            throw new CustomError('You are not authenticated', 'verification', 'AuthUserError');
        }
        return {
            ...c.user, password: null, token: c.headers.authorization.split(' ')[1],
        };
    }
    catch (e) {
        return e;
    }
};
