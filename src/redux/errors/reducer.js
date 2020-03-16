const initState = { error: null };

export default (state = initState, action) => {
    const error = { action };
    if (error) return { ...error };
    return { ...state };
};
