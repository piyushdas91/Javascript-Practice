// Advanced JS concepts
console.log('Advanced JS concepts');

// Asynchronous JS

console.log('This');
console.log('Is');
console.log('Synchronous');

// Settimeout : syntax - setTimeout(func, timer)

// setTimeout(fun, 5000);
// console.log('Testing set timeout')
// setTimeout(() => {
//     console.log('printing after 4 secondds')
// }, 4000);

// function fun () {
//     console.log('printing after 5 seconds');
// }

// Callback: function passed as argument to another function.

function final(val) {
    console.log('display: ' + val);
}

function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

add(10, 20, final);

// Callback Hell

// function loadingData(callbackFunc) {
//     setTimeout(() => {
//         console.log('1. Loading data...');
//         callbackFunc(callbackFunc);
//     }, 2000);
    
// }

// function collectiongData(callbackFunc) {
//     setTimeout(() => {
//         console.log('2. Collecting Data...');
//         callbackFunc(callbackFunc);
//     }, 2000);
// }

// function apporvingData(callbackFunc) {
//     setTimeout(() => {
//         console.log('3. Approving Data...');
//         callbackFunc(callbackFunc);
//     }, 2000);
// }

// function approved () {
//     console.log('4. Approved');
// }

// loadingData(function() {
//     collectiongData(function() {
//         apporvingData(function() {
//             approved();
//         });
//     });
// });

// Promise: 3 states - fulfill, reject, pending
// syntax: new Promise ((resolve, reject) => {}

// function promise(task) {
//     return new Promise((resolve, reject) => {
//         if(task){
//             resolve('Completed')
//         } else {
//             reject('Rejected')
//         }
//     }

//     )
// }

// let onResolve = (res) => {
//     console.log(res);
// }

// let onReject = (res) => {
//     console.log(res);
// }

// promise(3 === 4).then(onResolve).catch(onReject);

// Resolution of callback hell using promise

function loadingData() {
    console.log('Processing');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1. Loading data...');
            resolve();
        }, 2000);
    })
    
}

function collectiongData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. Collecting Data...');
            resolve();
        }, 2000);
    })
    
}

function apporvingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. Approving Data...');
            // resolve();
            reject('Error: Data not approved.')
        }, 2000);
    })
    
}

function approved () {
    console.log('4. Approved');
}

// loadingData().then(collectiongData).then(apporvingData).then(approved).catch((error) =>  {
//     console.log(error);
// })

// Async await
// await returns a promise.

async function Ex() {
    await loadingData();
    await collectiongData();
    await apporvingData();
    await approved();
}

Ex().catch((error) => {
    console.log(error);
});