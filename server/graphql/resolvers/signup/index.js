import postUser from '../../../postUser';

export default ({ userInput: { username, email, password } }) => {
    return postUser({ username, email, password });
};
