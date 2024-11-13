const validatePassword = (password) => {
    return password.length > 6 && password.length < 12
}

const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailPattern.test(mail);
}

const validateUsername = (username) => {
    return username.length > 6 && username.length < 12
}

export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPaswordValid = validatePassword(password);

    return isMailValid && isPaswordValid;
}

export const validateRegisterForm = ({ mail, username, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);

    return isMailValid && isPasswordValid && isUsernameValid;
}