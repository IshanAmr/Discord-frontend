const validatePassword = (password) => {
    return password.length > 6 && password.length < 12
}

const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailPattern.test(mail);
}

export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPaswordValid = validatePassword(password);

    return isMailValid && isPaswordValid;
}