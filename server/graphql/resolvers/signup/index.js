import postUser from '../../../services/postUser';

export default ({ userInput: { username, email, password } }) => {
    return postUser({ username, email, password });
};
