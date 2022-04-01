// Why
// javascript is singlethreaded (only 1 thread). Up to that thread to call things when it's time
// you don't want to block your application

// When
// fetching = over the network, we don't know when. we don't want to block the rest of the code while we wait
// browser: event listeners (sometimes)
// converting data: stream (can be infinite, or not, but comes in over time)
// file handling
// Database
// Encryption / decryption
// Basically anything that takes time and/or has been implemented with Promises

// Why
// To avoid callback hell

// Promise is a wrapper for callbacks that gives you nice syntax
// Two states: pending - fulfilled
// fulfilled two states: resolved - rejected

// Promise can resolve any data type, only takes 1 throws the rest away

// async/await is based on promises, again with nicer syntax.

// await / .then waits until the promise is fulfilled and then the code continues procedurally

new Promise((resolve, reject) => {
    try {
        //throw new Error("oops");
        resolve("Everything went well");
    } catch(customError) {
        reject("Something went wrong: " + customError);
    }
})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));

function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw Error;
                resolve("Good");
            } catch(stackTrace) {
                reject("Bad");
            }
        }, 4000);
    });
}

const goodOrBad = await somethingGoodSomethingBad();
console.log(goodOrBad);

// IIFE
(async function getCondition() {
    try {
        const goodOrBad = await somethingGoodSomethingBad();
        console.log(goodOrBad);
    } catch(itWentWrong) {
        console.log(itWentWrong);
    }
})()

