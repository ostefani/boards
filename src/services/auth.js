const API = process.env.API;
console.log('API: ', API);

export const login = params => {
    const URI = `${API}`;
    console.log('URI: ', URI);
    const {
        email: { value: email },
        password: { value: password },
    } = params;
    const body = `query ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id, username, email, token,
        }
    }`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: body, variables: { email, password } }),
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
    if (!token) return  Promise.reject('No token found');
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
