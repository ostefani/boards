import getUser from '../../../services/getUser';

export default async ({ email, password }, context) => {
    const c = context();
    console.log('context: ', c);
    return getUser({ email, password });
};
