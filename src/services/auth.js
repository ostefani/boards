const { API } = process.env;

export const loginUser = params => {
    const URI = `${API}/login`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    };
    return fetch(URI, query)
        .then(response => {
            if (response.ok || response.status === 400) {
                return response.json();
            }
            throw Error({ errors: 'We run into proplem. Try again later.' });
        })
        .catch(e => e);
};

export const postUser = params => {
    const URI = `${API}`;
    const {
        username: { value: username },
        email: { value: email },
        password: { value: password },
    } = params;

    const mutation = `mutation ($username: String!, $email: String!, $password: String!)
        {createUser(userInput: {username: $username, email: $email, password: $password})
          { _id, username, email, token }}`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: mutation, variables: { username, email, password } }),
    };
    return fetch(URI, query)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error('We run into proplem. Try again later.');
        })
        .catch(e => ({ errors: [{ message: e.message }] }));
};

export const verifyToken = () => {
    const token = localStorage.getItem('boards');
    console.log('token: ', token);
    const URI = `${API}`;

    const body = `query ($token: String!)
        {verifyToken(token: $token)
          { _id, username, email, token }}`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: body, variables: { token } }),
    };
    return fetch(URI, query)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error('We run into proplem. Try again later.');
        })
        .catch(e => ({ errors: [{ message: e.message }] }));
};
