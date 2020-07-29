"use strict";
const login = (user) => {
    if (user.email === 'jstamos@stamos.com') {
        return true;
    }
    return false;
};
const user = {
    email: 'frank@a.com',
    password: '1234'
};
const myUser = {};
myUser.password = 'hello';
login(user);
