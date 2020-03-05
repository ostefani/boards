export const isEmailValid = email => (
    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
);
export const isUserNameValid = username => (
    /^[a-zA-Z]\w{2,7}$/.test(username)
);
export const isPasswordValid = password => (
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/.test(password)
);
export const isTitleValid = title => (
    /^[a-zA-Z]\w{1,255}$/.test(title)
);
