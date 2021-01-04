export const validateEmail = (mail) => {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            mail
        )
    ) {
        return true;
    }
    return false;
};

export const validatePassword = (password) => {
    password = password.toString();
    if (password.length < 8) {
        return false;
    }
    return true;
};

export const validatePhone = (phone) => {
    phone = phone.toString();
    if (/^\+?3?8?(0[5-9][0-9]\d{7})$/.test(phone)) {
        return true;
    }
    return false;
};
