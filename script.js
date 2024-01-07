const [pwd, pwdConfirm] = ['#pwd', '#pwdconfirm'].map(id => document.querySelector(id));

const validatePasswords = (e) => {
    const validityMessage = pwd.value !== pwdConfirm.value ? "Invalid, passwords don't match." : "";
    [pwd, pwdConfirm].forEach(input => input.setCustomValidity(validityMessage));
};


pwdConfirm.addEventListener('input', validatePasswords)

