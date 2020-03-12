const { API } = process.env;

export const createBoard = params => {
    console.log('params: ', params);
    const token = localStorage.getItem('boards') || '';
    const URI = `${API}/api`;
    const { title } = params;

    const mutation = `mutation ($title: String!) {
        createBoard(boardInput: {title: $title}) { _id, title }}`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: mutation, variables: { title } }),
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

export const getBoards = () => {
    const token = localStorage.getItem('boards') || '';
    const URI = `${API}/api`;
    const body = `query {
        getBoards {
            _id, title
        }
    }`;
    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: body }),
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
