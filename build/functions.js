"use strict";
const sayHello = (uniqueName) => {
    console.log(`hello ${uniqueName}`);
    // return `hello ${uniqueName}`;
};
const returningPromise = (age) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(age), 1000);
    });
};
