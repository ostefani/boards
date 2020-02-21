import getUser from '../../../services/getUser';

export default async ({ email, password }) => {
    return getUser({ email, password });
};
