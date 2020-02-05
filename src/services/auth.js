const API = process.env.API;

export function loginUser(params) {
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
}

export function signupRequest(params) {
    const URI = `${API}/signup`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    };
    return fetch(URI, query)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error('We run into proplem. Try again later.');
        })
        .catch(e => e);
}
