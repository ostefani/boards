import postUser from '../../../services/postUser';
import { SignupShema } from '../../../schemas';

export default ({ userInput: { username, email, password } }) => {
    const { error, _ } = SignupShema.validate({ username, email, password });
    if (!error) {
        return postUser({ username, email, password });
    }
    return error;
};
