"use strict";
const author = {
    firstName: 'Alice',
    writeBook: (title) => {
        return true;
    }
};
const higherOrderFn = (cb) => {
    cb(42);
};
