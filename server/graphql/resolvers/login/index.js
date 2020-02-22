import getUser from '../../../services/getUser';
import { LoginShema } from '../../../schemas';

export default async ({ email, password }) => {
    const { error, value } = LoginShema.validate({ email, password });
    if (!error) {
        return getUser({ email, password });
    }
    return error;
};
